'use client';
import { MenuItem } from "@/page-data";
import { useState } from "react";

export default function ItemDetails({ item }: {
    item: MenuItem
}) {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    return(
        <>
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-black text-brand-dark pr-2">{item.name}</h3>
                <div className="flex gap-2 shrink-0">
                    {item.foodSizes.map((foodsize, i) => (
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
                <span className="text-brand-orange font-black text-xl">{item.foodSizes[currentItemIndex].price}</span>
                {item.portions && (
                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                    {item.portions}
                </span>
                )}
            </div>
        </>
    );
}
