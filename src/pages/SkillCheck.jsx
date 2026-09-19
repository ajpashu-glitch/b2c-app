import { useState } from 'react'
import { Button, SectionHeading, Mascot, Pill } from '../components/ui'
import StarScore from '../components/StarScore'

const STAGES = [
  {
    label: 'Warm up',
    body: 'A few easy ones so nobody starts on a bad question. No timer, no pressure.',
    emoji: '🌤️',
    tone: 'bg-sunshine-300',
  },
  {
    label: 'Find your level',
    body: 'Questions get harder when you are right and gentler when you are not, until Skillio finds your edge.',
    emoji: '🧗',
    tone: 'bg-mint-300',
  },
  {
    label: 'Draw the map',
    body: 'You get a picture of what you have got and what is next — by strand, not one scary number.',
    emoji: '🗺️',
    tone: 'bg-bubblegum-300',
  },
  {
    label: 'Stay current',
    body: 'A couple of questions a week keeps the map accurate as you learn. It never goes stale.',
    emoji: '🔄',
    tone: 'bg-grape-300',
  },
]

const STRANDS = [
  { name: 'Numbers & operations', level: 'Grade 5', score: 88, tone: 'bg-mint-500' },
  { name: 'Fractions', level: 'Grade 4', score: 64, tone: 'bg-sunshine-500' },
  { name: 'Geometry', level: 'Grade 5', score: 79, tone: 'bg-mint-500' },
  { name: 'Measurement & data', level: 'Grade 3', score: 42, tone: 'bg-tangerine-500' },
  { name: 'Algebraic thinking', level: 'Grade 5', score: 71, tone: 'bg-sunshine-500' },
]

export default function SkillCheck() {
  const [started, setStarted] = useState(false)

  return (
    <>
      <section className="mesh grain relative overflow-hidden border-b border-line">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <Pill className="text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-grape-500" aria-hidden="true" />
              About 15 minutes
            </Pill>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight sm:text-6xl">
              The Skill Check
            </h1>
            <p className="mt-5 max-w-xl text-xl text-ink-soft">
              It is not a test. Nobody sees a grade, nothing gets marked wrong in red. It is a quick
              way for Skillio to find out where you are, so it stops giving you things that are too
              easy or too hard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button tone="berry" size="lg" onClick={() => setStarted(true)}>
                {started ? 'Check in progress…' : 'Start my Skill Check'}
              </Button>
              <Button to="/learn" tone="white" size="lg">
                I’d rather just browse
              </Button>
            </div>
            {started && (
              <p className="animate-pop-in mt-4 font-bold text-mint-600">
                <span aria-hidden="true">✅</span> Nice — in the real app your first question would
                be loading right now.
              </p>
            )}
          </div>

          <div className="sticker-lg -rotate-2 bg-grape-100 p-8">
            <Mascot name="owl" className="animate-float mx-auto h-48 w-48" />
            <div className="sticker mt-4 rotate-2 bg-white p-4">
              <p className="font-display font-bold">“You are ready for Grade 5 fractions.”</p>
              <p className="mt-1 text-sm text-ink-soft">
                That is the kind of sentence you get at the end. Useful, not scary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="How the check works"
          title="Four small steps"
          subtitle="You can stop halfway and pick it up tomorrow. Skillio keeps your place."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s, i) => (
            <div key={s.label} className={`sticker-lg border-transparent p-6 ${s.tone}`}>
              <span className="text-4xl" aria-hidden="true">{s.emoji}</span>
              <h3 className="mt-3 text-xl font-extrabold">{s.label}</h3>
              <p className="mt-2 font-bold text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-canvas-deep py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="What you get back"
              title="A map, not a verdict"
              subtitle="Your level is broken down strand by strand, because almost nobody is the same level at everything — and that is completely normal."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/join" tone="blue" size="lg">
                Try it free
              </Button>
              <Button to="/grown-ups" tone="white" size="lg">
                What grown-ups see
              </Button>
            </div>
          </div>

          <div className="sticker-lg bg-white p-7">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-extrabold">Math · your map</h3>
              <span className="rounded-full border border-line bg-sunshine-300 px-3 py-1 text-sm font-bold">
                Updated today
              </span>
            </div>
            <div className="mt-5 space-y-4">
              {STRANDS.map((s) => (
                <div key={s.name}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-bold">{s.name}</span>
                    <span className="text-sm font-bold text-ink-soft">{s.level}</span>
                  </div>
                  <div className="mt-1.5 h-4 overflow-hidden rounded-full border border-line bg-white">
                    <div className={`h-full rounded-full ${s.tone}`} style={{ width: `${s.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="sticker mt-6 bg-blueberry-100 p-4">
              <p className="font-display font-bold">Try this next</p>
              <p className="mt-1 text-ink-soft">
                Measurement &amp; data is the gap. Three skills there would lift your whole math
                score.
              </p>
            </div>
            <div className="mt-6">
              <StarScore value={69} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
