'use client';

import { useState } from 'react';
import { Building2, Wine, PartyPopper, Clock, Target, Sparkles, Award } from 'lucide-react';
import Link from 'next/link';

export default function CateringPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    location: '',
    budget: '',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
*Catering Enquiry from Website*

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Event Type: ${formData.eventType}
Number of Guests: ${formData.guestCount}
Event Date: ${formData.eventDate}
Location: ${formData.location}
Budget: ${formData.budget}

Details:
${formData.details}
    `.trim();

    const whatsappNumber = '447778797023';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-linear-to-br from-brand-dark via-gray-900 to-brand-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />
            <span className="text-sm font-bold">Professional Catering Services</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">Events & Catering 🎉</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300">
            Make your event unforgettable with authentic Nigerian cuisine that your guests will love
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-brand-dark mb-4">Perfect For Every Occasion</h2>
            <p className="text-xl text-gray-600">Check out our galleries below for a glimpse of professional services catered for your events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: PartyPopper, title: 'Canapés', href: 'canapes' },
              { icon: Wine, title: 'Cocktail and Mocktails', href: 'cocktail-mocktails' },
              { icon: Building2, title: 'Other Events', href: 'other-events' }
            ].map((event, idx) => {
              const Icon = event.icon;
              return (
                <Link href={`/events/${event.href}`} key={idx} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-xl transition-all border-2 border-transparent hover:border-brand-orange group">
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-orange/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-black text-brand-dark mb-2">{event.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-bold text-brand-dark">Get Started</span>
            </div>
            <h2 className="text-4xl font-black text-brand-dark mb-4">Request a Quote</h2>
            <p className="text-xl text-gray-600">Tell us about your event and we{`'`}ll create a custom package</p>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-brand-orange/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                    placeholder="+44 7000 000000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                  >
                    <option value="">Select event type</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="church">Church Event</option>
                    <option value="private">Private Party</option>
                    <option value="popup">Pop-up Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                    placeholder="50"
                    min="1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under £500</option>
                    <option value="500-1000">£500 - £1,000</option>
                    <option value="1000-2000">£1,000 - £2,000</option>
                    <option value="2000-plus">£2,000+</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Event Location *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                  placeholder="Venue name or area in London"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Tell us about your event
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                  placeholder="Menu preferences, dietary requirements, special requests, timing, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-brand-red to-brand-orange text-white px-8 py-5 rounded-xl hover:shadow-2xl transition-all font-black text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Get My Custom Quote</span>
                <div className="absolute inset-0 bg-linear-to-r from-brand-orange to-warm-yellow opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <p className="text-center text-sm text-gray-600">
                We{`'`}ll respond within 24 hours with a personalized quote
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Why Choose Bee{`'`}s Treatz Catering</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Reliable & Punctual</h3>
              <p className="text-gray-300">Always on time, every time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Custom Menus</h3>
              <p className="text-gray-300">Tailored to your preferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Professional Service</h3>
              <p className="text-gray-300">Setup, serving, cleanup included</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Quality Guaranteed</h3>
              <p className="text-gray-300">Fresh ingredients, authentic taste</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
