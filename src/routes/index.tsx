import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { Hero } from "@/components/landing/Hero";
import { StatsSection } from "@/components/landing/StatsSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { TrustBars } from "@/components/landing/TrustBars";
import { Problem } from "@/components/landing/Problem";
import { Process } from "@/components/landing/Process";
import { Outcomes } from "@/components/landing/Outcomes";
import { UseCases } from "@/components/landing/UseCases";
import { ChatTestimonials } from "@/components/landing/ChatTestimonials";
import { About } from "@/components/landing/About";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { AnimatedDemo } from "@/components/landing/AnimatedDemo";
import { FinalCta } from "@/components/landing/FinalCta";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium B2B Landingpage Template" },
      { name: "description", content: "Moderne, hochwertige Onepage Landingpage Template — Platzhalterinhalt." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen text-ink relative" style={{ backgroundColor: "rgba(255, 248, 235, 0.3)" }}>

      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundColor: "#fdf8f2" }} />

      <SiteNav />
      <div className="mx-4 md:mx-20 lg:mx-36 border-l border-r border-black/40 mt-16 relative z-10">
        <div className="overflow-hidden max-h-[86dvh]">
          <Hero />
        </div>
        <StatsSection />
        <div className="bg-white h-[40px]" />
        <Problem />
        <SocialProof />
        <AnimatedDemo />
        <div className="flex items-center justify-center bg-white py-10">
          <div style={{ width: 560, height: 420, position: "relative", overflow: "hidden", border: "2px dashed #94a3b8", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #8aa8a4 0%, #c4aa80 45%, #d4a055 100%)" }} />
            <span style={{ position: "relative", zIndex: 1, color: "white", fontSize: 14, fontFamily: "monospace" }}>560 × 420px</span>
          </div>
        </div>
        <Process />
        <Outcomes />
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
  );
}
