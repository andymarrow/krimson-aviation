"use client";
import { motion } from "framer-motion";

export default function RegionalFocus() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Background Pattern - subtle map lines */}
        <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'linear-gradient(0deg, transparent 24%, #222 25%, #222 26%, transparent 27%, transparent 74%, #222 75%, #222 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #222 25%, #222 26%, transparent 27%, transparent 74%, #222 75%, #222 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            
            <div>
                <span className="text-krimson font-bold tracking-widest uppercase text-sm mb-2 block">
                    The African Advantage
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    54 Countries. <br/>
                    One Point of Contact.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Africa is not a country; it is a continent of 54 unique regulatory environments. While international providers rely on third parties, Krimson operates directly. We know the local CAAs, the handlers, and the fuelers by name.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <div className="text-3xl font-bold text-white mb-1">Direct</div>
                        <div className="text-sm text-gray-500 uppercase">CAA Relationships</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white mb-1">Local</div>
                        <div className="text-sm text-gray-500 uppercase">Currency Handling</div>
                    </div>
                </div>
            </div>

            {/* Visual Map Representation */}
            <div className="relative h-[500px] bg-neutral-800 rounded-[3rem] border border-white/10 p-8 flex items-center justify-center shadow-2xl">
                {/* Abstract Map Image */}
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/1200px-Africa_%28orthographic_projection%29.svg.png"
                    alt="Africa Map"
                    className="w-[80%] h-auto opacity-20 invert"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-4 h-4 bg-krimson rounded-full mx-auto mb-2 animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.8)]"></div>
                        <div className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                            Addis Ababa HQ
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
}