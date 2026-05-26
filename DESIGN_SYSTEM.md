# Design System

## Reference-Based Workflow

Screenshots are visual system references — not templates to copy 1:1.

Always extract and adapt:
- Spacing ratios
- Proportions and size relationships
- Typography hierarchy
- Grid structure
- White space rhythm
- Visual tension
- Card sizing and padding
- Layout systems

Our content is longer than typical Stripe/Linear content.
Adapt container widths, text widths, card sizes, and spacing to fit our content — never compress our copy into a reference's small structure.

---

## Color

| Role             | Value      | Usage                                              |
|------------------|------------|----------------------------------------------------|
| `--brand`        | `#2563EB`  | Hero bg, Final CTA bg, accents, brand elements     |
| `--background`   | `#FFFFFF`  | Base page, alternating white sections              |
| `--surface`      | `#F5F7FA`  | Alternating off-white sections                     |
| `--surface-elevated` | `#FFFFFF` | Card backgrounds (always white)                 |
| `--border`       | oklch      | Subtle card and section borders                    |
| `--ink`          | dark blue-gray | Body text                                      |
| `--ink-muted`    | muted blue-gray | Secondary text                                |

Section color rules:
- **Hero**: `bg-brand` (strong blue) — top only
- **Final CTA**: `bg-brand` (strong blue) — bottom only
- **All other sections**: zebra alternating `bg-background` ↔ `bg-surface`
- First section after Hero: `bg-background` (white)

Accent surface palette (for subtle card tints):
- `#FFFFFF`, `#F5F7FA`, `#F3F5F7`, `#EEF2F6`

---

## Typography

Font: **Satoshi** (via Fontshare CDN — weights 300–900)

| Element         | Size                       | Weight   | Tracking       | Leading |
|-----------------|----------------------------|----------|----------------|---------|
| H1 (Hero)       | `3.75rem` → `4.5rem` lg   | 800      | `-0.03em`      | 1.08    |
| H2 (Section)    | `2.5rem` → `3rem` lg      | 800      | `-0.03em`      | 1.05    |
| H3 (Card title) | `1.125rem` – `1.25rem`    | 700      | `-0.01em`      | 1.25    |
| Body primary    | `1.0625rem`               | 500      | normal         | 1.65    |
| Body secondary  | `0.9375rem`               | 400      | normal         | 1.65    |
| Label/eyebrow   | `0.65rem`                 | 600      | `0.08em` wide  | —       |
| Caption         | `0.75rem` – `0.875rem`    | 400–500  | normal         | relaxed |

Rules:
- Headlines: dominant, large, extrabold, tight tracking
- No monotone text blocks — hierarchy always has 3+ levels
- Section headlines left-aligned except FinalCta (centered)

---

## Spacing

| Context           | Value         |
|-------------------|---------------|
| Section vertical  | `py-20 md:py-28` |
| Section header mb | `mb-12 md:mb-16` |
| Card inner        | `p-7 lg:p-8`  |
| Card gap          | `gap-5 lg:gap-6` |
| Content max-width | `max-w-7xl` (page), `max-w-4xl` (text), `max-w-2xl` (narrow prose) |

---

## Cards

- Background: `bg-surface-elevated` (always white)
- Border: `border border-border`
- Radius: `rounded-2xl`
- Shadow: `shadow-card` (subtle)
- Padding: `p-7 lg:p-8` — adapt upward for longer content
- Never compress content — increase padding/card size instead

---

## Layout

- Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` or `lg:grid-cols-4`
- Bento: asymmetric grids using `col-span` and `row-span` for visual hierarchy
- No full-width walls of text — always pair with icons, numbers, or visual anchors
- Asymmetric layouts preferred: 2-col with unequal widths, bento, offset grids

---

## Component Patterns

**Section header block:**
```tsx
<div className="mb-12 md:mb-16">
  <h2 className="text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink md:text-5xl">
    Headline
  </h2>
  <p className="mt-4 max-w-2xl text-base text-ink-muted leading-relaxed">
    Supporting text
  </p>
</div>
```

**Card with eyebrow + body:**
```tsx
<div className="rounded-2xl border border-border bg-surface-elevated p-7 shadow-card lg:p-8">
  <div className="text-[0.65rem] font-semibold uppercase tracking-widest text-brand">Label</div>
  <p className="mt-4 text-base font-medium leading-relaxed text-ink">Statement</p>
</div>
```

---

## Brand Feel

We are:
- Modern Enterprise SaaS platform
- High-quality B2B training
- Quiet, premium, trustworthy

We are not:
- AI guru / futuristic tech
- Generic template builder
- Loud startup energy

---

## Working Rules

1. Work section by section — never redesign the whole page at once
2. Never invent content or rewrite copy
3. Always adapt reference visual systems to our content length
4. Screenshots = extract the system, not the content
5. Never use bun in Bash — use PowerShell for npm/dev commands
