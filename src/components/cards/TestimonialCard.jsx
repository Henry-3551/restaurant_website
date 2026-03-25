import PropTypes from 'prop-types'

const TestimonialCard = ({ quote, name, role }) => {
  return (
    <article className="flex h-full flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 text-left shadow-glow">
      <p className="text-lg italic text-white/90">{quote}</p>
      <div className="space-y-1">
        <p className="text-sm font-semibold tracking-wide text-gold-200 uppercase">{name}</p>
        <p className="text-sm text-white/60">{role}</p>
      </div>
    </article>
  )
}

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
}

export default TestimonialCard
