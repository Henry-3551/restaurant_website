import PropTypes from 'prop-types'
import { cn } from '../../utils/cn'

const SignaturePattern = ({ className, opacity = 0.4 }) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 420"
      className={cn('pointer-events-none text-white/10', className)}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="strokeGrad" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#strokeGrad)" strokeWidth="1.4">
        <path d="M20 120 Q120 40 220 120 T420 120" />
        <path d="M0 240 Q140 340 280 220 T420 240" />
        <path d="M40 360 Q140 260 220 360 T400 360" />
        <circle cx="320" cy="80" r="18" />
        <circle cx="80" cy="320" r="22" />
        <path d="M60 40 L100 80" />
        <path d="M340 300 L380 340" />
      </g>
    </svg>
  )
}

SignaturePattern.propTypes = {
  className: PropTypes.string,
  opacity: PropTypes.number,
}

export default SignaturePattern
