"use client"
import React from 'react';
import { motion } from 'framer-motion';

function ModuleSelector({ module, isSelected, onClick }) {
  const { icon: Icon, shortTitle } = module;

  const selectorVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (
    <motion.button
      onClick={onClick}
      variants={selectorVariants}
      className={`w-full lg:w-64 flex-shrink-0 text-left p-4 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-blue-500 dark:focus:ring-cyan-500
                 ${isSelected 
                   ? 'bg-blue-500 dark:bg-cyan-600 text-white shadow-lg' 
                   : 'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                 }`}
      whileHover={{ scale: isSelected ? 1 : 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4">
        <Icon className={`h-6 w-6 flex-shrink-0 transition-colors ${isSelected ? 'text-white' : 'text-blue-500 dark:text-cyan-400'}`} />
        <span className="font-semibold">{shortTitle}</span>
      </div>
    </motion.button>
  );
}

export default ModuleSelector;