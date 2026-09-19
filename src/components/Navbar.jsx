import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Button } from './ui'
import { SUBJECTS } from '../data/curriculum'

const LINKS = [
  { to: '/learn', label: 'Learn' },
  { to: '/skill-check', label: 'Skill Check' },
  { to: '/awards', label: 'Awards' },
  { to: '/grown-ups', label: 'For grown-ups' },
  { to: '/membership', label: 'Membership' },
]

export function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Skillio home">
      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-sunshine-500 shadow-soft transition-transform group-hover:-rotate-6">
        <span className="text-xl" aria-hidden="true">
          🚀
        </span>
      </span>
      <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
        Skill<span className="text-bubblegum-500">io</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [subjectsOpen, setSubjectsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setSubjectsOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Logo />

        <div className="ml-4 hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setSubjectsOpen(true)}
            onMouseLeave={() => setSubjectsOpen(false)}
          >
            <button
              type="button"
              aria-expanded={subjectsOpen}
              onClick={() => setSubjectsOpen((v) => !v)}
              className="rounded-full px-4 py-2 font-display font-bold text-ink hover:bg-white"
            >
              Subjects <span aria-hidden="true">▾</span>
            </button>
            {subjectsOpen && (
              <div className="animate-pop-in absolute left-0 top-full w-72 pt-2">
                <ul className="sticker overflow-hidden p-2">
                  {SUBJECTS.map((s) => (
                    <li key={s.id}>
                      <Link
                        to={`/learn/${s.id}`}
                        className="flex items-center gap-3 rounded-2xl px-3 py-2.5 font-bold hover:bg-canvas"
                      >
                        <span className="text-2xl" aria-hidden="true">
                          {s.emoji}
                        </span>
                        <span>
                          {s.name}
                          <span className="block text-xs font-semibold text-ink-soft">
                            {s.skillCount} skills
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 font-display font-bold hover:bg-white ${
                  isActive ? 'bg-white shadow-soft border border-line' : ''
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <Button to="/sign-in" tone="white" size="sm">
            Sign in
          </Button>
          <Button to="/join" tone="berry" size="sm">
            Start free
          </Button>
        </div>

        <button
          type="button"
          className="ml-auto grid h-11 w-11 place-items-center rounded-2xl border border-line bg-white shadow-soft lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl" aria-hidden="true">
            {open ? '✕' : '☰'}
          </span>
        </button>
      </nav>

      {open && (
        <div className="animate-pop-in border-t border-line bg-white px-4 py-4 lg:hidden">
          <p className="mb-2 font-display text-sm font-bold uppercase text-ink-soft">Subjects</p>
          <ul className="mb-4 grid grid-cols-1 gap-1 sm:grid-cols-2">
            {SUBJECTS.map((s) => (
              <li key={s.id}>
                <Link to={`/learn/${s.id}`} className="flex items-center gap-2 rounded-2xl px-3 py-2 font-bold hover:bg-canvas">
                  <span aria-hidden="true">{s.emoji}</span> {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="grid gap-1">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="block rounded-2xl px-3 py-2 font-display font-bold hover:bg-canvas">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <Button to="/sign-in" tone="white" size="sm" className="flex-1">
              Sign in
            </Button>
            <Button to="/join" tone="berry" size="sm" className="flex-1">
              Start free
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
