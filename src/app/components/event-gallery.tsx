'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { SanityDocument } from "next-sanity";
import { urlFor } from '@/sanity';

export default function GallerySection({ event, index }: {
    event: SanityDocument,
    index: number
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const goToPrevious = () => {
      setCurrentImageIndex((prev) => 
        prev === 0 ? event.images.length - 1 : prev - 1
      );
    };
  
    const goToNext = () => {
      setCurrentImageIndex((prev) => 
        prev === event.images.length - 1 ? 0 : prev + 1
      );
    };
  
    return (
      <div className={`${index % 2 === 0 ? 'bg-white' : 'bg-linear-to-br from-amber-50 to-orange-50'} rounded-3xl p-8 lg:p-12 border-2 border-brand-orange/20`}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">
              {event.name}
            </h2>
            {event.description && (
              <p className="text-lg text-gray-700 leading-relaxed">
                {event.description}
              </p>
            )}
            <div className="mt-6 inline-flex items-center gap-2 bg-brand-orange/10 px-4 py-2 rounded-lg">
              <span className="text-sm font-bold text-brand-dark">
                {event.images.length} {event.images.length === 1 ? 'Photo' : 'Photos'}
              </span>
            </div>
          </div>
  
          <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
            <div className="relative aspect-4/3 bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src={urlFor(event.images[currentImageIndex]).url()}
                alt={`${event.name} - Photo ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
  
              {event.images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all z-10 group"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 text-brand-dark group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all z-10 group"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 text-brand-dark group-hover:scale-110 transition-transform" />
                  </button>
  
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {event.images.map((_: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`transition-all rounded-full ${
                          idx === currentImageIndex 
                            ? 'w-8 h-3 bg-brand-orange' 
                            : 'w-3 h-3 bg-white/60 hover:bg-white/90'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
  
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-bold">
                    {currentImageIndex + 1} / {event.images.length}
                  </div>
                </>
              )}
            </div>
  
            {event.images.length > 1 && (
              <div className="hidden lg:flex gap-2 mt-4 overflow-x-auto pb-2">
                {event.images.map((image: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex 
                        ? 'border-brand-orange scale-105' 
                        : 'border-gray-300 hover:border-brand-orange/50 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image 
                      src={urlFor(image).url()}
                      alt={`Thumbnail ${idx + 1}`}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
}
  