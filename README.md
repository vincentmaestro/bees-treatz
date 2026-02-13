# Bee's Treatz - Nigerian Food Vending Website

A modern, mobile-first Next.js website for **Bee's Treatz**, featuring authentic Nigerian cuisine ordering, catering services, and event booking.

## 🎨 Design Features

- **Modern-minimalist** design with subtle street food vibes
- **Brand colors**: Golden Orange (#F4AF33) + Charcoal (#201E1E)
- Fully responsive mobile-first design
- Clean typography with Inter font
- Smooth transitions and hover effects

## 🚀 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📦 Project Structure

```
bees-treatz/
├── app/
│   ├── page.tsx              # Home page
│   ├── menu/page.tsx         # Full menu with categories
│   ├── order/page.tsx        # Order form + WhatsApp integration
│   ├── catering/page.tsx     # Catering packages + quote request
│   ├── about/page.tsx        # Brand story + testimonials
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Sticky nav with mobile menu
│   └── Footer.tsx            # Footer with links
└── public/                   # Static assets (add your images here!)
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Update WhatsApp Number

**IMPORTANT**: Replace the placeholder WhatsApp number in these files:

- `app/order/page.tsx` (lines 24 and 51)
- `app/catering/page.tsx` (line 34)

Change `'447000000000'` to your actual WhatsApp business number.

### 3. Add Your Images

Replace emoji placeholders with real food photos:

**Home page** (`app/page.tsx`):
- Hero section: High-quality jollof rice, stew, or platter shot
- Dish cards: Jollof rice, Egusi soup, Small chops

**About page** (`app/about/page.tsx`):
- Team or kitchen photo

Save images in the `public/` folder and update the code:

```tsx
// Replace this:
<div className="text-6xl mb-4">🍛</div>

// With this:
<Image 
  src="/jollof-hero.jpg" 
  alt="Jollof Rice" 
  width={800} 
  height={600}
  className="rounded-2xl"
/>
```

### 4. Customize Content

**Brand Information** (update in Footer.tsx):
- Business address
- Contact details
- Social media links

**Menu Items** (app/menu/page.tsx):
- Adjust prices
- Add/remove dishes
- Update descriptions
- Modify spice levels

**Catering Packages** (app/catering/page.tsx):
- Customize package pricing
- Adjust guest counts
- Modify inclusions

## 🎯 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## 📱 Key Pages

### Home (`/`)
- Eye-catching hero section
- Trust indicators
- Featured dishes
- Call-to-action sections

### Menu (`/menu`)
- Organized by category (Mains, Soups, Small Chops, Sides)
- Spice level indicators
- UK-friendly descriptions
- Portion information
- FAQ section

### Order (`/order`)
- WhatsApp quick order button
- Detailed order form
- Delivery/Collection options
- Automatic WhatsApp message formatting

### Catering (`/catering`)
- Event type showcase
- 3 sample packages (20, 50, 100+ guests)
- Custom quote request form
- Why choose us section

### About (`/about`)
- Brand story
- Core values
- What makes you different
- Customer testimonials

## 🎨 Customization Tips

### Colors

All brand colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    orange: '#F4AF33',  // Primary CTA color
    dark: '#201E1E',    // Headers, dark sections
  },
}
```

Use in components:
- `bg-brand-orange` / `text-brand-orange`
- `bg-brand-dark` / `text-brand-dark`

### Typography

The site uses **Inter** font (clean, modern, highly readable).

To change fonts, update `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

## 📋 Pre-Launch Checklist

- [ ] Update WhatsApp numbers in order/catering forms
- [ ] Replace emoji placeholders with real food photos
- [ ] Add your business address to footer
- [ ] Customize menu items and prices
- [ ] Update catering package pricing
- [ ] Add more customer testimonials (replace placeholder ones)
- [ ] Test WhatsApp integration on mobile
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

This is a standard Next.js app and can deploy to:
- Netlify
- Railway
- AWS Amplify
- Cloudflare Pages

## 💡 Future Enhancements

Consider adding:
- [ ] Online payment integration (Stripe/PayPal)
- [ ] Order tracking system
- [ ] Customer account system
- [ ] Instagram feed integration
- [ ] Blog/recipe section
- [ ] Loyalty program
- [ ] Email newsletter signup
- [ ] Multiple language support

## 📞 Support

For questions or customization help, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Built with ❤️ for Bee's Treatz**

Ready to bring authentic Nigerian flavors to the UK! 🇳🇬🇬🇧
