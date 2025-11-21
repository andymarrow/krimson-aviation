import AeroHero from "./_components/AeroHero";
import MembershipGrid from "./_components/MembershipGrid";
import AdHocServices from "./_components/AdHocServices";
import EmergencyCta from "./_components/EmergencyCta";
import TrustedBy from "../../_components/TrustedBy";

export default function AeromedicalPage() {
  return (
    <main className="bg-gray-50 dark:bg-neutral-950 min-h-screen selection:bg-red-500 selection:text-white">
      <AeroHero />
      
      {/* Trust signals are vital for medical services */}
      <div className="opacity-60 grayscale">
        <TrustedBy />
      </div>

      <MembershipGrid />
      
      <AdHocServices />
      
      <EmergencyCta />
    </main>
  );
}