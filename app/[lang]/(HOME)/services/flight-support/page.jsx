import SupportHero from "./_components/SupportHero";
import OpsMatrix from "./_components/OpsMatrix";
import RegionalFocus from "./_components/RegionalFocus";
import FuelCreditBanner from "./_components/FuelCreditBanner";
import CtaSection from "../../_components/CtaSection";
import TrustedBy from "../../_components/TrustedBy";

export default function FlightSupportPage() {
  return (
    <main className="bg-gray-50 dark:bg-neutral-950 min-h-screen selection:bg-blue-500 selection:text-white transition-colors duration-300">
      <SupportHero />
      
      {/* Trust is key for Ops */}
      <div className="border-y border-gray-200 dark:border-white/5 bg-white dark:bg-neutral-900/50">
        <TrustedBy />
      </div>

      <OpsMatrix />
      
      <RegionalFocus />
      
      <FuelCreditBanner />
      
      <CtaSection />
    </main>
  );
}