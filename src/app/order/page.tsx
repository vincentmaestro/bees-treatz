'use client';
import { MessageCircle, Phone } from 'lucide-react';

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow text-white py-20 text-center">
        <h1 className="text-5xl font-black mb-4">Order Now!</h1>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl shadow-xl border-2 border-green-500 text-center">
            <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-black mb-3">WhatsApp</h2>
            <button onClick={() => window.open('https://wa.me/447000000000')} className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold w-full">
              Order via WhatsApp
            </button>
          </div>
          <div className="p-8 rounded-2xl shadow-xl border-2 border-brand-orange text-center">
            <Phone className="w-16 h-16 text-brand-orange mx-auto mb-4" />
            <h2 className="text-2xl font-black mb-3">Call Us</h2>
            <a href="tel:+447000000000" className="block bg-brand-orange text-white px-8 py-4 rounded-xl font-bold">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
