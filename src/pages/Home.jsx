import { Link } from 'react-router-dom'
import { Button, Pill, SectionHeading, Blobs, Doodle, Mascot } from '../components/ui'
import PracticeDemo from '../components/PracticeDemo'
import { SUBJECTS, GRADES, THEME } from '../data/curriculum'

const STATS = [
  { value: '20,000+', label: 'skills to explore', emoji: '🧩' },
  { value: '18M', label: 'learners practicing', emoji: '🙌' },
  { value: 'Pre-K–12', label: 'every year covered', emoji: '🎒' },
  { value: '5', label: 'subjects, one world', emoji: '🌈' },
]

const STEPS = [
  {
    n: '1',
    title: 'Pick a thing to try',
    body: 'Choose your grade and subject, or let Skillio suggest a skill that fits you right now.',
    color: 'bg-bubblegum-300',
    emoji: '👆',
  },
  {
    n: '2',
    title: 'Practice, one question at a time',
    body: 'Questions get a little harder as you go. Miss one? You get a friendly explanation, not a red X.',
    color: 'bg-sunshine-300',
    emoji: '✏️',
  },
  {
    n: '3',
    title: 'Watch your Star Score climb',
    body: 'Reach 100 and the skill is yours. Collect the trophy, then go find the next one.',
    color: 'bg-mint-300',
    emoji: '🏆',
  },
]

const FEATURES = [
  {
    title: 'Star Score, not grades',
    body: 'A friendly 0–100 meter that rewards sticking with it. Harder questions are worth more, and a wobble never wipes out your progress.',
    emoji: '⭐',
    tone: 'bg-sunshine-100',
  },
  {
    title: 'Skill Check finds your level',
    body: 'A short, no-pressure check that works out exactly where you are in math and reading — then keeps itself up to date as you learn.',
    emoji: '🧭',
    tone: 'bg-mint-100',
  },
  {
    title: 'Next-step suggestions',
    body: 'Skillio always has a “try this next” ready, picked from the skills just above where you are now. No guessing what to do.',
    emoji: '🎯',
    tone: 'bg-bubblegum-100',
  },
  {
    title: 'Trophies and certificates',
    body: 'Earn stickers for days practiced, questions answered and skills mastered. Print a certificate when you hit a big one.',
    emoji: '🎖️',
    tone: 'bg-grape-100',
  },
  {
    title: 'Explanations that actually explain',
    body: 'Every wrong answer opens a worked, step-by-step walkthrough in plain language — the kind a patient person would give you.',
    emoji: '💡',
    tone: 'bg-tangerine-100',
  },
  {
    title: 'A calm place to learn',
    body: 'No ads, no leaderboards to lose, no streak guilt. Just you, one skill, and as much time as you need.',
    emoji: '🌿',
    tone: 'bg-blueberry-100',
  },
]

