import { useState } from "react";

const stats = [
  { value: "12+",     label: "Unternehmen begleitet"            },
  { value: "91+",     label: "Mitarbeiter geschult"             },
  { value: "3.850 €", label: "Ersparnis pro Mitarbeiter / Jahr" },
];

// Gradient position shifts per stat column — short concentrated burst
const gradients = [
  "linear-gradient(90deg, transparent 0%, #a78bfa 8%, #ec4899 18%, transparent 28%)",
  "linear-gradient(90deg, transparent 36%, #a78bfa 44%, #ec4899 54%, transparent 64%)",
  "linear-gradient(90deg, transparent 72%, #a78bfa 80%, #ec4899 90%, transparent 100%)",
];

function GradientLine({ active }: { active: number }) {
  return (
    <div className="relative" style={{ height: 1, background: "rgba(0,0,0,0.1)" }}>
      {gradients.map((g, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            background: g,
            opacity: active === i ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        />
      ))}
    </div>
  );
}

export function StatsSection() {
  const [hovered, setHovered] = useState(0);

  return (
    <section className="bg-white pt-8 pb-0 md:pt-12">

      <div className="px-6 mb-12">
        <h2 className="text-[3rem] font-semibold leading-[1.12] tracking-[-0.03em] text-ink text-center">
          Der Beweis
          <br />
          liegt in den Zahlen.
        </h2>
      </div>

      {/* Top gradient line — full width */}
      <GradientLine active={hovered} />

      <div className="grid grid-cols-3">
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className="flex flex-col items-center text-center px-8 pt-10 pb-8 cursor-default"
            onMouseEnter={() => setHovered(i)}
          >
            <span
              className="text-[2.6rem] font-light leading-none tracking-[-0.03em] md:text-[3.31rem]"
              style={{ color: "rgba(15,41,66,1)" }}
            >
              {value}
            </span>
            <span
              className="mt-3 text-[0.745rem] leading-snug font-medium max-w-[160px]"
              style={{ color: "rgba(15,41,66,0.55)" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom gradient line — full width */}
      <GradientLine active={hovered} />

    </section>
  );
}
