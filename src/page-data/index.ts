
export const navMenu = [
  { label: 'Canapés', href: 'canapes' },
  { label: 'Cocktail and Mocktails', href: 'cocktail-mocktails' },
  { label: 'Others', href: 'other-meals' },
  { label: 'Pasta Dishes', href: 'pasta-dishes' },
  { label: 'Pepper Soup', href: 'peppersoup' },
  { label: 'proteins', href: 'proteins' },
  { label: 'Rice Dish', href: 'rice-dish' },
  { label: 'Small Chops', href: 'small-chops' },
  { label: 'Soups And Stews', href: 'soups-and-stew' }
];

export interface MenuItem {
  name: string;
  description: string;
  foodSizes: {
    size: string;
    price: string
  }[];
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
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          portions: 'Single / Party Tray',
          badge: "🔥 Signature",
          images: ['1.jpg', '2.jpg', '3.jpg']
        },
        {
          name: 'Fried Rice',
          description: "Nigerian-style with mixed veggies and your protein of choice. Not your Chinese takeaway rice—this one's got flavor!",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          portions: 'Single / Party Tray',
          images: ['fried-rice-1.jpg']
        },
        {
          name: 'Coconut Rice',
          description: "Fragrant, creamy rice cooked in coconut milk. Sweet, savory, absolutely addictive.",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          portions: 'Single / Party Tray',
          images: ['coconut-rice-1.jpg', 'coconut-rice-2.jpg']
        },
        {
          name: 'Native Rice',
          description: "Traditional palm oil rice with fresh fish. This one hits different—pure authentic vibes.",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
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
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          badge: "❤️ Comfort Food",
          images: ['egusi-1.jpg', 'egusi-2.jpg']
        },
        {
          name: 'Ogbono Soup',
          description: "Smooth, draw soup made from African mango seeds. Perfect for swallow lovers.",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          images: ['ogbono-1.jpg']
        },
        {
          name: 'Okra Soup',
          description: "Fresh okra with assorted meat and seafood in palm oil base. Sticky, savory, satisfying.",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          images: ['okra-1.jpg', 'okra-2.jpg']
        },
        {
          name: 'Efo Riro',
          description: "Yoruba-style spinach soup with assorted meat and locust beans. Green, mean, and tasty.",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          images: ['efo-1.jpg']
        },
        {
          name: 'Banga Soup',
          description: "Delta-style palm nut soup with catfish. If you know, you KNOW. 🔥",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          badge: "🌶️ Spicy",
          images: ['banga-1.jpg', 'banga-2.jpg']
        },
        {
          name: 'Pounded Yam',
          description: 'Smooth, stretchy swallow perfection',
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          images: ['pounded-yam-1.jpg']
        },
        {
          name: 'Eba (Garri)',
          description: 'Classic cassava swallow',
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          images: ['eba-1.jpg']
        },
      ],
    },
    {
      id: 'small-chops',
      title: 'Small Chops & Apps',
      items: [
        {
          name: 'Small Chops Platter',
          description: "THE party starter: samosa, spring rolls, puff puff, chicken, plantain. Disappears in 5 minutes, guaranteed.",
          foodSizes: [
            { size: 'sm', price: 'From £40' },
            { size: 'md', price: 'From £40' },
            { size: 'L', price: 'From £60' },
            { size: 'xL', price: 'From £80' }
          ],
          portions: 'Party Packs Available',
          badge: "🎉 Party Fave",
          images: ['small-chops-1.jpg', 'small-chops-2.jpg', 'small-chops-3.jpg']
        },
        {
          name: 'Puff Puff',
          description: "Sweet, fluffy Nigerian doughnuts. Dangerously addictive.",
          foodSizes: [
            { size: 'sm', price: 'From £40' },
            { size: 'md', price: 'From £40' },
            { size: 'L', price: 'From £60' },
            { size: 'xL', price: 'From £80' }
          ],
          images: ['puff-puff-1.jpg', 'puff-puff-2.jpg']
        },
        {
          name: 'Samosa',
          description: "Crispy pastry filled with spiced beef or veggies",
          foodSizes: [
            { size: 'sm', price: 'From £40' },
            { size: 'md', price: 'From £40' },
            { size: 'L', price: 'From £60' },
            { size: 'xL', price: 'From £80' }
          ],
          images: ['samosa-1.jpg']
        },
        {
          name: 'Spring Rolls',
          description: "Crispy vegetable spring rolls",
          foodSizes: [
            { size: 'sm', price: 'From £40' },
            { size: 'md', price: 'From £40' },
            { size: 'L', price: 'From £60' },
            { size: 'xL', price: 'From £80' }
          ],
          images: ['spring-rolls-1.jpg']
        },
        {
          name: 'Peppered Chicken',
          description: "Grilled chicken in spicy Nigerian pepper sauce. For those who like it HOT.",
          foodSizes: [
            { size: 'sm', price: 'From £40' },
            { size: 'md', price: 'From £40' },
            { size: 'L', price: 'From £60' },
            { size: 'xL', price: 'From £80' }
          ],
          images: ['peppered-chicken-1.jpg', 'peppered-chicken-2.jpg']
        },
        {
          name: 'Peppered Gizzard',
          description: "Tender gizzards in fiery pepper sauce. Not for the faint of heart.",
          foodSizes: [
            { size: 'sm', price: 'From £40' },
            { size: 'md', price: 'From £40' },
            { size: 'L', price: 'From £60' },
            { size: 'xL', price: 'From £80' }
          ],
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
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          images: ['plantain-1.jpg']
        },
        {
          name: 'Moi Moi',
          description: "Steamed bean pudding with eggs and fish. Pure comfort.",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          images: ['moi-moi-1.jpg', 'moi-moi-2.jpg']
        },
        {
          name: 'Asun',
          description: "Spicy grilled goat meat. The owambe MVP.",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          badge: "🔥 Street Fave",
          images: ['asun-1.jpg', 'asun-2.jpg', 'asun-3.jpg']
        },
        {
          name: 'Grilled Fish',
          description: "Whole tilapia or mackerel, grilled to perfection",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          images: ['grilled-fish-1.jpg']
        },
        {
          name: 'Beef Stew',
          description: "Rich tomato stew with tender beef chunks",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          images: ['beef-stew-1.jpg']
        },
        {
          name: 'Chicken Stew',
          description: "Savory tomato stew with succulent chicken",
          foodSizes: [
            { size: '2L', price: 'From £40' },
            { size: '4L', price: 'From £80' },
            { size: '6L', price: 'From £120' }
          ],
          images: ['chicken-stew-1.jpg', 'chicken-stew-2.jpg']
        },
      ],
    },
];
