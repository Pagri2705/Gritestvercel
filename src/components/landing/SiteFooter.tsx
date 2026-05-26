import { Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5 font-semibold text-on-dark">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            KI Akademie
          </div>
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-on-dark-muted">
            <a href="#process" className="hover:text-on-dark transition-colors">Ablauf</a>
            <a href="#outcomes" className="hover:text-on-dark transition-colors">Ergebnisse</a>
            <a href="#pricing" className="hover:text-on-dark transition-colors">Preise</a>
            <a href="#faq" className="hover:text-on-dark transition-colors">FAQ</a>
            <a href="#" className="hover:text-on-dark transition-colors">Impressum</a>
            <a href="#" className="hover:text-on-dark transition-colors">Datenschutz</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-on-dark-muted md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} KI Akademie. Alle Rechte vorbehalten.</div>
        </div>
      </div>
    </footer>
  );
}
