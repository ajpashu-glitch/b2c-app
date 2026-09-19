import { useState } from 'react'
import { Button, SectionHeading, Mascot } from '../components/ui'

const TABS = [
  {
    id: 'families',
    label: 'Families',
    emoji: '🏡',
    headline: 'Know how it’s going without asking every night',
    body: 'Skillio turns practice into something you can actually see: which skills clicked, which ones need another go, and how much time it really took.',
    points: [
      ['📬', 'A Sunday email summing up the week — two minutes to read.'],
      ['🚩', 'Early flags when a topic starts slipping, before the test does.'],
      ['⏱️', 'Honest time-on-task, not inflated “logged in” minutes.'],
      ['🎯', 'Set a weekly goal together and let Skillio do the reminding.'],
    ],
    tone: 'bg-bubblegum-100',
  },
  {
    id: 'teachers',
    label: 'Teachers',
    emoji: '🍎',
    headline: 'See the whole class at a glance, then teach',
    body: 'Live dashboards show who is stuck and on what, the moment it happens — so your Monday planning takes minutes instead of an evening.',
    points: [
      ['📊', 'Class heat map by skill and by standard.'],
      ['📌', 'Assign skills with a due date; Skillio chases, not you.'],
      ['🔔', 'Trouble-spot alerts while students are still working.'],
      ['🧾', 'Export reports for parent-teacher conferences in one click.'],
    ],
    tone: 'bg-mint-100',
  },
  {
    id: 'schools',
    label: 'Schools & districts',
    emoji: '🏫',
    headline: 'One picture across every classroom',
    body: 'Roster sync, standards alignment and cohort-level reporting — with the privacy paperwork already done.',
    points: [
      ['🔗', 'Clever, Google Classroom and CSV roster sync.'],
      ['📈', 'Growth reporting by grade, school and cohort.'],
      ['🛡️', 'Student-privacy pledge, SSO, and no ads. Ever.'],
      ['🤝', 'Onboarding and PD sessions for your staff.'],
    ],
    tone: 'bg-blueberry-100',
  },
]

export default function GrownUps() {
  const [active, setActive] = useState('families')
  const tab = TABS.find((t) => t.id === active)

  return (
    <>
      <section className="mesh grain relative overflow-hidden border-b border-line">
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
          <h1 className="text-5xl font-extrabold sm:text-6xl">The grown-up side</h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-ink-soft">
            Kids get rockets and trophies. You get clear, honest information about what is actually
            being learned — and a way to help without hovering.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              aria-pressed={active === t.id}
              className={`sticker sticker-press flex items-center gap-2 px-5 py-3 font-display text-lg font-bold ${
                active === t.id ? 'bg-sunshine-500' : 'bg-white hover:bg-canvas'
              }`}
            >
              <span aria-hidden="true">{t.emoji}</span> {t.label}
            </button>
          ))}
        </div>

        <div className={`sticker-lg animate-pop-in mt-10 grid gap-10 border-transparent p-8 sm:p-12 lg:grid-cols-2 ${tab.tone}`}>
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{tab.headline}</h2>
            <p className="mt-4 text-lg text-ink-soft">{tab.body}</p>
            <ul className="mt-8 space-y-4">
              {tab.points.map(([emoji, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-line bg-white text-lg shadow-soft">
                    <span aria-hidden="true">{emoji}</span>
                  </span>
                  <p className="pt-2 font-bold">{text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/join" tone="berry" size="lg">
                Get started free
              </Button>
              <Button to="/membership" tone="white" size="lg">
                See plans
              </Button>
            </div>
          </div>

          {/* Mock dashboard */}
          <div className="sticker bg-white p-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-extrabold">This week</p>
              <span className="rounded-full border border-line bg-mint-300 px-3 py-1 text-sm font-bold">
                On track
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                ['142', 'questions'],
                ['4', 'skills mastered'],
                ['1h 20m', 'practicing'],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl border border-line bg-canvas p-3">
                  <p className="font-display text-2xl font-extrabold">{v}</p>
                  <p className="text-xs font-bold text-ink-soft">{l}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 font-display text-sm font-bold uppercase tracking-wide text-ink-soft">
              Skill by skill
            </p>
            <div className="mt-3 space-y-3">
              {[
                ['Multiplication facts', 100, 'bg-mint-500'],
                ['Equivalent fractions', 84, 'bg-sunshine-500'],
                ['Main idea', 62, 'bg-tangerine-500'],
                ['Angles', 28, 'bg-bubblegum-500'],
              ].map(([label, val, tone]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm font-bold">
                    <span>{label}</span>
                    <span className="text-ink-soft">{val}/100</span>
                  </div>
                  <div className="mt-1 h-3.5 overflow-hidden rounded-full border border-line-strong bg-white">
                    <div className={`h-full rounded-full ${tone}`} style={{ width: `${val}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="sticker mt-6 bg-sunshine-100 p-4 text-sm font-bold">
              <span aria-hidden="true">🚩</span> Angles has stalled twice this week — a short session
              together would probably unstick it.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Safety first"
            title="What we do with kids’ data"
            subtitle="The short version: as little as possible, and never for advertising."
            className="[&_.eyebrow]:text-grape-300 [&_h2]:text-white [&_p]:text-white/80"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['🚫', 'No ads, ever', 'Not banner ads, not sponsored skills, not “partner offers”. Nothing.'],
              ['🔒', 'You own the account', 'Grown-ups control profiles and can export or delete everything at any time.'],
              ['📜', 'Compliance done', 'Built to meet COPPA and FERPA expectations, and signed up to the Student Privacy Pledge.'],
            ].map(([emoji, title, body]) => (
              <div key={title} className="sticker bg-white p-6 text-ink">
                <span className="text-4xl" aria-hidden="true">{emoji}</span>
                <h3 className="mt-3 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <Mascot name="owl" className="animate-float mx-auto h-28 w-28" />
        <h2 className="mt-6 text-4xl font-extrabold">Bring Skillio to your class or school</h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-ink-soft">
          Tell us roughly how many students you have and we will put together a plan and a pilot.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/join" tone="blue" size="lg">
            Request a pilot
          </Button>
          <Button to="/membership" tone="white" size="lg">
            See Classroom pricing
          </Button>
        </div>
      </section>
    </>
  )
}
