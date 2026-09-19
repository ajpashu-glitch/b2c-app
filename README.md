# Skillio 🚀

A kid-friendly, modern reimagining of an IXL-style K–12 practice site.

Same product shape as the original — five subjects, Pre-K through Grade 12, thousands of
bite-sized skills, an adaptive diagnostic, a proficiency meter and an awards system — rebuilt
around a warmer, more contemporary visual language.

## Design system

- **Type.** [Outfit](https://fonts.google.com/specimen/Outfit) for display (tight tracking,
  heavy weights), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for
  body, and [Fraunces](https://fonts.google.com/specimen/Fraunces) italic as a serif accent on
  a word or two inside a headline.
- **Elevation.** Hairline borders plus layered, tinted shadows (`--shadow-soft` → `--shadow-float`)
  instead of hard offset slabs. Solid buttons carry a shadow tinted with their own hue, so a
  hover lift reads as light rather than a grey smudge.
- **Color.** A warm off-white canvas (`#fbf8f3`) with richer, slightly desaturated accents, so
  large fills stay calm and the accents do the work. Dark bands use deep ink, not saturated purple.
- **Texture.** A wide, low-opacity mesh wash on hero sections plus a fine SVG grain, which keeps
  big flat areas from looking like plastic.

## What's here

| Route | Page |
| --- | --- |
| `/` | Home — hero, subjects, playable practice demo, how it works, features, testimonials |
| `/learn` | Every subject and grade in one map |
| `/learn/:subjectId` | Skill browser with a grade picker, search and per-skill progress |
| `/skill-check` | The adaptive diagnostic (IXL's Real-Time Diagnostic analogue) |
| `/awards` | Trophy case and printable certificates |
| `/membership` | Plans, monthly/yearly toggle, FAQ accordion |
| `/grown-ups` | Tabbed view for families, teachers and schools, with a mock dashboard |
| `/join`, `/sign-in` | Account forms with avatar picker |
| `*` | 404 |

### Renamed concepts

The IXL ideas are kept but given warmer names: **SmartScore → Star Score**, **Real-Time
Diagnostic → Skill Check**, **Analytics → the grown-up side**.

## Interactive bits

- **Practice demo** (home) — answer real questions; correct answers raise the Star Score
  (with diminishing gains past 80), wrong ones cost a little and open an explanation.
- **Skill browser** — grade tabs, live search, per-skill progress meters.
- **Membership** — billing-period toggle and an accordion FAQ.
- **Grown-ups** — tabbed audience switcher over a mock progress dashboard.

## Stack

React 18 · React Router 6 · Vite 5 · Tailwind CSS v4 (via `@tailwindcss/vite`). No UI kit —
the design system lives in `src/index.css` as `@theme` tokens plus a few `.sticker` component
classes.

```
src/
  index.css            design tokens, keyframes, sticker/card primitives
  App.jsx              routing + skip link + scroll restoration
  components/
    ui.jsx             Button, Pill, SectionHeading, Blobs, Doodle, Mascot (inline SVG)
    Navbar.jsx         sticky nav, subjects dropdown, mobile menu
    Footer.jsx
    StarScore.jsx      0–100 proficiency meter with an 80 milestone tick
    PracticeDemo.jsx   the playable question widget
  data/curriculum.js   subjects, grades and skill lists
  pages/               one file per route
```

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the build
```

## Accessibility & polish

- Semantic landmarks, a skip link, and visible 3px focus rings on every interactive element.
- `aria-pressed` on toggles, `aria-expanded` on disclosures, `role="progressbar"` with values
  on the Star Score, `aria-live` on practice feedback, and decorative art marked `aria-hidden`.
- All animation is disabled under `prefers-reduced-motion`.
- Mascots and doodles are inline SVG, so there are no image assets to download.

## Note

Skillio is a design demo. The forms don't create accounts, and the progress figures are
deterministic sample data — not a real service, and not affiliated with IXL.
