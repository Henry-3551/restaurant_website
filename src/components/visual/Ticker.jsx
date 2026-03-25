import PropTypes from 'prop-types'
import { cn } from '../../utils/cn'

const Ticker = ({ items, className }) => {
  const repeated = [...items, ...items]
  return (
    <div className={cn('overflow-hidden border-y border-white/10 bg-[#050806]/80', className)}>
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-gold-300" aria-hidden="true"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

Ticker.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
}

export default Ticker
