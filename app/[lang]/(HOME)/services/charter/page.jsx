import CharterHero from "./_components/CharterHero";
import UseCaseBento from "./_components/UseCaseBento";
import FleetCategory from "./_components/FleetCategory";
import LeasingBanner from "./_components/LeasingBanner";
import CtaSection from "../../_components/CtaSection";
import TrustedBy from "../../_components/TrustedBy";

export default function CharterPage() {
  return (
    <main className="bg-gray-50 dark:bg-neutral-950 min-h-screen selection:bg-krimson selection:text-white transition-colors duration-300">
      <CharterHero />
      
      {/* Social Proof is vital for charter trust */}
      <div className="border-y border-gray-200 dark:border-white/5 bg-white dark:bg-black/20">
        <TrustedBy />
      </div>

      <UseCaseBento />
      
      <FleetCategory />
      
      <LeasingBanner />
      
      <CtaSection />
    </main>
  );
}