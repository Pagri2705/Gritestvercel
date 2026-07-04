import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Brauchen meine Mitarbeiter technische Vorkenntnisse für den KI-Workshop?",
    a: "Nein. ChatGPT und moderne KI-Tools funktionieren über Sprache, nicht über Programmierung. Wer E-Mails schreiben und im Browser surfen kann, kann sofort loslegen. Unsere Teilnehmer kommen aus Kundenservice, Verwaltung, HR, Vertrieb und Marketing — keine technischen Hintergründe, aber nach einem Tag produktiv mit KI. 70 % unseres Workshops sind reines Hands-on: echte Aufgaben aus Ihrem Arbeitsalltag, direkt im Tool.",
  },
  {
    q: "Ist der Einsatz von ChatGPT in unserem Unternehmen DSGVO-konform?",
    a: "Das hängt von der Version ab. ChatGPT Free und Plus sind für den Unternehmenseinsatz nicht empfohlen, da Eingaben zum Training genutzt werden können. ChatGPT Team (ca. 30 €/Nutzer/Monat) hingegen ist DSGVO-tauglich: OpenAI nutzt die Eingaben nicht für das Training — schriftlich zugesichert. Für größere Teams oder besonders sensible Daten empfiehlt sich ChatGPT Enterprise mit Data Processing Addendum. Im Workshop lernen Ihre Mitarbeiter außerdem, welche Daten grundsätzlich nicht eingegeben werden dürfen — unabhängig von der Version.",
  },
  {
    q: "Ersetzt KI unsere Mitarbeiter?",
    a: "Nein. KI ersetzt repetitive Aufgaben innerhalb von Jobs, nicht die Jobs selbst. Ein Kundendienstmitarbeiter mit ChatGPT bearbeitet in der gleichen Zeit deutlich mehr Anfragen. Ein Marketer, dem ChatGPT die Rohfassung schreibt, kann sich auf Strategie und Qualität konzentrieren. In unseren Nachbefragungen sagen über 85 % der Teilnehmer: KI nimmt mir die nervigen Aufgaben ab, endlich mehr Zeit für das, was wirklich zählt. Der Schlüssel ist transparente Kommunikation im Team vor der Einführung, dabei helfen wir aktiv.",
  },
  {
    q: "Wie schnell rechnet sich der Workshop?",
    a: "Typischerweise innerhalb von 4 bis 8 Wochen. Beispiel: Bei 10 Mitarbeitern, die täglich 40 Minuten durch KI einsparen, entstehen pro Woche über 65 Stunden Zeitgewinn — das entspricht fast zwei vollen Arbeitstagen. Bei einem Stundensatz von 30 € ergibt das rund 2.000 € Wert pro Woche. Die einmalige Workshop-Investition von 3.199 € amortisiert sich damit in weniger als zwei Wochen intensiver Nutzung. Hinweis: Viele KMU können Schulungskosten über das Qualifizierungschancengesetz fördern lassen — wir helfen gerne bei der Antragstellung.",
  },
  {
    q: "Was unterscheidet die KI Akademie von einem normalen Online-Kurs?",
    a: "Online-Kurse vermitteln Wissen. Wir sorgen dafür, dass KI in Ihrem Unternehmen tatsächlich genutzt wird. Das bedeutet: Vor dem Workshop analysieren wir Ihre konkreten Arbeitsabläufe. Im Workshop entwickeln Ihre Mitarbeiter eigene Anwendungen für ihren Job. Nach dem Workshop begleiten wir das Team aktiv mit wöchentlichen Fragen-Sessions, individuellen Prompt-Entwicklungen und Change-Management-Unterstützung. Genau dieser Teil macht den Unterschied.",
  },
  {
    q: "Können wir die Inhalte auf unsere Branche und unsere Prozesse anpassen?",
    a: "Ja, das ist der Kernpunkt unseres Programms. Vor jedem Workshop führen wir ein Analysegespräch: Welche Aufgaben kosten Ihr Team täglich die meiste Zeit? Welche Dokumente, Prozesse und Kommunikationswege gibt es? Auf dieser Basis bereiten wir Use Cases vor, die direkt auf Ihren Arbeitsalltag zugeschnitten sind. Kein generisches Beispiel-Material, sondern Prompts und Workflows, die Ihre Mitarbeiter am nächsten Tag einsetzen können.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14">
          <h2 className="text-[1.9rem] md:text-[2.8rem] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
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
