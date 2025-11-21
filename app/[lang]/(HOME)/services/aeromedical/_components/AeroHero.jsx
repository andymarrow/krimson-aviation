"use client";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AeroHero() {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-12 md:pt-32 md:pb-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* LEFT: Text Content */}
      {/* Order-1 ensures text is first on mobile */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 order-1"
      >
        {/* Status Badge */}
        <div className="inline-flex flex-wrap items-center gap-2 md:gap-3 px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-red-100 dark:border-red-500/30 shadow-sm mb-6 md:mb-8">
             <span className="relative flex h-3 w-3 shrink-0">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
             </span>
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 whitespace-nowrap">
                Ops Center: Online
             </span>
             <span className="hidden sm:block w-px h-4 bg-gray-200 dark:bg-white/20 mx-1"></span>
             <span className="text-[10px] md:text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                Response Time: &lt; 60 mins
             </span>
        </div>

        {/* Responsive Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6">
          ICU-Level Care,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
            At 40,000 Feet.
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 md:mb-10 max-w-lg leading-relaxed">
          We turn logistics into lifelines. Whether it's a remote extraction in the Ethiopian highlands or a wing-to-wing transfer to Dubai, our medical flight team is ready.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-1">
            <Phone size={20} className="animate-pulse" /> 
            <span>Call Emergency</span>
          </button>
          <Link href="#memberships" className="px-8 py-4 bg-white hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 rounded-full font-bold flex items-center justify-center gap-3 transition-all">
            View Memberships <ArrowRight size={20} />
          </Link>
        </div>
        
        {/* Accreditation Logos (Small) */}
        <div className="mt-10 md:mt-12 flex items-center gap-6 opacity-60 grayscale">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Certified By:</p>
            <div className="h-6 w-16 bg-gray-300 dark:bg-white/30 rounded"></div> 
            <div className="h-6 w-16 bg-gray-300 dark:bg-white/30 rounded"></div> 
        </div>
      </motion.div>

      {/* RIGHT: Visual Composition */}
      <div className="relative order-2 h-[400px] lg:h-[600px] w-full mt-8 lg:mt-0">
         
         {/* Background Blob - Scaled for responsiveness */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] lg:w-[120%] h-[100%] lg:h-[120%] bg-gradient-to-tr from-red-100/50 to-transparent dark:from-red-900/20 rounded-full blur-[60px] lg:blur-[100px] pointer-events-none" />

         {/* Main Image Container */}
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 lg:border-[8px] border-white dark:border-neutral-800"
         >
             <img 
               src="https://plus.unsplash.com/premium_photo-1664303503818-a6fab2dcfd91?w=1000&auto=format&fit=crop" 
               alt="Air Ambulance Helicopter" 
               className="w-full h-full object-cover"
             />
             
             {/* Image Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
         </motion.div>

         {/* Floating Card 1: Heart Rate - STATIC */}
         {/* Mobile: Top Left (Inside) | Desktop: Top Left (Breaking Out) */}
         <div 
            className="absolute top-4 left-4 lg:top-12 lg:-left-8 bg-white dark:bg-neutral-900 p-3 lg:p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-3 lg:gap-4 max-w-[180px] lg:max-w-[220px]"
         >
             <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center shrink-0">
                 <Activity size={20} className="lg:w-6 lg:h-6" />
             </div>
             <div>
                 <p className="text-[10px] lg:text-xs text-gray-400 uppercase font-bold">Patient Status</p>
                 <p className="text-xs lg:text-base font-bold text-gray-900 dark:text-white">Stable / En-route</p>
             </div>
         </div>

         {/* Floating Card 2: Team Status - STATIC */}
         {/* Mobile: Bottom Right (Inside) | Desktop: Bottom Right (Breaking Out) */}
         <div 
            className="absolute bottom-4 right-4 lg:bottom-16 lg:-right-4 bg-white dark:bg-neutral-900 p-3 lg:p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-3 lg:gap-4 max-w-[200px] lg:max-w-none"
         >
             <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0">
                 <ShieldCheck size={20} className="lg:w-6 lg:h-6" />
             </div>
             <div>
                 <p className="text-[10px] lg:text-xs text-gray-400 uppercase font-bold">Medical Team</p>
                 <p className="text-xs lg:text-base font-bold text-gray-900 dark:text-white">ICU Doctor Onboard</p>
             </div>
         </div>

      </div>
    </section>
  );
}