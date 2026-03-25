import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { NAV_LINKS } from '../../data/content'
import { cn } from '../../utils/cn'
import { useScrollDirection } from '../../hooks/useScroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollDirection, scrollY } = useScrollDirection()
  const isHidden = scrollDirection === 'down' && scrollY > 100
  const isBg = scrollY > 20

  const handleLinkClick = () => setIsOpen(false)

  const navLinkClass = ({ isActive }) =>
    cn(
      'relative text-white/80 transition hover:text-gold-200 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-gold-200 after:transition-all after:duration-300 hover:after:w-full',
      isActive && 'text-gold-200 after:w-full',
    )

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl transition-all duration-300',
          isHidden ? '-translate-y-full' : 'translate-y-0',
          isBg ? 'bg-[#040604]/95' : 'bg-[#060b08]/80',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex flex-col leading-tight text-white transition hover:text-gold-200"
            onClick={() => isOpen && setIsOpen(false)}
          >
            <span className="text-base font-semibold tracking-wide">FreshBite</span>
            <span className="text-xs uppercase tracking-[0.4em] text-gold-200">Lagos</span>
          </Link>

          <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="secondary" as={Link} to="/menu">
              Menu
            </Button>
            <Button as={Link} to="/reservations">
              Reserve
            </Button>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn(
              'relative inline-flex items-center justify-center rounded-full border p-3 transition md:hidden',
              isOpen ? 'border-gold-200 bg-white/10' : 'border-white/20',
            )}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="relative block h-4 w-5">
              {[0, 1, 2].map((line) => (
                <span
                  key={line}
                  className={cn(
                    'absolute left-0 h-0.5 w-full bg-white transition-all duration-300',
                    line === 0 && (isOpen ? 'top-1/2 rotate-45' : 'top-0'),
                    line === 1 && (isOpen ? 'opacity-0' : 'top-1/2'),
                    line === 2 && (isOpen ? 'top-1/2 -rotate-45' : 'bottom-0'),
                  )}
                ></span>
              ))}
            </span>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-white/5 bg-[#040604]/98 backdrop-blur-md md:hidden">
            <div className="space-y-1 px-4 py-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-lg px-3 py-3 text-base text-white/80 transition hover:bg-white/10 hover:text-gold-200',
                      isActive && 'text-gold-200',
                    )
                  }
                  onClick={handleLinkClick}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="border-t border-white/10 pt-4">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50">Ready to dine?</p>
                <div className="flex flex-col gap-2">
                  <Button className="w-full" as={Link} to="/reservations" onClick={handleLinkClick}>
                    Reserve Table
                  </Button>
                  <Button className="w-full" variant="secondary" as={Link} to="/menu" onClick={handleLinkClick}>
                    View Menu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}
    </>
  )
}

export default Navbar
