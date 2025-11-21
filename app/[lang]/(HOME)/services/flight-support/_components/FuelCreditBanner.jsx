"use client";
import Link from "next/link";
import { CreditCard } from "lucide-react";

export default function FuelCreditBanner() {
  return (
    <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            
            <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-amber-500/10 text-krimson dark:text-amber-500 flex items-center justify-center shrink-0">
                    <CreditCard size={32} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Fuel & Services on Credit
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md">
                        Streamline your operations with our flexible credit facilities. Receive a single, consolidated invoice for all services across the continent.
                    </p>
                </div>
            </div>

            <Link 
                href="/contact" 
                className="px-8 py-4 bg-gray-900 hover:bg-krimson dark:bg-white dark:text-black dark:hover:bg-amber-500 dark:hover:text-black text-white rounded-full font-bold transition-colors whitespace-nowrap"
            >
                Open Account
            </Link>

        </div>
    </section>
  );
}