"use client";
import { motion } from "framer-motion";
import { Radio, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SupportHero() {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-12 md:pt-32 md:pb-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left: Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 order-1"
      >
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 dark:bg-white/10 border border-red-100 dark:border-white/10 mb-6 md:mb-8">
             <div className="relative flex h-2.5 w-2.5">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
             </div>
             <span className="text-xs font-bold uppercase tracking-widest text-krimson dark:text-white">
                24/7 OPS Center Active
             </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
          Precision in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-krimson to-red-500 dark:from-amber-400 dark:to-amber-600">
            Every Waypoint.
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 md:mb-10 max-w-lg leading-relaxed">
          We simplify African aviation. From overflight permits to ground handling, our centralized team ensures your trip is planned, cleared, and fueled on credit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="px-8 py-4 bg-krimson hover:bg-red-800 text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-krimson/20">
            <Radio size={20} /> Request Support
          </Link>
          <Link href="#matrix" className="px-8 py-4 bg-white hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 rounded-full font-bold flex items-center justify-center gap-3 transition-all">
            View Capabilities
          </Link>
        </div>
      </motion.div>

      {/* Right: Visual Composition */}
      <div className="relative order-2 h-[350px] md:h-[550px] w-full mt-8 lg:mt-0">
         
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white dark:border-neutral-800"
         >
             {/* Image: Flight Ops - Updated to higher res URL */}
             <img 
               src="https://plus.unsplash.com/premium_photo-1661963738711-1dd84271b7d8?w=1200&auto=format&fit=crop" 
               alt="Flight Operations Center" 
               className="w-full h-full object-cover"
             />
             {/* Overlay: Dark Krimson Fade */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/90 to-transparent opacity-90" />
         </motion.div>

         {/* Floating Card: Permit Status */}
         {/* Adjusted positioning: confined on mobile, breaking out on desktop */}
         <div className="absolute top-4 left-4 md:top-10 md:-left-10 bg-white dark:bg-neutral-900 p-4 md:p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-3 md:gap-4 max-w-[200px] md:max-w-[240px]">
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0">
                 <CheckCircle2 size={20} className="md:w-6 md:h-6" />
             </div>
             <div>
                 <p className="text-[10px] md:text-xs text-gray-400 uppercase font-bold">Clearance Status</p>
                 <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white">Permits Secured</p>
             </div>
         </div>

         {/* Floating Card: Route */}
         {/* Adjusted positioning: confined on mobile, breaking out on desktop */}
         <div className="absolute bottom-4 right-4 md:bottom-16 md:-right-6 bg-white dark:bg-neutral-900 p-4 md:p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10">
             <div className="flex items-center gap-3 md:gap-4 mb-1 md:mb-2">
                <span className="font-mono font-bold text-gray-900 dark:text-white text-sm md:text-base">LHR</span>
                <div className="flex-1 h-px bg-gray-300 w-8 md:w-12 relative">
                    {/* Dot is now Krimson */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-krimson rounded-full"></div>
                </div>
                <span className="font-mono font-bold text-gray-900 dark:text-white text-sm md:text-base">ADD</span>
             </div>
             <p className="text-[10px] md:text-xs text-gray-400 text-center">Flight Plan Filed</p>
         </div>

      </div>
    </section>
  );
}