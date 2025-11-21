"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LeasingBanner() {
  return (
    <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white">
            
            {/* Abstract Background Graphic */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="relative z-10 max-w-2xl">
                <span className="px-3 py-1 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                    B2B Solutions
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Aircraft Leasing (ACMI)</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Looking for long-term solutions? We provide comprehensive ACMI (Aircraft, Crew, Maintenance, Insurance) leasing options for airlines and NGOs requiring dedicated lift capacity in Africa.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 text-amber-500 font-bold hover:text-white transition-colors">
                    Discuss Leasing Options <ArrowRight size={20} />
                </Link>
            </div>
        </div>
    </section>
  );
}