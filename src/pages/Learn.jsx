import { Link } from 'react-router-dom'
import { SectionHeading, Button, Doodle } from '../components/ui'
import { SUBJECTS, GRADES, THEME } from '../data/curriculum'

export default function Learn() {
  return (
    <>
      <section className="dotted-bg border-b-[4px] border-ink">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="The whole map"
            title="Every skill, all in one place"
            subtitle="Five subjects, fourteen grade levels, 20,000+ skills. Pick a subject to see what is inside, or jump straight to your grade."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {SUBJECTS.map((s, i) => {
            const t = THEME[s.color]
            return (
              <div key={s.id} className={`sticker-lg overflow-hidden p-7 ${t.bgSoft}`}>
                <div className="flex items-start gap-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-[3px] border-ink bg-white text-3xl shadow-[0_4px_0_0_var(--color-ink)]">
                    <span aria-hidden="true">{s.emoji}</span>
                  </span>
                  <div>
                    <h2 className="text-2xl font-extrabold">{s.name}</h2>
                    <p className={`font-display font-bold ${t.text}`}>{s.tagline}</p>
                  </div>
                  <span className="ml-auto hidden rounded-full border-[3px] border-ink bg-white px-3 py-1 text-sm font-bold sm:block">
                    {s.skillCount}
                  </span>
                </div>

                <p className="mt-4 text-ink-soft">{s.blurb}</p>

                <div className="mt-5">
                  <p className="font-display text-xs font-bold uppercase tracking-wide text-ink-soft">
                    What’s inside
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {s.strands.map((strand) => (
                      <span
                        key={strand}
                        className="rounded-full border-2 border-ink/20 bg-white px-3 py-1 text-sm font-bold"
                      >
                        {strand}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="font-display text-xs font-bold uppercase tracking-wide text-ink-soft">
                    Grades
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {GRADES.filter((g) => s.grades.includes(g.id)).map((g) => (
                      <Link
                        key={g.id}
                        to={`/learn/${s.id}?grade=${g.id}`}
                        className="rounded-xl border-[3px] border-ink bg-white px-2.5 py-1 font-display text-sm font-bold hover:bg-sunshine-300"
                      >
                        {g.short}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Button to={`/learn/${s.id}`} tone={i % 2 ? 'blue' : 'berry'}>
                    Open {s.name} →
                  </Button>
                </div>
              </div>
            )
          })}

          <div className="sticker-lg relative overflow-hidden bg-ink p-7 text-white">
            <Doodle kind="star" className="animate-twinkle absolute right-6 top-6 h-12 w-12" />
            <h2 className="text-2xl font-extrabold">Not sure where to start?</h2>
            <p className="mt-3 text-white/75">
              The Skill Check takes about fifteen minutes and works out your level in maths and
              reading. After that, Skillio just tells you what to do next.
            </p>
            <div className="mt-6">
              <Button to="/skill-check" tone="primary">
                Take the Skill Check
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
