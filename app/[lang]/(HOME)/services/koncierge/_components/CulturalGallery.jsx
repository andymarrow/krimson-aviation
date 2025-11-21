"use client";
import { motion } from "framer-motion";

const images = [
    { src: "https://plus.unsplash.com/premium_photo-1670684184231-f0fa3a9fc37e?w=500&auto=format&fit=crop", alt: "Ethiopian Coffee" },
    { src: "https://plus.unsplash.com/premium_photo-1664298415497-60325b13618f?w=500&auto=format&fit=crop", alt: "Jazz Club" },
    { src: "https://images.unsplash.com/photo-1634029878815-1bb307302471?w=500&auto=format&fit=crop", alt: "Landscape" },
    { src: "https://plus.unsplash.com/premium_photo-1695297515151-b2af3a60008d?w=500&auto=format&fit=crop", alt: "Food" },
];

export default function CulturalGallery() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Curated Moments</h2>
            <p className="text-gray-500">City Excursions & Nightlife</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[300px]">
            {images.map((img, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                >
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
            ))}
        </div>
    </section>
  );
}