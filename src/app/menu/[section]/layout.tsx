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
    )
}
