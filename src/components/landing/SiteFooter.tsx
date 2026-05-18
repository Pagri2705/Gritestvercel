export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-primary-foreground text-xs font-bold">L</span>
            Logo Placeholder
          </div>
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-muted">
            <a href="#" className="hover:text-ink transition-colors">Nav Item</a>
            <a href="#" className="hover:text-ink transition-colors">Nav Item</a>
            <a href="#" className="hover:text-ink transition-colors">Impressum</a>
            <a href="#" className="hover:text-ink transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-ink transition-colors">Kontakt</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-ink-muted md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Company Placeholder. All rights reserved.</div>
          <div>Built with care — Placeholder Tagline.</div>
        </div>
      </div>
    </footer>
  );
}
