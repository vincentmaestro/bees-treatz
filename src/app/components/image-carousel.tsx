'use client';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ImageCarousel({ images, itemName }: { images: string[]; itemName: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <div className="relative flex items-center justify-center p-4 bg-linear-to-br from-brand-orange/20 to-warm-yellow/20 rounded-xl overflow-hidden mb-3 border-2 border-brand-orange/30">
        <div className="w-50">
          <Image src={`/${images[currentIndex]}`} alt={itemName} width={150} height={70} className="w-full" />
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
          </>
        )}
      </div>
    );
  }
