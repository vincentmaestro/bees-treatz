import MenuNavigation from "@/app/components/menu-navigation";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function MenuLayout({ children }: {
    children: React.ReactNode
}) {
    return(
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
                        All the hits, no misses. Made fresh daily with love and you at heart.
                    </p>
                </div>
            </section>

            <MenuNavigation />

            { children }

            <section className="bg-linear-to-br from-amber-50 to-orange-50 py-16 border-t-4 border-brand-orange">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-8 text-center">Got Questions? 🤔</h2>
                    <div className="space-y-4">
                        {[
                        { q: "Is cutlery included?", a: "Yes! Each order comes with cutlery included" },
                        { q: "Worried about Allergens?", a: "Every dispatch includes allergien information." },
                        { q: "How much notice do you need?", a: "Single orders: 24 hours. catering: 48-72 hours so we can make it extra special!" },
                        ].map((faq, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-orange hover:shadow-lg transition-shadow">
                            <h3 className="font-black text-brand-dark mb-2">{faq.q}</h3>
                            <p className="text-gray-700">{faq.a}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
