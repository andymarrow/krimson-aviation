"use client";

import React from 'react';
// UPDATED ICON: FaSitemap is perfect for representing structure
import { FaSitemap, FaTwitter, FaLinkedinIn, FaGithub, FaLink } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import Link from 'next/link';

// UPDATED: Import the new leadership data
import { sampleLeadership } from '@/lib/constants'; // Make sure this path is correct

// Helper function to get the correct social icon component (NO CHANGE NEEDED)
const getSocialIcon = (iconName) => {
  switch (iconName) {
    case 'FaTwitter': return FaTwitter;
    case 'FaLinkedinIn': return FaLinkedinIn;
    case 'FaGithub': return FaGithub;
    case 'FaLink': return FaLink;
    default: return null;
  }
};

// RENAMED the component function
function OrganizationalStructure() {

  // UPDATED: Use the new leadership data
  const featuredLeaders = sampleLeadership.slice(0, 4);

  // --- NO CHANGES TO ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const buttonVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: featuredLeaders.length * 0.2 + 0.3 } }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-950 text-white dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title - UPDATED TEXTS */}
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="flex items-center justify-center text-sm font-semibold text-cyan-400 uppercase mb-2">
            <FaSitemap className="h-5 w-5 mr-2" /> {/* UPDATED ICON */}
            Our Structure
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-12">
            Meet the Dedicated Leadership
          </h2>
        </motion.div>

        {/* Leaders Display - UPDATED to map 'featuredLeaders' */}
        <motion.div
          className="gap-y-12 flex justify-center items-end flex-wrap gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 xl:gap-x-24 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredLeaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              variants={itemVariants}
              className={`flex flex-col items-center flex-shrink-0
                         ${index === 1 || index === 3 ? 'transform translate-y-8 md:translate-y-12' : ''}
                         ${index === 0 ? 'lg:-translate-x-8' : ''}
                         ${index === featuredLeaders.length - 1 ? 'lg:translate-x-8' : ''}
                       `}
            >
              {/* Leader Image */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-4">
                 <div className="absolute inset-0 rounded-full border-4 border-cyan-500 dark:border-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover rounded-full relative z-10 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>

              {/* Leader Info - UPDATED TEXTS AND VARIABLES */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 mb-3">{leader.role}</p>

                 {/* Social Links - UPDATED to use 'leader' object */}
                <div className="flex justify-center space-x-3 text-gray-500 dark:text-gray-500">
                   {leader.socialLinks && leader.socialLinks.map((link, linkIndex) => {
                      const IconComponent = getSocialIcon(link.icon);
                      if (!IconComponent) return null;
                      return (
                         <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition-colors duration-200"
                         >
                            <IconComponent className="h-5 w-5" />
                         </a>
                      );
                   })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* "View Full Structure" Button - UPDATED TEXT AND LINK */}
        <motion.div
           className="mt-10 text-center"
           variants={buttonVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
          <Link href="/leadership"> {/* UPDATED LINK: e.g., to a full leadership directory page */}
              <span className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400 cursor-pointer">
                View Full Leadership →
              </span>
           </Link>
        </motion.div>

      </div>
    </section>
  );
}

// RENAMED the export
export default OrganizationalStructure;