import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useScroll'
import { cn } from '../utils/cn'

const usePrefersReducedMotion = () => {
  const [prefers, setPrefers] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefers(mediaQuery.matches)

    const handler = (event) => setPrefers(event.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefers
}

const FadeInSection = ({ children, className }) => {
  const ref = useRef(null)
  const isVisible = useIntersectionObserver(ref)
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div
      ref={ref}
      className={cn(
        prefersReducedMotion ? '' : 'transition-all duration-1000',
        prefersReducedMotion ? 'opacity-100' : isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default FadeInSection
