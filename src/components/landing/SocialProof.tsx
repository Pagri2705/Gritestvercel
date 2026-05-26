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

const positions = [
  { top: 32,  left: 32,   bottom: "auto", right: "auto" },
  { top: "50%", left: "50%", transform: "translate(-50%, -50%)", bottom: "auto", right: "auto" },
  { top: "auto", left: "auto", bottom: 32, right: 32 },
];

export function SocialProof() {
  return (
    <section className="bg-white py-16 md:py-20 pb-32 md:pb-40" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand mb-5 text-center">
          Marktkontext
        </p>

        <h2 className="text-[2rem] font-semibold tracking-[-0.03em] text-ink mb-14 md:text-[3rem] leading-[1.1] whitespace-nowrap text-center">
          KI wird getestet statt{" "}
          <span className="text-brand">produktiv genutzt.</span>
        </h2>

        <div className="flex items-center justify-center gap-5">
          {stats.map(({ number, anchor, body, source, href }, i) => (
            <div
              key={number}
              className="flex flex-col rounded-xl p-6"
              style={{
                width: 268,
                flexShrink: 0,
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
