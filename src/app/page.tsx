import Link from 'next/link';
import { ChefHat, Utensils, PartyPopper, CheckCircle2, Star, Clock, Soup } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-amber-50 to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
                  Authentic Nigerian Food
                  <span className="block text-brand-orange">Made Fresh Daily</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Experience the rich flavors of home-style Nigerian cuisine, freshly prepared in the UK.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/order"
                  className="bg-brand-orange text-white px-8 py-4 rounded-lg hover:bg-brand-orange/90 transition-all font-semibold text-lg text-center"
                >
                  Order Now
                </Link>
                <Link
                  href="/menu"
                  className="border-2 border-brand-dark text-brand-dark px-8 py-4 rounded-lg hover:bg-brand-dark hover:text-white transition-all font-semibold text-lg text-center"
                >
                  View Menu
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-dark">100%</div>
                    <div className="text-sm text-gray-600">Fresh Ingredients</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-brand-orange fill-brand-orange" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-dark">5.0</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-dark">Daily</div>
                    <div className="text-sm text-gray-600">Made Fresh</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative h-125 lg:h-150 rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-brand-orange/20 to-amber-600/20 border-2 border-brand-orange/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Soup className="w-16 h-16 text-brand-orange" />
                  </div>
                  <p className="text-gray-600 font-medium text-lg">Replace with your delicious food photo!</p>
                  <p className="text-sm text-gray-500 mt-2">Recommended: High-quality jollof rice, stew, or platter shot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">What Makes Us Special</h2>
            <p className="text-xl text-gray-600">Bringing authentic Nigerian flavors to the UK</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ChefHat className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Authentic Recipes</h3>
              <p className="text-gray-600">
                Traditional Nigerian home-style cooking using authentic ingredients and time-tested recipes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Fresh Daily</h3>
              <p className="text-gray-600">
                Every dish is prepared fresh to order with the finest ingredients and no shortcuts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PartyPopper className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Catering Available</h3>
              <p className="text-gray-600">
                Perfect for parties, weddings, corporate events, and celebrations of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Customer Favorites</h2>
            <p className="text-xl text-gray-600">The dishes everyone loves</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Jollof Rice', icon: '🍚', desc: 'The crown jewel of West African cuisine' },
              { name: 'Egusi Soup', icon: '🥣', desc: 'Rich melon seed soup with your choice of protein' },
              { name: 'Small Chops', icon: '🍢', desc: 'Perfect party platters and finger foods' },
            ].map((dish) => (
              <div key={dish.name} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-linear-to-br from-brand-orange to-amber-500 flex items-center justify-center">
                  <div className="text-7xl">{dish.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.desc}</p>
                  <Link href="/menu" className="text-brand-orange font-semibold hover:underline inline-flex items-center gap-1">
                    View Menu →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-brand-dark text-white px-8 py-4 rounded-lg hover:bg-brand-orange/90 transition-all font-semibold text-lg"
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Authentic Nigerian Flavors?
          </h2>
          <p className="text-xl text-white mbbg-brand-orange/90">
            Order now for delivery or collection. Catering packages available for your events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="bg-white text-brand-orange px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
            >
              Order Now
            </Link>
            <Link
              href="/catering"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-orange transition-all font-semibold text-lg"
            >
              Book Catering
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
