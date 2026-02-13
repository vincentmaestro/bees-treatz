import Link from 'next/link';
import { Flame } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price?: string;
  spiceLevel?: number;
  portions?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Main Dishes',
    items: [
      {
        name: 'Jollof Rice',
        description: 'The crown jewel of West African cuisine - smoky, rich tomato rice cooked to perfection',
        price: 'From £8',
        spiceLevel: 2,
        portions: 'Single / Party Tray',
      },
      {
        name: 'Fried Rice',
        description: 'Colorful Nigerian-style fried rice with mixed vegetables and your choice of protein',
        price: 'From £8',
        spiceLevel: 1,
        portions: 'Single / Party Tray',
      },
      {
        name: 'Coconut Rice',
        description: 'Fragrant rice cooked in rich coconut milk with subtle spices',
        price: 'From £8',
        spiceLevel: 1,
        portions: 'Single / Party Tray',
      },
      {
        name: 'Native Rice',
        description: 'Traditional palm oil rice with fresh fish and authentic spices',
        price: 'From £9',
        spiceLevel: 2,
        portions: 'Single / Party Tray',
      },
    ],
  },
  {
    title: 'Soups & Swallows',
    items: [
      {
        name: 'Egusi Soup',
        description: 'Rich melon seed soup with assorted meat, fish, and leafy vegetables (contains crayfish)',
        price: 'From £10',
        spiceLevel: 2,
      },
      {
        name: 'Ogbono Soup',
        description: 'Smooth, draw soup made from African mango seeds with your choice of protein',
        price: 'From £10',
        spiceLevel: 2,
      },
      {
        name: 'Okra Soup',
        description: 'Fresh okra soup with assorted meat and seafood in rich palm oil base',
        price: 'From £10',
        spiceLevel: 2,
      },
      {
        name: 'Efo Riro',
        description: 'Yoruba-style vegetable soup with spinach, assorted meat, and locust beans',
        price: 'From £10',
        spiceLevel: 2,
      },
      {
        name: 'Banga Soup',
        description: 'Delta-style palm nut soup with catfish and native spices',
        price: 'From £12',
        spiceLevel: 3,
      },
      {
        name: 'Pounded Yam',
        description: 'Smooth, stretchy swallow perfect for soups',
        price: '£4',
      },
      {
        name: 'Eba (Garri)',
        description: 'Traditional cassava swallow',
        price: '£3',
      },
      {
        name: 'Fufu',
        description: 'Soft cassava and plantain swallow',
        price: '£4',
      },
    ],
  },
  {
    title: 'Small Chops & Appetizers',
    items: [
      {
        name: 'Small Chops Platter',
        description: 'Perfect party mix: samosa, spring rolls, puff puff, chicken, and plantain',
        price: 'From £25 (serves 10)',
        portions: 'Party Packs Available',
      },
      {
        name: 'Puff Puff',
        description: 'Sweet, fluffy Nigerian doughnuts',
        price: '£5 (12 pieces)',
      },
      {
        name: 'Samosa',
        description: 'Crispy pastry filled with spiced beef or vegetables',
        price: '£6 (10 pieces)',
      },
      {
        name: 'Spring Rolls',
        description: 'Crispy vegetable spring rolls',
        price: '£6 (10 pieces)',
      },
      {
        name: 'Peppered Chicken',
        description: 'Grilled chicken in spicy Nigerian pepper sauce',
        price: 'From £8',
        spiceLevel: 3,
      },
      {
        name: 'Peppered Gizzard',
        description: 'Tender gizzards in fiery pepper sauce',
        price: 'From £10',
        spiceLevel: 3,
      },
    ],
  },
  {
    title: 'Proteins & Sides',
    items: [
      {
        name: 'Fried Plantain',
        description: 'Sweet ripe plantain, perfectly golden',
        price: '£4',
      },
      {
        name: 'Moi Moi',
        description: 'Steamed bean pudding with eggs and fish',
        price: '£5',
      },
      {
        name: 'Asun',
        description: 'Spicy grilled goat meat',
        price: 'From £12',
        spiceLevel: 3,
      },
      {
        name: 'Grilled Fish',
        description: 'Whole tilapia or mackerel, grilled and seasoned',
        price: 'From £10',
      },
      {
        name: 'Beef Stew',
        description: 'Rich tomato stew with tender beef',
        price: 'From £8',
        spiceLevel: 2,
      },
      {
        name: 'Chicken Stew',
        description: 'Savory tomato stew with chicken',
        price: 'From £8',
        spiceLevel: 2,
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Authentic Nigerian dishes prepared fresh daily with traditional recipes and quality ingredients
          </p>
        </div>
      </section>

      {/* Spice Level Legend */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-6 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Spice Level:</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Mild</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                <Flame className="w-4 h-4 text-red-500 fill-red-500" />
              </div>
              <span>Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                <Flame className="w-4 h-4 text-red-500 fill-red-500" />
              </div>
              <span>Hot</span>
            </div>
            <div className="text-gray-600">
              (All spice levels can be adjusted to your preference)
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {menuData.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-3xl font-bold text-brand-dark mb-8 pb-4 border-b-2 border-brand-orange">
                  {category.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="p-6 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-brand-dark">{item.name}</h3>
                        {item.spiceLevel && (
                          <div className="flex gap-0.5 shrink-0 ml-2">
                            {Array(item.spiceLevel)
                              .fill(0)
                              .map((_, i) => (
                                <Flame key={i} className="w-4 h-4 text-red-500 fill-red-500" />
                              ))}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">{item.description}</p>
                      <div className="flex justify-between items-end">
                        {item.price && (
                          <span className="text-brand-orange font-bold text-lg">{item.price}</span>
                        )}
                        {item.portions && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {item.portions}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Menu FAQs</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-brand-dark mb-2">Can I adjust the spice level?</h3>
              <p className="text-gray-600">Absolutely! Just let us know your preference when ordering.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-brand-dark mb-2">Do you cater for allergies?</h3>
              <p className="text-gray-600">
                Yes, please inform us of any allergies when ordering. Most of our soups contain crayfish and some dishes contain peanuts.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-brand-dark mb-2">What are party trays?</h3>
              <p className="text-gray-600">
                Party trays serve 10-15 people and are perfect for events and gatherings. Available for most main dishes.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-brand-dark mb-2">How much notice do you need?</h3>
              <p className="text-gray-600">
                For single orders: 24 hours. For catering and party trays: 48-72 hours notice is appreciated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Order?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Place your order now for delivery or collection
          </p>
          <Link
            href="/order"
            className="inline-block bg-white text-brand-orange px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
}
