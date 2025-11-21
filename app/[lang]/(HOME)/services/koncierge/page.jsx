import KonciergeHero from "./_components/KonciergeHero";
import ExperienceScroll from "./_components/ExperienceScroll";
import MiceSection from "./_components/MiceSection";
import CulturalGallery from "./_components/CulturalGallery";
import ItineraryCta from "./_components/ItineraryCta";
import TrustedBy from "../../_components/TrustedBy";

export default function KonciergePage() {
  return (
    <main className="bg-stone-50 dark:bg-neutral-950 min-h-screen selection:bg-amber-500 selection:text-white transition-colors duration-300">
      <KonciergeHero />
      
      {/* Experience Scroll (The core dynamic section) */}
      <ExperienceScroll />
      
      {/* Meetings & Events */}
      <MiceSection />
      
      {/* Visual Inspiration */}
      <CulturalGallery />
      
      {/* Partners (Hotels/Security) */}
      <div className="py-10 border-t border-stone-200 dark:border-white/5 opacity-70">
        <TrustedBy />
      </div>

      <ItineraryCta />
    </main>
  );
}