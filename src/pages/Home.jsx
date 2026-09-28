import { Link } from 'react-router-dom'
import { Button, Pill, SectionHeading, Blobs, Doodle, Mascot } from '../components/ui'
import PracticeDemo from '../components/PracticeDemo'
import ClassExplorer from '../components/ClassExplorer'
import { SUBJECTS, THEME } from '../data/curriculum'

const STATS = [
  { value: '20,000+', label: 'skills to explore', emoji: '🧩' },
  { value: '18M', label: 'learners practicing', emoji: '🙌' },
  { value: 'Pre-K–12', label: 'every class covered', emoji: '🎒' },
  { value: '5', label: 'subjects, one world', emoji: '🌈' },
]

const STEPS = [
  {
    n: '01',
    title: 'Pick a thing to try',
    body: 'Choose your class and subject, or let Skillio suggest a skill that fits you right now.',
    emoji: '👆',
  },
  {
    n: '02',
    title: 'Practice, one question at a time',
    body: 'Questions get a little harder as you go. Miss one? You get a friendly explanation, not a red X.',
    emoji: '✏️',
  },
  {
    n: '03',
    title: 'Watch your Star Score climb',
    body: 'Reach 100 and the skill is yours. Collect the trophy, then go find the next one.',
    emoji: '🏆',
  },
]

/* Bento: `span` drives the grid footprint so tiles interlock rather than tile evenly. */
const FEATURES = [
  {
    title: 'Star Score, not grades',
    body: 'A friendly 0–100 meter that rewards sticking with it. Harder questions are worth more, and a wobble never wipes out your progress.',
    emoji: '⭐',
    color: 'text-sunshine-500',
    span: 'lg:col-span-2 lg:row-span-2',
    feature: true,
  },
  {
    title: 'Skill Check finds your level',
    body: 'A short, no-pressure check that works out exactly where you are — then keeps itself up to date.',
    emoji: '🧭',
    color: 'text-mint-500',
    span: 'lg:col-span-2',
  },
  {
    title: 'Next-step suggestions',
    body: 'Always a “try this next”, picked from just above where you are now.',
    emoji: '🎯',
    color: 'text-bubblegum-500',
    span: '',
  },
  {
    title: 'Trophies & certificates',
    body: 'Earn stickers for days practiced, questions answered and skills mastered.',
    emoji: '🎖️',
    color: 'text-grape-500',
    span: '',
  },
  {
    title: 'Explanations that explain',
    body: 'Every wrong answer opens a worked, step-by-step walkthrough in plain language.',
    emoji: '💡',
    color: 'text-tangerine-500',
    span: 'lg:col-span-2',
  },
  {
    title: 'A calm place to learn',
    body: 'No ads, no leaderboards to lose, no streak guilt. Just you and one skill.',
    emoji: '🌿',
    color: 'text-blueberry-500',
    span: 'lg:col-span-2',
  },
]

