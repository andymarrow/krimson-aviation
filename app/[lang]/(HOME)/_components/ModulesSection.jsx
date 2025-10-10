"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaCheckCircle, FaCogs } from 'react-icons/fa';

// Import our new data and the new selector component
import { systemModules} from '@/lib/constants';
import ModuleSelector from './ModuleSelector'; // We will create this next

function ModulesSection() {
  // Set the default selected module to the first one (Dashboard)
  const [selectedModule, setSelectedModule] = useState(systemModules[0]);

  const mainVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, x: 30, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 " id="modules">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
          <p className="flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2">
            <FaCogs className="h-5 w-5 mr-2" />
            Core System Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
            An Integrated System Built for Growth
          </h2>
        </motion.div>

        {/* Main Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Left Column: Module Selectors */}
          <motion.div 
            className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 hide-scrollbar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {systemModules.map(module => (
              <ModuleSelector
                key={module.id}
                module={module}
                isSelected={selectedModule.id === module.id}
                onClick={() => setSelectedModule(module)}
              />
            ))}
          </motion.div>

          {/* Right Column: Dynamic Content Display */}
          <div className="flex-1 min-h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedModule.id} // This key is crucial for AnimatePresence to work
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col lg:flex-row gap-8 lg:gap-12"
              >
                {/* Text Content */}
                <div className="lg:w-1/2">
                  <selectedModule.icon className="h-10 w-10 text-blue-500 dark:text-cyan-400 mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedModule.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedModule.description}</p>
                  
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedModule.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center text-gray-600 dark:text-gray-300"
                        custom={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={(i) => ({
                            opacity: 1,
                            x: 0,
                            transition: { delay: i * 0.1 + 0.2, ease: "easeOut" }
                        })}
                      >
                        <FaCheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Image */}
                <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
                  <motion.div 
                    className="w-full h-64 lg:h-full relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
                  >
                    <Image
                      src={selectedModule.image}
                      alt={`${selectedModule.title} visual representation`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl shadow-md"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModulesSection;