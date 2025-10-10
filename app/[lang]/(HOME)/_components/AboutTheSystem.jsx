"use client";

import React from 'react';
// UPDATED ICONS: FaBullseye for purpose, FaCheck for benefits, FaArrowRight for action, FaUsers for the circle
import { FaBullseye, FaCheck, FaArrowRight, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

// RENAMED Component
function AboutTheSystem() {

  // --- NO CHANGES TO ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

   const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

   const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* --- NO CHANGES TO LEFT COLUMN STRUCTURE --- */}
        <motion.div
           className="relative h-[400px] sm:h-[500px] md:h-[450px] lg:h-[550px]"
           variants={imageVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/buisnessman5.jpg"
            alt="Members collaborating and planning"
            className="absolute top-0 left-0 w-[85%] h-[85%] object-cover rounded-lg shadow-xl"
          />
          <img
            src="/images/buisnesswoman3.jpg"
            alt="A group of engaged members at an event"
            className="absolute bottom-0 right-0 w-[60%] h-[60%] object-cover rounded-lg shadow-xl border-4 border-white dark:border-gray-900"
          />
          {/* Experience Circle - UPDATED TEXT AND ICON */}
          <div className="absolute top-[70%] left-[70%] w-32 h-32 sm:w-40 sm:h-40 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center text-center text-sm sm:text-md font-bold shadow-xl border-4 border-white dark:border-gray-900 transform translate-x-[-50%] translate-y-[-50%]">
            <FaUsers className="text-3xl sm:text-4xl mb-1" /> {/* UPDATED ICON */}
            <span>10,000+</span> {/* UPDATED TEXT */}
            <span>Members</span>
            <span>Strong</span>
          </div>
        </motion.div>

        {/* Right Column: Text Content - UPDATED TEXTS */}
        <motion.div
           variants={textVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
          <p className="flex items-center text-sm font-semibold text-blue-600 dark:text-cyan-400 uppercase mb-2">
            <FaBullseye className="mr-2 text-base" /> {/* UPDATED ICON */}
            Why This System Exists
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight mb-6">
            A Centralized Platform for Seamless Collaboration
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            This system was built to empower our organization from the ground up. It is a dedicated digital tool designed to streamline operations, enhance communication, and provide valuable data for our leadership. Our goal is to connect every member and support our shared mission with modern, efficient technology.
          </p>

          <motion.ul
             className="space-y-3 mb-8"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
          >
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Streamline member registration and management.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Centralize event planning and track member engagement.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Foster community and collaboration within dedicated leagues.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Empower leadership with data-driven reports and insights.
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>

       <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Right Column (becomes Left on mobile): Text Content - UPDATED TEXTS */}
       <motion.div
           variants={textVariants} // This will be imageVariants on the other side
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight mb-6">
            Connecting Our Community, Driving Our Mission
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Our vision is a more connected and efficient organization. This platform is the digital backbone that supports our real-world goals, making it easier for members to participate, for leaders to plan, and for our entire community to grow and succeed together.
          </p>

          <motion.ul
             className="space-y-3 mb-8"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
          >
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Access all your information from a single, secure dashboard.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Stay updated with real-time news and announcements.
            </motion.li>
            <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> Engage in discussions and activities with your peers.
            </motion.li>
             <motion.li className="flex items-start text-gray-700 dark:text-gray-300" variants={itemVariants}>
              <FaCheck className="mr-2 mt-1 text-blue-500 dark:text-cyan-400 flex-shrink-0" /> A user-friendly experience available on any device.
            </motion.li>
          </motion.ul>

          <motion.button
             className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-md transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
             variants={itemVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
          >
            Get Involved Now <FaArrowRight className="ml-2 text-sm" />
          </motion.button>
        </motion.div>

        {/* --- NO CHANGES TO RIGHT COLUMN STRUCTURE --- */}
        <motion.div
           className="relative h-[400px] sm:h-[500px] md:h-[450px] lg:h-[550px]"
           variants={imageVariants} // This will be textVariants on the other side
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/buisnesswoman4.jpg"
            alt="A diverse group of members in a meeting"
            className="absolute top-0 right-0 w-[85%] h-[85%] object-cover rounded-lg shadow-xl"
          />
          <img
            src="/images/buisnessman2.jpg"
            alt="Members networking at a community event"
            className="absolute bottom-0 left-0 w-[60%] h-[60%] object-cover rounded-lg shadow-xl border-4 border-white dark:border-gray-900"
          />
          {/* Experience Circle - UPDATED TEXT AND ICON */}
          <div className="absolute top-[70%] right-[35%] w-32 h-32 sm:w-40 sm:h-40 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center text-center text-sm sm:text-md font-bold shadow-xl border-4 border-white dark:border-gray-900 transform translate-x-[-50%] translate-y-[-50%]">
            <FaUsers className="text-3xl sm:text-4xl mb-1" /> {/* UPDATED ICON */}
            <span>United</span> {/* UPDATED TEXT */}
            <span>In</span>
            <span>Purpose</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// RENAMED EXPORT
export default AboutTheSystem;