import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-black/40" style={{ backgroundColor: "#fdf8f2" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight text-ink"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          KI Akademie
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex text-ink-muted">
          <a href="#process" className="transition-colors hover:text-ink">Ablauf</a>
          <a href="#outcomes" className="transition-colors hover:text-ink">Ergebnisse</a>
          <a href="#pricing" className="transition-colors hover:text-ink">Preise</a>
          <a href="#faq" className="transition-colors hover:text-ink">FAQ</a>
        </nav>

        <button className="inline-flex h-10 items-center border border-brand bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand/90">
          Kostenloses Strategiegespräch
        </button>

      </div>
    </header>
  );
}
