import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Brauchen wir technisches Vorwissen?", a: "Nein. Der Workshop ist bewusst so aufgebaut, dass er ohne jegliche technische Vorkenntnisse funktioniert. Moderne KI Tools wie ChatGPT werden über normale Sprache bedient â€” kein Code, keine technische Einrichtung." },
  { q: "Sind die Inhalte praxisnah?", a: "Ja. Wir arbeiten ausschließlich mit realen Aufgaben aus dem Unternehmensalltag. Keine theoretischen Beispiele â€” sondern Situationen, die Ihr Team täglich kennt." },
  { q: "Kann KI direkt im Unternehmen eingesetzt werden?", a: "Ja. Teams entwickeln bereits während des Workshops erste eigene Anwendungen â€” zum Beispiel Angebotsvorlagen, E-Mail-Antworten oder Meeting-Zusammenfassungen. Diese können direkt im Arbeitsalltag genutzt werden." },
  { q: "Ist eine Ratenzahlung möglich?", a: "Ja, auf Anfrage bieten wir individuelle Zahlungsmodalitäten an. Sprechen Sie uns einfach im kostenlosen Strategiegespräch darauf an." },
  { q: "Ist das DSGVO konform?", a: "Wir besprechen im Workshop ausdrücklich, welche Daten in KI Tools eingegeben werden dürfen und welche nicht. Datenschutz und verantwortungsvoller KI Einsatz sind fester Bestandteil des Programms." },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            Häufige Fragen
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-surface-elevated px-6 shadow-card"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-ink hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-ink-muted">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
