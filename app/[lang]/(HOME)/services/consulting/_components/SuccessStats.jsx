"use client";
export default function SuccessStats() {
  return (
    <section className="py-16 bg-krimson dark:bg-amber-500 text-white dark:text-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20 dark:divide-black/10">
            
            <div className="flex-1 text-center px-4">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-sm opacity-80 uppercase tracking-widest">Aircraft Acquired</div>
            </div>

            <div className="flex-1 text-center px-4 pt-8 md:pt-0">
                <div className="text-4xl font-bold mb-1">$50M+</div>
                <div className="text-sm opacity-80 uppercase tracking-widest">Asset Value Managed</div>
            </div>

            <div className="flex-1 text-center px-4 pt-8 md:pt-0">
                <div className="text-4xl font-bold mb-1">5</div>
                <div className="text-sm opacity-80 uppercase tracking-widest">AOCs Launched</div>
            </div>

        </div>
    </section>
  );
}