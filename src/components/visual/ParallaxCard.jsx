import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../utils/cn'

const ParallaxCard = ({ children, className, intensity = 10 }) => {
  const ref = useRef(null)
  const frame = useRef(0)

  const handleMove = (event) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    const rotateX = -(y * intensity)
    const rotateY = x * intensity

    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
    })
  }

  const reset = () => {
    cancelAnimationFrame(frame.current)
    if (ref.current) {
      ref.current.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)'
    }
  }

  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  return (
    <div
      ref={ref}
      className={cn('parallax-card transition-transform duration-500 ease-out will-change-transform', className)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onMouseEnter={handleMove}
    >
      {children}
    </div>
  )
}

ParallaxCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  intensity: PropTypes.number,
}

export default ParallaxCard
