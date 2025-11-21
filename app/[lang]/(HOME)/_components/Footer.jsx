"use client";
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'; // Added FacebookF to match your links

function Footer() {
  
  // Define social links array for cleaner mapping
  const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/krimson-aviation/" },
    { icon: FaTwitter, href: "https://twitter.com/KrimsonAviation" },
    { icon: FaFacebookF, href: "https://www.facebook.com/KrimsonAviation" },
    { icon: FaInstagram, href: "https://www.instagram.com/krimson.aviation/" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 rounded-t-[3rem] mt-[-3rem] relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section: Big Brand & Call */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-16 mb-16">
           <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
                Let's Fly.
              </h2>
              <p className="text-gray-400 text-lg">
                Krimson Aviation is the gateway to African skies, providing world-class flight support, charter, and concierge services.
              </p>
           </div>
           <div className="mt-8 md:mt-0 flex gap-4">
              {/* Socials - Mapped with Real Links */}
              {socialLinks.map((social, i) => (
                <a 
                    key={i} 
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 hover:bg-krimson flex items-center justify-center transition-colors border border-white/10"
                >
                  <social.icon size={20} />
                </a>
              ))}
           </div>
        </div>

        {/* Grid Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          
          {/* Column 1 */}
          <div className="space-y-6">
             <h4 className="text-amber-500 font-mono text-sm uppercase tracking-widest">Company</h4>
             <ul className="space-y-4 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">Press & News</Link></li>
             </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
             <h4 className="text-amber-500 font-mono text-sm uppercase tracking-widest">Services</h4>
             <ul className="space-y-4 text-gray-400">
                <li><Link href="/services/flight-support" className="hover:text-white transition-colors">Flight Support</Link></li>
                <li><Link href="/services/charter" className="hover:text-white transition-colors">Private Charter</Link></li>
                <li><Link href="/services/koncierge" className="hover:text-white transition-colors">Luxury Koncierge</Link></li>
                <li><Link href="/services/mro" className="hover:text-white transition-colors">MRO Services</Link></li>
             </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
             <h4 className="text-amber-500 font-mono text-sm uppercase tracking-widest">Support</h4>
             <ul className="space-y-4 text-gray-400">
                <li><Link href="/permits" className="hover:text-white transition-colors">Permit Status</Link></li>
                <li><Link href="/fuel" className="hover:text-white transition-colors">Fuel Quotes</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Ops</Link></li>
             </ul>
          </div>

          {/* Column 4: Address */}
          <div className="space-y-6">
             <h4 className="text-amber-500 font-mono text-sm uppercase tracking-widest">Headquarters</h4>
             <address className="text-gray-400 not-italic space-y-2">
                <p>Bole International Airport</p>
                <p>Addis Ababa, Ethiopia</p>
                <p className="pt-4 text-white font-medium">+251 116 678 980</p>
                <p>ops@krimson.aero</p>
             </address>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-600">
           <p>© {new Date().getFullYear()} Krimson Aviation. All Rights Reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-400">Terms of Service</Link>
           </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;