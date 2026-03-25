import PropTypes from 'prop-types'
import { cn } from '../../utils/cn'

const SectionHeading = ({ eyebrow, title, description, align = 'left', className }) => {
  return (
    <div className={cn('space-y-3', align === 'center' ? 'text-center mx-auto' : '', className)}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-gold-200">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description && <p className="text-base text-white/70 max-w-2xl">{description}</p>}
    </div>
  )
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
  className: PropTypes.string,
}

export default SectionHeading
