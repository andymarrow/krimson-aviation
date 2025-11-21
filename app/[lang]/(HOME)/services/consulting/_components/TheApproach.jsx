"use client";
import { motion } from "framer-motion";

const Step = ({ num, title, text }) => (
    <div className="relative pl-12 md:pl-0">
        {/* Mobile Line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 md:hidden" />
        
        {/* Number Bubble */}
        <div className="absolute left-0 md:relative md:mb-6 w-8 h-8 md:w-12 md:h-12 rounded-full bg-krimson text-white dark:bg-amber-500 dark:text-black flex items-center justify-center font-bold text-sm md:text-lg z-10">
            {num}
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{text}</p>
    </div>
);

export default function TheApproach() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Intro Text */}
            <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    How We Mobilize Your Vision.
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    Our consulting methodology is rigorous yet adaptive. We don't offer cookie-cutter solutions; we immerse ourselves in your operational reality to find the "Gap" and close it.
                </p>
            </div>

            {/* Steps */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Step 
                    num="1" 
                    title="Diagnosis" 
                    text="We analyze your current positioning, regulatory standing, and market potential using proprietary data models." 
                />
                <Step 
                    num="2" 
                    title="Strategy" 
                    text="We craft a roadmap including fleet selection, route planning, and financial forecasting." 
                />
                <Step 
                    num="3" 
                    title="Execution" 
                    text="We stand by you during implementation, assisting with recruitment, certification, and launch." 
                />
            </div>

        </div>
    </section>
  );
}