import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Moon, Sun, MessageCircle } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'POS Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--green-primary)] to-[var(--green-emerald)] flex items-center justify-center font-bold text-[var(--bg-primary)] group-hover:shadow-lg group-hover:shadow-[var(--green-primary)]/50 transition-all duration-300">
            L
          </div>
          <span className="text-xl font-black tracking-tight text-[var(--text-primary)] hidden sm:inline">
            LIXTEQ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-[var(--green-primary)]' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/*{/* Theme Toggle 
          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--green-primary)]/50"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>*/}

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
                  `rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-[var(--green-primary)]/10 text-[var(--green-primary)] border border-[var(--green-primary)]/30' 
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
