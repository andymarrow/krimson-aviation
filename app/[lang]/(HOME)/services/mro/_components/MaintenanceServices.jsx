"use client";
import { motion } from "framer-motion";
import { Wrench, ClipboardCheck, Layers, Repeat, Hammer, RotateCw, Settings } from "lucide-react";

const ServiceCard = ({ title, desc, icon: Icon, image, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all h-[340px] flex flex-col justify-end p-8"
  >
    {/* Image Reveal */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
    </div>
    
    {/* Glass Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 backdrop-blur-[2px]" />

    {/* Content */}
    <div className="relative z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-white/5 text-amber-600 dark:text-amber-500 flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
            <Icon size={24} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-200 transition-colors leading-relaxed">
            {desc}
        </p>
    </div>
  </motion.div>
);

export default function MaintenanceServices() {
  const services = [
    {
      title: "Line Maintenance",
      desc: "Routine checks, troubleshooting, and defect rectification performed on the ramp to ensure fast turnaround times.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1662089330227-e8ce9a9ff934?w=500&auto=format&fit=crop"
    },
    {
      title: "Base Maintenance",
      desc: "Heavy maintenance checks (C & D checks) conducted in our partner hangars, ensuring structural integrity and compliance.",
      icon: Hammer,
      image: "https://images.unsplash.com/photo-1536520002442-39764a41e987?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "PBH Programs",
      desc: "Power-by-the-Hour support programs to stabilize maintenance costs and ensure predictable operational budgets.",
      icon: Repeat,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" // Charts/Finance
    },
    {
      title: "Interiors & Refurb",
      desc: "Leather restoration, carpet replacement, and cabin deep cleaning to maintain asset value and passenger comfort.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop" // Luxury Interior
    },
    {
      title: "Avionics Support",
      desc: "Troubleshooting and updates for cockpit systems, navigation equipment, and in-flight connectivity.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop" // Cockpit
    },
    {
      title: "Tech Records",
      desc: "Comprehensive CAMO support and technical record management to ensure asset value and regulatory compliance.",
      icon: ClipboardCheck,
      image: "https://images.unsplash.com/photo-1614872375964-9ee013fffbda?w=500&auto=format&fit=crop" // Documents
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Technical Services</span>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-3">Capabilities Overview</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
            <ServiceCard key={i} {...s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}