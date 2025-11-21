import MroHero from "./_components/MroHero";
import MaintenanceServices from "./_components/MaintenanceServices";
import AogBanner from "./_components/AogBanner";
import PartsLogistics from "./_components/PartsLogistics";
import TrustedBy from "../../_components/TrustedBy";
import CtaSection from "../../_components/CtaSection";

export default function MroPage() {
  return (
    <main className="bg-gray-50 dark:bg-neutral-950 min-h-screen selection:bg-amber-500 selection:text-white transition-colors duration-300">
      <MroHero />
      
      {/* Technical Partners / OEMs */}
      <div className="border-y border-gray-200 dark:border-white/5 bg-white dark:bg-neutral-900/50">
        <TrustedBy />
      </div>

      <MaintenanceServices />
      
      <AogBanner />
      
      <PartsLogistics />
      
      <CtaSection />
    </main>
  );
}