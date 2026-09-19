import { SectionHeading, Button, Mascot } from '../components/ui'

const TROPHIES = [
  { name: 'First Steps', hint: 'Finish your very first skill', emoji: '👟', tone: 'bg-mint-300', earned: true },
  { name: 'Streak Starter', hint: 'Practice 3 days in a row', emoji: '🔥', tone: 'bg-tangerine-300', earned: true },
  { name: 'Century Club', hint: 'Answer 100 questions', emoji: '💯', tone: 'bg-sunshine-300', earned: true },
  { name: 'Fraction Boss', hint: 'Master every fractions skill in your grade', emoji: '🍕', tone: 'bg-bubblegum-300', earned: true },
  { name: 'Bookworm', hint: 'Master 10 reading skills', emoji: '🐛', tone: 'bg-grape-300', earned: true },
  { name: 'Night Owl', hint: 'Practice after dinner 5 times', emoji: '🦉', tone: 'bg-blueberry-300', earned: false },
  { name: 'Lab Coat', hint: 'Master 10 science skills', emoji: '🥽', tone: 'bg-mint-300', earned: false },
  { name: 'Globe Trotter', hint: 'Finish a social studies grade', emoji: '🌍', tone: 'bg-tangerine-300', earned: false },
  { name: 'Políglota', hint: 'Master 20 Spanish skills', emoji: '🗣️', tone: 'bg-grape-300', earned: false },
  { name: 'Comeback Kid', hint: 'Turn a 40 into a 100', emoji: '📈', tone: 'bg-sunshine-300', earned: false },
  { name: 'Marathon', hint: 'Practice 30 days in a row', emoji: '🏃', tone: 'bg-bubblegum-300', earned: false },
  { name: 'Skillio Legend', hint: 'Master 500 skills', emoji: '👑', tone: 'bg-blueberry-300', earned: false },
]

const CERTIFICATES = [
  { title: 'Grade 4 Math', detail: 'All 186 skills mastered', tone: 'bg-blueberry-100' },
  { title: '1,000 Questions', detail: 'Answered across every subject', tone: 'bg-bubblegum-100' },
  { title: '10-Week Streak', detail: 'Showed up, week after week', tone: 'bg-mint-100' },
]

export default function Awards() {
  const earned = TROPHIES.filter((t) => t.earned).length

  return (
    <>
      <section className="mesh grain relative overflow-hidden border-b border-line">
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
          <Mascot name="bot" className="animate-float mx-auto h-28 w-28" />
          <h1 className="mt-6 text-5xl font-extrabold sm:text-6xl">Your trophy case</h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-ink-soft">
            Awards are for effort, not just brilliance. Showing up, sticking with a hard skill and
            coming back after a wobble all earn you something.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-white px-6 py-3 font-display text-lg font-bold shadow-soft">
            <span aria-hidden="true">🏆</span> {earned} of {TROPHIES.length} unlocked
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Trophies" title="Twelve to collect" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TROPHIES.map((t, i) => (
            <li
              key={t.name}
              className={`sticker sticker-hover p-6 text-center ${
                t.earned ? `${t.tone} border-transparent` : 'bg-white'
              }`}
            >
              <span
                className={`block text-5xl ${t.earned ? '' : 'opacity-25 grayscale'}`}
                aria-hidden="true"
              >
                {t.emoji}
              </span>
              <h3 className="mt-3 text-lg font-extrabold">{t.name}</h3>
              <p className="mt-1 text-sm font-bold text-ink/60">{t.hint}</p>
              <span
                className={`mt-4 inline-block rounded-full border border-line-strong px-3 py-1 text-xs font-bold ${
                  t.earned ? 'bg-white' : 'bg-canvas text-ink-soft'
                }`}
              >
                {t.earned ? 'Unlocked' : 'Locked'}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-canvas-deep py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Certificates"
            title="The ones worth printing"
            subtitle="Hit a real milestone and Skillio makes you a certificate with your name on it. Fridge-ready."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CERTIFICATES.map((c, i) => (
              <div
                key={c.title}
                className={`sticker-lg p-8 text-center ${c.tone} ${i === 1 ? 'md:-translate-y-4' : ''}`}
              >
                <div className="rounded-2xl border border-dashed border-ink/25 p-6">
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-ink-soft">
                    Certificate of achievement
                  </p>
                  <p className="mt-3 font-display text-2xl font-extrabold">{c.title}</p>
                  <p className="mt-1 font-bold text-ink-soft">{c.detail}</p>
                  <p className="mt-4 font-display text-lg">🚀 Skillio</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/join" tone="berry" size="lg">
              Start earning yours
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
