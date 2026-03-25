import SectionHeading from '../components/ui/SectionHeading'
import { EXPERIENCE_FEATURES, TESTIMONIALS } from '../data/content'
import TestimonialCard from '../components/cards/TestimonialCard'

const Experience = () => {
  return (
    <section id="about" className="bg-[#060b08] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[32px] border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-8 shadow-glow sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="About"
              title="Dining as an immersive ritual"
              description="FreshBite was built for Lagos evenings that deserve a slower cadence. Every detail—from the custom ceramics to the vinyl curation—is intentional."
            />
            <div className="space-y-6 text-white/80">
              {EXPERIENCE_FEATURES.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
