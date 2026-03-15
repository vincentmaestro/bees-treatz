'use client';

import { createContext, useContext, useEffect, useReducer, useState } from "react";

interface CartItem {
    id: string;
    name: string;
    type: 'menu' | 'combo'
    price: number;
    quantity: number;
    image?: string;
    comboDetails?: {
        comboName: string;
        items: Array<{ name: string; quantity: number }>;
    };
}

interface Cart {
    items: CartItem[];
    total: number;
}

type CartAction = 
    | { type: 'add', payload: CartItem }
    | { type: 'remove', payload: string }
    | { type: 'update_quantity', payload: { id: string, quantity: number } }
    | { type: 'load', payload: CartItem[] }
    | { type: 'clear' }


function calculateTotal(items: CartItem[]) {
    return items.reduce((sum, item) => (item.price * item.quantity) + sum, 0);
}

function reducer(state: Cart, action: CartAction): Cart {
    switch(action.type) {
        case 'add': {
            let newItems: CartItem[];
            
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

            if(existingItemIndex > -1) {
                newItems = state.items.map((item, index) => 
                    index === existingItemIndex ?
                    { ...item, quantity: item.quantity + action.payload.quantity } :
                    item
                );
            } else {
                newItems = [...state.items, action.payload];
            }

            return {
                items: newItems,
                total: calculateTotal(newItems)
            }
        }
        
        case 'remove': {
            const newItems = state.items.filter(item => item.id !== action.payload);
            
            return {
                items: newItems,
                total: calculateTotal(newItems)
            }
        }

        case 'update_quantity': {
            const newItems = state.items.map(item => 
                item.id === action.payload.id ? 
                { ...item, quantity: action.payload.quantity } :
                item
            );

            return {
                items: newItems,
                total: calculateTotal(newItems)
            }
        }

        case 'load': {
            return {
                items: action.payload,
                total: calculateTotal(action.payload)
            }
        }

        case 'clear': {
            return {
                items: [],
                total: 0
            }
        }

        default: return state;
    }
}

interface CartContextType {
    cart: Cart,
    addToCart: (item: CartItem) => void,
    removeFromCart: (id: string) => void,
    updateQuantity: (id: string, quantity: number) => void,
    clearCart: () => void,
    isOpen: boolean,
    openCart: () => void,
    closeCart: () => void,
    toggleCart: () => void,
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, {
        items: [],
        total: 0
    });
    const [isOpen, setIsOpen] = useState(false);

    function addToCart(item: CartItem) {
        dispatch({ type: 'add', payload: item });
    }

    function removeFromCart(id: string) {
        dispatch({ type: 'remove', payload: id });
    }

    function updateQuantity(id: string, quantity: number) {
        if(quantity <= 0) 
            removeFromCart(id);
        else 
            dispatch({ type: 'update_quantity', payload: { id, quantity } });
    }

    function clearCart() {
        dispatch({ type: 'clear' });
    }

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    const toggleCart = () => setIsOpen(!isOpen);

    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('bees-treatz-cart');
            if(savedCart) {
                const items = JSON.parse(savedCart);
                dispatch({ type: 'load', payload: items });
            }
        }
        catch(err) {
            dispatch({ type: 'load', payload: state.items });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('bees-treatz-cart', JSON.stringify(state.items));
    }, [state.items]);

    return(
        <CartContext.Provider
        value={{
            cart: state,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            isOpen,
            openCart,
            closeCart,
            toggleCart,
        }}
        >
            { children }
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if(!context)
        throw new Error('useCart must be used within CartProvider');

    return context;
}
