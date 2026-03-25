import PropTypes from 'prop-types'
import { cn } from '../../utils/cn'

const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-charcoal text-porcelain shadow-glow hover:-translate-y-0.5 hover:bg-verdant-800 focus-visible:outline-gold-300',
  secondary:
    'border border-gold-200 text-gold-100 hover:bg-gold-200/10 focus-visible:outline-gold-200',
  ghost: 'text-porcelain hover:text-gold-200 focus-visible:outline-white/60',
}

const Button = ({ as: Component = 'button', variant = 'primary', className, children, ...props }) => {
  return (
    <Component className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Component>
  )
}

Button.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button
