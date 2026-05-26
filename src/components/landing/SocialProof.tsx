import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    number: "75%",
    anchor: "der KI-Projekte scheitern",
    body: "zwischen erstem Test und echtem Einsatz. Die Technologie ist selten das Problem. Die fehlende Einführung schon.",
    source: "Deloitte 2026",
    href: "https://mybusinessfuture.com/en/deloitte-ai-enterprise-report-execution-gap/",
  },
  {
    number: "53%",
    anchor: "nennen fehlendes Know-how",
    body: "als größten Stolperstein. Nicht das Budget. Nicht die Tools. Sondern das fehlende Wissen im Team.",
    source: "Bitkom 2026",
    href: "https://mybusinessfuture.com/en/bitkom-ai-study-2026-41-of-companies-use-ai-smes-catch-up/",
  },
  {
    number: "43%",
    anchor: "der KMU haben keine KI-Pläne",
    body: "Gleichzeitig stufen 91% der Großkonzerne KI als geschäftskritisch ein. Wer jetzt nicht handelt verliert Boden.",
    source: "Deloitte 2026",
    href: "https://mybusinessfuture.com/en/deloitte-ai-enterprise-report-execution-gap/",
  },
];

export function SocialProof() {
  return (
    <section className="bg-white py-16 md:py-20 pb-16 md:pb-40" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand mb-5 text-center">
          Marktkontext
        </p>

        <h2 className="text-[1.9rem] font-semibold tracking-[-0.03em] text-ink mb-10 md:text-[3rem] md:mb-14 leading-[1.1] text-center">
          KI wird getestet statt{" "}
          <span className="text-brand">produktiv genutzt.</span>
        </h2>

        {/* Mobile: stacked, Desktop: row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-5">
          {stats.map(({ number, anchor, body, source, href }) => (
            <div
              key={number}
              className="flex flex-col rounded-xl p-6 w-full md:w-[268px] md:flex-shrink-0"
              style={{
                background: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15), 0 0 0 2px rgba(59,100,180,0.10)",
              }}
            >
              <p className="text-[2.25rem] font-bold leading-none tracking-[-0.04em] mb-2 text-brand">
                {number}
              </p>
              <p className="text-[0.82rem] font-bold tracking-[-0.01em] mb-2 text-ink">
                {anchor}
              </p>
              <p className="text-[0.75rem] leading-[1.65] mb-4 text-ink/70">
                {body}
              </p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-brand hover:opacity-70 transition-opacity"
              >
                {source}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
