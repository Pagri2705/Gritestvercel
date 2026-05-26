import { useEffect, useRef, useState } from "react";
import { BookOpen, Lightbulb, LayoutGrid, ShieldAlert } from "lucide-react";

const items = [
  { icon: BookOpen,    text: "Mitarbeiter nicht wissen, wie sie KI verständlich einsetzen sollen." },
  { icon: Lightbulb,   text: "Unklar bleibt, welche Aufgaben KI konkret übernehmen kann." },
  { icon: LayoutGrid,  text: "Der tägliche Einsatz ohne klare Struktur und Prozess bleibt." },
  { icon: ShieldAlert, text: "Der Umgang mit neuen Tools Unsicherheit erzeugt." },
];

// Reveal order: top-left(0) → top-right(1) → bottom-left(2) → bottom-right(3)
const revealOrder = [0, 1, 2, 3];

export function Problem() {
  const [revealed, setRevealed] = useState([false, false, false, false]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealOrder.forEach((itemIndex, step) => {
            setTimeout(() => {
              setRevealed(prev => {
                const next = [...prev];
                next[itemIndex] = true;
                return next;
              });
            }, step * 1200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: "#f7f8fa" }} className="pt-0 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left: headline + text */}
          <div>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
              KI Einführungen scheitern{" "}
              <span style={{ color: "#e53e3e" }}>IMMER</span>
              , wenn
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg max-w-[510px]">
              ohne Vorbereitung gestartet wird, kein klarer Plan existiert und die Menschen nicht mitgenommen werden, die täglich damit arbeiten sollen.
            </p>
          </div>

          {/* Right: water container with animated cards */}
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-2xl shrink-0"
            style={{
              width: 550,
              height: 420,
              backgroundImage: "url('/bg-stats.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.50)" }} />

            <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
              {items.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-3 rounded-xl p-5"
                  style={{
                    opacity: revealed[i] ? 1 : 0,
                    transform: revealed[i] ? "translateY(0)" : "translateY(14px)",
                    transition: "opacity 0.45s ease, transform 0.45s ease",
                    background: "rgba(255,255,255,0.95)",
                  }}
                >
                  <div
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                    style={{ backgroundColor: "rgba(239,68,68,0.12)" }}
                  >
                    <Icon className="h-4 w-4" style={{ color: "#e53e3e" }} />
                  </div>
                  <p className="text-[0.88rem] font-medium leading-relaxed text-ink">{text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
