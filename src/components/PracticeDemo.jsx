import { useState } from 'react'
import StarScore from './StarScore'
import { Mascot } from './ui'

/**
 * A tiny playable taste of a Skillio practice session.
 * Right answers push the Star Score up fast; wrong ones nudge it down and
 * unlock an explanation — the same rhythm as the real product.
 */
const QUESTIONS = [
  {
    prompt: 'Maya has 3 baskets. Each basket holds 4 apples. How many apples is that?',
    art: '🧺🧺🧺',
    options: ['7', '12', '34', '9'],
    answer: '12',
    why: '3 groups of 4 is 4 + 4 + 4 = 12. That is the same as 3 × 4.',
  },
  {
    prompt: 'Which word is a noun?',
    art: '📖',
    options: ['quickly', 'jump', 'river', 'bright'],
    answer: 'river',
    why: 'A noun names a person, place or thing. A river is a place, so it is the noun.',
  },
  {
    prompt: 'Which one is a living thing?',
    art: '🔬',
    options: ['A rock', 'A cactus', 'A bicycle', 'A raindrop'],
    answer: 'A cactus',
    why: 'Living things grow, need water and make new living things. A cactus does all three.',
  },
  {
    prompt: '¿Cómo se dice “red” en español?',
    art: '🎨',
    options: ['verde', 'azul', 'rojo', 'negro'],
    answer: 'rojo',
    why: '“Rojo” is red. Verde is green, azul is blue and negro is black.',
  },
]

export default function PracticeDemo() {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(30)
  const [streak, setStreak] = useState(0)

  const q = QUESTIONS[index]
  const isCorrect = picked === q.answer
  const answered = picked !== null

  function choose(option) {
    if (answered) return
    setPicked(option)
    if (option === q.answer) {
      setScore((s) => Math.min(100, s + (s >= 80 ? 8 : 18)))
      setStreak((s) => s + 1)
    } else {
      setScore((s) => Math.max(0, s - 12))
      setStreak(0)
    }
  }

  function next() {
    setPicked(null)
    setIndex((i) => (i + 1) % QUESTIONS.length)
  }

  return (
    <div className="sticker-lg relative overflow-hidden p-5 sm:p-7">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sunshine-300/50" aria-hidden="true" />

      <div className="relative flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-line bg-mint-300 px-3 py-1 font-display text-sm font-bold">
          Question {index + 1} of {QUESTIONS.length}
        </span>
        {streak >= 2 && (
          <span className="animate-wiggle rounded-full border border-line bg-tangerine-300 px-3 py-1 font-display text-sm font-bold">
            🔥 {streak} in a row!
          </span>
        )}
      </div>

      <div className="relative mt-5 flex items-start gap-4">
        <span className="hidden shrink-0 text-4xl sm:block" aria-hidden="true">
          {q.art}
        </span>
        <p className="font-display text-xl font-bold leading-snug sm:text-2xl">{q.prompt}</p>
      </div>

      <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
        {q.options.map((opt) => {
          const chosen = picked === opt
          const right = answered && opt === q.answer
          const wrong = chosen && !isCorrect
          let tone = 'bg-white hover:bg-canvas'
          if (right) tone = 'bg-mint-300'
          if (wrong) tone = 'bg-bubblegum-300'
          return (
            <button
              key={opt}
              type="button"
              onClick={() => choose(opt)}
              disabled={answered}
              className={`sticker sticker-press flex items-center justify-between px-4 py-3 text-left font-display text-lg font-bold disabled:cursor-default ${tone}`}
            >
              <span>{opt}</span>
              {right && <span aria-hidden="true">✅</span>}
              {wrong && <span aria-hidden="true">💭</span>}
            </button>
          )
        })}
      </div>

      <div aria-live="polite" className="relative">
        {answered && (
          <div
            className={`animate-pop-in mt-5 flex items-start gap-3 rounded-3xl border border-line p-4 ${
              isCorrect ? 'bg-mint-100' : 'bg-sunshine-100'
            }`}
          >
            <Mascot name={isCorrect ? 'rocket' : 'owl'} className="h-14 w-14 shrink-0" />
            <div>
              <p className="font-display text-lg font-bold">
                {isCorrect ? 'Yes! That’s it.' : 'Not quite — here’s the trick:'}
              </p>
              <p className="mt-1 text-ink-soft">{q.why}</p>
            </div>
          </div>
        )}
      </div>

      <div className="relative mt-6 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-end">
        <div className="flex-1">
          <StarScore value={score} />
        </div>
        <button
          type="button"
          onClick={next}
          disabled={!answered}
          className="sticker sticker-press shrink-0 bg-grape-500 px-6 py-3 font-display text-lg font-bold text-white disabled:opacity-40"
        >
          Next question →
        </button>
      </div>
    </div>
  )
}
