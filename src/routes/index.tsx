import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { Hero } from "@/components/landing/Hero";
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
    <main className="min-h-screen bg-background text-ink">
      <SiteNav />
      <Hero />
      <TrustBars />
      <Problem />
      <Process />
      <Outcomes />
      <UseCases />
      <ChatTestimonials />
      <About />
      <RoiCalculator />
      <Pricing />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
