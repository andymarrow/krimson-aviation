"use client";
import React, { useRef, useEffect, useState } from "react";
// UPDATED ICONS: FaUsers for community, FaBullhorn for voices
import { FaArrowLeft, FaArrowRight, FaUsers, FaBullhorn } from 'react-icons/fa';

// UPDATED: Import the new memberQuotes data
import { memberQuotes } from '@/lib/constants';

// RENAMED the component
function MemberSpotlight() {
    const carouselRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // --- NO CHANGES TO SCROLL OR VISIBILITY LOGIC ---
    const scrollLeft = () => {
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.children[0]?.offsetWidth || 400;
            const scrollDistance = itemWidth + 24;
            carouselRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.children[0]?.offsetWidth || 400;
            const scrollDistance = itemWidth + 24;
            carouselRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        }
    };

    const updateArrowVisibility = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            const tolerance = 5;
            setCanScrollLeft(scrollLeft > tolerance);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - tolerance);
        }
    };

    // --- NO CHANGES TO AUTOPLAY LOGIC ---
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        const autoplayInterval = setInterval(() => {
            const { scrollLeft, scrollWidth, clientWidth } = carousel;
            const tolerance = 5;
            const itemWidth = carousel.children[0]?.offsetWidth || 400;
            const scrollDistance = itemWidth + 24;
            if (scrollLeft + clientWidth >= scrollWidth - tolerance) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: scrollDistance, behavior: 'smooth' });
            }
        }, 5000);
        return () => clearInterval(autoplayInterval);
    }, [memberQuotes]);

    // --- NO CHANGES TO ARROW VISIBILITY EFFECT ---
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        updateArrowVisibility();
        carousel.addEventListener('scroll', updateArrowVisibility);
        return () => {
            carousel.removeEventListener('scroll', updateArrowVisibility);
        };
    }, [memberQuotes]);

    return (
        <section className="py-16 lg:py-16">
            <div className="container mx-auto max-w-7xl relative">
              
                {/* Section Titles - UPDATED TEXTS AND ICONS */}
                <div className="text-center mb-12">
                  <p className="flex items-center justify-center text-md font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2">
                     <FaUsers className="h-4 w-4 mr-2" />
                     Member Spotlight
                     <FaBullhorn className="h-4 w-4 ml-2" />
                  </p>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
                    Voices From Our Community
                  </h2>
                </div>

                <div className="relative">
                     {/* --- NO CHANGES TO ARROW BUTTONS --- */}
                    {canScrollLeft && (
                        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition opacity-80 hover:opacity-100" aria-label="Scroll left">
                           <FaArrowLeft className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                        </button>
                    )}

                    {/* Scrollable Carousel Content - UPDATED to map 'memberQuotes' */}
                    <div ref={carouselRef} className="flex overflow-x-auto space-x-6 pb-4 px-4 sm:px-6 lg:px-8 hide-scrollbar">
                        {memberQuotes.map((quote) => (
                            <div key={quote.id} className="flex-shrink-0 w-full sm:w-96 lg:w-[400px] bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg h-full flex flex-col">
                                 
                                {/* REMOVED: Star ratings were here */}

                                {/* Testimonial Text */}
                                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6 flex-grow">
                                    "{quote.testimonial}"
                                </p>

                                {/* Divider */}
                                <div className="w-16 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>

                                {/* Photo, Name, Role */}
                                <div className="flex items-center mt-auto">
                                    <img
                                        src={quote.photo}
                                        alt={`Photo of ${quote.name}`}
                                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white dark:border-gray-800"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {quote.name}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {quote.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                     {/* --- NO CHANGES TO ARROW BUTTONS --- */}
                     {canScrollRight && (
                        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition opacity-80 hover:opacity-100" aria-label="Scroll right">
                           <FaArrowRight className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                        </button>
                     )}
                </div>
            </div>
        </section>
    );
}

// RENAMED the export
export default MemberSpotlight;