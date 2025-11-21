"use client";
import { motion } from "framer-motion";
import { Plane, HeartHandshake, Globe } from "lucide-react";

const ServiceRow = ({ title, desc, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group flex items-start gap-6 p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/5 hover:border-red-100 dark:hover:border-red-900/30 transition-all"
  >
    <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-900/10 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default function AdHocServices() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-neutral-950/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Not a Member? <br/>
            <span className="text-gray-500">We Still Have You Covered.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
             Krimson provides Ad-Hoc emergency evacuation services for non-members. We handle the complex administration, overflight permits, and hospital admittance so you can focus on your loved ones.
          </p>
          
          <div className="relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-xl">
             <img 
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000&auto=format&fit=crop" 
                alt="Doctor holding hand" 
                className="w-full h-full object-cover"
             />
          </div>
        </div>

        <div className="flex flex-col gap-4">
           <ServiceRow 
             title="Ad-Hoc Medevac"
             desc="Immediate emergency evacuation for non-members from anywhere in Ethiopia to the principal member's point of care."
             icon={Plane}
             delay={0.1}
           />
           <ServiceRow 
             title="Medical Escort"
             desc="Assisted travel on commercial aircraft. We provide flight doctors or nurses to accompany stable patients."
             icon={HeartHandshake}
             delay={0.2}
           />
           <ServiceRow 
             title="International Repatriation"
             desc="Coordination of wing-to-wing transfers from Ethiopia to home countries or specialized medical centers abroad."
             icon={Globe}
             delay={0.3}
           />
        </div>

      </div>
    </section>
  );
}