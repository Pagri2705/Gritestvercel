import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Smartphone, Monitor } from "lucide-react";
import { SiteNav } from "@/components/landing/SiteNav";
import { Hero } from "@/components/landing/Hero";
import { StatsSection } from "@/components/landing/StatsSection";
import { TrustBars } from "@/components/landing/TrustBars";
import { Problem } from "@/components/landing/Problem";
import { UseCases } from "@/components/landing/UseCases";
import { ChatTestimonials } from "@/components/landing/ChatTestimonials";
import { About } from "@/components/landing/About";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { AnimatedDemo } from "@/components/landing/AnimatedDemo";
import { WhyItFails } from "@/components/landing/WhyItFails";
import { FailureCost } from "@/components/landing/FailureCost";
import { Programm } from "@/components/landing/Programm";
import { Lernkreislauf } from "@/components/landing/Lernkreislauf";
import { EigeneBildSektion } from "@/components/landing/EigeneBildSektion";
import { WirArbeitenMit } from "@/components/landing/WirArbeitenMit";
import { VentarSektionen } from "@/components/landing/VentarSektionen";
import { FinalCta } from "@/components/landing/FinalCta";
import { SiteFooter } from "@/components/landing/SiteFooter";

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
        <Programm />
        <Lernkreislauf />
        <EigeneBildSektion />
        <WirArbeitenMit />
        <VentarSektionen />
        <AnimatedDemo />
        <div className="flex items-center justify-center bg-white py-10 px-6">
          <div style={{ width: "100%", maxWidth: 560, height: 420, position: "relative", overflow: "hidden", border: "2px dashed #94a3b8", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #8aa8a4 0%, #c4aa80 45%, #d4a055 100%)" }} />
            <span style={{ position: "relative", zIndex: 1, color: "white", fontSize: 14, fontFamily: "monospace" }}>560 × 420px</span>
          </div>
        </div>
        <UseCases />
        <ChatTestimonials />
        <About />
        <RoiCalculator />
        <Pricing />
        <TrustBars />
        <Faq />
        <FinalCta />
        <SiteFooter />
      </div>
    </main>
    </div>
  );
}
