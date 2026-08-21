import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import logo from '../../assets/lixteq-pos-logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'POS Devices', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Sliding pill indicator — tracks the active link's position/width
  const navRef = useRef(null)
  const linkRefs = useRef({})
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const measurePill = () => {
    const activeItem = navItems.find((item) => item.to === location.pathname)
    const el = activeItem ? linkRefs.current[activeItem.to] : null
    if (el && navRef.current) {
      const navBox = navRef.current.getBoundingClientRect()
      const linkBox = el.getBoundingClientRect()
      setPillStyle({
        left: linkBox.left - navBox.left,
        width: linkBox.width,
        opacity: 1,
      })
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }))
    }
  }

  useEffect(() => {
    measurePill()
    window.addEventListener('resize', measurePill)
    return () => window.removeEventListener('resize', measurePill)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[var(--glass-border)] bg-[rgba(5,8,7,0.7)] backdrop-blur-xl shadow-lg'
          : 'border-b border-[var(--glass-border)] bg-[rgba(5,8,7,0.5)] backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
       <Link
  to="/"
  className="flex items-center gap-2.5 group"
  onClick={closeMobileMenu}
>
  <img
    src={logo}
    alt="LIXTEQ POS"
    className="
      h-11
      w-auto
      object-contain
      transition-all
      duration-300
      group-hover:scale-[1.03]
      sm:h-12
    "
  />
</Link>

        {/* Desktop Navigation */}
        <div ref={navRef} className="relative hidden items-center gap-1 md:flex">
          {/* Sliding active pill */}
          <span
            className="absolute top-1/2 h-9 -translate-y-1/2 rounded-lg bg-gradient-to-r from-[var(--green-primary)] to-[var(--green-emerald)] shadow-[0_2px_16px_-2px_var(--green-primary)] transition-all duration-300 ease-out"
            style={{
              left: `${pillStyle.left}px`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
            }}
          />

          {navItems.map((item) => (
            <NavLink
              key={item.label}
              ref={(el) => { linkRefs.current[item.to] = el }}
              to={item.to}
              className={({ isActive }) =>
                `relative z-10 px-4 py-1.5 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-[var(--bg-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`
              }
              onClick={() => setTimeout(measurePill, 0)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/94787777810"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--green-primary)] to-[var(--green-emerald)] px-4 py-2.5 text-sm font-semibold text-[var(--bg-primary)] transition-all duration-200 hover:shadow-lg hover:shadow-[var(--green-primary)]/30 hover:scale-105 sm:inline-flex"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-secondary)] md:hidden transition-all duration-200"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[var(--glass-border)] bg-[rgba(5,8,7,0.8)] backdrop-blur-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[var(--green-primary)] to-[var(--green-emerald)] text-[var(--bg-primary)] shadow-[0_2px_16px_-2px_var(--green-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]'
                  }`
                }
                onClick={closeMobileMenu}
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="https://wa.me/94787777810"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--green-primary)] to-[var(--green-emerald)] px-4 py-3 text-sm font-semibold text-[var(--bg-primary)] transition-all duration-200 hover:shadow-lg hover:shadow-[var(--green-primary)]/30"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}