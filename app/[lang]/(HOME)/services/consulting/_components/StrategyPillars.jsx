"use client";
import { motion } from "framer-motion";
import { Plane, FileText, Target, GraduationCap } from "lucide-react";

const PillarCard = ({ title, desc, icon: Icon, delay, className }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`p-8 rounded-[2.5rem] border transition-all duration-300 group hover:shadow-xl ${className}`}
  >
    <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-krimson dark:group-hover:bg-amber-500 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 text-gray-600 dark:text-gray-300">
        <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-krimson dark:group-hover:text-amber-500 transition-colors">
        {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {desc}
    </p>
  </motion.div>
);

export default function StrategyPillars() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-krimson dark:text-amber-500 font-bold tracking-widest uppercase text-sm">Our Expertise</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
           Comprehensive Advisory
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. Aircraft Acquisition (Light BG) */}
        <PillarCard 
            title="Aircraft Acquisition"
            desc="From identifying the right asset to negotiating the purchase and handling import registration. We ensure you buy the right plane at the right price."
            icon={Plane}
            delay={0.1}
            className="bg-white dark:bg-neutral-900 border-gray-100 dark:border-white/10"
        />

        {/* 2. Commercial Strategy (Dark/Accent BG) */}
        <PillarCard 
            title="Commercial Strategy"
            desc="Market entry studies, route planning, and feasibility analysis for new airlines. We mobilize organizations to drive tangible bottom-line results."
            icon={Target}
            delay={0.2}
            className="bg-gray-50 dark:bg-white/5 border-transparent"
        />

        {/* 3. Operational Excellence */}
        <PillarCard 
            title="Operational Excellence"
            desc="Manual preparation, safety management systems (SMS), and regulatory compliance auditing to meet ECAA and international standards."
            icon={FileText}
            delay={0.3}
            className="bg-gray-50 dark:bg-white/5 border-transparent"
        />

        {/* 4. Training & Capacity */}
        <PillarCard 
            title="Training & Capacity"
            desc="Developing the human capital required for aviation. From crew training coordination to management workshops."
            icon={GraduationCap}
            delay={0.4}
            className="bg-white dark:bg-neutral-900 border-gray-100 dark:border-white/10"
        />

      </div>
    </section>
  );
}