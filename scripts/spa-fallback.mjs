/**
 * GitHub Pages has no SPA rewrite rule: a hard refresh on /learn/math 404s.
 * Pages serves 404.html for any unmatched path, so shipping a copy of the
 * built shell under that name hands the URL to React Router intact.
 *
 * Netlify and Vercel do this with a real rewrite (see netlify.toml /
 * vercel.json); the extra file is harmless there.
 */
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
const index = resolve(dist, 'index.html')

if (!existsSync(index)) {
  console.error('spa-fallback: dist/index.html not found — did vite build run?')
  process.exit(1)
}

copyFileSync(index, resolve(dist, '404.html'))
console.log('spa-fallback: wrote dist/404.html')
