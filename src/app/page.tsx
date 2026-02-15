import Link from 'next/link';
import { ChefHat, PartyPopper, CheckCircle2, Star, Soup, Flame, Sparkles, Heart, TrendingUp } from 'lucide-react';

export default function Home() {
  const dishes = [
    { 
      name: 'Jollof Rice', 
      emoji: '🍚', 
      desc: "The one that started wars between West African countries. Ours? Pure perfection.",
      badge: "🔥 Best Seller"
    },
    { 
      name: 'Egusi Soup', 
      emoji: '🥣', 
      desc: "Rich, thick, melon seed goodness with your choice of protein. Soul food, literally.",
      badge: "❤️ Comfort Food"
    },
    { 
      name: 'Small Chops', 
      emoji: '🍢', 
      desc: "The party starter. Samosa, puff puff, spring rolls... they disappear in seconds.",
      badge: "🎉 Party Fave"
    },
  ];

  return (
    <div>
      <section className="relative bg-linear-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-40"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-warm-yellow/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-brand-red/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-brand-orange shadow-lg">
                <Flame className="w-5 h-5 text-brand-red animate-pulse" />
                <span className="text-sm font-bold text-brand-dark">Fresh daily • Made with love</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black text-brand-dark leading-tight">
                  Naija Food
                  <span className="block bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow bg-clip-text text-transparent">
                    That Hits Different
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                  Authentic Nigerian eats 🇳🇬 <br/>
                  Made fresh in the UK✨
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/order" className="group relative bg-linear-to-r from-brand-red to-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg text-center shadow-xl hover:shadow-2xl transition-all overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Order Now
                    <Flame className="w-5 h-5 group-hover:animate-bounce" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-brand-orange to-warm-yellow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link href="/menu" className="border-3 border-brand-dark text-brand-dark px-8 py-4 rounded-xl hover:bg-brand-dark hover:text-white transition-all font-bold text-lg text-center shadow-lg">
                  See What{`'`}s Cooking 👀
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-brand-orange/30">
                  <div className="w-12 h-12 bg-linear-to-br from-deep-green to-green-600 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-brand-dark">100%</div>
                    <div className="text-xs font-medium text-gray-600">Fresh Ingredients</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-brand-orange/30">
                  <div className="w-12 h-12 bg-linear-to-br from-brand-orange to-warm-yellow rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <Star className="w-6 h-6 text-white fill-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-brand-dark">5.0</div>
                    <div className="text-xs font-medium text-gray-600">Customer Love</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-brand-orange/30">
                  <div className="w-12 h-12 bg-linear-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <Flame className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-brand-dark">Daily</div>
                    <div className="text-xs font-medium text-gray-600">Made Fresh</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-125 lg:h-150 rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-brand-orange/30 to-brand-red/30 border-4 border-white transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/40 shadow-2xl">
                    <Soup className="w-20 h-20 text-white drop-shadow-lg" strokeWidth={2} />
                  </div>
                  <p className="text-white font-black text-2xl drop-shadow-lg mb-2">Your Jollof Hero Shot Here!</p>
                  <p className="text-white/90 text-sm">Short looped video of delicious treats will be placed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-linear-to-r from-brand-red to-brand-orange bg-clip-text text-transparent text-lg font-bold">
                Why We{`'`}re Different
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-dark mb-4">
              The <span className="font-caveat text-brand-orange">Bee{`'`}s Treatz</span> Promise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Not your average Nigerian food joint. We bring the VIBES. 🔥
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-linear-to-br from-white to-amber-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🍳</div>
              <div className="w-20 h-20 bg-linear-to-br from-brand-orange/20 to-warm-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ChefHat className="w-10 h-10 text-brand-orange" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-3">100% Authentic</h3>
              <p className="text-gray-600 leading-relaxed">
                No shortcuts, no frozen nonsense. Just real Nigerian recipes passed down through generations. Your grandma would approve. 👵🏾
              </p>
            </div>

            <div className="group relative bg-linear-to-br from-white to-orange-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">⚡</div>
              <div className="w-20 h-20 bg-linear-to-br from-brand-red/20 to-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Flame className="w-10 h-10 text-brand-red" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-3">Made Fresh Daily</h3>
              <p className="text-gray-600 leading-relaxed">
                We cook everything fresh to order. No batch cooking, no reheated food. Your meal is prepared the moment you order. Period.
              </p>
            </div>

            <div className="group relative bg-linear-to-br from-white to-red-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🎉</div>
              <div className="w-20 h-20 bg-linear-to-br from-deep-green/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <PartyPopper className="w-10 h-10 text-deep-green" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-3">Party Catering</h3>
              <p className="text-gray-600 leading-relaxed">
                From owambe to boardroom, we{`'`}ve got you covered. We{`'`}ll make your event unforgettable with food people actually want seconds of.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-b from-gray-50 to-amber-50/30 pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-brand-orange shadow-lg mb-4">
              <TrendingUp className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-bold text-brand-dark">Customer Favorites</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-dark mb-4">
              Dishes That Made Us <span className="font-caveat text-brand-orange">Famous</span>
            </h2>
            <p className="text-xl text-gray-600">The holy trinity of Nigerian cuisine 🙌🏾</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dishes.map((dish) => (
              <div key={dish.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange">
                <div className="relative h-48 bg-linear-to-br from-brand-orange via-warm-yellow to-brand-orange flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative text-8xl group-hover:scale-125 transition-transform duration-500">{dish.emoji}</div>
                  <div className="absolute top-4 right-4">
                    <span className="stamp bg-white text-brand-orange text-xs font-bold px-2 py-1">
                      {dish.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-brand-dark mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{dish.desc}</p>
                  <Link href="/menu" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:gap-3 transition-all group-hover:underline">
                    Check it out
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="inline-block bg-brand-dark text-white px-10 py-4 rounded-xl hover:bg-gray-800 transition-all font-bold text-lg shadow-xl">
              See Full Menu 📋
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
            <span className="text-sm font-bold text-white">Ready When You Are</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 drop-shadow-lg">
            Hungry Yet? Let{`'`}s Fix That! 😋
          </h2>
          <p className="text-xl lg:text-2xl text-white/95 mb-10 drop-shadow">
            Order now for delivery or collection. Trust us, your stomach will thank you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="group bg-white text-brand-orange px-10 py-5 rounded-xl hover:bg-gray-100 transition-all font-black text-lg shadow-2xl">
              <span className="flex items-center justify-center gap-2">
                Order Now
                <Heart className="w-5 h-5 group-hover:fill-current transition-all" />
              </span>
            </Link>
            <Link href="/catering" className="border-3 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-brand-orange transition-all font-black text-lg shadow-2xl">
              Book Event Catering 🎊
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
