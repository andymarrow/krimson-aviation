"use client";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ConsultingHero() {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-12 md:pt-32 md:pb-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left: Content */}
      {/* Order-1 ensures text is top on mobile, left on desktop */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 order-1"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full shadow-sm backdrop-blur-md mb-6 md:mb-8">
           <Briefcase size={14} className="text-krimson dark:text-amber-500 md:w-4 md:h-4" />
           <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-300">
              Aviation Advisory
           </span>
        </div>

        {/* Responsive Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
          Building the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-krimson to-red-600 dark:from-amber-400 dark:to-amber-600">
            Airlines of Tomorrow.
          </span>
        </h1>
        
        {/* Responsive Paragraph */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 md:mb-10 max-w-lg leading-relaxed">
          We don't just fly planes; we help you build the business behind them. From aircraft acquisition to regulatory compliance, Krimson is the architect of African aviation success.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="px-8 py-4 bg-gray-900 hover:bg-krimson dark:bg-white dark:text-black dark:hover:bg-amber-500 text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-lg">
            Book a Consultation
          </Link>
          <Link href="#services" className="px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-full font-bold flex items-center justify-center gap-3 transition-all">
            Explore Services <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>

      {/* Right: Visual */}
      {/* Order-2 ensures image is bottom on mobile, right on desktop */}
      <div className="relative order-2 h-[400px] lg:h-[550px] w-full mt-8 lg:mt-0">
         {/* Main Image */}
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl"
         >
             {/* Image: Professional meeting/Architectural vibe */}
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop" 
               alt="Aviation Strategy Meeting" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/20" />
         </motion.div>

         {/* Floating Insight Card - Hidden on Mobile, Visible on Tablet+ */}
         <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden md:block absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-white dark:bg-neutral-900 p-5 lg:p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-white/10 max-w-[260px] lg:max-w-xs"
         >
             <div className="flex items-center justify-between mb-4">
                 <span className="text-xs font-bold text-gray-400 uppercase">Market Analysis</span>
                 <TrendingUp size={16} className="text-green-500" />
             </div>
             <div className="space-y-3">
                 <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full w-full overflow-hidden">
                     <div className="h-full bg-krimson w-[70%]" />
                 </div>
                 <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full w-full overflow-hidden">
                     <div className="h-full bg-amber-500 w-[45%]" />
                 </div>
                 <p className="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-300 mt-2">
                    "Data-driven insights for asset acquisition."
                 </p>
             </div>
         </motion.div>
      </div>
    </section>
  );
}