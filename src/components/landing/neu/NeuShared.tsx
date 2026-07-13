import { useEffect, useRef } from "react";
import "./neu.css";

/* Pfeil-Icon im Kreis — wird in allen Premium-Buttons genutzt */
export function ArrowOrb() {
  return (
    <span className="btn__orb" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M3 13 13 3M6 3h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* Scroll-Reveal für alle .rv-Elemente innerhalb der Sektion.
   Respektiert prefers-reduced-motion. */
export function useReveals<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".rv"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}
