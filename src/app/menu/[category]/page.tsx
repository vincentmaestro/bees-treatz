import { menuData } from '@/page-data';
import { notFound } from 'next/navigation';
import ImageCarousel from '@/app/components/image-carousel';
import ItemDetails from '@/app/components/item-details';

export default async function MenuPage({ params }: {
    params: Promise<{ category: string }>
}) {
    const { category } = await params;
    const currentCategory = menuData.find(menu => menu.id === category);

    if(!currentCategory)
        return(notFound());

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

                                <ItemDetails item={item} />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
