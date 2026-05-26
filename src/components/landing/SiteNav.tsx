import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X } from "lucide-react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-40 w-full border-b border-black/40" style={{ backgroundColor: "#fdf8f2" }}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="hidden md:inline">KI Akademie</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex text-ink-muted">
            <a href="#process" className="transition-colors hover:text-ink">Ablauf</a>
            <a href="#outcomes" className="transition-colors hover:text-ink">Ergebnisse</a>
            <a href="#pricing" className="transition-colors hover:text-ink">Preise</a>
            <a href="#faq" className="transition-colors hover:text-ink">FAQ</a>
          </nav>

          {/* Desktop CTA */}
          <button className="hidden md:inline-flex h-10 items-center border border-brand bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand/90">
            Kostenloses Erstgespräch
          </button>

          {/* Mobile: CTA + Burger */}
          <div className="flex items-center gap-3 md:hidden">
            <button className="inline-flex h-9 items-center border border-brand bg-brand px-4 text-xs font-semibold text-white">
              Kostenlose Erstberatung
            </button>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="grid h-9 w-9 place-items-center rounded-lg text-ink"
              style={{ background: "rgba(0,0,0,0.06)" }}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 flex flex-col pt-16 md:hidden"
          style={{ backgroundColor: "#fdf8f2" }}
          onClick={() => setMenuOpen(false)}
        >
          <nav className="flex flex-col px-6 pt-8 gap-6 text-lg font-medium text-ink">
            <a href="#process" className="border-b border-black/10 pb-4">Ablauf</a>
            <a href="#outcomes" className="border-b border-black/10 pb-4">Ergebnisse</a>
            <a href="#pricing" className="border-b border-black/10 pb-4">Preise</a>
            <a href="#faq" className="border-b border-black/10 pb-4">FAQ</a>
          </nav>
        </div>
      )}
    </>
  );
}
