import PropTypes from 'prop-types'
import { cn } from '../../utils/cn'

const LazyImage = ({
  src,
  alt,
  className,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  sizes = '100vw',
  srcSet,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sizes={sizes}
      srcSet={srcSet}
      className={cn('object-cover', className)}
      {...props}
    />
  )
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  decoding: PropTypes.oneOf(['async', 'auto', 'sync']),
  fetchPriority: PropTypes.oneOf(['high', 'low', 'auto']),
  sizes: PropTypes.string,
  srcSet: PropTypes.string,
}

export default LazyImage
