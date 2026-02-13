'use client';

import { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Banknote } from 'lucide-react';

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    orderType: 'delivery',
    address: '',
    postcode: '',
    date: '',
    items: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    const message = `
*New Order from Website*

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Order Type: ${formData.orderType === 'delivery' ? 'Delivery' : 'Collection'}
${formData.orderType === 'delivery' ? `Address: ${formData.address}\nPostcode: ${formData.postcode}` : ''}

Preferred Date: ${formData.date}

Items:
${formData.items}

${formData.notes ? `Special Notes:\n${formData.notes}` : ''}
    `.trim();

    // Replace with actual WhatsApp number
    const whatsappNumber = '447000000000'; // UPDATE THIS
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const quickOrderWhatsApp = () => {
    const whatsappNumber = '447000000000'; // UPDATE THIS
    const message = "Hi! I'd like to place an order from Bee's Treatz.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Order Now</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your preferred ordering method below
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Order Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* WhatsApp Quick Order */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-brand-orange">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">WhatsApp Order</h2>
              <p className="text-gray-600 mb-6">
                The quickest way! Chat directly with us to place your order.
              </p>
              <button
                onClick={quickOrderWhatsApp}
                className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all font-semibold text-lg w-full"
              >
                Order via WhatsApp
              </button>
            </div>
          </div>

          {/* Phone Order */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-brand-orange" />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">Call to Order</h2>
              <p className="text-gray-600 mb-6">
                Prefer to speak to us? Give us a call and we'll take your order.
              </p>
              <a
                href="tel:+447000000000"
                className="bg-brand-orange text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg w-full inline-block"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-dark mb-3">Or Fill Out Order Form</h2>
            <p className="text-gray-600">We'll confirm your order via WhatsApp or phone</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="+44 7000 000000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            {/* Order Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Order Type *
              </label>
              <select
                name="orderType"
                required
                value={formData.orderType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              >
                <option value="delivery">Delivery</option>
                <option value="collection">Collection</option>
              </select>
            </div>

            {/* Delivery Address */}
            {formData.orderType === 'delivery' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required={formData.orderType === 'delivery'}
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="123 High Street, London"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    required={formData.orderType === 'delivery'}
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="SW1A 1AA"
                  />
                </div>
              </div>
            )}

            {/* Preferred Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-2">Please order at least 24 hours in advance</p>
            </div>

            {/* Order Items */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What would you like to order? *
              </label>
              <textarea
                name="items"
                required
                value={formData.items}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Example:&#10;- 2x Jollof Rice with chicken&#10;- 1x Egusi Soup with pounded yam&#10;- Small Chops Platter (20 people)"
              />
            </div>

            {/* Special Notes */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Special Requests or Dietary Requirements
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Allergies, spice level preferences, delivery instructions, etc."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-brand-orange text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg"
            >
              Send Order via WhatsApp
            </button>

            <p className="text-center text-sm text-gray-500">
              By submitting, you'll be redirected to WhatsApp to confirm your order
            </p>
          </form>
        </div>

        {/* Delivery Information */}
        <div className="mt-16 bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">Delivery Information</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand-orange" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">Order Ahead</h4>
              <p className="text-sm text-gray-600">Minimum 24 hours notice for single orders</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-brand-orange" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">Delivery Areas</h4>
              <p className="text-sm text-gray-600">London and surrounding areas (ask about your postcode)</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Banknote className="w-8 h-8 text-brand-orange" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">Minimum Order</h4>
              <p className="text-sm text-gray-600">£15 minimum for delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
