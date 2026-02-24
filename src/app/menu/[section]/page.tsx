import { mainMenu } from '@/page-data';
import { getMenuItems } from '@/sanity/get-menu-items';
import { notFound } from 'next/navigation';
import MenuBuilder from '@/app/components/menu-builder';

export default async function MenuPage({ params }: {
    params: Promise<{ section: string }>
}) {
    const { section } = await params;
    const currentSection = mainMenu.find(menu => menu.href === section);

    if(!currentSection)
        return(notFound());

    const menuItems = await getMenuItems(currentSection.href);

    return (
        <div>
            <section className="py-16 pattern-grid">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl px-2 py-8 shadow-xl border-2 border-brand-orange/20 xs:px-4 lg:p-10">
                        <div className="flex items-center gap-3 mb-8 pb-6 border-b-4 border-linear-to-r from-brand-red via-brand-orange to-warm-yellow">
                            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark">
                                {currentSection.label}
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {menuItems.length > 0 ?
                            menuItems.map((item, idx) => (
                            <div key={idx} className="relative p-6 rounded-2xl hover:bg-linear-to-br hover:from-amber-50 hover:to-orange-50 transition-all border-2 border-transparent hover:border-brand-orange menu-card-glow">
                                {item.badge && (
                                    <div className="absolute -top-3 -right-3 z-10">
                                        <span className="stamp bg-linear-to-r from-brand-red to-brand-orange text-white text-xs font-bold px-3 py-1.5">
                                            {item.badge}
                                        </span>
                                    </div>
                                )}

                                <MenuBuilder item={item} itemName={item.name} />
                            </div>
                            )) :
                            <p
                            className='text-xl font-black text-brand-dark text-center mt-10 italic'
                            >
                                No items here yet...
                                <br />
                                But watch this space👀
                            </p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
