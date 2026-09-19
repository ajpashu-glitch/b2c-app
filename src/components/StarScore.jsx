export default function StarScore({ value = 0, size = 'md' }) {
  const clamped = Math.max(0, Math.min(100, value))
  const milestone =
    clamped >= 100 ? 'Mastered!' : clamped >= 90 ? 'Almost there' : clamped >= 80 ? 'Nice work' : clamped >= 40 ? 'Warming up' : 'Just started'
  const tone =
    clamped >= 90 ? 'bg-mint-500' : clamped >= 60 ? 'bg-sunshine-500' : clamped >= 30 ? 'bg-tangerine-500' : 'bg-bubblegum-500'

  const big = size === 'lg'

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-wide text-ink-soft">
            Star Score
          </p>
          <p className={`font-display font-extrabold leading-none ${big ? 'text-5xl' : 'text-3xl'}`}>
            {clamped}
            <span className="text-ink-soft/60 text-lg font-bold"> / 100</span>
          </p>
        </div>
        <span className="rounded-full border-[3px] border-ink bg-white px-3 py-1 text-sm font-bold">
          {milestone}
        </span>
      </div>

      <div
        className="relative mt-3 h-6 w-full overflow-hidden rounded-full border-[3px] border-ink bg-white"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Star Score progress"
      >
        <div
          className={`h-full rounded-full ${tone} transition-[width] duration-500 ease-out`}
          style={{ width: `${clamped}%` }}
        />
        {/* Milestone ticks at 80 (proficient) and 100 (mastered) */}
        <span className="absolute inset-y-0 left-[80%] w-[3px] bg-ink/30" aria-hidden="true" />
      </div>
      {/* Labels are pinned to the bar they describe, so the 80 tick always lines up. */}
      <div className="relative mt-1.5 h-4 text-xs font-bold text-ink-soft">
        <span className="absolute left-0">Start</span>
        <span className="absolute left-[80%] -translate-x-full whitespace-nowrap pr-1">80 = you’ve got it</span>
        <span className="absolute right-0">100 🏆</span>
      </div>
    </div>
  )
}
