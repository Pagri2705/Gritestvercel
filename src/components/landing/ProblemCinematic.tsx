import { useEffect, useRef, useState } from "react";

/**
 * Variante A·3/3 (Cinematic): Vollbild-Foto, Statement mittig im Bild.
 * Wird zum Vergleich UNTER der Original-Problem-Sektion gerendert.
 */
export function ProblemCinematic() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const line = (text: string, delay: number) => (
    <span className="block overflow-hidden">
      <span
        className="block"
        style={{
          transform: inView ? "translateY(0)" : "translateY(110%)",
          transition: `transform 1s cubic-bezier(0.32,0.72,0,1) ${delay}ms`,
        }}
      >
        {text}
      </span>
    </span>
  );

  return (
    <section
      ref={ref}
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "88dvh" }}
    >
      <img
        src="/ba95.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 70% at 50% 52%, rgba(8,14,23,0.72) 0%, rgba(8,14,23,0.45) 100%)",
        }}
      />

      <div className="relative z-[2] mx-auto w-full max-w-7xl px-6 py-20 text-center">
        <div
          className="mb-6 inline-flex items-baseline gap-2.5 border px-4 py-2"
          style={{
            borderColor: "rgba(255,255,255,0.35)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(0.32,0.72,0,1)",
          }}
        >
          <b
            className="text-[1.6rem] font-extrabold leading-none tracking-[-0.02em]"
            style={{ color: "#ff9d99" }}
          >
            78&nbsp;%
          </b>
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/75">
            der KI-Einführungen scheitern
          </span>
        </div>

        <h2 className="mx-auto max-w-[18ch] text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[2.8rem]">
          {line("Viel Aufwand.", 100)}
          {line("Kein Fortschritt.", 250)}
        </h2>

        <p
          className="mx-auto mt-5 max-w-[28rem] text-base leading-relaxed text-white/80"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(18px)",
            transition:
              "opacity 0.8s cubic-bezier(0.32,0.72,0,1) 400ms, transform 0.8s cubic-bezier(0.32,0.72,0,1) 400ms",
          }}
        >
          Es liegt weder an der Technologie noch an mangelndem Wissen. Ohne
          klare Struktur drehen sich Teams im Kreis, und am Ende bleibt alles
          beim Alten.
        </p>
      </div>
    </section>
  );
}
