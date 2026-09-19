import { Link } from 'react-router-dom'
import { SUBJECTS } from '../data/curriculum'
import { Logo } from './Navbar'

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { to: '/learn', label: 'All subjects' },
      { to: '/skill-check', label: 'Skill Check' },
      { to: '/awards', label: 'Awards & trophies' },
      { to: '/membership', label: 'Membership' },
    ],
  },
  {
    title: 'For grown-ups',
    links: [
      { to: '/grown-ups', label: 'Families' },
      { to: '/grown-ups', label: 'Teachers' },
      { to: '/grown-ups', label: 'Schools & districts' },
      { to: '/grown-ups', label: 'Progress reports' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/', label: 'About Skillio' },
      { to: '/', label: 'Research' },
      { to: '/', label: 'Careers' },
      { to: '/', label: 'Help centre' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t-[4px] border-ink bg-blueberry-500 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white px-4 py-3 inline-block border-[3px] border-ink shadow-[0_5px_0_0_var(--color-ink)]">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-blueberry-50">
              A playful place to practice the things school is teaching — one small skill at a time,
              at whatever pace feels right.
            </p>
            <div className="mt-5 flex gap-2" aria-hidden="true">
              {['🌟', '🎨', '🧪', '🗺️', '🎧'].map((e) => (
                <span
                  key={e}
                  className="grid h-10 w-10 place-items-center rounded-2xl border-[3px] border-ink bg-white text-lg"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Subjects</h3>
            <ul className="mt-3 space-y-2 text-blueberry-50">
              {SUBJECTS.map((s) => (
                <li key={s.id}>
                  <Link to={`/learn/${s.id}`} className="hover:text-sunshine-300 hover:underline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-lg font-bold">{col.title}</h3>
              <ul className="mt-3 space-y-2 text-blueberry-50">
                {col.links.map((l, i) => (
                  <li key={`${l.label}-${i}`}>
                    <Link to={l.to} className="hover:text-sunshine-300 hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t-2 border-white/25 pt-6 text-sm text-blueberry-50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Skillio Learning. A demo project — not a real service.</p>
          <ul className="flex flex-wrap gap-5">
            <li><Link to="/" className="hover:text-sunshine-300">Privacy</Link></li>
            <li><Link to="/" className="hover:text-sunshine-300">Terms</Link></li>
            <li><Link to="/" className="hover:text-sunshine-300">Accessibility</Link></li>
            <li><Link to="/" className="hover:text-sunshine-300">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
