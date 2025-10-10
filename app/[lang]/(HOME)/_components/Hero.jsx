"use client"
import React from "react";
import { FaArrowRight, FaSignInAlt, FaUsers } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion

function Hero() {
  return (
    // The container will act as the parent for the animation sequence
    <div className="container mx-auto mt-20 lg:mt-12 md:mt-36 px-4 py-8 sm:py-12 dark:text-white overflow-hidden"> {/* Added overflow-hidden to contain animations */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

        {/* Left Side - Text Content with Animation */}
        {/* We wrap this div with motion.div to animate all its children together */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start invisible and slightly down
          animate={{ opacity: 1, y: 0 }}   // Animate to fully visible and original position
          transition={{ duration: 0.8, ease: "easeInOut" }} // Define the animation speed and easing
          className="w-full lg:w-1/2 text-center lg:text-left z-10"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-3 flex items-center justify-center lg:justify-start">
             <span className="inline-block h-0.5 w-8 bg-blue-600 dark:bg-cyan-400 mr-2"></span>
             YOUR CENTRAL HUB
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-cyan-400">
               Empowering Our Organization, Together.
           </span>
          </h1>
          
          <p className="text-lg dark:text-gray-300 mb-8 text-gray-700">
             Welcome to your central hub for connection, collaboration, and growth. Manage your membership, stay informed about events, and access the resources you need to make a difference.
          </p>

          {/* Feature List */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0 mb-10 justify-center lg:justify-start z-10">
            <div className="flex items-center dark:text-gray-300 text-gray-700">
              <FaUsers className="h-6 w-6 text-green-500 mr-2" />
               Member Engagement
            </div>
            <div className="flex items-center dark:text-gray-300 text-gray-700">
              <FaSignInAlt className="h-6 w-6 text-green-500 mr-2" />
               Centralized Access
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0 justify-center lg:justify-start z-10">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400">
              Login to Your Dashboard <FaArrowRight className="inline ml-2" />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:focus:ring-gray-600">
               Join Our Organization
            </button>
          </div>
        </motion.div>

        {/* Right Column: Image Container with Animation */}
        {/* We wrap this div with motion.div for the image animation */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }} // Start invisible and slightly smaller
            animate={{ opacity: 1, scale: 1 }}     // Animate to fully visible and original size
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Add a slight delay to start after the text
            className="w-full lg:w-1/2 relative mt-10 lg:mt-0"
        >
            <Image
              src={"/images/leadership.jpg"} // You've already updated this, looks great!
              alt={"A photo of our organization members collaborating"}
              layout="responsive"
              width={600}
              height={400}
              objectFit="contain"
              className="w-full h-auto rounded-lg shadow-lg"
            />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;