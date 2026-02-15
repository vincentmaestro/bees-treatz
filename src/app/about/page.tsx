import { Flag, Star, Heart, ChefHat, Sparkles, CheckCircle2, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-linear-to-br from-amber-50 to-orange-50 py-20 text-center">
        <h1 className="text-5xl font-black text-brand-dark mb-4">Our Story 📖</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Bringing authentic Nigerian flavors to the UK</p>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-xl font-bold text-brand-dark">
              Bee{`'`}s Treatz was born from a simple passion: sharing the rich, vibrant flavors of Nigerian cuisine with our community here in the UK.
            </p>

            <p>
              Growing up in Nigeria, food was more than just sustenance—it was love, celebration, and connection. Every family gathering, every special occasion, every Sunday afternoon was marked by the aromas of jollof rice simmering on the stove, egusi soup bubbling away, and the warm laughter of loved ones gathered around the table.
            </p>

            <p>
              When we moved to the UK, we missed those flavors. Not just the taste, but the feeling of home they brought. We started cooking for friends and family, recreating those cherished recipes our mothers and grandmothers taught us. The response was overwhelming—people craved authentic Nigerian food made with care and traditional methods.
            </p>

            <p>
              That{`'`}s how Bee{`'`}s Treatz began. What started in our home kitchen has grown into a trusted name for authentic Nigerian cuisine in the UK. We{`'`}re proud to serve both Nigerians seeking a taste of home and food lovers discovering these incredible flavors for the first time.
            </p>

            <p className="text-xl font-semibold text-brand-dark">
              Every dish we prepare is made the way it should be—with fresh ingredients, authentic spices, and the time-honored techniques passed down through generations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-brand-dark mb-12 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-brand-orange/20">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Flag className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-3 text-center">Authenticity</h3>
              <p className="text-gray-600 text-center">
                We never cut corners. Every recipe follows traditional methods, using the authentic ingredients that make Nigerian food special.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-brand-orange/20">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-3 text-center">Quality First</h3>
              <p className="text-gray-600 text-center">
                We source the freshest ingredients and prepare everything to order. Your health and satisfaction are our top priorities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-brand-orange/20">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-3 text-center">Made with Love</h3>
              <p className="text-gray-600 text-center">
                Food is an expression of care. We cook every dish as if we{`'`}re feeding our own family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-brand-dark mb-12 text-center">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: ChefHat, title: 'Traditional Recipes', desc: "Our recipes come from generations of Nigerian home cooks. We honor their legacy by cooking them the right way." },
              { icon: Sparkles, title: 'Fresh Every Day', desc: "We don't believe in batch cooking or freezing. Every order is prepared fresh using ingredients bought that day." },
              { icon: CheckCircle2, title: 'UK Food Safety', desc: "While our recipes are Nigerian, our kitchen practices meet all UK hygiene and safety regulations." },
              { icon: Users, title: 'Flexible & Accommodating', desc: "Allergies? Spice preferences? Special requests? We're happy to accommodate." },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="shrink-0 w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-linear-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-brand-dark mb-12 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Best jollof I've had in the UK—tastes exactly like home! The egusi soup reminded me of my grandmother's cooking.", name: "Chioma O." },
              { text: "Ordered for my birthday party and everyone loved it! The small chops platter was a huge hit.", name: "Balogun A." },
              { text: "Finally found authentic Nigerian food in London! Fresh ingredients, generous portions, excellent service.", name: "Amara N." },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex gap-1 text-brand-orange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-orange" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">{`"${review.text}"`}</p>
                <p className="font-semibold text-brand-dark">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
