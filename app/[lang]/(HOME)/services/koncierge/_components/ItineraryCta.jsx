"use client";
import Link from "next/link";

export default function ItineraryCta() {
  return (
    <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-[3rem] p-10 md:p-20 text-center shadow-2xl border border-amber-100 dark:border-amber-500/20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Design Your Stay.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
                Tell us your preferences, and our Concierge team will craft a bespoke itinerary tailored to your tastes.
            </p>
            <Link 
                href="/contact" 
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-amber-500/30 hover:-translate-y-1"
            >
                Request Koncierge
            </Link>
        </div>
    </section>
  );
}