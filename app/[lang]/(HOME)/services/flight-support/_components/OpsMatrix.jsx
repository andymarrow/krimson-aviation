"use client";
import { motion } from "framer-motion";
import { FileCheck, Truck, Utensils, Globe2, ShieldAlert, Coins } from "lucide-react";

const MatrixCard = ({ title, desc, icon: Icon, image, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all h-[320px] flex flex-col justify-end p-8"
  >
    {/* 1. Hover Image Reveal (Full Color, No Tint) */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0">
        <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
    </div>

    {/* 2. Glassmorphism Gradient Overlay (Only visible on hover) 
        This provides the "Glass" background for the text so it's readable over the image
    */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 backdrop-blur-[2px]" />

    {/* 3. Content Layer */}
    <div className="relative z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        {/* Icon Circle */}
        <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-white/5 text-krimson dark:text-amber-500 flex items-center justify-center mb-4 
          group-hover:bg-white/20 group-hover:backdrop-blur-md group-hover:text-white group-hover:border-white/20 border border-transparent transition-all duration-300">
            <Icon size={24} />
        </div>
        
        {/* Text */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-white transition-colors duration-300">
            {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
            {desc}
        </p>
    </div>
  </motion.div>
);

export default function OpsMatrix() {
  const services = [
    {
        title: "Permits & Clearances",
        desc: "Overflight and landing permits secured directly with CAAs. We handle short-notice diplomatic clearances.",
        icon: FileCheck,
        image: "https://plus.unsplash.com/premium_photo-1679758630055-99ebb2df7d77?w=800&auto=format&fit=crop" 
    },
    {
        title: "Ground Handling",
        desc: "Coordination of ramp services, marshaling, and baggage handling through our vetted local network.",
        icon: Truck,
        image: "https://plus.unsplash.com/premium_photo-1661515909319-a49e895d2d01?w=800&auto=format&fit=crop"
    },
    {
        title: "Fuel Services",
        desc: "Competitive rates and credit facilities at 3,000+ locations. Jet-A1 and Avgas arranged instantly.",
        icon: Coins,
        image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Flight Planning",
        desc: "Optimized routing for weather, cost, and safety. Integrated with PPS and JetPlanner.",
        icon: Globe2,
        image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop" 
    },
    {
        title: "VIP Catering",
        desc: "Sourcing the finest local and international cuisine, delivered fresh to the aircraft steps.",
        icon: Utensils,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" 
    },
    {
        title: "Special Missions",
        desc: "Support for ambulance flights, military stopovers, and diplomatic delegations requiring high security.",
        icon: ShieldAlert,
        image: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w=800&auto=format&fit=crop" 
    }
  ];

  return (
    <section id="matrix" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <span className="text-krimson dark:text-amber-500 font-bold tracking-widest uppercase text-sm">Comprehensive Support</span>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-3">Operational Capabilities</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
            <MatrixCard key={i} {...s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}