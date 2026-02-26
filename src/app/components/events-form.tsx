'use client';
import { useActionState } from 'react';
import { sendMail } from '@/actions/events-and-catering';

export const defaultActionState = {
    success: false,
    message: ''
}

export default function EventsForm() {
    const [state, handleSubmit, loading] = useActionState(sendMail, defaultActionState);
  
    return(
        <form action={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                Full Name *
                </label>
                <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
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
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
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
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
            />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                Event Type *
                </label>
                <select
                name="event-type"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                >
                <option value="">Select event type</option>
                <option value="Birthday">Birthday Party</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate event">Corporate Event</option>
                <option value="Church event">Church Event</option>
                <option value="Private event">Private Party</option>
                <option value="Popup event">Pop-up Event</option>
                <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                Estimated Number of Guests *
                </label>
                <input
                type="number"
                name="guest-count"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                placeholder="e.g. 50"
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
                    name="event-date"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                    Budget Range
                    </label>
                    <select
                    name="budget"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                    >
                    <option value="">Select budget range</option>
                    <option value="under £500">Under £500</option>
                    <option value="£500 - £1000">£500 - £1,000</option>
                    <option value="£1000 - £2000">£1,000 - £2,000</option>
                    <option value="Above £2000">£2,000+</option>
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
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                placeholder="Venue name or area"
            />
            </div>

            <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
                Tell us about your event
            </label>
            <textarea
                name="details"
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all"
                placeholder="Any additional details we might need...."
            />
            </div>

            <button
            type="submit"
            className="w-full bg-linear-to-r from-brand-red to-brand-orange text-white px-8 py-5 rounded-xl cursor-pointer disabled:cursor-not-allowed hover:shadow-2xl transition-all font-black text-lg relative overflow-hidden group"
            disabled={loading}
            >
                <span className="relative z-10">{loading ? 'Sending...' : 'Request Quote'}</span>
                <div className="absolute inset-0 bg-linear-to-r from-brand-orange to-warm-yellow opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            {state.success ? (
                <p className="text-center text-sm text-gray-600">
                    {state.message}
                    <br />
                    <span>We{`'`}ll respond within 24 hours with a personalized quote</span>
                </p>
            ) :
            (
                <p className="text-center text-sm text-red-600">
                    {state.message}
                </p>
            )}
        </form>
    );
}
