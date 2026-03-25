import PropTypes from 'prop-types'
import ParallaxCard from '../visual/ParallaxCard'
import LazyImage from '../ui/LazyImage'

const MenuCard = ({ title, description, image, price, badges }) => {
  const imageSizes = '(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw'
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl shadow-glow transition duration-500 hover:-translate-y-1">
      {image ? (
        <ParallaxCard className="relative aspect-[4/3] shine-card" intensity={7}>
          <LazyImage
            src={image}
            alt={title}
            className="h-full w-full"
            sizes={imageSizes}
            loading="lazy"
          />
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {price}
          </span>
        </ParallaxCard>
      ) : (
        <ParallaxCard className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#0e1c16] via-[#1b2d23] to-[#0e1c16] shine-card" intensity={7}>
          <span className="text-sm uppercase tracking-[0.4em] text-white/40">Chef crafted</span>
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {price}
          </span>
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-noise-soft" />
          </div>
        </ParallaxCard>
      )}
      <div className="space-y-3 p-6">
        <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.25em] text-gold-200/80">
          {badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </article>
  )
}

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MenuCard
