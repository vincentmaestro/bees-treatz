'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Flame, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price?: string;
  spiceLevel?: number;
  portions?: string;
  badge?: string;
  images: string[];
}

interface MenuCategory {
  id: string;
  title: string;
  emoji: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'mains',
    title: 'Main Dishes',
    emoji: '🍛',
    items: [
      {
        name: 'Jollof Rice',
        description: "The GOAT of West African cuisine. Smoky, rich, perfectly seasoned tomato rice that'll have you licking the plate.",
        price: 'From £8',
        spiceLevel: 2,
        portions: 'Single / Party Tray',
        badge: "🔥 Signature",
        images: ['jollof-1.jpg', 'jollof-2.jpg', 'jollof-3.jpg']
      },
      {
        name: 'Fried Rice',
        description: "Nigerian-style with mixed veggies and your protein of choice. Not your Chinese takeaway rice—this one's got flavor!",
        price: 'From £8',
        spiceLevel: 1,
        portions: 'Single / Party Tray',
        images: ['fried-rice-1.jpg']
      },
      {
        name: 'Coconut Rice',
        description: "Fragrant, creamy rice cooked in coconut milk. Sweet, savory, absolutely addictive.",
        price: 'From £8',
        spiceLevel: 1,
        portions: 'Single / Party Tray',
        images: ['coconut-rice-1.jpg', 'coconut-rice-2.jpg']
      },
      {
        name: 'Native Rice',
        description: "Traditional palm oil rice with fresh fish. This one hits different—pure authentic vibes.",
        price: 'From £9',
        spiceLevel: 2,
        portions: 'Single / Party Tray',
        images: ['native-rice-1.jpg']
      },
    ],
  },
  {
    id: 'soups',
    title: 'Soups & Swallows',
    emoji: '🥘',
    items: [
      {
        name: 'Egusi Soup',
        description: "Rich melon seed soup with assorted meat, fish, and leafy greens. The comfort food champion. (Contains crayfish)",
        price: 'From £10',
        spiceLevel: 2,
        badge: "❤️ Comfort Food",
        images: ['egusi-1.jpg', 'egusi-2.jpg']
      },
      {
        name: 'Ogbono Soup',
        description: "Smooth, draw soup made from African mango seeds. Perfect for swallow lovers.",
        price: 'From £10',
        spiceLevel: 2,
        images: ['ogbono-1.jpg']
      },
      {
        name: 'Okra Soup',
        description: "Fresh okra with assorted meat and seafood in palm oil base. Sticky, savory, satisfying.",
        price: 'From £10',
        spiceLevel: 2,
        images: ['okra-1.jpg', 'okra-2.jpg']
      },
      {
        name: 'Efo Riro',
        description: "Yoruba-style spinach soup with assorted meat and locust beans. Green, mean, and tasty.",
        price: 'From £10',
        spiceLevel: 2,
        images: ['efo-1.jpg']
      },
      {
        name: 'Banga Soup',
        description: "Delta-style palm nut soup with catfish. If you know, you KNOW. 🔥",
        price: 'From £12',
        spiceLevel: 3,
        badge: "🌶️ Spicy",
        images: ['banga-1.jpg', 'banga-2.jpg']
      },
      {
        name: 'Pounded Yam',
        description: 'Smooth, stretchy swallow perfection',
        price: '£4',
        images: ['pounded-yam-1.jpg']
      },
      {
        name: 'Eba (Garri)',
        description: 'Classic cassava swallow',
        price: '£3',
        images: ['eba-1.jpg']
      },
      {
        name: 'Fufu',
        description: 'Soft cassava and plantain swallow',
        price: '£4',
        images: ['fufu-1.jpg']
      },
    ],
  },
  {
    id: 'smallchops',
    title: 'Small Chops & Apps',
    emoji: '🍢',
    items: [
      {
        name: 'Small Chops Platter',
        description: "THE party starter: samosa, spring rolls, puff puff, chicken, plantain. Disappears in 5 minutes, guaranteed.",
        price: 'From £25 (serves 10)',
        portions: 'Party Packs Available',
        badge: "🎉 Party Fave",
        images: ['small-chops-1.jpg', 'small-chops-2.jpg', 'small-chops-3.jpg']
      },
      {
        name: 'Puff Puff',
        description: "Sweet, fluffy Nigerian doughnuts. Dangerously addictive.",
        price: '£5 (12 pieces)',
        images: ['puff-puff-1.jpg', 'puff-puff-2.jpg']
      },
      {
        name: 'Samosa',
        description: "Crispy pastry filled with spiced beef or veggies",
        price: '£6 (10 pieces)',
        images: ['samosa-1.jpg']
      },
      {
        name: 'Spring Rolls',
        description: "Crispy vegetable spring rolls",
        price: '£6 (10 pieces)',
        images: ['spring-rolls-1.jpg']
      },
      {
        name: 'Peppered Chicken',
        description: "Grilled chicken in spicy Nigerian pepper sauce. For those who like it HOT.",
        price: 'From £8',
        spiceLevel: 3,
        images: ['peppered-chicken-1.jpg', 'peppered-chicken-2.jpg']
      },
      {
        name: 'Peppered Gizzard',
        description: "Tender gizzards in fiery pepper sauce. Not for the faint of heart.",
        price: 'From £10',
        spiceLevel: 3,
        images: ['peppered-gizzard-1.jpg']
      },
    ],
  },
  {
    id: 'sides',
    title: 'Proteins & Sides',
    emoji: '🍖',
    items: [
      {
        name: 'Fried Plantain',
        description: "Sweet ripe plantain, perfectly golden and caramelized",
        price: '£4',
        images: ['plantain-1.jpg']
      },
      {
        name: 'Moi Moi',
        description: "Steamed bean pudding with eggs and fish. Pure comfort.",
        price: '£5',
        images: ['moi-moi-1.jpg', 'moi-moi-2.jpg']
      },
      {
        name: 'Asun',
        description: "Spicy grilled goat meat. The owambe MVP.",
        price: 'From £12',
        spiceLevel: 3,
        badge: "🔥 Street Fave",
        images: ['asun-1.jpg', 'asun-2.jpg', 'asun-3.jpg']
      },
      {
        name: 'Grilled Fish',
        description: "Whole tilapia or mackerel, grilled to perfection",
        price: 'From £10',
        images: ['grilled-fish-1.jpg']
      },
      {
        name: 'Beef Stew',
        description: "Rich tomato stew with tender beef chunks",
        price: 'From £8',
        spiceLevel: 2,
        images: ['beef-stew-1.jpg']
      },
      {
        name: 'Chicken Stew',
        description: "Savory tomato stew with succulent chicken",
        price: 'From £8',
        spiceLevel: 2,
        images: ['chicken-stew-1.jpg', 'chicken-stew-2.jpg']
      },
    ],
  },
];

