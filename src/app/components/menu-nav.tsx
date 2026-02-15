'use client';
import { menuData } from "@/page-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuNav() {
    const pathname = usePathname();

    return(
        <section className="bg-white border-b-2 border-gray-200 sticky top-20 z-40 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center gap-4 overflow-x-auto">
                    <span className="text-sm font-bold text-gray-700 shrink-0">Filter by:</span>
                    <div className="flex gap-2">
                    {menuData.map((category) => (
                        <Link
                        href={`/menu/${category.id}`}
                        key={category.id}
                        className={`px-4 py-2 rounded-lg font-bold text-sm transition-all shrink-0 ${
                            pathname === `/menu/${category.id}`
                            ? 'bg-linear-to-r from-brand-red to-brand-orange text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        >
                        {category.title}
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
