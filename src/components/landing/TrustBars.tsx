import { ShieldCheck, Users, Clock, Award } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Trust Item Title", text: "Short supporting text placeholder." },
  { icon: Users, title: "Trust Item Title", text: "Short supporting text placeholder." },
  { icon: Clock, title: "Trust Item Title", text: "Short supporting text placeholder." },
  { icon: Award, title: "Trust Item Title", text: "Short supporting text placeholder." },
];

export function TrustBars() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-border bg-background p-6 shadow-soft">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-semibold text-ink">{it.title}</div>
              <div className="mt-1 text-sm text-ink-muted">{it.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
