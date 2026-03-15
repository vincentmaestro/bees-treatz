'use client';

import { useCart } from '@/lib/cart';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartDrawer() {
  const { cart, isOpen, closeCart, removeFromCart, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={closeCart}
      />

      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b-4 border-brand-orange">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-brand-orange" />
            <h2 className="text-2xl font-black">Your Cart</h2>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-semibold">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="mt-4 text-brand-orange font-bold hover:underline"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-xl p-4 relative"
                >
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <h3 className="font-black text-sm pr-6">{item.name}</h3>
                  {item.comboDetails && (
                    <p className="text-xs text-gray-600 mt-1">
                      {item.comboDetails.items
                        .map((i) => `${i.quantity}x ${i.name}`)
                        .join(', ')}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 bg-brand-orange text-white hover:bg-brand-orange/90 rounded-lg flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <span className="font-black text-brand-orange">
                      £{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.items.length > 0 && (
          <div className="border-t-4 border-brand-orange p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-3xl font-black text-brand-orange">
                £{cart.total.toFixed(2)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-linear-to-r from-brand-red to-brand-orange text-white py-4 rounded-xl font-black text-center hover:shadow-xl transition-all"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
