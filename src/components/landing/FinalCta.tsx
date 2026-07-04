import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="bg-brand py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-[1.9rem] md:text-[2.8rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
          KI verständlich. Praxisnah. Direkt anwendbar.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Moderne KI muss nicht kompliziert sein. Gemeinsam zeigen wir Ihrem Team, wie KI sinnvoll im Arbeitsalltag genutzt werden kann.
        </p>
        <div className="mt-10">
          <button className="inline-flex h-13 items-center gap-2 rounded-lg bg-white px-8 text-base font-semibold text-brand shadow-elevated hover:bg-white/95 transition-colors">
            Kostenloses Strategiegespräch vereinbaren
            <ArrowRight className="h-5 w-5 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
