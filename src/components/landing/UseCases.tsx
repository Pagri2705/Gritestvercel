import { Mail, FileText, BarChart3, Users, MessageSquare, Workflow, Check } from "lucide-react";

const cases = [
  { icon: Mail, title: "Use Case Title" },
  { icon: FileText, title: "Use Case Title" },
  { icon: BarChart3, title: "Use Case Title" },
  { icon: Users, title: "Use Case Title" },
  { icon: MessageSquare, title: "Use Case Title" },
  { icon: Workflow, title: "Use Case Title" },
];

export function UseCases() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-widest text-brand">Section Label</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Use Case Headline Placeholder
          </h2>
          <p className="mt-4 text-lg text-ink-muted">Subheadline Placeholder über die Anwendungsfelder.</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-border bg-background p-7 shadow-soft hover:shadow-card transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-lg font-semibold text-ink">{c.title}</div>
              <p className="mt-2 text-sm text-ink-muted">Short use case description placeholder.</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {[0, 1, 2, 3].map((j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    Bullet Placeholder
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
