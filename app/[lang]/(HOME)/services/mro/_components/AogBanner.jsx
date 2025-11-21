"use client";
import Link from "next/link";
import { AlertTriangle, Phone } from "lucide-react";

export default function AogBanner() {
  return (
    <section id="aog" className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-krimson dark:bg-[#2D0A0A] rounded-[2.5rem] p-8 md:p-16 text-center text-white shadow-2xl shadow-krimson/30 relative overflow-hidden">
            
            {/* Warning Stripes Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20">
                    <AlertTriangle size={32} className="text-amber-400" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-4">AOG: Aircraft On Ground?</h2>
                <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
                    We understand that every minute on the ground costs money. Our rapid response team can mobilize mechanics and parts to remote locations across Africa within hours.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:+251116678980" className="inline-flex items-center gap-3 bg-white text-krimson px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        <Phone size={20} /> Call AOG Hotline
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}