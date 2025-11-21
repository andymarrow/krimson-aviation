import Hero from "./_components/Hero";
import TrustedBy from "./_components/TrustedBy";
import WhyKrimson from "./_components/WhyKrimson"; // Import New Component
import ServicesBento from "./_components/ServicesBento";
import StatsSection from "./_components/StatsSection";
import ConsultingCta from "./_components/ConsultingCta"; // Import New Component
import CtaSection from "./_components/CtaSection";
import LatestBlogs from "./_components/LatestBlogs"; 

export default function Home() {
  return (
    <main className="bg-krimson-cream dark:bg-neutral-950 min-h-screen overflow-hidden selection:bg-krimson selection:text-white transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Trust Indicators (Logos) */}
      <TrustedBy />

      {/* 3. NEW: Why Choose Us & Certifications */}
      {/* This fills the gap of "Time, Team, Network" and the NBAA/EBAA logos */}
      <WhyKrimson />

      {/* 4. Services Grid */}
      <div className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            We don't just fly.<br />
            <span className="text-krimson dark:text-amber-500">We Orchestrate.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
            Comprehensive aviation solutions tailored for the unique challenges of the African continent.
          </p>
        </div>
        <ServicesBento />
      </div>

      {/* 5. Stats */}
      <StatsSection />

      {/* 6. NEW: Consulting specific CTA */}
      {/* Covers the "Consulting" service that was prominent on the old site */}
      <ConsultingCta />

      {/* 7. Blog */}
      <LatestBlogs />

      {/* 8. Final Call to Action */}
      <CtaSection />
    </main>
  );
}