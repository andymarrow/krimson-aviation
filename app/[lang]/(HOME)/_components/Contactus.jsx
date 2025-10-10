"use client";

import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaBuilding, FaQuestionCircle, FaWrench, FaMapMarkerAlt, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Sub-Components for a Cleaner Structure ---

// 1. The Header Section
const ContactHeader = () => (
  <motion.div
    className="text-center max-w-4xl mx-auto"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
      Get in Touch
    </h1>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
      We're here to help and answer any question you might have. We look forward to hearing from you.
    </p>
  </motion.div>
);

// 2. The Contact Info Cards Grid
const ContactInfoGrid = () => {
  const contactPoints = [
    {
      icon: FaQuestionCircle,
      title: "General Inquiries",
      description: "For any general questions about our organization, our mission, or our activities.",
      email: "info@centeralhub.com"
    },
    {
      icon: FaUser,
      title: "Membership Support",
      description: "For help with registration, profile updates, or questions about membership benefits.",
      email: "membership@centeralhub.com"
    },
    {
      icon: FaWrench,
      title: "Technical Support",
      description: "Experiencing an issue with the platform? Our technical team is here to assist you.",
      email: "support@centeralhub.com"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {contactPoints.map((point, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <div className="mx-auto bg-blue-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <point.icon className="text-3xl text-blue-500 dark:text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold mb-3">{point.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{point.description}</p>
          <a href={`mailto:${point.email}`} className="font-semibold text-blue-600 dark:text-cyan-400 hover:underline">
            {point.email}
          </a>
        </motion.div>
      ))}
    </div>
  );
};

// 3. The Main Form and Address Section
const ContactFormSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto mt-20 bg-gray-50 dark:bg-gray-950 rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
      {/* Left side: Form */}
      <motion.div
        className="p-8 md:p-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-extrabold mb-2">Send Us a Message</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Use the form below for any detailed inquiries.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
                  className="w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md py-3 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 transition" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required
                  className="w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md py-3 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 transition" />
              </div>
            </div>
          </div>
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="sr-only">Subject</label>
            <div className="relative">
              <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                className="w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md py-3 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 transition appearance-none cursor-pointer">
                <option value="" disabled>Select a Subject...</option>
                <option>Membership Inquiry</option>
                <option>Event Question</option>
                <option>Platform Feedback</option>
                <option>Partnership Proposal</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" placeholder="Your Message..." value={formData.message} onChange={handleChange} required rows="6"
              className="w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md py-3 px-4 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 transition"></textarea>
          </div>
          {/* Submit Button */}
          <div>
            <button type="submit"
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-cyan-400">
              Send Message <FaArrowRight className="ml-2" />
            </button>
          </div>
        </form>
      </motion.div>
      
      {/* Right side: Map and Address - UPDATED with IFRAME */}
      <motion.div
        className="relative min-h-[400px] md:min-h-full"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* --- REPLACED Image WITH iframe --- */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.744161394437!2d38.76163331521579!3d9.00609399120675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8577a7605d01%3A0x7d2127113f32454b!2sMeskel%20Square!5e0!3m2!1sen!2sus!4v1678886582395!5m2!1sen!2sus"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location in Addis Ababa"
        ></iframe>
        
        <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Our Headquarters</h3>
            <div className="flex items-start mb-3">
              <FaMapMarkerAlt className="w-5 h-5 mt-1 mr-4 flex-shrink-0" />
              <p>123 Unity Plaza, Suite 456<br />Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="w-5 h-5 mr-4 flex-shrink-0" />
              <p>+251-11-123-4567</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


// The Main Component
function Contactus() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <ContactHeader />
      <ContactInfoGrid />
      <ContactFormSection />
    </section>
  );
}

export default Contactus;