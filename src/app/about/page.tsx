import { Star, Sparkles, Users, ForkKnife, CookingPot } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-linear-to-br from-brand-dark via-gray-900 to-brand-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-brand-orange" />
            <span className="text-sm font-bold">Est. 2021</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">Our Story</h1>
          <p className="text-2xl lg:text-2xl text-gray-300 italic font-caveat">
            ...Satisfying stomachs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className="text-2xl font-bold text-brand-dark">
              At Bee{`'`}s Treatz, food is more than a service—it{`'`}s an experience rooted in culture, flavour, and heartfelt hospitality.
            </p>

            <p>
              Established in 2021 and proudly registered in both the United Kingdom and Nigeria, Bee{`'`}s Treatz has served over 5,000 happy customers, building a reputation for excellence, authenticity, and beautifully curated food experiences.
            </p>

            <p>
              We specialise in rich, flavourful Nigerian cuisine, prepared with care and presented with elegance. Whether it{`'`}s an intimate private dining experience, a milestone celebration, a corporate gathering, or a lavish event, we bring warmth to every table and luxury to every detail.
            </p>

            <p>
              Our services extend beyond catering. From refined food styling and canapé setups to finger food services and a fully equipped mobile event bar, we thoughtfully design each element to create moments your guests will remember long after the event ends.
            </p>

            <p className="text-xl font-semibold text-brand-dark border-l-4 border-brand-orange pl-6 italic bg-amber-50 py-4 rounded-r-lg">
              At the heart of Bee{`'`}s Treatz is a passion for bringing people together through exceptional food and impeccable service.
            </p>

            <p>
              We combine homely authenticity with professional delivery and sophisticated presentation—ensuring every event feels personal, polished, and truly special. At the end of the day, our focus is to satisfy every stomach that comes our way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-linear-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-brand-dark">Our journey so far...</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-black text-brand-orange mb-2">2021</div>
              <p className="text-gray-700 font-semibold">Established</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-black text-brand-orange mb-2">5K+</div>
              <p className="text-gray-700 font-semibold">Happy Customers</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-black text-brand-orange mb-2">2</div>
              <p className="text-gray-700 font-semibold">Countries</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-black text-brand-orange mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Authentic</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive event and catering solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ForkKnife, title: 'Food Vending', desc: 'Serving culinary experiences, satisfying stomachs' },
              { icon: Users, title: 'Events And Catering', desc: 'Professional catering services. Parties, celebrations' },
              { icon: CookingPot, title: 'Equipment Rentals', desc: 'Rentals of cooking equipments' },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-linear-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-brand-dark mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real feedback from real events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                text: "Exceptional service and outstanding food! Bee's Treatz catered our corporate event and received nothing but praise from our guests. Highly professional.", 
                name: "Sarah M.", 
                event: "Corporate Launch Event" 
              },
              { 
                text: "The food was absolutely delicious and beautifully presented. Our wedding guests are still talking about how amazing everything was!", 
                name: "Tunde & Kemi", 
                event: "Wedding Reception" 
              },
              { 
                text: "From planning to execution, everything was perfect. The mobile bar was a huge hit, and the canapés were incredible. Will definitely book again!", 
                name: "James O.", 
                event: "Private Anniversary Party" 
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 text-brand-orange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-orange" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">{`"${review.text}"`}</p>
                <div>
                  <p className="font-bold text-brand-dark">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
