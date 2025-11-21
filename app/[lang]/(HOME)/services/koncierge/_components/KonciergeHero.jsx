"use client";
import { motion } from "framer-motion";
import { Star, Globe } from "lucide-react";

export default function KonciergeHero() {
  
  const greetings = [
    "Selam", "Welcome", "Bienvenue", 
    "Dobro Pozhalovat", "Yokoso", "Marhaba"
  ];

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2500&auto=format&fit=crop" 
          alt="Luxury Hotel Lobby Ethiopia" 
          className="w-full h-full object-cover"
        />
        
        {/* Adaptive Gradient Overlay: 
            Ensures header is visible (Light Mode) and text pops (Dark Mode) 
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/90 via-white/40 to-stone-50 dark:from-black/80 dark:via-black/50 dark:to-neutral-950" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 md:mt-20">
        
        {/* Redesigned Greetings: Glass Pills instead of text with dots */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10"
        >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white mr-2 shadow-lg">
                <Globe size={14} />
            </div>
            {greetings.map((word, i) => (
                <span 
                    key={word}
                    className="px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider bg-white/60 dark:bg-black/40 border border-white/40 dark:border-white/10 text-gray-800 dark:text-gray-200 backdrop-blur-sm shadow-sm"
                >
                    {word}
                </span>
            ))}
        </motion.div>

        {/* Main Heading - Responsive Scaling */}
        <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
        >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-200 dark:to-amber-500">Un-Google-able</span> <br/>
            Experience.
        </motion.h1>

        {/* Description */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base font-extrabold sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-2"
        >
            Krimson Koncierge defines the distinct nuances of Ethiopian hospitality. 
            We curate moments that traditional tour operators simply cannot access.
        </motion.p>

        {/* Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 md:mt-12 inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white text-xs md:text-sm font-bold shadow-lg"
        >
            <Star size={16} className="text-amber-500 fill-amber-500" />
            <span>Voted Best VIP Service, East Africa</span>
        </motion.div>
      </div>
    </section>
  );
}