function ImageCarousel({ images, itemName }: { images: string[]; itemName: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-32 bg-linear-to-br from-brand-orange/20 to-warm-yellow/20 rounded-xl overflow-hidden mb-3 border-2 border-brand-orange/30">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="text-4xl mb-2">📸</div>
          <p className="text-xs text-gray-600 font-medium">Image {currentIndex + 1} of {images.length}</p>
          <p className="text-xs text-gray-500">{itemName}</p>
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-brand-dark" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-brand-dark" />
          </button>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-brand-orange w-4' : 'bg-white/60'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function MenuPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || menuData[0].id);
  
  useEffect(() => {
    if (categoryParam && categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const currentCategory = menuData.find(cat => cat.id === selectedCategory) || menuData[0];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    router.push(`/menu?category=${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-amber-50/30">
      <section className="relative bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-bold">Fresh • Authentic • Delicious</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black mb-4 drop-shadow-lg">Our Menu</h1>
          <p className="text-xl lg:text-2xl max-w-2xl mx-auto drop-shadow">
            All the hits, no misses. Made fresh daily with love and plenty of spice 🌶️
          </p>
        </div>
      </section>

      <section className="bg-white border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-6 justify-center items-center text-sm bg-amber-50 rounded-xl p-4">
            <div className="flex items-center gap-2 font-bold text-brand-dark">
              <Flame className="w-5 h-5 text-brand-red" />
              <span>Spice Level:</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg">
              <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span className="font-medium">Mild</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg">
              <div className="flex">
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500 -ml-1" />
              </div>
              <span className="font-medium">Medium</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg">
              <div className="flex">
                <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                <Flame className="w-4 h-4 text-red-500 fill-red-500 -ml-1" />
                <Flame className="w-4 h-4 text-red-500 fill-red-500 -ml-1" />
              </div>
              <span className="font-medium">Hot 🔥</span>
            </div>
            <div className="text-gray-600 italic">
              (We can adjust to your preference!)
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b-2 border-gray-200 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="text-sm font-bold text-gray-700 shrink-0">Filter by:</span>
            <div className="flex gap-2">
              {menuData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-all shrink-0 ${
                    selectedCategory === category.id
                      ? 'bg-linear-to-r from-brand-red to-brand-orange text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{category.emoji}</span>
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-brand-orange/20">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b-4 border-linear-to-r from-brand-red via-brand-orange to-warm-yellow">
              <span className="text-5xl">{currentCategory.emoji}</span>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-dark">
                {currentCategory.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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

      <section className="bg-linear-to-br from-amber-50 to-orange-50 py-16 border-t-4 border-brand-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-8 text-center">Got Questions? 🤔</h2>
          <div className="space-y-4">
            {[
              { q: "Can I adjust the spice level?", a: "Absolutely! Tell us how you like it—mild, medium, or fire. 🔥" },
              { q: "Do you cater for allergies?", a: "Yes! Let us know what to avoid. Note: most soups contain crayfish, some dishes have peanuts." },
              { q: "What are party trays?", a: "Big portions that feed 10-15 people. Perfect for owambe, parties, or when you're just really hungry. 😄" },
              { q: "How much notice do you need?", a: "Single orders: 24 hours. Party trays/catering: 48-72 hours so we can make it extra special!" },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-orange hover:shadow-lg transition-shadow">
                <h3 className="font-black text-brand-dark mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6 drop-shadow-lg">Ready to Order? 🎉</h2>
          <p className="text-xl text-white mb-8 drop-shadow">
            Your taste buds are waiting. Don{`'`}t keep them hanging!
          </p>
          <Link href="/order" className="inline-block bg-white text-brand-orange px-10 py-5 rounded-xl hover:bg-gray-100 transition-all font-black text-lg shadow-2xl">
            Order Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
