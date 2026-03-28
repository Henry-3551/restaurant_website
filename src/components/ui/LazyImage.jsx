import { useState } from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../utils/cn'

const LazyImage = ({
  src,
  alt,
  className,
  wrapperClassName,
  placeholderClassName,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  sizes = '100vw',
  srcSet,
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = (event) => {
    setIsLoaded(true)
    if (typeof onLoad === 'function') {
      onLoad(event)
    }
  }

  return (
    <span
      className={cn('relative block overflow-hidden rounded-[inherit] bg-white/5', wrapperClassName)}
      aria-busy={!isLoaded}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        sizes={sizes}
        srcSet={srcSet}
        onLoad={handleLoad}
        className={cn(
          'h-full w-full object-cover transition duration-700 ease-out',
          isLoaded ? 'opacity-100 blur-0' : 'scale-[1.02] blur-lg opacity-0',
          className,
        )}
        {...props}
      />
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 transition-opacity duration-700 ease-out',
          isLoaded ? 'opacity-0' : 'opacity-100',
          placeholderClassName,
        )}
      />
    </span>
  )
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  placeholderClassName: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  decoding: PropTypes.oneOf(['async', 'auto', 'sync']),
  fetchPriority: PropTypes.oneOf(['high', 'low', 'auto']),
  sizes: PropTypes.string,
  srcSet: PropTypes.string,
  onLoad: PropTypes.func,
}

export default LazyImage
