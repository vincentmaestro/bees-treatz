'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { SanityDocument } from 'next-sanity';

interface ComboItem {
  _key: string;
  item?: string;
  items?: string[];
  size?: string;
  price: number
}

interface OrderItem {
  _key: string;
  item: string;
  price: number;
  quantity: number;
}

export default function ComboBuilder({ combo }: {
  combo: SanityDocument
}) {
  const [cart, setCart] = useState<{[key: string]: OrderItem}>({});

  const updateQuantity = (item: ComboItem, quantity: number) => {
    if (quantity <= 0) {
      const newCart = { ...cart };
      delete newCart[item._key];
      setCart(newCart);
    } else {
      if(item.item) {
        setCart({
          ...cart,
          [item._key]: {
            _key: item._key,
            item: item.item,
            price: item.price,
            quantity,
          },
        });
      }
      if(item.items) {
        setCart({
          ...cart,
          [item._key]: {
            _key: item._key,
            item: item.size!,
            price: item.price,
            quantity,
          },
        });
      }
    }
  };

  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return(
    <div className="grid lg:grid-cols-3 gap-8">

      <div className="lg:col-span-2 space-y-8">
        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-black text-brand-dark">Mains</h2>
          </div>
          <div className="space-y-4">{combo.mains.map((main: ComboItem) => (
            <ItemCard
              key={main._key}
              item={main}
              quantity={cart[main._key]?.quantity || 0}
              updateQuantity={updateQuantity}
            />
          ))}
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-black text-brand-dark">Combo boxes</h2>
          </div>
          <div className="space-y-4">{combo.boxes.map((box: ComboItem) => (
            <ItemCard
              key={box._key}
              item={box}
              quantity={cart[box._key]?.quantity || 0}
              updateQuantity={updateQuantity}
            />
          ))}
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-black text-brand-dark">Add ons</h2>
          </div>
          <div className="space-y-4">{combo.add_ons.map((add_on: ComboItem) => (
            <ItemCard
              key={add_on._key}
              item={add_on}
              quantity={cart[add_on._key]?.quantity || 0}
              updateQuantity={updateQuantity}
            />
          ))}
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <div className="sticky top-44 bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-brand-orange">
          <h3 className="text-2xl font-black mb-4">Your combo picks</h3>
          
          {Object.keys(cart).length === 0 ? (
            <p className="text-gray-500 text-center py-8">No items yet. Start adding!</p>
          ) : (
            <>
              <div className="space-y-3 mb-6">
                {Object.values(cart).map((item) => (
                  <div key={item._key} className="flex justify-between items-center text-sm">
                    <div>
                      <span className="font-bold">{item.quantity}x</span> {item.item}
                    </div>
                    <div className="font-black">£{(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>
              
              <div className="border-t-2 border-brand-orange pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-3xl font-black text-brand-orange">£{total.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="w-full bg-linear-to-r from-brand-red to-brand-orange text-white py-4 rounded-xl font-black text-lg hover:shadow-xl transition-all">
                Add to Cart 🛒
              </button>
            </>
          )}
        </div>
      </div>
  </div>
  );
}

function ItemCard({ item, quantity, updateQuantity }: {
  item: ComboItem;
  quantity: number;
  updateQuantity: (item: ComboItem, quantity: number) => void
}) {
  const isSelected = quantity > 0;

  return (
    <div
      className={`p-4 rounded-xl border-2 transition-all ${
        isSelected
          ? 'border-brand-orange bg-brand-orange/5'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="font-black text-lg text-brand-dark">{item.item || item.size}</h3>
          {item.items && 
          <>
            <p className='font-black text-sm italic text-brand-dark mb-1'>Contains:</p>
            <p className='text-brand-orange font-black text-lg'>{item.items.join(', ')}</p>
          </>}
          <p className="text-brand-orange font-black text-xl mt-2">£{item.price}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {quantity === 0 ? (
            <button
              onClick={() => updateQuantity(item, 1)}
              title='Add item'
              className="px-6 py-2 bg-brand-orange text-white rounded-lg font-bold hover:bg-brand-orange/90 cursor-pointer transition-all duration-100"
            >
              Add
            </button>
          ) : (
            <>
              <button
                onClick={() => updateQuantity(item, quantity - 1)}
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="w-12 text-center font-black text-xl">{quantity}</span>
              <button
                onClick={() => updateQuantity(item, quantity + 1)}
                className="w-10 h-10 bg-brand-orange text-white hover:bg-brand-orange/90 rounded-lg flex items-center justify-center transition-all"
              >
                <Plus className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
