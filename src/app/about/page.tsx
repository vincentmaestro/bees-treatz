import Link from 'next/link';
import { Flag, Star, Heart, CheckCircle2, Users, ChefHat, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Bringing the authentic taste of Nigerian home cooking to the UK
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-xl">
                Bee&apos;s Treatz was born from a simple passion: sharing the rich, vibrant flavors of Nigerian cuisine 
                with our community here in the UK.
              </p>

              <p>
                Growing up in Nigeria, food was more than just sustenance—it was love, celebration, and connection. 
                Every family gathering, every special occasion, every Sunday afternoon was marked by the aromas of 
                jollof rice simmering on the stove, egusi soup bubbling away, and the warm laughter of loved ones 
                gathered around the table.
              </p>

              <p>
                When we moved to the UK, we missed those flavors. Not just the taste, but the feeling of home they 
                brought. We started cooking for friends and family, recreating those cherished recipes our mothers 
                and grandmothers taught us. The response was overwhelming—people craved authentic Nigerian food made 
                with care and traditional methods.
              </p>

              <p>
                That&apos;s how Bee&apos;s Treatz began. What started in our home kitchen has grown into a trusted name for 
                authentic Nigerian cuisine in the UK. We&apos;re proud to serve both Nigerians seeking a taste of home 
                and food lovers discovering these incredible flavors for the first time.
              </p>

              <p className="text-xl font-semibold text-brand-dark">
                Every dish we prepare is made the way it should be. With fresh ingredients, authentic spices, and 
                the time-honored techniques passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Authenticity */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-4">
                <Flag className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                We never cut corners. Every recipe follows traditional methods, using the authentic ingredients 
                that make Nigerian food special. No shortcuts, no substitutes—just real, honest cooking.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We source the freshest ingredients and prepare everything to order. Our kitchen maintains the 
                highest hygiene standards because your health and satisfaction are our top priorities.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Made with Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Food is an expression of care. We cook every dish as if we&apos;re feeding our own family—because to 
                us, every customer is part of the Bee&apos;s Treatz family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Traditional Recipes</h3>
                  <p className="text-gray-600">
                    Our recipes come from generations of Nigerian home cooks who perfected these dishes over 
                    decades. We honor their legacy by cooking them the right way.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Fresh Every Day</h3>
                  <p className="text-gray-600">
                    Every order is prepared fresh using ingredients bought that day or the day before.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">UK Food Safety Standards</h3>
                  <p className="text-gray-600">
                    While our recipes are Nigerian, our kitchen practices meet all UK hygiene and safety 
                    regulations. The best of both worlds.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Flexible & Accommodating</h3>
                  <p className="text-gray-600">
                    Allergies? Spice preferences? Special requests? We&apos;re happy to accommodate. Your satisfaction 
                    is what matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-125 rounded-2xl overflow-hidden shadow-xl bg-linear-to-br from-brand-orange/20 to-amber-600/20 border-2 border-brand-orange/30 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChefHat className="w-16 h-16 text-brand-orange" />
                </div>
                <p className="text-xl font-semibold text-gray-700">Team or kitchen photo goes here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-linear-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don&apos;t just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex gap-1 text-brand-orange mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-orange" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Best jollof I&apos;ve had in the UK—tastes exactly like home! The egusi soup reminded me of my 
                grandmother&apos;s cooking.&quot;
              </p>
              <p className="font-semibold text-brand-dark">— Chioma O.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex gap-1 text-brand-orange mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-orange" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Ordered for my birthday party and everyone loved it! The small chops platter was a huge hit. 
                Will definitely be using them for future events.&quot;
              </p>
              <p className="font-semibold text-brand-dark">— David A.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex gap-1 text-brand-orange mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-orange" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Finally found authentic Nigerian food in London! Fresh ingredients, generous portions, and 
                the customer service is excellent. Highly recommend!&quot;
              </p>
              <p className="font-semibold text-brand-dark">— Amara N.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Authentic Nigerian Flavors?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join our growing family of satisfied customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="bg-white text-brand-orange px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
            >
              Order Now
            </Link>
            <Link
              href="/menu"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-orange transition-all font-semibold text-lg"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
