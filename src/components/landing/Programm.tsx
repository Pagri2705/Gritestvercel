import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Brain, PenLine, Users, Briefcase, Compass } from "lucide-react";

const slides = ["/ewa/ewa1.jpg", "/ewa/ewa2.webp", "/ewa/ewa3.webp"];

const steps = [
  {
    icon: Brain,
    label: "Schritt 1",
    title: "Wie funktioniert KI wirklich?",
    desc: "Im ersten Schritt lernt Ihr Team die Grundlagen moderner KI-Systeme. Wie Sprachmodelle arbeiten, warum manche Antworten präzise sind und warum andere unbrauchbar sein können. Das Verständnis dahinter ist die Grundlage für alles Weitere.",
  },
  {
    icon: PenLine,
    label: "Schritt 2",
    title: "Prompting verstehen.",
    desc: "Im zweiten Schritt geht es darum, Anweisungen so zu formulieren, dass die KI verwertbare Ergebnisse liefert. Ihr Team lernt die Prinzipien hinter guten Prompts und setzt diese direkt in Übungen um.",
  },
  {
    icon: Users,
    label: "Schritt 3",
    title: "Arbeiten mit echten Aufgaben.",
    desc: "Anstatt mit theoretischen Beispielen zu arbeiten, wird das Gelernte anhand typischer Aufgaben aus dem Arbeitsalltag angewendet. So entsteht sofort ein Bezug zur eigenen Arbeit.",
  },
  {
    icon: Briefcase,
    label: "Schritt 4",
    title: "Prozesse und Anwendungsfälle entwickeln.",
    desc: "Gemeinsam werden konkrete Einsatzmöglichkeiten für KI im Unternehmen erarbeitet. Dabei wird untersucht, welche Aufgaben sich vereinfachen, beschleunigen oder standardisieren lassen.",
  },
  {
    icon: Compass,
    label: "Schritt 5",
    title: "Umsetzung im Arbeitsalltag.",
    desc: "Zum Abschluss werden die erarbeiteten Ansätze strukturiert festgehalten. Ihr Team weiß anschließend, wie die Methoden im Alltag eingesetzt werden können und worauf dabei zu achten ist.",
  },
];

const NAV_H = 64;
const VISIBLE = 2;
const GAP = 6;

