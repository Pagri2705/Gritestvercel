# Claude Style System
## Visuelles Referenzsystem für KI Akademie

Dieses Dokument beschreibt das visuelle Basissystem der Website.
Es ist kein Code — sondern eine strukturierte Beschreibung der Designprinzipien.

**Priorität bei zukünftigen Änderungen:**
1. CLAUDE_STYLE_SYSTEM.md (dieses Dokument — übergeordnetes System)
2. DESIGN_SYSTEM.md (projekt-spezifische Token und Regeln)
3. Erst dann spontane neue Ideen

---

## Grundhaltung

Die Website wirkt wie eine **hochwertige B2B SaaS Plattform mit Editorial-DNA**.

Nicht:
- Futuristische KI-Ästhetik
- Startup-Energie
- Generischer Template-Look

Sondern:
- Ruhige Premium-Qualität
- Vertrauenswürdig und kompetent
- Modern aber nicht kalt
- Strukturiert aber nicht steif

Referenzgefühl: Ein hochwertiges Business-Magazin trifft auf moderne SaaS-Plattform.

---

## Farb-Philosophie

### Das Dreiklang-System

Das visuelle System basiert auf drei Oberflächen, die abwechselnd durch die Seite führen:

**1. Cream Canvas** — Warme helle Hauptfläche (`#faf9f5`)
- Bewusst warm, nicht neutral weiß
- Die erste Farbwahl nach dem Hero
- Erzeugt ein papier-ähnliches, redaktionelles Gefühl
- Unterscheidet von kühlen grauen SaaS-Seiten

**2. Cream Card** — Leicht getönte Kartenfläche (`#efe9de`)
- Eine Nuance dunkler als Canvas
- Für Feature-Karten, Content-Karten, Bento-Elemente
- Keine Schatten — Tiefe entsteht durch Farbflächen, nicht Shadows
- Hairline-Border: `#e6dfd8` (warm, nicht kalt)

**3. Dark Navy** — Dunkle Ankerfläche (`#181715`)
- Nur für: Footer, Featured Pricing Card, Final CTA (optional)
- Schafft dramatischen Kontrast zur Cream-Welt
- Text darauf: Cream `#faf9f5` (echoes canvas)
- Sekundärtext: `#a09d96` (warm gedämpft)

### Coral als Markenfarbe (originale Claude.ai Farbe)
- `#cc785c` — Warm coral, die Signaturfarbe des Systems
- Einsatz: primäre CTAs, Markenelemente (Logo, Nav-Badge), Akzent-Labels
- Nicht als Hintergrundfarbe für Content-Sections
- Großzügig nur auf Full-Bleed CTA-Karten (Hero, FinalCta)
- Sparsam auf Einzelelementen — Coral hat Spannung nur wenn es selten ist
- Harmoniert perfekt mit dem warmen Cream Canvas

### Was wir nicht verwenden
- Kühle Grautöne (`#F5F7FA` und ähnliche) — zu generisch, zu SaaS-Standard
- Pure White als einzige helle Fläche — kein Charakter
- Viele verschiedene Farben — das System hat drei Flächen, nicht mehr

---

## Typografie-Philosophie

### Zwei-Schriften-System

**Display-Schrift (Cormorant Garamond) — für alle Headlines**
- Einsatz: H1, H2, H3, alle Section-Headlines
- Gewicht: 600 (semibold) — nicht fett, nicht dünn
- Tracking: negativ (`-0.02em`) — Headlines wirken kompakter
- Zeilenabstand: 1.08–1.1 — eng, kontrolliert
- Charakter: Editorial, literarisch, vertrauenswürdig

Diese Entscheidung ist identitätsstiftend. Serif-Headlines unterscheiden von 90% der KI-Brands die alle Bold-Sans-Serif nutzen.

**Body-Schrift (Satoshi) — für alles andere**
- Einsatz: Body Text, Labels, Navigation, Buttons, Captions
- Gewicht: 400 (Text), 500 (Labels, Buttons), 600 (Semibold-Akzente)
- Charakter: Humanistisch, modern, gut lesbar
- Niemals für Headlines verwenden

### Typografische Hierarchie (4 Ebenen)

| Ebene | Schrift | Größe | Gewicht | Verwendung |
|---|---|---|---|---|
| Display | Cormorant | 48–64px | 600 | Hero H1 |
| Section Head | Cormorant | 36–48px | 600 | Section H2 |
| Card Title | Satoshi | 16–18px | 500–600 | Karten, Bullets |
| Body | Satoshi | 15–17px | 400 | Fließtext |
| Caption | Satoshi | 12–13px | 500 | Labels, Tags |

