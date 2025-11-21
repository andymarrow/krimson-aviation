"use client";
import { motion } from "framer-motion";
import { Plane, Calendar, Search } from "lucide-react";
import Link from "next/link";

export default function CharterHero() {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-12 md:pt-32 md:pb-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left: Text */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 order-1"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full shadow-sm backdrop-blur-md mb-6 md:mb-8">
           <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-krimson dark:text-amber-500">
              Global Reach
           </span>
           <span className="w-1 h-1 rounded-full bg-gray-400"></span>
           <span className="text-[10px] md:text-xs font-medium text-gray-500 dark:text-gray-300">
              Any Aircraft, Any Time
           </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
          Your Schedule, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-krimson to-red-500 dark:from-amber-400 dark:to-amber-600">
            Uncompromised.
          </span>
        </h1>
        
        {/* Paragraph */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 md:mb-10 max-w-lg leading-relaxed">
          Whether it’s a VIP diplomatic mission or complex cargo logistics for mining operations, Krimson delivers the right aircraft for the mission.
        </p>

        {/* Mock Search Widget (Cosmetic) */}
        <div className="bg-white dark:bg-neutral-900 p-2 rounded-3xl md:rounded-full shadow-xl border border-gray-100 dark:border-white/10 flex flex-col sm:flex-row gap-2 max-w-lg">
            <div className="flex-1 px-4 py-3 md:px-6 md:py-3 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-white/10">
                <p className="text-[10px] md:text-xs text-gray-400 uppercase font-bold mb-1">Where to?</p>
                <p className="text-sm md:text-base text-gray-900 dark:text-white font-medium truncate">Addis Ababa (ADD)</p>
            </div>
            <div className="flex-1 px-4 py-3 md:px-6 md:py-3">
                <p className="text-[10px] md:text-xs text-gray-400 uppercase font-bold mb-1">Aircraft Type</p>
                <p className="text-sm md:text-base text-gray-900 dark:text-white font-medium truncate">Heavy Jet</p>
            </div>
            <Link href="/contact" className="bg-gray-900 hover:bg-krimson dark:bg-white dark:text-black dark:hover:bg-amber-500 text-white rounded-full px-8 py-3 font-bold flex items-center justify-center transition-colors shadow-lg">
                <Search size={20} />
            </Link>
        </div>
      </motion.div>

      {/* Right: Visual */}
      <div className="relative h-[350px] md:h-[600px] w-full order-2 mt-8 lg:mt-0">
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white dark:border-neutral-800"
         >
             <img 
               src="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=1200&auto=format&fit=crop" 
               alt="Luxury Jet Interior" 
               className="w-full h-full object-cover"
             />
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
             
             {/* Floating Caption */}
             <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">Interior</p>
                <p className="text-xl md:text-2xl font-bold">Gulfstream G650ER</p>
             </div>
         </motion.div>
      </div>
    </section>
  );
}