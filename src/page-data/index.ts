
export interface MenuItem {
    name: string;
    description: string;
    price?: string;
    spiceLevel?: number;
    portions?: string;
    badge?: string;
    images: string[];
}

export interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
}

export const menuData: MenuCategory[] = [
    {
      id: 'rice-dish',
      title: 'Rice Dish',
      items: [
        {
          name: 'Jollof Rice',
          description: "The GOAT of West African cuisine. Smoky, rich, perfectly seasoned tomato rice that'll have you licking the plate.",
          price: 'From £8',
          spiceLevel: 2,
          portions: 'Single / Party Tray',
          badge: "🔥 Signature",
          images: ['1.jpg', '2.jpg', '3.jpg']
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
      id: 'soups-and-stew',
      title: 'Soups & Stew',
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
      ],
    },
    {
      id: 'smallchops',
      title: 'Small Chops & Apps',
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
      id: 'proteins',
      title: 'Proteins',
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