export function Programm() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [mobile, setMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 820);
  const obsRef = useRef<ResizeObserver | null>(null);

  // Callback-Ref: misst die Breite und schaltet Mobile/Desktop um (greift auch in der Mobile-Vorschau)
  const measureRef = useCallback((node: HTMLDivElement | null) => {
    obsRef.current?.disconnect();
    if (node) {
      obsRef.current = new ResizeObserver(([entry]) => setMobile(entry.contentRect.width < 820));
      obsRef.current.observe(node);
    }
  }, []);

  const setWrapper = useCallback(
    (node: HTMLDivElement | null) => {
      wrapperRef.current = node;
      measureRef(node);
    },
    [measureRef],
  );

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlideIndex((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      if (!firstCardRef.current || !stepsContainerRef.current) return;
      const ch = firstCardRef.current.offsetHeight;
      setCardHeight(ch);
      const vH = ch * VISIBLE + (VISIBLE - 1) * GAP;
      // Total height of all cards minus the visible window = how far we need to translate
      setMaxTranslate(stepsContainerRef.current.scrollHeight - vH);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [mobile]);

  useEffect(() => {
    if (!maxTranslate) return;
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollable = wrapperRef.current.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / scrollable);
      setTranslateY(-progress * maxTranslate);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxTranslate]);

  const visibleH = (cardHeight || 160) * VISIBLE + (VISIBLE - 1) * GAP;

  if (mobile) {
    return (
      <section ref={measureRef} style={{ background: "#f7f8fa" }} className="py-14 px-5">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand mb-4 text-center">
          Das Programm
        </p>
        <h2 className="text-[1.7rem] font-semibold leading-[1.12] tracking-[-0.03em] text-ink text-center mb-3">
          Ablauf des KI-Einführungsprogramms
        </h2>
        <p className="text-center text-[0.9rem] md:text-base text-ink/50 max-w-[420px] mx-auto mb-7 leading-relaxed">
          Einmal lernen. Danach selbst anwenden ohne jeden neuen Trend einen Berater zu engagieren.
        </p>

        {/* Diashow */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 10",
            overflow: "hidden",
            position: "relative",
            borderRadius: 12,
            marginBottom: 28,
          }}
        >
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: i === slideIndex ? 1 : 0,
                transition: "opacity 0.7s ease",
              }}
            />
          ))}
          <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                style={{
                  width: i === slideIndex ? 20 : 6,
                  height: 6,
                  borderRadius: 999,
                  border: "none",
                  background: i === slideIndex ? "white" : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Schritte gestapelt */}
        <div className="flex flex-col gap-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="px-6 py-6" style={{ background: "white", borderRadius: 10 }}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={17} style={{ color: "#6366f1" }} strokeWidth={1.5} />
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.1em]" style={{ color: "#6366f1" }}>
                    {step.label}
                  </p>
                </div>
                <h3 className="text-[1.2rem] font-semibold text-ink leading-[1.2] mb-2">{step.title}</h3>
                <p className="text-[0.875rem] text-ink/55 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <div ref={setWrapper} style={{ height: `calc(${(steps.length - VISIBLE) * 90}vh + 140vh)`, isolation: "isolate" }}>
      <div
        style={{
          position: "sticky",
          top: NAV_H,
          height: `calc(100vh - ${NAV_H}px)`,
          background: "#f7f8fa",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 w-full">

          {/* Header */}
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand mb-4 text-center">
            Das Programm
          </p>
          <h2 className="text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink text-center mb-3" style={{ fontSize: "2.675rem" }}>
            Ablauf des KI-Einführungsprogramms
          </h2>
          <p className="text-center text-[0.9rem] md:text-base text-ink/50 max-w-[520px] mx-auto mb-8 leading-relaxed">
            Einmal lernen. Danach selbst anwenden ohne jeden neuen Trend einen Berater zu engagieren.
          </p>

          {/* Two-col */}
          <div className="flex gap-16 items-start">

            {/* Left — Diashow */}
            <div
              className="flex-shrink-0"
              style={{ width: 520, height: visibleH, overflow: "hidden", position: "relative", borderRadius: 12 }}
            >
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: i === slideIndex ? 1 : 0,
                    transition: "opacity 0.7s ease",
                  }}
                />
              ))}
              {/* Dots */}
              <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    style={{
                      width: i === slideIndex ? 20 : 6,
                      height: 6,
                      borderRadius: 999,
                      border: "none",
                      background: i === slideIndex ? "white" : "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right scrollable window */}
            <div className="flex-1">
              <div style={{ height: visibleH, overflow: "hidden" }}>
                <div
                  ref={stepsContainerRef}
                  className="flex flex-col"
                  style={{ gap: GAP, transform: `translateY(${translateY}px)`, transition: "transform 0.12s ease-out" }}
                >
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={i}
                        ref={i === 0 ? firstCardRef : undefined}
                        className="grid gap-8 px-8 py-8"
                        style={{ gridTemplateColumns: "45% 1fr", background: "white", flexShrink: 0 }}
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Icon size={17} style={{ color: "#6366f1" }} strokeWidth={1.5} />
                            <p className="text-[0.72rem] font-bold uppercase tracking-[0.1em]" style={{ color: "#6366f1" }}>
                              {step.label}
                            </p>
                          </div>
                          <h3 className="text-[1.35rem] font-semibold text-ink leading-[1.15]">
                            {step.title}
                          </h3>
                        </div>
                        <div className="flex items-center">
                          <p className="text-[0.875rem] text-ink/55 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
