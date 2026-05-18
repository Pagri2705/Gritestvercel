import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = Array.from({ length: 8 }).map((_, i) => ({
  q: `Frage Placeholder ${i + 1}`,
  a: "Antwort Placeholder. Ein klarer, ruhiger Antworttext über mehrere Sätze, der die Frage beantwortet ohne übertrieben zu wirken.",
}));

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <div className="text-center">
        <div className="text-xs font-medium uppercase tracking-widest text-brand">Section Label</div>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">FAQ Headline Placeholder</h2>
        <p className="mt-4 text-lg text-ink-muted">Subheadline Placeholder.</p>
      </div>
      <Accordion type="single" collapsible className="mt-14 w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-medium text-ink hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-ink-muted">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
