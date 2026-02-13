'use client';

import { useState } from 'react';
import { Cake, Heart, Building2, Church, PartyPopper, Store, Clock, Target, Sparkles, Award } from 'lucide-react';

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

  const eventTypes = [
    { icon: Cake, title: 'Birthday Parties', desc: 'Celebrate with authentic flavors' },
    { icon: Heart, title: 'Weddings', desc: 'Make your special day delicious' },
    { icon: Building2, title: 'Corporate Events', desc: 'Impress clients and colleagues' },
    { icon: Church, title: 'Church Events', desc: 'Feed your congregation well' },
    { icon: PartyPopper, title: 'Private Parties', desc: 'House parties, celebrations, gatherings' },
    { icon: Store, title: 'Pop-up Events', desc: 'Market stalls, food festivals, showcases' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Catering & Events</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Make your event unforgettable with authentic Nigerian cuisine that your guests will love
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Perfect For Every Occasion</h2>
            <p className="text-xl text-gray-600">Professional catering services for all your events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, idx) => {
              const Icon = event.icon;
              return (
                <div key={idx} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package Examples */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Sample Packages</h2>
            <p className="text-xl text-gray-600">Flexible options to suit your event size and budget</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-brand-orange text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Intimate Gathering</h3>
                <p className="text-3xl font-bold">20 Guests</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Choice of 2 main dishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>1 soup option with swallow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Small chops platter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Soft drinks included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Disposable serving ware</span>
                  </li>
                </ul>
                <p className="text-center text-2xl font-bold text-brand-dark mb-4">From £350</p>
                <p className="text-center text-sm text-gray-600">Customizable to your preferences</p>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-brand-orange">
              <div className="bg-brand-dark text-white p-6 text-center">
                <div className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Standard Event</h3>
                <p className="text-3xl font-bold">50 Guests</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Choice of 3 main dishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>2 soup options with swallows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Large small chops platter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Assorted proteins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Drinks & serving ware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Setup assistance</span>
                  </li>
                </ul>
                <p className="text-center text-2xl font-bold text-brand-dark mb-4">From £800</p>
                <p className="text-center text-sm text-gray-600">Our most popular package</p>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-brand-orange to-amber-500 text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Grand Celebration</h3>
                <p className="text-3xl font-bold">100+ Guests</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Unlimited dish options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Multiple soup stations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Premium protein selections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Desserts & drinks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Full setup & service staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">✓</span>
                    <span>Custom menu consultation</span>
                  </li>
                </ul>
                <p className="text-center text-2xl font-bold text-brand-dark mb-4">Custom Quote</p>
                <p className="text-center text-sm text-gray-600">Tailored to your vision</p>
              </div>
            </div>
          </div>

          <p className="text-center mt-12 text-gray-600 text-lg">
            All packages are fully customizable. Prices are starting points - let's create your perfect menu!
          </p>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Request a Quote</h2>
            <p className="text-xl text-gray-600">Tell us about your event and we'll create a custom package</p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Event Type *</label>
                  <select
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  >
                    <option value="">Select event type</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="church">Church Event</option>
                    <option value="private">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests *</label>
                  <input
                    type="number"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Event Date *</label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Event Location *</label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="Venue name or area in London"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your event
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="Menu preferences, dietary requirements, special requests, timing, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg"
              >
                Get My Custom Quote
              </button>

              <p className="text-center text-sm text-gray-500">
                We'll respond within 24 hours with a personalized quote via WhatsApp
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Bee's Treatz Catering</h2>
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
