'use client';
import { useState } from "react";
import { SanityDocument } from "next-sanity";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity";

export default function MenuBuilder({ item, itemName }: {
    item: SanityDocument,
    itemName: string
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const goToPrevious = () => {
      setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
    };
    

    return(
        <>
            <div className="relative flex items-center justify-center p-4 bg-linear-to-br from-brand-orange/20 to-warm-yellow/20 rounded-xl overflow-hidden mb-3 border-2 border-brand-orange/30">
                <div className="aspect-4/3">
                    <Image src={urlFor(item.images[currentIndex]).url()} alt={itemName} width={150} height={70} className="object-cover" />
                </div>
        
                {item.images.length > 1 && (
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
                    </>
                )}
            </div>
            
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-black text-brand-dark pr-2">{item.name}</h3>
                <div className="flex gap-2 shrink-0">
                    {item.sizes_and_price.map((foodsize: {
                        size: string,
                        price: string
                    }, i: number) => (
                        <button
                        key={i}
                        className={`text-brand-orange font-black text-xl rounded-sm p-1 cursor-pointer hover:bg-gray-200 ${
                          currentItemIndex === i ? 'bg-gray-200' : ''
                        }`}
                        onClick={() => setCurrentItemIndex(i)}
                        >
                            {foodsize.size}
                        </button>
                    ))}
                </div>
            </div>

            <p className="text-gray-700 mb-4 text-sm leading-relaxed">{item.description}</p>

            <div className="flex justify-between items-end">
                <span className="text-brand-orange font-black text-xl">From £{item.sizes_and_price[currentItemIndex].price}</span>
                <button
                title="Add item"
                className="px-4 py-1 text-sm text-gray-500 border-2 border-brand-orange/70 rounded-lg hover:bg-brand-orange/90 hover:text-white cursor-pointer transition-all duration-100"
                >
                    Add
                </button>
            </div>
        </>
    );
}
