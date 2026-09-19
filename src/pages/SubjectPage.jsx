import { useMemo, useState } from 'react'
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import { Button, Doodle, Mascot } from '../components/ui'
import StarScore from '../components/StarScore'
import { getSubject, getSkills, gradesForSubject, THEME } from '../data/curriculum'

/** Deterministic pseudo-progress so the browser looks lived-in without random churn. */
function fakeScore(subjectId, gradeId, index) {
  const seed = `${subjectId}${gradeId}${index}`
    .split('')
    .reduce((a, c) => a + c.charCodeAt(0), 0)
  const options = [100, 100, 92, 84, 71, 55, 38, 0, 0]
  return options[seed % options.length]
}

export default function SubjectPage() {
  const { subjectId } = useParams()
  const [params, setParams] = useSearchParams()
  const subject = getSubject(subjectId)
  const grades = useMemo(() => (subject ? gradesForSubject(subject.id) : []), [subject])

  const requested = params.get('grade')
  const initial = grades.find((g) => g.id === requested)?.id ?? grades[Math.min(4, grades.length - 1)]?.id
  const [grade, setGrade] = useState(initial)
  const [query, setQuery] = useState('')

  if (!subject) return <Navigate to="/learn" replace />

  const t = THEME[subject.color]
  const activeGrade = grades.find((g) => g.id === grade) ?? grades[0]
  const skills = getSkills(subject.id, activeGrade.id)
  const filtered = skills.filter((s) => s.toLowerCase().includes(query.trim().toLowerCase()))

  function pickGrade(id) {
    setGrade(id)
    setParams({ grade: id }, { replace: true })
  }

  const mastered = skills.filter((_, i) => fakeScore(subject.id, activeGrade.id, i) === 100).length

  return (
    <>
      {/* Subject hero */}
      <section className={`relative overflow-hidden border-b-[4px] border-ink ${t.bgSoft}`}>
        <Doodle kind="blob" color="var(--color-sunshine-500)" className="animate-float-slow absolute bottom-6 right-24 hidden h-16 w-16 opacity-70 lg:block" />
        <Doodle kind="star" className="animate-twinkle absolute right-10 top-10 h-14 w-14" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <Link to="/learn" className="font-display font-bold text-ink-soft hover:text-ink">
            ← All subjects
          </Link>

          <div className="mt-5 flex flex-wrap items-center gap-5">
            <span className="grid h-20 w-20 place-items-center rounded-3xl border-[4px] border-ink bg-white text-4xl shadow-[0_6px_0_0_var(--color-ink)]">
              <span aria-hidden="true">{subject.emoji}</span>
            </span>
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl">{subject.name}</h1>
              <p className={`font-display text-xl font-bold ${t.text}`}>{subject.tagline}</p>
            </div>
            <span className="ml-auto rounded-full border-[3px] border-ink bg-white px-4 py-2 font-display font-bold">
              {subject.skillCount} skills
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-lg text-ink-soft">{subject.blurb}</p>
        </div>
      </section>

      {/* Grade picker */}
      <section className="sticky top-[73px] z-30 border-b-[3px] border-ink bg-cream/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display font-bold">Grade:</span>
            <div className="flex flex-wrap gap-2">
              {grades.map((g) => {
                const active = g.id === activeGrade.id
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => pickGrade(g.id)}
                    aria-pressed={active}
                    className={`rounded-xl border-[3px] border-ink px-3 py-1.5 font-display font-bold transition-transform active:translate-y-[2px] ${
                      active
                        ? `${t.bg} text-white shadow-[0_4px_0_0_var(--color-ink)]`
                        : 'bg-white hover:bg-sunshine-100'
                    }`}
                  >
                    {g.short}
                  </button>
                )
              })}
            </div>
            <label className="ml-auto flex items-center gap-2">
              <span className="sr-only">Search skills</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search skills…"
                className="w-48 rounded-full border-[3px] border-ink bg-white px-4 py-2 font-bold placeholder:font-normal placeholder:text-ink-soft/60 sm:w-64"
              />
            </label>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold">
              {activeGrade.label}{' '}
              <span className="font-display text-lg font-bold text-ink-soft">{activeGrade.age}</span>
            </h2>
            <p className="mt-1 font-bold text-ink-soft">
              {mastered} of {skills.length} shown skills mastered — keep going!
            </p>
          </div>
          <Button to="/join" tone="berry">
            Practice these free
          </Button>
        </div>

        {filtered.length === 0 ? (
          <div className="sticker-lg mt-8 p-10 text-center">
            <Mascot name="owl" className="mx-auto h-24 w-24" />
            <p className="mt-4 font-display text-xl font-bold">
              No skills match “{query}” in {activeGrade.label}.
            </p>
            <p className="mt-1 text-ink-soft">Try another word, or clear the search.</p>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="sticker sticker-press mt-5 bg-sunshine-500 px-5 py-2.5 font-display font-bold"
            >
              Clear search
            </button>
          </div>
        ) : (
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {filtered.map((skill, i) => {
              const score = fakeScore(subject.id, activeGrade.id, skills.indexOf(skill))
              const done = score === 100
              return (
                <li key={skill}>
                  <div className="sticker sticker-hover flex h-full flex-col gap-3 p-5">
                    <div className="flex items-start gap-3">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border-[3px] border-ink font-display font-extrabold ${
                          done ? 'bg-mint-500' : t.bgSoft
                        }`}
                      >
                        {done ? <span aria-hidden="true">🏆</span> : i + 1}
                      </span>
                      <p className="min-w-0 flex-1 pt-1.5 font-display text-lg font-bold leading-snug">
                        {skill}
                      </p>
                      <Link
                        to="/join"
                        className="sticker sticker-press shrink-0 bg-sunshine-500 px-4 py-2 font-display font-bold"
                      >
                        {score > 0 && !done ? 'Resume' : done ? 'Redo' : 'Start'}
                        <span className="sr-only"> {skill}</span>
                      </Link>
                    </div>
                    <div className="flex items-center gap-3 pl-14">
                      <div className="h-3 min-w-0 flex-1 overflow-hidden rounded-full border-2 border-ink bg-white">
                        <div
                          className={`h-full rounded-full ${
                            score >= 90 ? 'bg-mint-500' : score >= 60 ? 'bg-sunshine-500' : 'bg-tangerine-500'
                          }`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <span className="w-16 shrink-0 text-right text-sm font-bold text-ink-soft">
                        {score > 0 ? `${score}/100` : 'New'}
                      </span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        )}

        {/* Progress panel */}
        <div className="sticker-lg mt-12 grid items-center gap-8 bg-blueberry-100 p-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h3 className="text-2xl font-extrabold">Your {subject.name} Star Score</h3>
            <p className="mt-2 text-ink-soft">
              Every skill you finish lifts your subject score. Hit 100 on a skill and the trophy is
              yours forever — even if you take a break.
            </p>
            <div className="mt-5 max-w-md">
              <StarScore value={72} />
            </div>
          </div>
          <Mascot name="fox" className="animate-float mx-auto h-40 w-40" />
        </div>
      </section>
    </>
  )
}
