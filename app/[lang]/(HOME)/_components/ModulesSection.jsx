"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaCheckCircle, FaCogs, FaChevronRight } from 'react-icons/fa';

import { systemModules } from '@/lib/constants';
import ModuleSelector from './ModuleSelector';

function ModulesSection() {
  const [selectedModule, setSelectedModule] = useState(systemModules[0]);
  
  // --- NEW: Hooks for the smart scroll indicator ---
  const scrollContainerRef = useRef(null); // Ref to access the scrollable div
  const [hasScrolled, setHasScrolled] = useState(false); // State to track if the user has scrolled
  const [isScrollable, setIsScrollable] = useState(false); // State to check if scrolling is even possible

  // This effect checks if the container's content is wider than the container itself
  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        // If the total width of the content is greater than the visible width, it's scrollable
        setIsScrollable(scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth);
      }
    };

    checkScrollable(); // Check on mount
    window.addEventListener('resize', checkScrollable); // Re-check on window resize

    // Cleanup the event listener
    return () => window.removeEventListener('resize', checkScrollable);
  }, []); // Empty dependency array means this runs once on mount

  // Function to handle the scroll event on the container
  const handleScroll = () => {
    // Once the user scrolls, we set this to true to hide the indicator
    if (!hasScrolled) {
      setHasScrolled(true);
    }
  };

  // Function to scroll the container programmatically when the button is clicked
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, x: 30, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="modules">
      <div className="max-w-7xl mx-auto">
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

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* NEW: Wrapper div is now relative to position the scroll button */}
          <div className="relative lg:w-64">
            <motion.div 
              ref={scrollContainerRef} // Attach the ref here
              onScroll={handleScroll} // Attach the scroll handler
              className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 hide-scrollbar"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
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

            {/* NEW: Smart Animated Scroll Indicator Button */}
            <AnimatePresence>
              {isScrollable && !hasScrolled && (
                <motion.button
                  onClick={scrollRight}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 lg:hidden flex items-center p-2 rounded-full bg-white/50 dark:bg-gray-800/50 shadow-lg backdrop-blur-sm border border-white/20"
                  aria-label="Scroll for more"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    // This creates the engaging, subtle bounce animation
                    y: [0, -4, 0],
                  }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    x: { duration: 0.3 },
                    // Transition for the repeating bounce effect
                    y: { duration: 1.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
                  }}
                >
                  <FaChevronRight className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          
          {/* --- The rest of the component remains unchanged --- */}
          <div className="flex-1 min-h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={selectedModule.id} variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <selectedModule.icon className="h-10 w-10 text-blue-500 dark:text-cyan-400 mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedModule.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedModule.description}</p>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedModule.features.map((feature, index) => (
                      <motion.li key={index} className="flex items-center text-gray-600 dark:text-gray-300" custom={index} initial={{ opacity: 0, x: -10 }} animate={(i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 + 0.2, ease: "easeOut" } })}>
                        <FaCheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />{feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
                  <motion.div className="w-full h-64 lg:h-full relative" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}>
                    <Image src={selectedModule.image} alt={`${selectedModule.title} visual representation`} layout="fill" objectFit="cover" className="rounded-xl shadow-md"/>
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