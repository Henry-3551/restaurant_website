import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import LazyImage from '../components/ui/LazyImage'
import ParallaxCard from '../components/visual/ParallaxCard'
import { CONTACT_DETAILS } from '../data/content'

const ContactPreview = () => {
  return (
    <section id="contact" className="bg-[#050806] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Visit FreshBite Kitchen"
              description="Our Ikoyi space opens Tuesday through Sunday with only two seatings per night."
            />
            <dl className="space-y-4 text-white/80" itemScope itemType="https://schema.org/Restaurant">
              <div>
                <dt className="text-xs uppercase tracking-[0.4em] text-white/50">Location</dt>
                <dd className="text-lg">
                  <address className="not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">{CONTACT_DETAILS.address}</span>
                    <meta itemProp="addressLocality" content="Ikoyi" />
                    <meta itemProp="addressRegion" content="Lagos" />
                    <meta itemProp="addressCountry" content="NG" />
                  </address>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.4em] text-white/50">Concierge</dt>
                <dd className="text-lg">
                  <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:text-gold-200" itemProp="telephone">
                    {CONTACT_DETAILS.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.4em] text-white/50">Email</dt>
                <dd className="text-lg">
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-gold-200" itemProp="email">
                    {CONTACT_DETAILS.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.4em] text-white/50">Hours</dt>
                <dd className="text-lg" itemProp="openingHours">
                  {CONTACT_DETAILS.hours}
                </dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3">
              <Button as="a" href="tel:+2348035551188">
                Call concierge
              </Button>
              <Button as={Link} to="/reservations" variant="secondary">
                Reserve now
              </Button>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-glow">
            <ParallaxCard className="relative aspect-[4/3] rounded-[28px] shine-card" intensity={8}>
              <LazyImage
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
                alt="Restaurant interior"
                className="h-full w-full"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-black/50 px-4 py-3 text-sm text-white">
                Lagos · Ikoyi district
              </div>
            </ParallaxCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPreview
