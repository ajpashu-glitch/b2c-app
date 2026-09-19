import { Link } from 'react-router-dom'

const BASE =
  'inline-flex items-center justify-center gap-2 font-display font-bold rounded-full border-3 border-ink transition-transform duration-150 select-none'

const SIZES = {
  sm: 'text-sm px-4 py-2 border-[3px]',
  md: 'text-base px-6 py-3 border-[3px]',
  lg: 'text-lg px-8 py-4 border-[3px]',
}

const TONES = {
  primary: 'bg-sunshine-500 text-ink hover:bg-sunshine-300',
  grape: 'bg-grape-500 text-white hover:bg-grape-600',
  berry: 'bg-bubblegum-500 text-white hover:bg-bubblegum-600',
  mint: 'bg-mint-500 text-ink hover:bg-mint-300',
  blue: 'bg-blueberry-500 text-white hover:bg-blueberry-600',
  white: 'bg-white text-ink hover:bg-cream',
  ghost: 'bg-transparent text-ink border-transparent hover:bg-white/60 shadow-none',
}

function classesFor(tone, size, extra) {
  const shadow = tone === 'ghost' ? '' : 'shadow-[0_5px_0_0_var(--color-ink)] active:translate-y-[4px] active:shadow-[0_1px_0_0_var(--color-ink)]'
  return [BASE, SIZES[size], TONES[tone], shadow, extra].filter(Boolean).join(' ')
}

export function Button({ tone = 'primary', size = 'md', to, href, className, children, ...rest }) {
  const cls = classesFor(tone, size, className)
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}

export function Pill({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-1.5 text-sm font-bold ${className}`}
    >
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'
  return (
    <div className={`flex flex-col ${alignment} max-w-3xl ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rotate-[-2deg] rounded-full border-[3px] border-ink bg-sunshine-300 px-4 py-1 font-display text-sm font-bold uppercase tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-ink-soft ${align === 'left' ? '' : 'mx-auto'}`}>{subtitle}</p>
      )}
    </div>
  )
}

/** Soft floating background blobs. Purely decorative. */
export function Blobs({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="animate-float-slow absolute -left-16 top-10 h-56 w-56 rounded-full bg-bubblegum-300/40 blur-2xl" />
      <div className="animate-float absolute right-0 top-32 h-64 w-64 rounded-full bg-sunshine-300/50 blur-2xl" />
      <div className="animate-float-slow absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-mint-300/40 blur-2xl" />
    </div>
  )
}

/** Little sticker shapes that float around hero art. */
export function Doodle({ kind = 'star', className = '', color = 'var(--color-sunshine-500)' }) {
  const shapes = {
    star: (
      <path d="M24 2l6.2 12.6L44 16.6l-10 9.7 2.4 13.8L24 33.6l-12.4 6.5L14 26.3 4 16.6l13.8-2z" />
    ),
    heart: (
      <path d="M24 42S4 29.4 4 17.4C4 10.6 9.4 5.6 15.8 5.6c3.8 0 7.1 1.9 8.2 4.6 1.1-2.7 4.4-4.6 8.2-4.6C38.6 5.6 44 10.6 44 17.4 44 29.4 24 42 24 42z" />
    ),
    blob: (
      <path d="M38.6 12.5c4.4 5.8 4 15.3-.6 21.2-4.6 5.9-13.4 8.2-20.3 5.6C10.8 36.7 5.8 29.2 5.2 21.6 4.6 14 8.4 6.3 14.7 4.2c6.3-2.1 15.1 1.4 19.5 5.3z" />
    ),
    bolt: <path d="M28 2L8 27h12l-4 19 22-27H26z" />,
    circle: <circle cx="24" cy="24" r="20" />,
  }
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={className}
      fill={color}
      stroke="var(--color-ink)"
      strokeWidth="3"
      strokeLinejoin="round"
    >
      {shapes[kind]}
    </svg>
  )
}

/** Friendly mascot characters, drawn inline so there are no image assets to load. */
export function Mascot({ name = 'rocket', className = '' }) {
  const faces = {
    rocket: (
      <g>
        <ellipse cx="60" cy="104" rx="26" ry="8" fill="var(--color-ink)" opacity=".15" />
        <path
          d="M60 10c14 12 20 30 20 48 0 10-3 18-6 24H46c-3-6-6-14-6-24 0-18 6-36 20-48z"
          fill="var(--color-bubblegum-500)"
        />
        <path d="M40 60L24 76l14-2 4 10c-4-8-3-17-2-24z" fill="var(--color-tangerine-500)" />
        <path d="M80 60l16 16-14-2-4 10c4-8 3-17 2-24z" fill="var(--color-tangerine-500)" />
        <circle cx="60" cy="48" r="14" fill="var(--color-sky-lagoon)" />
        <circle cx="55" cy="44" r="4" fill="#fff" opacity=".85" />
        <path d="M50 88c4 8 16 8 20 0" fill="var(--color-sunshine-500)" />
      </g>
    ),
    owl: (
      <g>
        <ellipse cx="60" cy="106" rx="28" ry="8" fill="var(--color-ink)" opacity=".15" />
        <path
          d="M60 14c22 0 36 18 36 40s-14 44-36 44S24 76 24 54 38 14 60 14z"
          fill="var(--color-grape-500)"
        />
        <circle cx="46" cy="52" r="14" fill="#fff" />
        <circle cx="74" cy="52" r="14" fill="#fff" />
        <circle cx="48" cy="54" r="6" fill="var(--color-ink)" />
        <circle cx="72" cy="54" r="6" fill="var(--color-ink)" />
        <path d="M60 62l-7 9h14z" fill="var(--color-sunshine-500)" />
        <path d="M30 20l14 12M90 20L76 32" stroke="var(--color-ink)" strokeWidth="5" strokeLinecap="round" />
      </g>
    ),
    fox: (
      <g>
        <ellipse cx="60" cy="106" rx="26" ry="8" fill="var(--color-ink)" opacity=".15" />
        <path d="M28 30l6 26 26-8z" fill="var(--color-tangerine-500)" />
        <path d="M92 30l-6 26-26-8z" fill="var(--color-tangerine-500)" />
        <path
          d="M60 30c20 0 32 16 32 36S80 100 60 100 28 84 28 66s12-36 32-36z"
          fill="var(--color-tangerine-500)"
        />
        <path d="M60 60c12 0 20 10 20 20s-8 18-20 18-20-8-20-18 8-20 20-20z" fill="#fff" />
        <circle cx="50" cy="62" r="5" fill="var(--color-ink)" />
        <circle cx="70" cy="62" r="5" fill="var(--color-ink)" />
        <path d="M60 76l-5 5h10z" fill="var(--color-ink)" />
      </g>
    ),
    bot: (
      <g>
        <ellipse cx="60" cy="106" rx="26" ry="8" fill="var(--color-ink)" opacity=".15" />
        <path d="M60 10v14" stroke="var(--color-ink)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="60" cy="10" r="7" fill="var(--color-sunshine-500)" />
        <rect x="24" y="26" width="72" height="56" rx="20" fill="var(--color-mint-500)" />
        <rect x="38" y="44" width="44" height="22" rx="11" fill="var(--color-ink)" />
        <circle cx="50" cy="55" r="5" fill="var(--color-sunshine-500)" />
        <circle cx="70" cy="55" r="5" fill="var(--color-sunshine-500)" />
        <rect x="40" y="84" width="40" height="16" rx="8" fill="var(--color-blueberry-500)" />
      </g>
    ),
  }
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label={`${name} mascot`}
      className={className}
      stroke="var(--color-ink)"
      strokeWidth="4"
      strokeLinejoin="round"
    >
      {faces[name]}
    </svg>
  )
}
