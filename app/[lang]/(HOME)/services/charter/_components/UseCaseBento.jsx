"use client";
import { motion } from "framer-motion";
import { Crown, Users, Package, HardHat } from "lucide-react";

const BentoCard = ({ title, desc, icon: Icon, image, className, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/10 shadow-lg ${className}`}
  >
    {/* Image Background */}
    <div className="absolute inset-0">
        <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
    </div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-white border border-white/20 group-hover:bg-krimson dark:group-hover:bg-amber-500 group-hover:text-white dark:group-hover:text-black transition-colors">
            <Icon size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            {desc}
        </p>
    </div>
  </motion.div>
);

export default function UseCaseBento() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
         <span className="text-krimson dark:text-amber-500 font-bold tracking-widest uppercase text-sm">Operational Capability</span>
         <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">Missions We Support</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-[900px] md:h-[600px]">
        
        {/* 1. VIP Charter (Large) */}
        <BentoCard 
            title="Private Charter"
            desc="Bespoke travel solutions for HNWIs and diplomats. Access thousands of airports unavailable to commercial liners."
            icon={Crown}
            image="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop"
            className="md:col-span-2 md:row-span-2"
            delay={0.1}
        />

        {/* 2. Group Travel (Tall) */}
        <BentoCard 
            title="Group & Sports"
            desc="Commercial airliner charters for sports teams, bands, and corporate retreats."
            icon={Users}
            image="https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=1000&auto=format&fit=crop"
            className="md:col-span-1 md:row-span-1"
            delay={0.2}
        />

        {/* 3. Cargo (Small Split) */}
        <div className="grid grid-cols-2 gap-4 md:col-span-1 md:row-span-1">
             {/* Cargo */}
             <BentoCard 
                title="Cargo"
                desc="Time-critical logistics."
                icon={Package}
                image="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop"
                className="col-span-1"
                delay={0.3}
            />
            {/* OGP/Mining */}
            <BentoCard 
                title="OGP & Mining"
                desc="Remote site access."
                icon={HardHat}
                image="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w=800&auto=format&fit=crop"
                className="col-span-1"
                delay={0.4}
            />
        </div>

      </div>
    </section>
  );
}