"use client";
import { motion } from "framer-motion";
import { Shield, Car, Coffee, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "The Arrival",
    subtitle: "Airport Services",
    desc: "Forget the queues. Our specialized protocol team meets you at the aircraft door. We handle immigration, baggage, and customs via a private VIP channel while you relax in the lounge.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1200&auto=format&fit=crop" // Luxury Terminal/Passport
  },
  {
    id: 2,
    title: "The Journey",
    subtitle: "Secure Transportation",
    desc: "Move through Addis Ababa in comfort and safety. From armored SUVs to luxury sedans, our fleet is chauffeured by vetted security drivers who know the city's pulse.",
    icon: Car,
    image: "https://plus.unsplash.com/premium_photo-1755238861275-ce4d6a5b9bb4?w=500&auto=format&fit=crop" // Luxury Car Interior
  },
  {
    id: 3,
    title: "The Sanctuary",
    subtitle: "Accommodation",
    desc: "We don't just book hotels; we secure the best suites. Whether it's a boutique eco-lodge in the mountains or a presidential suite in the capital, we ensure your preferences are met before you check in.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop" // Luxury Hotel Room
  },
  {
    id: 4,
    title: "The Culture",
    subtitle: "Entertainment & Excursions",
    desc: "Hospitality sits at the heart of Ethiopian culture. Experience private coffee ceremonies, jazz nights, and historical tours curated by locals, not guidebooks.",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1631166092772-d07aed54b9a0?w=500&auto=format&fit=crop" // Coffee/Cultural
  },
];

const Card = ({ data, index }) => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center min-h-[80vh] sticky top-20 mb-20 lg:mb-0">
    
    {/* Left: Text (Sticky logic handled by parent flow) */}
    <div className="flex-1 order-2 lg:order-1 bg-white dark:bg-neutral-900 p-8 md:p-12 rounded-[3rem] shadow-xl border border-stone-100 dark:border-white/5 z-10">
      <div className="w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 flex items-center justify-center mb-6">
        <data.icon size={28} />
      </div>
      <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-2 block">
        Step 0{index + 1} — {data.subtitle}
      </span>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{data.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
        {data.desc}
      </p>
    </div>

    {/* Right: Image */}
    <div className="flex-1 order-1 lg:order-2 w-full h-[400px] lg:h-[600px] relative">
       <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transform lg:rotate-3 border-[8px] border-white dark:border-neutral-800">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
          />
       </div>
    </div>

  </div>
);

export default function ExperienceScroll() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="mb-20 text-center">
         <h2 className="text-3xl font-bold text-gray-400">The Client Journey</h2>
      </div>
      
      <div className="space-y-10 lg:space-y-0">
        {experiences.map((item, i) => (
            <Card key={item.id} data={item} index={i} />
        ))}
      </div>
    </section>
  );
}