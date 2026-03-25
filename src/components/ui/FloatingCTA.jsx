import { Link } from 'react-router-dom'
import { useScrollDirection } from '../../hooks/useScroll'
import Button from './Button'
import { cn } from '../../utils/cn'

const FloatingCTA = () => {
  const { scrollY } = useScrollDirection()
  const isVisible = scrollY > 300

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-40 transition-all duration-300',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none',
      )}
    >
      <Button as={Link} to="/reservations" className="shadow-2xl">
        Reserve Now
      </Button>
    </div>
  )
}

export default FloatingCTA
