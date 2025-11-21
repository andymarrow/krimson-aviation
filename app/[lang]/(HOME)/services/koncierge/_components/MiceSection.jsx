"use client";
import { CheckCircle2 } from "lucide-react";

export default function MiceSection() {
  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
                <div className="inline-block px-3 py-1 border border-amber-500/50 rounded-full text-amber-500 text-xs font-bold mb-6">
                    Corporate Solutions
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">M.I.C.E.</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Addis Ababa is the diplomatic capital of Africa. We ensure your Meetings, Incentives, Conferences, and Exhibitions match the city's global status.
                </p>
                
                <div className="space-y-4">
                    {["Venue Sourcing & Contracting", "Delegate Logistics & Transfers", "Gala Dinner Production", "Multilingual Hostesses"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                            <CheckCircle2 className="text-amber-500" size={20} />
                            <span className="text-gray-300">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-neutral-800">
                <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop" 
                    alt="Conference Hall" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="font-bold text-lg">African Union Hall Capable</p>
                    <p className="text-sm text-gray-400">We handle delegations of 100+</p>
                </div>
            </div>

        </div>
    </section>
  );
}