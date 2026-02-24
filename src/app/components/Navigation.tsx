'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
              <Link
                href="/order"
                className="relative bg-linear-to-r from-brand-red to-brand-orange text-white px-6 py-2.5 rounded-lg font-bold overflow-hidden group"
              >
                <span className="relative z-10">Order Now!</span>
                <div className="absolute inset-0 bg-linear-to-r from-brand-orange to-warm-yellow opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>

            <div className="md:hidden flex items-center">
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
              <Link
                href="/order"
                className="flex justify-center gap-x-2 mt-4 bg-linear-to-r from-brand-red to-brand-orange text-white px-4 py-3 rounded-lg font-bold"
                onClick={() => setIsOpen(false)}
              >
                Order Now!
                <Flame className='w-5 h-5' />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
