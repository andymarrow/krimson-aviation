"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUsers, FaBullseye, FaLightbulb, FaHeart, FaShieldAlt, FaGem, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

// Helper sub-components to keep the main component clean
const HeroSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
  >
    <div className="text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
          Connecting Our Community, Driving Our Mission.
        </span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        We are a purpose-driven organization dedicated to empowering our members through collaboration, shared goals, and technological innovation. This digital platform is the heart of our community, built to foster engagement, streamline communication, and support the collective success of every individual.
      </p>
    </div>
    <div className="overflow-hidden rounded-2xl shadow-2xl">
      <Image
        src={"/images/leadershipmeeting.jpg"} // Suggestion: An image of a diverse group of people collaborating.
        alt="A team of dedicated members working together"
        className="w-full h-auto object-cover"
        width={600}
        height={400}
      />
    </div>
  </motion.div>
);

const MissionVisionSection = () => (
  <div className="max-w-7xl mx-auto mt-24 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <FaBullseye className="text-4xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To provide a robust, centralized platform that empowers every member to connect, engage, and contribute effectively. We are committed to fostering a transparent and collaborative environment where data-driven decisions and community-led initiatives drive our collective growth and success.
          </p>
        </div>
        <div>
          <FaLightbulb className="text-4xl text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To be a leading example of a digitally-empowered organization where technology and community converge to create unparalleled opportunities for our members. We envision a future where every voice is heard, every achievement is celebrated, and our shared purpose is amplified through seamless digital integration.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
);

const ValuesSection = () => {
  const values = [
    {
      icon: FaUsers,
      title: "Community",
      description: "We believe in the power of connection. Our platform is built to foster a strong sense of belonging and collaboration among all members."
    },
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description: "We operate with transparency and accountability. Trust is the foundation of our community, and we are committed to upholding it in all our actions."
    },
    {
      icon: FaHeart,
      title: "Engagement",
      description: "Active participation is the lifeblood of our organization. We create tools and opportunities that encourage and reward member involvement."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We embrace change and continuously seek better ways to serve our members, leveraging technology to enhance our effectiveness and reach."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto mt-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <FaGem className="text-4xl text-blue-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mx-auto bg-blue-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <value.icon className="text-3xl text-blue-500 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const LeadershipSection = () => (
    <div className="max-w-4xl mx-auto mt-24 text-center bg-gray-100 dark:bg-gray-800/50 p-10 rounded-2xl">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
        >
            <h2 className="text-3xl font-bold mb-4">The People Behind the Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Our organization is guided by a dedicated team of leaders committed to serving our community. Meet the individuals who steer our mission forward.
            </p>
            <Link href="/leadership" passHref>
                <span className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg cursor-pointer">
                    Meet Our Leadership <FaArrowRight className="ml-2" />
                </span>
            </Link>
        </motion.div>
    </div>
);


function AboutPage() {
  return (
     <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <MissionVisionSection />
        <ValuesSection />
        <LeadershipSection />
    </div>
  );
}

export default AboutPage;