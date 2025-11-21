"use client";
import { PhoneCall } from "lucide-react";

export default function EmergencyCta() {
  return (
    <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-red-600 rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl shadow-red-900/40 relative overflow-hidden">
            
            {/* Background Pulse Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500 rounded-full blur-[100px] opacity-50 animate-pulse" />
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Do you have a medical emergency?</h2>
                <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
                    Our 24/7 Operations Center is ready to deploy. Do not wait.
                </p>
                
                <a href="tel:+251116678980" className="inline-flex items-center gap-4 bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg">
                    <PhoneCall size={24} />
                    +251 116 678 980
                </a>
                
                <p className="mt-6 text-sm text-red-200 opacity-80 uppercase tracking-widest">
                    Available 24 Hours / 365 Days
                </p>
            </div>
        </div>
    </section>
  );
}