"use client";
import { motion } from "framer-motion";
import { User, Users, Building2, Crown, Check } from "lucide-react";

const PlanCard = ({ title, subtitle, icon: Icon, features, isElite = false, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 flex flex-col h-full ${
      isElite 
        ? "bg-neutral-900 dark:bg-black border-amber-500/50 shadow-2xl shadow-amber-900/20" 
        : "bg-white dark:bg-neutral-900 border-gray-100 dark:border-white/10 hover:border-red-100 dark:hover:border-red-900/30 shadow-sm hover:shadow-xl"
    }`}
  >
    {isElite && (
       <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-[2.5rem]">
          PREMIUM
       </div>
    )}

    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
        isElite ? "bg-gradient-to-br from-amber-400 to-amber-600 text-black" : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400"
    }`}>
      <Icon size={28} />
    </div>

    <h3 className={`text-2xl font-bold mb-2 ${isElite ? "text-white" : "text-gray-900 dark:text-white"}`}>
        {title}
    </h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 h-10">
        {subtitle}
    </p>

    <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
                <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                    isElite ? "bg-amber-500/20 text-amber-500" : "bg-red-50 dark:bg-red-900/20 text-red-500"
                }`}>
                    <Check size={10} strokeWidth={4} />
                </div>
                <span className={`text-sm ${isElite ? "text-gray-300" : "text-gray-600 dark:text-gray-300"}`}>
                    {feature}
                </span>
            </div>
        ))}
    </div>

    <button className={`w-full py-4 rounded-full font-bold text-sm transition-all ${
        isElite 
        ? "bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black" 
        : "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-red-700 dark:hover:bg-gray-200"
    }`}>
        Choose Plan
    </button>
  </motion.div>
);

export default function MembershipGrid() {
  return (
    <section id="memberships" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Peace of Mind</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
          Membership Plans
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Whether for your family or your corporation, we offer comprehensive coverage ensuring you are never alone in a crisis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PlanCard 
            title="Individual"
            subtitle="Complete protection for the solo traveler."
            icon={User}
            features={["Emergency Evacuation", "Ethiopia-wide Coverage", "Direct Hospital Admission"]}
            delay={0.1}
        />
        <PlanCard 
            title="Family"
            subtitle="Safety for you and up to 3 dependents."
            icon={Users}
            features={["Principal + 3 Dependents", "Pediatric Care Ready", "Priority Dispatch"]}
            delay={0.2}
        />
        <PlanCard 
            title="Corporate"
            subtitle="Duty of care for your workforce."
            icon={Building2}
            features={["Scalable Staff Coverage", "HR Dashboard Access", "Risk Assessment Reports"]}
            delay={0.3}
        />
        <PlanCard 
            title="Elite"
            subtitle="Wing-to-wing international service."
            icon={Crown}
            features={["Global Repatriation", "Johannesburg/Dubai Transfer", "Escort Assistance", "No Excess Fees"]}
            isElite={true}
            delay={0.4}
        />
      </div>
    </section>
  );
}