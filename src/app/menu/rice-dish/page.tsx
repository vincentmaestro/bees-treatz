import { Flame } from 'lucide-react';
import ImageCarousel from '@/app/components/image-carousel';
import { menuData } from '@/page-data';

export default function MenuPage() {
  const currentCategory = menuData[0];

  return (
    <div>
      <section className="py-16 pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-brand-orange/20">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b-4 border-linear-to-r from-brand-red via-brand-orange to-warm-yellow">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-dark">
                {currentCategory.title}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.items.map((item, idx) => (
                <div key={idx} className="group relative p-6 rounded-2xl hover:bg-linear-to-br hover:from-amber-50 hover:to-orange-50 transition-all border-2 border-transparent hover:border-brand-orange menu-card-glow">
                  {item.badge && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <span className="stamp bg-linear-to-r from-brand-red to-brand-orange text-white text-xs font-bold px-3 py-1.5">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <ImageCarousel images={item.images} itemName={item.name} />

                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-black text-brand-dark pr-2">{item.name}</h3>
                    {item.spiceLevel && (
                      <div className="flex gap-0.5 shrink-0">
                        {Array(item.spiceLevel)
                          .fill(0)
                          .map((_, i) => (
                            <Flame 
                              key={i} 
                              className={`w-4 h-4 ${
                                item.spiceLevel === 3 ? 'text-red-500 fill-red-500' :
                                item.spiceLevel === 2 ? 'text-orange-500 fill-orange-500' :
                                'text-orange-400 fill-orange-400'
                              }`}
                            />
                          ))}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{item.description}</p>

                  <div className="flex justify-between items-end">
                    {item.price && (
                      <span className="text-brand-orange font-black text-xl">{item.price}</span>
                    )}
                    {item.portions && (
                      <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                        {item.portions}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
