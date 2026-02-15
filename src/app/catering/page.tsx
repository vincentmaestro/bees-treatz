import { Cake, Heart, Building2, Church, PartyPopper, Store, Clock, Target, Sparkles, Award } from 'lucide-react';

export default function CateringPage() {
  const eventTypes = [
    { icon: Cake, title: 'Birthday Parties', desc: 'Celebrate with authentic flavors' },
    { icon: Heart, title: 'Weddings', desc: 'Make your special day delicious' },
    { icon: Building2, title: 'Corporate Events', desc: 'Impress clients and colleagues' },
    { icon: Church, title: 'Church Events', desc: 'Feed your congregation well' },
    { icon: PartyPopper, title: 'Private Parties', desc: 'House parties, celebrations' },
    { icon: Store, title: 'Pop-up Events', desc: 'Market stalls, food festivals' },
  ];

  const packages = [
    {
      name: 'Intimate Gathering',
      guests: '20 Guests',
      price: 'From £350',
      features: ['Choice of 2 main dishes', '1 soup option with swallow', 'Small chops platter', 'Soft drinks included', 'Disposable serving ware'],
    },
    {
      name: 'Standard Event',
      guests: '50 Guests',
      price: 'From £800',
      popular: true,
      features: ['Choice of 3 main dishes', '2 soup options with swallows', 'Large small chops platter', 'Assorted proteins', 'Drinks & serving ware', 'Setup assistance'],
    },
    {
      name: 'Grand Celebration',
      guests: '100+ Guests',
      price: 'Custom Quote',
      features: ['Unlimited dish options', 'Multiple soup stations', 'Premium proteins', 'Desserts & drinks', 'Full setup & service', 'Custom menu consultation'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-linear-to-br from-brand-dark via-gray-900 to-brand-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">Events & Catering 🎉</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300">
            Make your event unforgettable with authentic Nigerian cuisine
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-brand-dark mb-12 text-center">Perfect For Every Occasion</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, idx) => {
              const Icon = event.icon;
              return (
                <div key={idx} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-xl transition-all border-2 border-transparent hover:border-brand-orange">
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-black text-brand-dark mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-linear-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-brand-dark mb-4 text-center">Sample Packages</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">Flexible options for your event</p>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${pkg.popular ? 'border-2 border-brand-orange' : ''}`}>
                {pkg.popular && <div className="bg-brand-orange text-white text-center py-2 font-bold text-sm">⭐ POPULAR</div>}
                <div className={`${pkg.popular ? 'bg-brand-dark' : 'bg-brand-orange'} text-white p-6 text-center`}>
                  <h3 className="text-2xl font-black mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold">{pkg.guests}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((f, i) => <li key={i} className="flex gap-2"><span className="text-brand-orange">✓</span><span>{f}</span></li>)}
                  </ul>
                  <p className="text-center text-2xl font-black text-brand-dark">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {icon: Clock, title: 'Reliable', desc: 'Always on time'},
              {icon: Target, title: 'Custom Menus', desc: 'Tailored to you'},
              {icon: Sparkles, title: 'Professional', desc: 'Setup included'},
              {icon: Award, title: 'Quality', desc: 'Fresh ingredients'},
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-brand-dark mb-6">Request a Quote</h2>
          <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-12 border-2 border-brand-orange/30">
            <p className="text-lg text-gray-700 mb-6">Ready to make your event special?</p>
            <a href="https://wa.me/447000000000" className="inline-block bg-linear-to-r from-brand-red to-brand-orange text-white px-10 py-5 rounded-xl font-black text-lg shadow-2xl">
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