const VOICES = [
  {
    quote:
      'I did the whole fractions section because the rocket does a little flip when you get to 100. Now fractions are easy actually.',
    name: 'Amara',
    role: 'age 9',
    mascot: 'rocket',
  },
  {
    quote:
      'My son used to hide his math homework. Now he shows me his trophy case. Same kid, completely different feeling about it.',
    name: 'Dev',
    role: 'parent of a 4th grader',
    mascot: 'fox',
  },
  {
    quote:
      'I can see in thirty seconds which five students need me at the start of the lesson. That used to take me a whole evening of grading.',
    name: 'Ms. Okonjo',
    role: 'Grade 6 teacher',
    mascot: 'owl',
  },
]

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="mesh grain relative overflow-hidden border-b border-line">
        <Blobs />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div className="animate-rise">
            <Pill className="text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-mint-500" aria-hidden="true" />
              Free to try — no card, no catch
            </Pill>

            <h1 className="mt-7 text-[3.25rem] leading-[0.98] sm:text-[4.25rem] lg:text-[5rem]">
              Learning that feels like{' '}
              <span className="accent text-gradient">leveling up</span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink-soft">
              Math, reading, science, social studies and Spanish — 20,000+ bite-sized skills for
              every class from Pre-K to 12. Answer a question, watch your Star Score grow, collect
              the trophy.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/join" tone="berry" size="lg">
                Start practicing free <span aria-hidden="true">→</span>
              </Button>
              <Button href="#classes" tone="white" size="lg">
                Find your class
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-semibold text-ink-soft">
              <span className="flex items-center gap-2"><span aria-hidden="true">🛡️</span> Kid-safe &amp; ad-free</span>
              <span className="flex items-center gap-2"><span aria-hidden="true">📱</span> Works on any device</span>
              <span className="flex items-center gap-2"><span aria-hidden="true">👨‍👩‍👧</span> Up to 5 kids per family</span>
            </div>
          </div>

          {/* Hero art */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="glass edge-lit relative rounded-[2.25rem] p-8">
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

              <Mascot name="rocket" className="animate-float mx-auto h-52 w-52" />

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

      {/* ---------------- Classes ---------------- */}
      <section id="classes" className="scroll-mt-20 border-b border-line bg-canvas-deep py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Every class, Pre-K to 12"
            title="Find the year you’re in"
            subtitle="Fourteen classes, each broken into skills you can finish in a few minutes. Have a look inside before you sign up for anything."
          />
          <div className="mt-14">
            <ClassExplorer />
          </div>
        </div>
      </section>

      {/* ---------------- Subjects ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="Five subjects"
          title="Pick a world to explore"
          subtitle="Start anywhere — you can always change your mind."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((s, i) => {
            const t = THEME[s.color]
            return (
              <Link
                key={s.id}
                to={`/learn/${s.id}`}
                className={`bento bloom group p-7 ${t.text} ${i === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div className="relative flex items-start gap-4">
                  <span className="text-4xl" aria-hidden="true">{s.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-ink">{s.name}</h3>
                    <p className="font-display text-sm font-semibold">{s.tagline}</p>
                  </div>
                </div>
                <p className="relative mt-4 max-w-md text-ink-soft">{s.blurb}</p>
                <div className="relative mt-6 flex items-center justify-between">
                  <span className="rounded-full border border-line bg-canvas px-3 py-1 text-sm font-semibold text-ink-soft">
                    {s.skillCount} skills
                  </span>
                  <span className="font-display text-sm font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ---------------- Try it ---------------- */}
      <section className="border-y border-line bg-canvas-deep py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Try it right now"
                title="This is what practice feels like"
                subtitle="Go on — answer one. Nothing to sign up for. Get it wrong and you will see exactly what happens next."
              />
              <div className="mt-10 grid gap-5">
                {[
                  ['✅', 'Right answers push your Star Score up — more near the start, less near 100.'],
                  ['💭', 'Wrong answers open an explanation, and cost you a little, never everything.'],
                  ['🎯', 'The questions quietly get harder as you get better.'],
                ].map(([emoji, text]) => (
                  <div key={text} className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-white text-lg shadow-soft">
                      <span aria-hidden="true">{emoji}</span>
                    </span>
                    <p className="pt-2 font-medium text-ink-soft">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <PracticeDemo />
          </div>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps, then you’re off"
          subtitle="No tutorials to sit through. You will understand Skillio about ninety seconds after you start."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="bento p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold tracking-widest text-ink-faint">
                  {s.n}
                </span>
                <span className="text-3xl" aria-hidden="true">{s.emoji}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------- Features (bento) ---------------- */}
      <section className="border-y border-line bg-canvas-deep py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What makes it stick"
            title="Built so kids want to come back"
            subtitle="The clever parts run quietly in the background. What you see is a friendly place that always knows what to give you next."
          />
          <div className="mt-14 grid auto-rows-[minmax(0,auto)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className={`bento bloom ${f.color} ${f.span} ${f.feature ? 'p-9' : 'p-7'}`}
              >
                <span className={f.feature ? 'text-5xl' : 'text-3xl'} aria-hidden="true">
                  {f.emoji}
                </span>
                <h3
                  className={`mt-4 font-bold text-ink ${f.feature ? 'text-3xl' : 'text-xl'}`}
                >
                  {f.title}
                </h3>
                <p className={`mt-2.5 text-ink-soft ${f.feature ? 'text-lg' : ''}`}>{f.body}</p>

                {/* The headline tile demonstrates the meter it describes. */}
                {f.feature && (
                  <div className="mt-8 rounded-2xl border border-line bg-canvas p-5 text-ink">
                    {[
                      ['Multiplication facts', 100, 'from-mint-500 to-mint-300', 'Mastered'],
                      ['Equivalent fractions', 84, 'from-sunshine-500 to-sunshine-300', 'Nice work'],
                      ['Angles', 31, 'from-tangerine-500 to-tangerine-300', 'Warming up'],
                    ].map(([label, val, grad, note]) => (
                      <div key={label} className="mt-4 first:mt-0">
                        <div className="flex items-baseline justify-between text-sm">
                          <span className="font-semibold">{label}</span>
                          <span className="font-medium text-ink-soft">
                            {val} · {note}
                          </span>
                        </div>
                        <div className="relative mt-2 h-2.5 overflow-hidden rounded-full bg-canvas-deep">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${grad}`}
                            style={{ width: `${val}%` }}
                          />
                          <span
                            className="absolute inset-y-0 left-[80%] w-px bg-ink/20"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    ))}
                    <p className="mt-4 text-xs font-medium text-ink-faint">
                      The tick marks 80 — the point where a skill has clicked.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Voices ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="Kids, parents, teachers" title="What people say about it" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {VOICES.map((v) => (
            <figure key={v.name} className="bento flex h-full flex-col p-8">
              <span className="font-display text-5xl leading-none text-line-strong" aria-hidden="true">
                “
              </span>
              <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-ink">
                {v.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <Mascot name={v.mascot} className="h-11 w-11 shrink-0" />
                <span>
                  <span className="block font-display font-semibold">{v.name}</span>
                  <span className="block text-sm text-ink-soft">{v.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------------- Grown-ups ---------------- */}
      <section className="border-y border-line bg-canvas-deep py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="For grown-ups"
              title="You get the boring-but-useful view"
              subtitle="While they are collecting trophies, you get a plain-English picture of what is going well and what needs a nudge."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                'Weekly email: what they practiced',
                'Trouble spots, flagged early',
                'Time spent, honestly reported',
                'Set goals without nagging',
                'Up to 5 kids on one plan',
                'Works alongside school',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5 font-medium">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint-500 text-[0.7rem] text-white">
                    <span aria-hidden="true">✓</span>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/grown-ups" tone="blue" size="lg">
                See the grown-up side
              </Button>
              <Button to="/membership" tone="white" size="lg">
                Compare plans
              </Button>
            </div>
          </div>

          <div className="sticker-lg bg-white p-7">
            <p className="eyebrow text-ink-faint">This week · Amara, Grade 4</p>
            {[
              ['Multiplication facts', 100, 'bg-mint-500'],
              ['Equivalent fractions', 84, 'bg-sunshine-500'],
              ['Main idea', 62, 'bg-tangerine-500'],
              ['Angles', 31, 'bg-bubblegum-500'],
            ].map(([label, val, tone]) => (
              <div key={label} className="mt-5">
                <div className="flex justify-between text-sm font-semibold">
                  <span>{label}</span>
                  <span className="text-ink-soft">{val}</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-canvas-deep">
                  <div className={`h-full rounded-full ${tone}`} style={{ width: `${val}%` }} />
                </div>
              </div>
            ))}
            <div className="mt-7 rounded-2xl bg-sunshine-100 p-4 text-sm font-medium">
              <span aria-hidden="true">💡</span> Suggestion: 10 minutes on angles would round out the
              week nicely.
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grain relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blueberry-600 via-grape-500 to-bubblegum-500 px-6 py-20 text-center text-white shadow-float sm:px-12">
          <Mascot name="bot" className="animate-float mx-auto h-28 w-28" />
          <h2 className="mt-7 text-4xl font-bold sm:text-5xl">Ready when you are</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Make a free account, pick one skill, and see how it feels. That is genuinely the whole
            ask.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
