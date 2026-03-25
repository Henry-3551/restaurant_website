import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'
import Hero from '../sections/Hero'

const highlightLinks = [
  {
    label: 'Chef tasting',
    description: 'Five-course tasting menus plated nightly with curated pours.',
    to: '/menu',
  },
  {
    label: 'Immersive lounge',
    description: 'Vinyl-backed service, private booths, and story-driven plating.',
    to: '/experience',
  },
  {
    label: 'Concierge reservations',
    description: 'Answer a few prompts and receive a call-back with pairings.',
    to: '/reservations',
  },
  {
    label: 'Visit Ikoyi space',
    description: 'Tour the dining room, hours, and how to reach our concierge.',
    to: '/contact',
  },
]

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <FadeInSection className="px-4">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">Choose your evening</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Every route leads to a different ritual.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {highlightLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-3xl border border-white/10 bg-black/30 p-6 text-left transition hover:-translate-y-1 hover:border-gold-200"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-gold-200">{item.label}</p>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-200">
                  Explore
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}

export default HomePage
