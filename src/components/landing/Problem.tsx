import { ArrowUpRight } from "lucide-react";

export function Problem() {
  return (
    <section style={{ background: "#f7f8fa" }} className="pt-0 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left: headline */}
          <div>
            <h2 className="text-[1.9rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl text-center md:text-left">
<span style={{ color: "#e53e3e" }}>78%</span> der KI&nbsp;Einführungen scheitern
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg max-w-[520px] text-center md:text-left">
              Es liegt weder an der Technologie noch an mangelndem Wissen.
            </p>
          </div>

          {/* Right: bridge image with quote overlay */}
          <div
            className="relative overflow-hidden rounded-2xl w-full"
            style={{
              maxWidth: 550,
              minHeight: 400,
              backgroundImage: "url('/ewa/bridge.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Scrim: unten dunkel für Text, oben klar (Brücke sichtbar) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(8,15,25,0.15) 0%, rgba(8,15,25,0.45) 50%, rgba(8,15,25,0.92) 100%)",
              }}
            />

            <div className="relative flex flex-col items-center justify-end text-center p-7 md:p-9" style={{ minHeight: 400 }}>
              <figure className="flex flex-col items-center">
                <span
                  className="font-black leading-[0.85] tabular-nums"
                  style={{ fontSize: "clamp(2.6rem, 7vw, 3.6rem)", color: "#fff", letterSpacing: "-0.04em" }}
                >
                  95<span style={{ color: "#e53e3e" }}>%</span>
                </span>
                <blockquote className="mt-3 max-w-[320px] text-sm md:text-base font-medium leading-snug text-white">
                  der KI&#8209;Pilotprojekte in Unternehmen liefern keinen messbaren Mehrwert.
                </blockquote>
                <figcaption className="mt-4 text-[0.72rem] leading-snug text-white/45">
                  Quelle:{" "}
                  <a
                    href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium underline decoration-1 underline-offset-2 transition-colors"
                    style={{ color: "#7DB3FF" }}
                  >
                    Massachusetts Institute of Technology
                    <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
                  </a>
                  , State of AI in Business 2025
                </figcaption>
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
