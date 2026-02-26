import { Building2, Wine, PartyPopper, Clock, Target, Sparkles, Award } from 'lucide-react';
import Link from 'next/link';
import EventsForm from '../components/events-form';

export default function CateringPage() {

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
            <p className="text-xl text-gray-600">Check out our galleries for a glimpse of services we{`'`}ve delivered</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: PartyPopper, title: 'Canapés', href: 'canapes' },
              { icon: Wine, title: 'Cocktail & Mocktails', href: 'cocktail-mocktails' },
              { icon: Building2, title: 'Other Events', href: 'other-events' }
            ].map((event, idx) => {
              const Icon = event.icon;
              return (
                <Link 
                  href={`/events/${event.href}`} 
                  key={idx} 
                  className="group relative bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-brand-orange transition-all hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                      <Icon className="w-7 h-7 text-brand-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-lg text-brand-dark group-hover:text-brand-orange transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-500">View gallery →</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id='rq' className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-brand-dark mb-4">Request a Quote</h2>
            <p className="text-xl text-gray-600">Tell us about your event and we{`'`}ll create a custom package</p>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-brand-orange/30">
            <EventsForm />
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
