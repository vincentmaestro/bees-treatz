'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Flame, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/lib/cart';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, toggleCart } = useCart();
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { href: '/menu', label: 'Menu' },
    { href: '/events', label: 'Events & Catering' },
    { href: '/rentals', label: 'Rentals' },
    { href: '/about', label: 'About' },
  ];

  return (    
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="w-16">
              <Link href="/">
                <Image
                src='/logo.jpg'
                alt='Logo'
                width={70}
                height={30}
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-orange transition-colors font-medium relative group px-2 py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              ))}
              <button
                onClick={toggleCart}
                className="relative flex items-center gap-x-3 rounded-full py-1 px-3 text-white bg-linear-to-r from-brand-orange to-warm-yellow
                hover:opacity-85 hover:text-gray-800 hover:scale-105 transition-all duration-200"
              >
                <span className="relative z-10">Cart</span>
                <ShoppingCart className="w-4 h-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>)}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-x-3">
              <button
                onClick={() => {
                  toggleCart();
                  setIsOpen(false);
                }}
                className="relative font-bold gap-x-3 rounded-full py-1 px-3 text-white bg-linear-to-r from-brand-orange to-warm-yellow
                hover:opacity-85 hover:text-gray-800 hover:scale-105 transition-all duration-200"
              >
                <ShoppingCart className="w-4 h-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>)}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-dark hover:text-brand-orange p-2 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-7 w-7" strokeWidth={2.5} />
                ) : (
                  <Menu className="h-7 w-7" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="fixed top-20 left-0 right-0 bg-white border-b-4 border-brand-orange shadow-2xl z-50 md:hidden pattern-dots">
            <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange rounded-lg transition-all font-medium border-l-4 border-transparent hover:border-brand-orange"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
