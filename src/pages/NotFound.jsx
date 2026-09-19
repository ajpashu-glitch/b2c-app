import { Button, Mascot, Doodle } from '../components/ui'

export default function NotFound() {
  return (
    <section className="dotted-bg relative overflow-hidden">
      <Doodle kind="star" className="animate-twinkle absolute left-12 top-14 h-14 w-14" />
      <div className="relative mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <Mascot name="bot" className="animate-float mx-auto h-36 w-36" />
        <p className="mt-6 font-display text-7xl font-extrabold">404</p>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          This page floated off somewhere
        </h1>
        <p className="mt-4 text-lg text-ink-soft">
          Even our best explorers take a wrong turn. Let’s get you back to the good stuff.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/" tone="berry" size="lg">
            Back home
          </Button>
          <Button to="/learn" tone="white" size="lg">
            Browse skills
          </Button>
        </div>
      </div>
    </section>
  )
}