**Kernprinzip:** Serif-Display gibt Würde. Satoshi-Body gibt Klarheit. Die Kombination ist Editorial ohne altmodisch zu wirken.

### Was vermeiden
- `font-extrabold` (800) bei Cormorant — wirkt bombastisch
- Helvetica oder Geometric Sans für Headlines — zu neutral
- Zu viele Gewichtsvariation — max. 3 in einer Section

---

## Spacing & Rhythmus

### Vertikaler Seitenrhythmus

Das System atmet in regelmäßigen Abständen:

- **Section-Padding:** `py-24 md:py-32` (96px+) — großzügig, editorial
- **Section-Header-Abstand:** `mb-14 md:mb-16` — klare Trennung
- **Card-Innen-Padding:** `p-8 lg:p-10` (32px+) — Text braucht Luft
- **Card-Abstände:** `gap-5 lg:gap-6`

**Weißraum ist kein Verschwendung — er ist Qualität.**
Enger Abstand = billiger Look. Großzügiger Abstand = Premium-Gefühl.

### Horizontale Container

- **Max-Width Seite:** `max-w-7xl` (1280px)
- **Textblöcke:** `max-w-2xl` (672px) für Fließtext
- **Schmale Prosa:** `max-w-lg` oder `max-w-xl` für Leads
- **Karten:** volle Column-Breite, nie künstlich verkleinern

### Unsere Inhalte sind länger als Referenz-Content

Claude.ai hat kürzere Texte. Unsere deutschen Texte sind ausführlicher.

Deshalb:
- Card-Padding großzügiger als in der Referenz
- Textbreiten nicht zu eng — Inhalte nicht komprimieren
- Lieber größere Cards als übervolle kleine Cards
- Section-Headlines dürfen 2–3 Zeilen haben

---

## Elevation & Tiefe

### Tiefe durch Farbe, nicht durch Schatten

Das System bevorzugt **Farbflächen-Kontrast** als Tiefe-Signal:

| Ebene | Methode | Beispiel |
|---|---|---|
| Flach | Keine Border, kein Shadow | Hero, Section-Backgrounds |
| Hairline | 1px `#e6dfd8` Border | Cards auf Canvas |
| Cream Card | Dunklerer Cream-Hintergrund | Feature Cards |
| Dark Surface | Dark Navy Background | Footer, Featured Card |
| Subtiler Shadow | Nur auf Hover | Interaktive Elemente |

### Was wir vermeiden
- Viele verschiedene Box-Shadows gleichzeitig
- Starke Shadows als primäres Tiefe-Signal
- Cards die durch Schatten schweben statt auf der Fläche zu sitzen

---

## Layout-Prinzipien

### Asymmetrische Grids bevorzugen

Nicht alle 12 Columns gleich aufteilen. Interessanter:
- `grid-cols-[1fr_420px]` — Inhalt + feste Bild-Spalte
- `lg:col-span-2` in Bento-Grids — Dominante Karte
- Zweispaltig mit Headline links + Content rechts
- Bento-Layouts mit unterschiedlichen Card-Größen

### Bento Grid für Trust/Feature-Sections

Wie in `TrustBars.tsx`: Unterschiedlich große Karten erzeugen visuelle Spannung.
- Eine dominante Karte (groß)
- Eine dunkle Akzentkarte (row-span-2)
- Kleinere Ergänzungskarten

### Section-Struktur

Jede Content-Section folgt diesem Muster:
1. **Header-Block:** H2 + optionaler Lead-Text (max. 2 Zeilen)
2. **Content-Grid:** Cards, Listen, Visuals
3. **Kein sichtbarer CTA** — außer in FinalCta-Section

---

## Card-Philosophie

### Anatomie einer guten Karte

```
┌─────────────────────────────────┐
│ Kleines Label (Satoshi, 12px,   │
│ uppercase, Brand-Farbe)         │
│                                 │
│ Hauptaussage (Satoshi, 15-17px, │
│ font-medium, Ink)               │
│                                 │
│ Optionaler Icon (oben rechts)   │
└─────────────────────────────────┘
```

**Regeln:**
- Background: `#efe9de` (cream card) oder `#faf9f5` (canvas)
- Border: 1px `#e6dfd8` (warm hairline)
- Radius: `rounded-2xl` (16px)
- Padding: `p-7 lg:p-8` — nie enger

### Card-Hierarchie in Bento-Grids

1. **Dominante Karte** — `col-span-2`, große Quote/Aussage
2. **Dunkle Ankerkarte** — `bg-surface-dark` oder `bg-ink`, `row-span-2`
3. **Standard-Karte** — einfach, Icon + Text
4. **Akzentkarte** — leichter Brand-Hintergrund (`bg-brand/5`)

