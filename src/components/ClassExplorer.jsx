import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  STAGES,
  GRADES,
  THEME,
  subjectsForGrade,
  skillCountForGrade,
  previewForGrade,
} from '../data/curriculum'

/**
 * Browse the whole K-12 ladder from the homepage: pick a stage, pick a class,
 * and see what that year actually covers before signing up for anything.
 */
export default function ClassExplorer() {
  const [stageId, setStageId] = useState('upper')
  const stage = STAGES.find((s) => s.id === stageId)
  const [gradeId, setGradeId] = useState('4')

  // Keep the selected class inside the selected stage.
  const activeGradeId = stage.grades.includes(gradeId) ? gradeId : stage.grades[0]
  const grade = GRADES.find((g) => g.id === activeGradeId)

  const preview = useMemo(() => previewForGrade(activeGradeId), [activeGradeId])
  const subjects = subjectsForGrade(activeGradeId)
  const stageTheme = THEME[stage.color]

  return (
    <div>
      {/* Stage selector */}
      <div
        className="flex flex-wrap justify-center gap-2.5"
        role="tablist"
        aria-label="Choose a stage"
      >
        {STAGES.map((s) => {
          const active = s.id === stageId
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setStageId(s.id)
                setGradeId(s.grades[0])
              }}
              className={`group flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-[0.95rem] font-semibold transition-all duration-300 ${
                active
                  ? 'bg-ink text-white shadow-lift'
                  : 'border border-line bg-white text-ink-soft shadow-soft hover:-translate-y-0.5 hover:text-ink'
              }`}
            >
              <span aria-hidden="true">{s.emoji}</span>
              {s.name}
            </button>
          )
        })}
      </div>

      <p className="mt-5 text-center text-lg text-ink-soft">{stage.blurb}</p>

      {/* Class cards for the chosen stage */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {stage.grades.map((gid) => {
          const g = GRADES.find((x) => x.id === gid)
          const active = gid === activeGradeId
          const count = skillCountForGrade(gid)
          const subs = subjectsForGrade(gid)
          return (
            <button
              key={gid}
              type="button"
              onClick={() => setGradeId(gid)}
              aria-pressed={active}
              className={`bento group w-full min-w-[15rem] max-w-[17.5rem] flex-1 p-6 text-left ${
                active ? `${stageTheme.text} ring-2 ring-current` : ''
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className={`font-display text-4xl font-bold tracking-tight ${
                    active ? stageTheme.text : 'text-ink'
                  }`}
                >
                  {g.short}
                </span>
                <span className="text-xs font-semibold text-ink-faint">{g.age}</span>
              </div>
              <p className="mt-1 font-display text-lg font-semibold text-ink">{g.label}</p>
              <p className="mt-3 text-sm font-medium text-ink-soft">
                {count.toLocaleString()} skills
              </p>
              <div className="mt-3 flex gap-1.5" aria-hidden="true">
                {subs.map((s) => (
                  <span
                    key={s.id}
                    title={s.name}
                    className={`h-2 w-2 rounded-full ${THEME[s.color].bg}`}
                  />
                ))}
              </div>
            </button>
          )
        })}
      </div>

      {/* What this class covers */}
      <div className="sticker-lg mt-6 overflow-hidden p-0">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line bg-canvas px-7 py-5">
          <div>
            <p className="eyebrow text-ink-faint">Inside this class</p>
            <h3 className="mt-1 font-display text-2xl font-bold">
              {grade.label}{' '}
              <span className="font-body text-base font-medium text-ink-soft">{grade.age}</span>
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink-soft">
              {subjects.length} subjects
            </span>
            <Link
              to={`/learn/math?grade=${activeGradeId}`}
              className="rounded-full bg-ink px-5 py-2.5 font-display text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
            >
              See all {grade.label} skills →
            </Link>
          </div>
        </div>

        <div className="grid gap-5 bg-white p-7 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map(({ subject, skills }) => {
            const t = THEME[subject.color]
            return (
              <div key={subject.id} className="rounded-2xl border border-line p-5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl" aria-hidden="true">
                    {subject.emoji}
                  </span>
                  <p className={`font-display text-base font-semibold ${t.text}`}>{subject.name}</p>
                </div>
                <ul className="mt-3 space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-ink-soft">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${t.bg}`}
                        aria-hidden="true"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/learn/${subject.id}?grade=${activeGradeId}`}
                  className="mt-3 inline-block text-sm font-semibold text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
                >
                  Browse {subject.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
