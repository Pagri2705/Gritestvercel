import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-primary-foreground text-xs font-bold">
            L
          </span>
          Logo Placeholder
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
          <a href="#process" className="hover:text-ink transition-colors">Nav Item</a>
          <a href="#outcomes" className="hover:text-ink transition-colors">Nav Item</a>
          <a href="#pricing" className="hover:text-ink transition-colors">Nav Item</a>
          <a href="#faq" className="hover:text-ink transition-colors">Nav Item</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden h-9 rounded-md px-4 text-sm font-medium text-ink hover:bg-secondary md:inline-flex md:items-center">
            Secondary CTA
          </button>
          <button className="inline-flex h-9 items-center rounded-md bg-ink px-4 text-sm font-medium text-primary-foreground hover:bg-ink/90">
            Primary CTA
          </button>
        </div>
      </div>
    </header>
  );
}
