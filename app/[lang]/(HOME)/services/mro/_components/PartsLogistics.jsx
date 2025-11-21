"use client";
import { motion } from "framer-motion";
import { Package, Plane, Globe } from "lucide-react";

export default function PartsLogistics() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
                <span className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2 block">
                    Supply Chain Solutions
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Global Parts. <br/>
                    Local Delivery.
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                    Sourcing a part is easy. Getting it through customs in a remote African location is hard. Krimson leverages its logistics network to expedite customs clearance and last-mile delivery for critical spares.
                </p>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0 text-krimson dark:text-amber-500">
                            <Globe size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">Global Sourcing</h4>
                            <p className="text-sm text-gray-500">Access to inventories in USA, Europe & UAE.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0 text-krimson dark:text-amber-500">
                            <Package size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">Customs Brokerage</h4>
                            <p className="text-sm text-gray-500">Expedited clearance for AOG shipments.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-[500px] bg-white dark:bg-neutral-900 rounded-[3rem] border border-gray-200 dark:border-white/5 p-4 shadow-2xl overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Logistics Warehouse"
                    className="w-full h-full object-cover rounded-[2.5rem] opacity-80"
                />
                
                {/* Animated Logistics Path */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 shadow-xl text-center">
                        <div className="flex items-center gap-4 text-gray-900 dark:text-white font-mono font-bold text-xl mb-2">
                            <span>MIA</span>
                            <div className="w-16 h-px bg-gray-400 relative overflow-hidden">
                                <div className="absolute inset-0 bg-krimson w-1/2 animate-[shimmer_2s_infinite]"/>
                            </div>
                            <span>ADD</span>
                        </div>
                        <div className="text-xs text-green-500 font-bold uppercase tracking-wider">
                            In Transit
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
}