import { useState } from 'react'
import { Button, SectionHeading, Mascot } from '../components/ui'

const PLANS = [
  {
    name: 'Explorer',
    tag: 'Free forever',
    monthly: 0,
    yearly: 0,
    blurb: 'Enough to see whether Skillio clicks for your kid.',
    tone: 'bg-white',
    cta: 'Create free account',
    ctaTone: 'white',
    features: [
      '10 questions a day',
      'All five subjects',
      'Star Score and trophies',
      'One learner',
    ],
    missing: ['Skill Check', 'Progress emails', 'Explanations on every question'],
  },
  {
    name: 'Family',
    tag: 'Most families pick this',
    monthly: 12,
    yearly: 99,
    blurb: 'Unlimited practice for everyone under one roof.',
    tone: 'bg-sunshine-300',
    cta: 'Start 30-day free trial',
    ctaTone: 'berry',
    featured: true,
    features: [
      'Unlimited questions',
      'Up to 5 learners',
      'Full Skill Check + map',
      'Step-by-step explanations',
      'Weekly progress email',
      'Printable certificates',
    ],
    missing: [],
  },
  {
    name: 'Classroom',
    tag: 'For teachers & schools',
    monthly: null,
    yearly: null,
    blurb: 'Everything in Family, plus the tools a class of thirty needs.',
    tone: 'bg-mint-300',
    cta: 'Talk to us',
    ctaTone: 'blue',
    features: [
      'Whole-class dashboards',
      'Assign skills and due dates',
      'Standards alignment',
      'Live trouble-spot alerts',
      'Roster sync',
      'Priority support',
    ],
    missing: [],
  },
]

const FAQ = [
  {
    q: 'Do I need to pay to try it?',
    a: 'No. The Explorer plan is free forever and needs no card. Family plans come with a 30-day trial, and you can cancel from your account page in two clicks.',
  },
  {
    q: 'How many kids can use one Family plan?',
    a: 'Up to five, each with their own profile, Star Scores and trophy case. Progress never gets mixed up between siblings.',
  },
  {
    q: 'Is it aligned to what school is teaching?',
    a: 'Yes — skills are mapped to common curriculum standards, so you can search by what the class is covering this week and find matching practice.',
  },
  {
    q: 'What about ads and data?',
    a: 'There are no ads anywhere in Skillio, and children’s work is never sold or used for advertising. Grown-ups control the account and can export or delete data whenever they want.',
  },
  {
    q: 'Does it work on a tablet or phone?',
    a: 'It works in any modern browser on any device, and there are apps for iOS and Android. Progress follows the learner, not the device.',
  },
  {
    q: 'What if my child gets stuck and frustrated?',
    a: 'Every wrong answer opens a worked explanation, and the Star Score never resets to zero. Skillio also eases the difficulty back down after a run of misses, on purpose.',
  },
]

export default function Membership() {
  const [yearly, setYearly] = useState(true)
  const [open, setOpen] = useState(0)

  return (
    <>
      <section className="mesh grain relative overflow-hidden border-b border-line">
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
          <h1 className="text-5xl font-extrabold sm:text-6xl">Simple plans, no surprises</h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-ink-soft">
            One price, every subject, every grade. Change or cancel whenever — we would rather you
            stayed because it works.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white p-1.5 shadow-soft">
            {[
              { id: false, label: 'Monthly' },
              { id: true, label: 'Yearly · save 30%' },
            ].map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => setYearly(opt.id)}
                aria-pressed={yearly === opt.id}
                className={`rounded-full px-5 py-2 font-display font-bold transition-colors ${
                  yearly === opt.id ? 'bg-ink text-white' : 'text-ink hover:bg-canvas'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`sticker-lg relative p-8 ${p.tone} ${p.featured ? 'lg:-translate-y-4' : ''}`}
            >
              {p.featured && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-bubblegum-500 px-4 py-1.5 font-display text-sm font-bold text-white shadow-soft">
                  ⭐ Best value
                </span>
              )}
              <p className="font-display text-sm font-bold uppercase tracking-wide text-ink-soft">
                {p.tag}
              </p>
              <h2 className="mt-1 text-3xl font-extrabold">{p.name}</h2>

              <div className="mt-4 flex items-end gap-1">
                {p.monthly === null ? (
                  <span className="font-display text-3xl font-extrabold">Let’s talk</span>
                ) : (
                  <>
                    <span className="font-display text-5xl font-extrabold">
                      ${yearly ? p.yearly : p.monthly}
                    </span>
                    <span className="pb-2 font-bold text-ink-soft">
                      {p.monthly === 0 ? '' : yearly ? '/year' : '/month'}
                    </span>
                  </>
                )}
              </div>

              <p className="mt-3 font-bold text-ink/70">{p.blurb}</p>

              <div className="mt-6">
                <Button to={p.name === 'Classroom' ? '/grown-ups' : '/join'} tone={p.ctaTone} className="w-full">
                  {p.cta}
                </Button>
              </div>

              <ul className="mt-7 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-bold">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line-strong bg-mint-500 text-xs">
                      <span aria-hidden="true">✓</span>
                    </span>
                    {f}
                  </li>
                ))}
                {p.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-bold text-ink-soft/60">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line-strong/30 bg-white text-xs">
                      <span aria-hidden="true">–</span>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-bold text-ink-soft">
          <span aria-hidden="true">💙</span> Schools serving low-income communities can apply for
          free Classroom access.
        </p>
      </section>

      <section className="border-y border-line bg-canvas-deep py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="Questions" title="Things grown-ups ask" />
          <ul className="mt-10 space-y-4">
            {FAQ.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q} className="sticker overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-lg font-bold hover:bg-canvas"
                  >
                    {item.q}
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-sunshine-500 transition-transform ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="animate-pop-in border-t border-line p-5 pt-4 text-ink-soft">
                      {item.a}
                    </p>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <Mascot name="fox" className="animate-float mx-auto h-28 w-28" />
        <h2 className="mt-6 text-4xl font-extrabold">Still deciding?</h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-ink-soft">
          Make a free account and try a handful of skills. No card, and nothing expires.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/join" tone="berry" size="lg">
            Start free
          </Button>
          <Button to="/learn" tone="white" size="lg">
            Look at the skills first
          </Button>
        </div>
      </section>
    </>
  )
}
