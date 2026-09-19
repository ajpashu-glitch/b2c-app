import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Mascot } from '../components/ui'

const AVATARS = ['🚀', '🦊', '🦉', '🐙', '🦄', '🐝', '🐳', '🦖']

export default function Auth({ mode }) {
  const joining = mode === 'join'
  const [avatar, setAvatar] = useState('🚀')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="mesh grain relative overflow-hidden">

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="text-center lg:text-left">
          <Mascot name={joining ? 'rocket' : 'fox'} className="animate-float mx-auto h-40 w-40 lg:mx-0" />
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
            {joining ? 'Let’s make your account' : 'Welcome back!'}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            {joining
              ? 'It takes about thirty seconds, and the free plan really is free — no card needed.'
              : 'Pick up exactly where you left off. Your Star Scores are right where you parked them.'}
          </p>
        </div>

        <div className="sticker-lg bg-white p-8">
          {submitted ? (
            <div className="animate-pop-in text-center">
              <span className="text-6xl" aria-hidden="true">🎉</span>
              <h2 className="mt-4 text-2xl font-extrabold">
                {joining ? 'That would have done it!' : 'Signed in — in theory!'}
              </h2>
              <p className="mt-3 text-ink-soft">
                Skillio is a design demo, so there is no real account behind this form. Have a look
                around the skills instead.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button to="/learn" tone="berry">
                  Browse skills
                </Button>
                <Button tone="white" onClick={() => setSubmitted(false)}>
                  Back to the form
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex rounded-full border border-line bg-canvas p-1.5">
                <Link
                  to="/join"
                  className={`flex-1 rounded-full px-4 py-2 text-center font-display font-bold ${
                    joining ? 'bg-ink text-white' : 'hover:bg-white'
                  }`}
                >
                  Create account
                </Link>
                <Link
                  to="/sign-in"
                  className={`flex-1 rounded-full px-4 py-2 text-center font-display font-bold ${
                    !joining ? 'bg-ink text-white' : 'hover:bg-white'
                  }`}
                >
                  Sign in
                </Link>
              </div>

              {joining && (
                <fieldset>
                  <legend className="font-display font-bold">Pick your avatar</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {AVATARS.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => setAvatar(a)}
                        aria-pressed={avatar === a}
                        aria-label={`Avatar ${a}`}
                        className={`grid h-12 w-12 place-items-center rounded-2xl border border-line text-2xl transition-transform hover:-translate-y-0.5 ${
                          avatar === a ? 'bg-sunshine-500 shadow-soft' : 'bg-white'
                        }`}
                      >
                        <span aria-hidden="true">{a}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              {joining && (
                <label className="block">
                  <span className="font-display font-bold">Learner’s first name</span>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amara"
                    className="mt-1.5 w-full rounded-2xl border border-line bg-white px-4 py-3 font-bold placeholder:font-normal placeholder:text-ink-soft/50"
                  />
                </label>
              )}

              <label className="block">
                <span className="font-display font-bold">
                  {joining ? 'Grown-up’s email' : 'Email or username'}
                </span>
                <input
                  type={joining ? 'email' : 'text'}
                  required
                  placeholder={joining ? 'you@example.com' : 'you@example.com'}
                  className="mt-1.5 w-full rounded-2xl border border-line bg-white px-4 py-3 font-bold placeholder:font-normal placeholder:text-ink-soft/50"
                />
              </label>

              <label className="block">
                <span className="font-display font-bold">Password</span>
                <input
                  type="password"
                  required
                  minLength={6}
                  placeholder="At least 6 characters"
                  className="mt-1.5 w-full rounded-2xl border border-line bg-white px-4 py-3 font-bold placeholder:font-normal placeholder:text-ink-soft/50"
                />
              </label>

              {joining && (
                <label className="block">
                  <span className="font-display font-bold">Grade</span>
                  <select
                    className="mt-1.5 w-full rounded-2xl border border-line bg-white px-4 py-3 font-bold"
                    defaultValue="4"
                  >
                    <option value="pre-k">Pre-K</option>
                    <option value="k">Kindergarten</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((g) => (
                      <option key={g} value={g}>
                        Grade {g}
                      </option>
                    ))}
                  </select>
                </label>
              )}

              <Button tone="berry" size="lg" className="w-full" type="submit">
                {joining ? 'Create my free account' : 'Sign in'}
              </Button>

              <p className="text-center text-sm font-bold text-ink-soft">
                {joining ? (
                  <>
                    Already have one?{' '}
                    <Link to="/sign-in" className="text-bubblegum-600 underline">
                      Sign in
                    </Link>
                  </>
                ) : (
                  <>
                    New here?{' '}
                    <Link to="/join" className="text-bubblegum-600 underline">
                      Create a free account
                    </Link>
                  </>
                )}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
