import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Smartphone, Monitor } from "lucide-react";
import { SiteNav } from "@/components/landing/SiteNav";
import { Hero } from "@/components/landing/Hero";
import { StatsSection } from "@/components/landing/StatsSection";
import { Problem } from "@/components/landing/Problem";
import { UseCases } from "@/components/landing/UseCases";
import { ChatTestimonials } from "@/components/landing/ChatTestimonials";
import { Faq } from "@/components/landing/Faq";
import { WhyItFails } from "@/components/landing/WhyItFails";
import { FailureCost } from "@/components/landing/FailureCost";
import { Programm } from "@/components/landing/Programm";
import { Lernkreislauf } from "@/components/landing/Lernkreislauf";
import { EigeneBildSektion } from "@/components/landing/EigeneBildSektion";
import { WirArbeitenMit } from "@/components/landing/WirArbeitenMit";
import { FinalCta } from "@/components/landing/FinalCta";
import { SiteFooter } from "@/components/landing/SiteFooter";
// ═══ NEUE PREMIUM-SEKTIONEN (isoliert unter components/landing/neu/) ═══
import { NeuKonsequenz } from "@/components/landing/neu/NeuKonsequenz";
import { NeuPraxisBento } from "@/components/landing/neu/NeuPraxisBento";
import { NeuRoiRechner } from "@/components/landing/neu/NeuRoiRechner";
import { NeuPreise } from "@/components/landing/neu/NeuPreise";
import { NeuFinalCta } from "@/components/landing/neu/NeuFinalCta";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [mobile, setMobile] = useState(false);

  return (
    <div style={{ background: mobile ? "#e5e7eb" : undefined, minHeight: "100dvh" }}>
      {/* Toggle button */}
      <button
        onClick={() => setMobile((v) => !v)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#0F2942",
          color: "white",
          border: "none",
          borderRadius: 999,
          padding: "10px 18px",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        }}
      >
        {mobile ? <Monitor size={16} /> : <Smartphone size={16} />}
        {mobile ? "Desktop" : "Mobile"}
      </button>

    <main
      className="min-h-screen text-ink relative"
      style={{
        backgroundColor: "rgba(255, 248, 235, 0.3)",
        maxWidth: mobile ? 390 : undefined,
        margin: mobile ? "0 auto" : undefined,
        boxShadow: mobile ? "0 0 0 1px #d1d5db, 0 8px 40px rgba(0,0,0,0.18)" : undefined,
      }}
    >

      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundColor: "#fdf8f2" }} />

      <SiteNav />
      <div className="mx-4 md:mx-20 lg:mx-36 border-l border-r border-black/40 mt-16 relative z-10">
        <div className="overflow-hidden max-h-[86dvh]">
          <Hero />
        </div>
        <StatsSection />
        <div className="bg-white h-[90px]" />
        <Problem />
        <WhyItFails />
        <FailureCost />
        {/* VERGLEICH: neue Konsequenz-Sektion direkt unter der alten (FailureCost) — eine fliegt nach Entscheidung raus */}
        <NeuKonsequenz />
        <Programm />
        <Lernkreislauf />
        <EigeneBildSektion />
        <WirArbeitenMit />
        <UseCases />
        <ChatTestimonials />
        <NeuRoiRechner />
        <NeuPreise />
        <Faq />
        <FinalCta />

        {/* ═══════════════════════════════════════════════════════════
            NEUE PREMIUM-SEKTIONEN — zum Sichten unten angehängt.
            Verschieben: einfach die gewünschte Zeile an die Zielposition
            weiter oben ziehen (z. B. <NeuKonsequenz /> anstelle von
            <FailureCost />). Löschen alter Sektionen erst nach Ansage.
            ═══════════════════════════════════════════════════════════ */}
        <NeuPraxisBento />
        <NeuFinalCta />

        <SiteFooter />
      </div>
    </main>
    </div>
  );
}
