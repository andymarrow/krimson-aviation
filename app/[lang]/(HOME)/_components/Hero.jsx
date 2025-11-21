"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
      
      {/* Left: Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 md:space-y-8 z-10 order-1"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full shadow-sm backdrop-blur-md transition-colors">
          <span className="w-2 h-2 bg-krimson dark:bg-amber-500 rounded-full animate-pulse"></span>
          <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-200">Premier African Aviation Network</span>
        </div>

        {/* Heading - Responsive Text Sizes */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
          The Gold Standard <br />
          in <span className="text-krimson dark:text-amber-500 relative">
             African Sky
             {/* Underline graphic */}
             <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-krimson/20 dark:text-amber-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
             </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
          From flight support to luxury concierge, Krimson bridges the gap between international standards and African execution.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="px-8 py-4 bg-krimson hover:bg-krimson-light dark:bg-white dark:text-black dark:hover:bg-amber-400 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-krimson/20 dark:shadow-none">
            Request Support <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/fleet" className="px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 dark:bg-transparent dark:border-white/20 dark:text-white dark:hover:bg-white/10 text-gray-900 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
            Explore Fleet
          </Link>
        </div>
      </motion.div>

      {/* Right: Visuals - Now visible on Mobile */}
      <div className="relative h-[350px] md:h-[500px] w-full order-2 lg:mt-0 mt-4">
        
        {/* Main Image Blob */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          // Mobile: Width 100%, Height 100%. Desktop: Width 90%, Offset
          className="absolute inset-0 lg:top-0 lg:right-0 lg:w-[90%] lg:h-[90%] bg-gray-200 dark:bg-gray-800 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-gray-900/5 dark:ring-white/10"
        >
            <img 
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop" 
              alt="Private Jet" 
              className="w-full h-full object-cover opacity-90 dark:opacity-80"
            />
        </motion.div>

        {/* Floating Card 1: Status - Responsive Position */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          // Mobile: Bottom Left, slightly smaller padding. Desktop: Original position.
          className="absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-white/50 dark:border-white/10 max-w-[180px] md:max-w-[220px]"
        >
          <div className="flex items-center gap-3 mb-1 md:mb-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
              <Plane size={16} className="md:w-5 md:h-5" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">Current Ops</p>
              <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white">24 Active Flights</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}