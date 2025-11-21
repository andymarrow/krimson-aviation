"use client";
import { motion } from "framer-motion";

const FleetCard = ({ type, range, pax, image, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group cursor-pointer"
  >
    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
        <img 
            src={image} 
            alt={type} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{type}</h3>
    <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>{range} Range</span>
        <span className="w-px h-4 bg-gray-300 dark:bg-white/20"></span>
        <span>{pax} Pax</span>
    </div>
  </motion.div>
);

export default function FleetCategory() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-neutral-900 border-y border-gray-100 dark:border-white/5">
       <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Access Fleet</h2>
             <p className="text-gray-500 mt-4">From cost-effective light jets to transcontinental flagships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {/* 1. Light Jets - Updated Image */}
             <FleetCard 
               type="Light Jets"
               range="3-4 Hours"
               pax="4-7"
               image="https://images.unsplash.com/photo-1616620418653-c2f1603f507d?w=500&auto=format&fit=crop" 
               delay={0.1}
             />
             
             {/* 2. Mid-Size Jets - Kept as requested */}
             <FleetCard 
               type="Mid-Size Jets"
               range="5-7 Hours"
               pax="7-9"
               image="https://images.unsplash.com/photo-1625513123245-fcb02d69ad12?w=500&auto=format&fit=crop"
               delay={0.2}
             />
             
             {/* 3. Heavy & Ultra-Long - Updated Image */}
             <FleetCard 
               type="Heavy & Ultra-Long"
               range="12+ Hours"
               pax="12-16"
               image="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop"
               delay={0.3}
             />
          </div>
       </div>
    </section>
  );
}