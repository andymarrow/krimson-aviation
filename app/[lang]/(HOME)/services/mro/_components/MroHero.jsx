"use client";
import { motion } from "framer-motion";
import { Wrench, Clock, Settings } from "lucide-react";
import Link from "next/link";

export default function MroHero() {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-12 md:pt-32 md:pb-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left: Content */}
      {/* Changed order: Text is order-1 (first) on mobile, lg:order-1 (left) on desktop */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 order-1"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full shadow-sm backdrop-blur-md mb-6 md:mb-8">
           <Settings size={14} className="text-amber-500 md:w-4 md:h-4" />
           <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-300">
              Technical Excellence
           </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
          Keep Your Fleet <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-krimson to-amber-600">
            Airworthy.
          </span>
        </h1>
        
        {/* Paragraph */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 md:mb-10 max-w-lg leading-relaxed">
          Comprehensive maintenance solutions for the unpredictable African operating environment. From line maintenance to AOG rescue, we minimize your downtime.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="px-8 py-4 bg-gray-900 hover:bg-krimson dark:bg-white dark:text-black dark:hover:bg-amber-500 text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-lg">
            <Wrench size={20} /> Schedule Service
          </Link>
          <Link href="#aog" className="px-8 py-4 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/30 rounded-full font-bold flex items-center justify-center gap-3 transition-all">
            <Clock size={20} /> AOG Support
          </Link>
        </div>
      </motion.div>

      {/* Right: Visual */}
      {/* Changed order: Image is order-2 (second) on mobile */}
      <div className="relative order-2 h-[400px] lg:h-[550px] w-full mt-8 lg:mt-0">
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 lg:border-[8px] border-white dark:border-neutral-800"
         >
             {/* Image: Jet Engine / Mechanic */}
             <img 
               src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop" 
               alt="Aircraft Maintenance Engineer" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
         </motion.div>

         {/* Floating Stats - Responsive Padding/Sizing */}
         <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex gap-3 md:gap-4">
            <div className="flex-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/20 shadow-lg text-center md:text-left">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">24hr</div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase font-bold">Response Time</div>
            </div>
            <div className="flex-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/20 shadow-lg text-center md:text-left">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">OEM</div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase font-bold">Certified Parts</div>
            </div>
         </div>
      </div>
    </section>
  );
}