const VOICES = [
  {
    quote:
      'I did the whole fractions section because the rocket does a little flip when you get to 100. Now fractions are easy actually.',
    name: 'Amara, age 9',
    tone: 'bg-sunshine-300',
    mascot: 'rocket',
  },
  {
    quote:
      'My son used to hide his math homework. Now he shows me his trophy case. Same kid, completely different feeling about it.',
    name: 'Dev, parent of a 4th grader',
    tone: 'bg-mint-300',
    mascot: 'fox',
  },
  {
    quote:
      'I can see in thirty seconds which five students need me at the start of the lesson. That used to take me a whole evening of grading.',
    name: 'Ms. Okonjo, Grade 6 teacher',
    tone: 'bg-bubblegum-300',
    mascot: 'owl',
  },
]

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="mesh grain relative overflow-hidden border-b border-line">
        <Blobs />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div className="animate-rise">
            <Pill className="text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-mint-500" aria-hidden="true" />
              Free to try — no card, no catch
            </Pill>

            <h1 className="mt-7 text-[3.25rem] leading-[0.98] sm:text-[4.25rem] lg:text-[5rem]">
              Learning that feels like{' '}
              <span className="relative inline-block">
                <span className="accent relative z-10 text-blueberry-600">leveling up</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 20"
                  className="absolute -bottom-2 left-0 z-0 w-full sm:-bottom-3"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 13c60-7 130-10 292-6"
                    fill="none"
                    stroke="var(--color-sunshine-500)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink-soft">
              Math, reading, science, social studies and Spanish — 20,000+ bite-sized skills for
              Pre-K through 12. Answer a question, watch your Star Score grow, collect the trophy.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/join" tone="berry" size="lg">
                Start practicing free <span aria-hidden="true">→</span>
              </Button>
              <Button to="/learn" tone="white" size="lg">
                Browse the skills
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-semibold text-ink-soft">
              <span className="flex items-center gap-2"><span aria-hidden="true">🛡️</span> Kid-safe &amp; ad-free</span>
              <span className="flex items-center gap-2"><span aria-hidden="true">📱</span> Works on any device</span>
              <span className="flex items-center gap-2"><span aria-hidden="true">👨‍👩‍👧</span> Up to 5 kids per family</span>
            </div>
          </div>

          {/* Hero art: mascot + floating stickers */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="sticker-lg relative bg-white/70 p-8 backdrop-blur-sm">
              <Doodle kind="star" className="animate-twinkle absolute -left-6 -top-6 hidden h-14 w-14 sm:block" />
              <Doodle
                kind="heart"
                color="var(--color-bubblegum-500)"
                className="animate-float absolute -right-5 top-10 hidden h-12 w-12 sm:block"
              />
              <Doodle
                kind="bolt"
                color="var(--color-mint-500)"
                className="animate-float-slow absolute -bottom-6 left-10 hidden h-12 w-12 sm:block"
              />

              <Mascot name="rocket" className="animate-float mx-auto h-56 w-56" />

              <div className="sticker mt-6 p-5">
                <p className="eyebrow text-ink-faint">Today’s mission</p>
                <p className="mt-1.5 font-display text-xl font-bold">Multiply by 6</p>
                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-canvas-deep">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-mint-500 to-mint-300" />
                </div>
                <p className="mt-2.5 text-sm font-semibold text-ink-soft">
                  Star Score 78 — two more to go
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="border-b border-line bg-ink text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:gap-y-0">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 text-center lg:px-8 ${i > 0 ? 'lg:border-l lg:border-white/12' : ''}`}
            >
              <span className="text-2xl opacity-90" aria-hidden="true">{s.emoji}</span>
              <p className="mt-2 whitespace-nowrap font-display text-[2rem] font-bold tracking-tight sm:text-[2.75rem]">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Subjects ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Five subjects"
          title="Pick a world to explore"
          subtitle="Every subject is broken into small skills you can finish in a few minutes. Start anywhere — you can always change your mind."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((s, i) => {
            const t = THEME[s.color]
            return (
              <Link
                key={s.id}
                to={`/learn/${s.id}`}
                className={`sticker-lg sticker-hover group relative overflow-hidden p-7 ${t.bgSoft}`}
              >
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${t.ring} opacity-45 blur-2xl`}
                  aria-hidden="true"
                />
                <span className="relative text-5xl" aria-hidden="true">{s.emoji}</span>
                <h3 className="relative mt-4 text-2xl font-extrabold">{s.name}</h3>
                <p className={`relative font-display font-bold ${t.text}`}>{s.tagline}</p>
                <p className="relative mt-3 text-ink-soft">{s.blurb}</p>
                <div className="relative mt-5 flex items-center justify-between">
                  <span className="rounded-full border border-line bg-white px-3 py-1 text-sm font-bold">
                    {s.skillCount} skills
                  </span>
                  <span className="font-display font-bold group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </Link>
            )
          })}

          {/* Grade quick-jump tile */}
          <div className="sticker-lg bg-ink p-7 text-white">
            <h3 className="text-2xl font-extrabold">Jump to your grade</h3>
            <p className="mt-2 text-white/70">Straight to the skills your class is doing now.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {GRADES.map((g) => (
                <Link
                  key={g.id}
                  to={`/learn/math?grade=${g.id}`}
                  className="rounded-xl border-[3px] border-white/30 bg-white/10 px-3 py-1.5 font-display font-bold hover:border-sunshine-500 hover:bg-sunshine-500 hover:text-ink"
                >
                  {g.short}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Try it ---------------- */}
      <section className="border-y border-line bg-canvas-deep py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Try it right now"
                title="This is what practice feels like"
                subtitle="Go on — answer one. Nothing to sign up for, nothing to lose. Get it wrong and you will see exactly what happens next."
              />
              <div className="mt-8 grid gap-4">
                {[
                  ['✅', 'Right answers push your Star Score up — more near the start, less near 100.'],
                  ['💭', 'Wrong answers open an explanation, and cost you a little, never everything.'],
                  ['🎯', 'The questions quietly get harder as you get better.'],
                ].map(([emoji, text]) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-line bg-white text-lg">
                      <span aria-hidden="true">{emoji}</span>
                    </span>
                    <p className="pt-1.5 font-bold text-ink-soft">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <PracticeDemo />
          </div>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps, then you’re off"
          subtitle="No tutorials to sit through. You will understand Skillio about ninety seconds after you start."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className={`sticker-lg relative border-transparent p-7 ${s.color}`}>
              <span className="absolute -top-6 left-6 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white font-display text-2xl font-extrabold shadow-soft">
                {s.n}
              </span>
              <span className="mt-4 block text-4xl" aria-hidden="true">{s.emoji}</span>
              <h3 className="mt-3 text-2xl font-extrabold">{s.title}</h3>
              <p className="mt-2 font-bold text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Features ---------------- */}
      <section className="border-y border-line bg-canvas-deep py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What makes it stick"
            title="Built so kids want to come back"
            subtitle="The clever parts run quietly in the background. What you see is a friendly place that always knows what to give you next."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className={`sticker sticker-hover p-6 ${f.tone}`}>
                <span className="text-4xl" aria-hidden="true">{f.emoji}</span>
                <h3 className="mt-3 text-xl font-extrabold">{f.title}</h3>
                <p className="mt-2 text-ink-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Voices ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Kids, parents, teachers"
          title="What people say about it"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VOICES.map((v, i) => (
            <figure
              key={v.name}
              className={`sticker-lg border-transparent p-7 ${v.tone}`}
            >
              <Mascot name={v.mascot} className="h-16 w-16" />
              <blockquote className="mt-4 font-display text-lg font-bold leading-snug">
                “{v.quote}”
              </blockquote>
              <figcaption className="mt-4 font-bold text-ink/70">— {v.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------------- Grown-ups strip ---------------- */}
      <section className="border-y border-line bg-canvas-deep py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="For grown-ups"
              title="You get the boring-but-useful view"
              subtitle="While they are collecting trophies, you get a plain-English picture of what is going well and what needs a nudge."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Weekly email: what they practiced',
                'Trouble spots, flagged early',
                'Time spent, honestly reported',
                'Set goals without nagging',
                'Up to 5 kids on one plan',
                'Works alongside school',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 font-bold">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line bg-mint-500 text-xs">
                    <span aria-hidden="true">✓</span>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/grown-ups" tone="blue" size="lg">
                See the grown-up side
              </Button>
              <Button to="/membership" tone="white" size="lg">
                Compare plans
              </Button>
            </div>
          </div>

          <div className="sticker-lg bg-white p-6">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-ink-soft">
              This week · Amara, Grade 4
            </p>
            {[
              ['Multiplication facts', 100, 'bg-mint-500'],
              ['Equivalent fractions', 84, 'bg-sunshine-500'],
              ['Main idea', 62, 'bg-tangerine-500'],
              ['Angles', 31, 'bg-bubblegum-500'],
            ].map(([label, val, tone]) => (
              <div key={label} className="mt-4">
                <div className="flex justify-between font-bold">
                  <span>{label}</span>
                  <span className="text-ink-soft">{val}</span>
                </div>
                <div className="mt-1.5 h-4 overflow-hidden rounded-full border border-line bg-white">
                  <div className={`h-full rounded-full ${tone}`} style={{ width: `${val}%` }} />
                </div>
              </div>
            ))}
            <div className="sticker mt-5 bg-sunshine-100 p-3 text-sm font-bold">
              <span aria-hidden="true">💡</span> Suggestion: 10 minutes on angles would round out the
              week nicely.
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="sticker-lg grain relative overflow-hidden border-transparent bg-gradient-to-br from-blueberry-600 via-grape-500 to-bubblegum-500 px-6 py-20 text-center text-white shadow-float sm:px-12">
          <Mascot name="bot" className="animate-float mx-auto h-28 w-28" />
          <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
            Ready when you are
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Make a free account, pick one skill, and see how it feels. That is genuinely the whole
            ask.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/join" tone="primary" size="lg">
              Create a free account
            </Button>
            <Button to="/skill-check" tone="white" size="lg">
              Take the Skill Check
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
