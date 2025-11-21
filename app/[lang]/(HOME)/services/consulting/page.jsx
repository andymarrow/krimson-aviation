import ConsultingHero from "./_components/ConsultingHero";
import StrategyPillars from "./_components/StrategyPillars";
import TheApproach from "./_components/TheApproach";
import SuccessStats from "./_components/SuccessStats";
import TrustedBy from "../../_components/TrustedBy";
import CtaSection from "../../_components/CtaSection";

export default function ConsultingPage() {
  return (
    <main className="bg-gray-50 dark:bg-neutral-950 min-h-screen selection:bg-krimson selection:text-white transition-colors duration-300">
      <ConsultingHero />
      
      {/* Consulting relies heavily on reputation */}
      <div className="py-8 bg-white dark:bg-black/20 border-b border-gray-100 dark:border-white/5">
        <TrustedBy />
      </div>

      <StrategyPillars />
      
      <SuccessStats />
      
      <TheApproach />
      
      <CtaSection />
    </main>
  );
}