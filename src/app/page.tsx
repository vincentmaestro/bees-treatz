import Link from 'next/link';
import { MenuSquareIcon, ChefHat, Utensils, PartyPopper, CheckCircle2, Star, Sparkles, Heart, TrendingUp, Award, CalendarCheck } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="relative bg-linear-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-warm-yellow/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-brand-red/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-brand-orange shadow-lg">
                <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />
                <span className="text-sm font-bold text-brand-dark">Est. 2021 • 5,000+ Happy Customers</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-black text-brand-dark leading-tight">
                  Authentic Nigerian Cuisine
                  <span className="block text-3xl lg:text-5xl bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow bg-clip-text text-transparent mt-2">
                    Made Fresh in the UK
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Rich, flavourful Nigerian cuisine, prepared with care and presented with elegance. From intimate dinners to grand celebrations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/menu"
                  className="group relative bg-linear-to-r from-brand-red to-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg text-center shadow-xl hover:shadow-2xl transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Menu
                    <MenuSquareIcon className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-brand-orange to-warm-yellow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  href="/events"
                  className="border-3 border-brand-dark text-brand-dark px-8 py-4 rounded-xl hover:bg-brand-dark hover:text-white transition-all font-bold text-lg text-center shadow-lg"
                >
                  Planning an Event?
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-brand-orange/30">
                  <div className="w-12 h-12 bg-linear-to-br from-deep-green to-green-600 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-brand-dark">100%</div>
                    <div className="text-xs font-medium text-gray-600">Authentic</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-brand-orange/30">
                  <div className="w-12 h-12 bg-linear-to-br from-brand-orange to-warm-yellow rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <Award className="w-6 h-6 text-white fill-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-brand-dark">5K+</div>
                    <div className="text-xs font-medium text-gray-600">Customers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-112 rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-brand-orange/30 to-brand-red/30 border-4 border-white transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/40 shadow-2xl">
                    <Utensils className="w-16 h-16 text-white drop-shadow-lg" strokeWidth={2} />
                  </div>
                  <p className="text-white font-black text-xl drop-shadow-lg mb-2">10-sec food loop video here</p>
                  <p className="text-white/90 text-sm">{`Showcase your delicious dishes! 🍲`}</p>
                </div>
              </div>
              {/* Video element will go here:
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/food-showcase.mp4" type="video/mp4" />
              </video>
              */}
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
                Our Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-dark mb-4">
              More Than Just Food
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From everyday meals to unforgettable events, we bring quality and authenticity to every table
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-linear-to-br from-white to-amber-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🍽️</div>
              <div className="w-20 h-20 bg-linear-to-br from-brand-orange/20 to-warm-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Utensils className="w-10 h-10 text-brand-orange" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-3">Rich Menu Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore our carefully curated menu featuring traditional Nigerian favorites—from jollof rice, soups, pasta dishes and sides. Every dish prepared fresh with authentic ingredients.
              </p>
            </div>

            <div className="group relative bg-linear-to-br from-white to-orange-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🎁</div>
              <div className="w-20 h-20 bg-linear-to-br from-brand-red/20 to-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-10 h-10 text-brand-red" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-3">Combo Treats</h3>
              <p className="text-gray-600 leading-relaxed">
                Can{`'`}t decide? Try our special combo packages featuring delicious food combinations with proteins, drinks, small chops, and add-ons—perfectly paired for your satisfaction.
              </p>
            </div>

            <div className="group relative bg-linear-to-br from-white to-red-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange">
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🎉</div>
              <div className="w-20 h-20 bg-linear-to-br from-deep-green/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <PartyPopper className="w-10 h-10 text-deep-green" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-3">Events & Equipment</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional event catering for weddings, corporate functions, and celebrations. We also offer cooking equipment rentals to make your event a success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-b from-gray-50 to-amber-50/30 pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-brand-dark mb-4">
              Why <span className="font-caveat text-brand-orange">Bee{`'`}s Treatz</span>?
            </h2>
            <p className="text-xl text-gray-600">Excellence in every detail</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: ChefHat, 
                title: 'Authentic Recipes', 
                desc: 'Traditional Nigerian cooking methods and genuine ingredients'
              },
              { 
                icon: CheckCircle2, 
                title: 'Fresh Daily', 
                desc: 'Every dish prepared fresh to order, never batch-cooked'
              },
              { 
                icon: Star, 
                title: 'Elegant Presentation', 
                desc: 'Beautiful plating and professional service standards'
              },
              { 
                icon: CalendarCheck, 
                title: 'Reliable Service', 
                desc: 'Punctual delivery and consistent quality you can trust'
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all border-2 border-transparent hover:border-brand-orange">
                  <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-black text-lg text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
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
            <span className="text-sm font-bold text-white">Ready when you are</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 drop-shadow-lg">
            Experience the Difference Today
          </h2>
          <p className="text-xl lg:text-2xl text-white/95 mb-10 drop-shadow">
            Order your favorite dishes or book us for your next event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="group bg-white text-brand-orange px-10 py-5 rounded-xl hover:bg-gray-100 transition-all font-black text-lg shadow-2xl"
            >
              <span className="flex items-center justify-center gap-2">
                Order Now
                <Heart className="w-5 h-5 group-hover:fill-current transition-all" />
              </span>
            </Link>
            <Link
              href="/events"
              className="border-3 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-brand-orange transition-all font-black text-lg shadow-2xl"
            >
              Book Event Catering
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