---

## CTA-Hierarchie

### Primärer CTA (Hauptaktion der Seite)
- Hintergrund: Weiß auf dunklen Sections, Blau auf hellen
- Schrift: Satoshi, 14–15px, semibold
- Form: `rounded-xl` oder `rounded-lg`
- Nur EINMAL prominent pro Seite (im Hero oder FinalCta)
- Mit Pfeil-Icon für Richtungsgefühl

### Sekundärer CTA
- Transparenter Hintergrund mit Border
- Gleiche Größe wie primär für Balance
- Tritt visuell zurück

### Tertiäre Links
- Nur Text, keine Button-Form
- In Sections die nicht primärer CTA-Bereich sind

### Platzierung
- Hero: CTA-Gruppe direkt nach Subheadline
- Content-Sections: Kein CTA — Inhalte überzeugen
- FinalCta: Der letzte, zentrale Moment

---

## Bild-Integration

### Editorial-Prinzipien

Bilder werden **als Teil der Komposition** behandelt, nicht als Dekoration.

- Kontrollierter Crop: Gesicht/Subject immer sichtbar
- Aspect-Ratio bewusst wählen: `4/5` für Portrait-Wirkung
- `object-position` anpassen: Gesicht nicht abschneiden
- Rounded Container: `rounded-2xl` — integriert, nicht aufgeklebt

### Video als Hero-Background
- Overlay: `bg-black/50` für Lesbarkeit
- Video muss zum Tonfall passen: ruhig, professionell, nicht flashy
- Content zentriert darüber — Video ist Atmosphäre, kein Inhalt

### Foto in Sections
- Immer in einem Container mit definiertem Aspect-Ratio
- Nie freigestellt ohne Rahmen
- Subtiler Shadow wenn auf heller Fläche: `shadow-elevated`

---

## Rhythmus der Sections

Die Seite folgt diesem visuellen Rhythmus von oben nach unten:

```
Hero          → Video/Dunkel (Einstieg mit Kraft)
TrustBars     → Canvas warm (erste helle Atmung)
Problem       → Surface cream (weiter hell)
Process       → Canvas warm (zurück zu heller Fläche)
Outcomes      → Surface cream
UseCases      → Canvas warm
Testimonials  → Surface cream
About         → Canvas warm
RoiCalculator → Surface cream
Pricing       → Canvas warm (Featured Card: Dark Navy)
FAQ           → Surface cream
FinalCta      → Blau (Marken-Abschluss)
Footer        → Dark Navy (dunkler Anker)
```

**Nie zweimal dieselbe Fläche hintereinander.**
Der Rhythmus erzeugt Pacing — wie Absätze in einem langen Text.

---

## Was diese Website von Claude.ai unterscheidet

Wir sind heller, strukturierter, SaaS-lastiger:

| Claude.ai | KI Akademie |
|---|---|
| Maximale Editorial-Wärme | Editorial-Wärme mit SaaS-Struktur |
| Serif-Headlines dominant | Serif-Headlines, aber mit modernem Satoshi-Body |
| Sehr wenig Struktur | Klare Grids und Card-Systeme |
| Coral als Akzentfarbe | Coral `#cc785c` — identisch, perfekt zur Cream-Palette |
| Viel Weißraum (Magazin) | Viel Weißraum + aber mehr Inhaltsdichte |
| Dark Navy für Produkt-Mockups | Dark Navy für Footer + Featured Cards |

**Kurzformel:** Claude.ai × 80% + moderne SaaS × 20%.

---

## Checkliste vor jeder Änderung

Bevor ein neues Element oder eine neue Section entworfen wird:

- [ ] Welche Fläche hat die Section? (Canvas / Surface / Dark)
- [ ] Folgt die Fläche dem Zebra-Rhythmus?
- [ ] Headline: Cormorant Garamond, semibold (600), negatives Tracking?
- [ ] Body: Satoshi, 400 oder 500, ausreichend Zeilenabstand?
- [ ] Cards: Cream-Hintergrund, Hairline-Border, großzügiges Padding?
- [ ] Abstände: Mindestens 96px Section-Padding?
- [ ] CTA: Blau nur wenn primäre Aktion? Nicht übermäßig?
- [ ] Schatten: Sparsam — Tiefe durch Farbfläche, nicht Shadow?
- [ ] Inhalte: Keine Copy umgeschrieben, keine Texte erfunden?
- [ ] Bilder: Kontrollierter Crop, Aspect-Ratio definiert?
