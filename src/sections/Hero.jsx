import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import LazyImage from '../components/ui/LazyImage'
import ParallaxCard from '../components/visual/ParallaxCard'
import SignaturePattern from '../components/visual/SignaturePattern'
import Ticker from '../components/visual/Ticker'
import { HERO_CONTENT } from '../data/content'

const tickerItems = ['Chef table', 'Slow-fermented sauces', 'Ikoyi vinyl bar', 'Six-course pairing', 'Garden tasting']

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#050806]">
      <div className="absolute inset-0 bg-radial-spot opacity-60" aria-hidden></div>
      <SignaturePattern className="absolute -left-20 top-10 h-[360px] w-[360px] animate-drift-rotate" opacity={0.3} />
      <SignaturePattern className="absolute -right-10 bottom-20 h-[280px] w-[280px] animate-drift-rotate" opacity={0.2} />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:py-24">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.6em] text-gold-200/80">
            <span>Chef-led</span>
            <span className="h-px flex-1 bg-white/15"></span>
            <span>Ikoyi</span>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.7em] text-white/50">Aperitivo suite</p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-[3.5rem]">
                {HERO_CONTENT.title}
              </h1>
              <p className="text-base text-white/70 sm:text-lg">{HERO_CONTENT.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as={Link} to="/reservations">
              Reserve a Table
            </Button>
            <Button as={Link} to="/menu" variant="secondary">
              Explore Menu
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {HERO_CONTENT.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-4 text-left"
              >
                <dt className="text-xs uppercase tracking-[0.3em] text-white/60">{stat.label}</dt>
                <dd className="mt-2 text-3xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 justify-center">
          <div className="absolute -left-6 top-4 hidden rotate-90 text-[8rem] font-semibold tracking-[0.2em] text-white/3 lg:block">
            FRESHBITE
          </div>
          <div className="relative w-full max-w-[420px]">
            <div className="absolute -top-10 right-2 hidden h-20 w-20 animate-float rounded-full border border-gold-300/30 lg:block">
              <div className="absolute inset-2 rounded-full border border-white/20"></div>
            </div>
            <ParallaxCard className="relative rounded-[40px] border border-white/10 bg-[#080c09] p-4 shadow-glow" intensity={12}>
              <div className="grid-overlay shine-card relative aspect-[4/5] rounded-[32px]">
                <LazyImage
                  src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80"
                  alt="Dining table with Italian dishes"
                  className="h-full w-full"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                <div className="absolute left-6 right-6 top-6 flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white">
                  <span>Chef's Garden Tasting</span>
                  <span className="text-white/60">Tonight · 7:30 PM</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 space-y-3 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white">
                  <p className="text-xs uppercase tracking-[0.4em] text-gold-200">Concierge note</p>
                  <p>Table 6 reserved for Nkem · pair with Barolo flight</p>
                </div>
              </div>
            </ParallaxCard>
            <div className="-mr-10 -mt-8 hidden max-w-[220px] rounded-3xl border border-white/10 bg-white/5 p-4 text-left text-sm text-white/80 shadow-glow sm:block">
              <p className="text-xs uppercase tracking-[0.4em] text-gold-200">Chef Etim</p>
              <p className="mt-2 text-lg font-semibold text-white">“Every plate should feel like vinyl warmth.”</p>
            </div>
          </div>
        </div>
      </div>

      <Ticker items={tickerItems} />
    </section>
  )
}

export default Hero
