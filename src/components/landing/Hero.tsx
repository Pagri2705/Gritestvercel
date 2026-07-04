import { useEffect, useState } from "react";
import { BookOpen, GraduationCap, Briefcase, Users } from "lucide-react";

// Animation timing (ms)
const H_START    = 300;
const H_STAGGER  = 80;
const H1_WORDS   = ["KI", "fur", "jeden", "Mitarbeiter"];
const SUB_START  = H_START + H1_WORDS.length * H_STAGGER + 600;
const SUB_LINE1  = "Verständliche und praxisnahe Einführung in moderne KI Tools.".split(" ");
const SUB_LINE2  = "Für Unternehmen ohne eigene KI Abteilung.".split(" ");
const SUB_WORDS  = [...SUB_LINE1, ...SUB_LINE2];
const SUB_STAGGER = 55;
const SUB_LINE2_START = SUB_START + SUB_LINE1.length * SUB_STAGGER;
const BTN_START  = SUB_START + SUB_WORDS.length * SUB_STAGGER + 200;


function WordSpans({ words, startMs, stagger }: { words: string[]; startMs: number; stagger: number }) {
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span
            className="hero-word"
            style={{ animationDelay: `${startMs + i * stagger}ms` }}
          >{word}</span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return (
    <section className="relative flex h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center pt-16">

      {/* Photo background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero3.png"
          alt=""
          className="h-full w-full object-cover"
          style={{ objectPosition: isMobile ? "72% 54%" : "center 54%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,41,66,0.72) 0%, rgba(15,41,66,0.40) 60%, rgba(15,41,66,0.48) 100%)" }} />
      </div>

      {/* Headline + Subheadline */}
      <div className="relative z-10 w-full -mt-[46vh] text-center">
        <h1 className="text-[2.4rem] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[4.1rem] md:text-[5.25rem]" style={{ transform: "translateY(16px)" }}>
          <WordSpans words={H1_WORDS} startMs={H_START} stagger={H_STAGGER} />
        </h1>
        <p className="mt-6 md:mt-14 mx-auto text-[0.82rem] md:text-[1.375rem] leading-[1.65] text-white/90" style={{ transform: "translateY(16px)", fontWeight: 550 }}>
          <WordSpans words={SUB_LINE1} startMs={SUB_START} stagger={SUB_STAGGER} />
          <br className="hidden md:block" />
          {" "}
          <WordSpans words={SUB_LINE2} startMs={SUB_LINE2_START} stagger={SUB_STAGGER} />
        </p>
        <p
          className="hero-fade mt-8 md:mt-8 mx-auto text-[0.75rem] md:text-[1rem] leading-relaxed text-white/60"
          style={{ fontWeight: 450, animationDelay: `${BTN_START - 300}ms` }}
        >
          Egal ob KI-Einsteiger oder erfahrener Anwender.<br />Wir holen jeden dort ab, wo er steht.
        </p>
      </div>


      {/* Gradient transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none bg-gradient-to-b from-transparent to-white/35" />

      {/* CTA */}
      <div
        className="hero-fade absolute bottom-[12rem] md:bottom-[13rem] left-0 right-0 z-20 flex items-center justify-center"
        style={{ animationDelay: `${BTN_START}ms` }}
      >
        <button className="cta-wave inline-flex h-12 md:h-14 items-center border border-brand bg-brand px-8 md:px-10 text-base md:text-lg font-semibold text-white transition-colors hover:bg-brand/90">
          Kostenloses Strategiegespräch
        </button>
      </div>
    </section>
  );
}
