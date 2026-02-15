import { useState } from 'react'
import { Link } from 'react-router-dom'

type HeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/servicios', label: 'Servicios', isAnchor: false },
    { href: '/nosotros', label: 'Nosotros', isAnchor: false },
    { href: '/blog', label: 'Blog', isAnchor: false },
    { href: '/contacto', label: 'Contacto', isAnchor: false }
  ]

  return (
    <header style={{
      padding: 'clamp(16px, 4vw, 24px) clamp(20px, 4vw, 40px)',
      position: 'sticky',
      top: 0,
      backdropFilter: 'blur(10px)',
      backgroundColor: 'var(--header-bg)',
      zIndex: 100,
      borderBottom: '1px solid var(--header-border)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src={theme === 'light' ? '/logo_black_lbyte.webp' : '/logo_black_background_lbyte.webp'}
            alt="L BYTE"
            width="56"
            height="56"
            style={{ display: 'block', objectFit: 'contain', flexShrink: 0 }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{
          gap: '32px',
          alignItems: 'center'
        }} className="desktop-nav">
          {navLinks.map((link) => 
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-bright)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-bright)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button + Theme Toggle */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={onToggleTheme}
            style={{
              border: '1px solid var(--header-border)',
              background: 'var(--surface)',
              color: 'var(--text)',
              padding: '8px 12px',
              borderRadius: '999px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.75rem',
              transition: 'all 0.3s'
            }}
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '2px solid var(--text)',
              color: 'var(--text)',
              padding: '8px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1.25rem',
              width: '44px',
              height: '44px',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
            className="mobile-menu-btn"
            aria-label="Menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginTop: '16px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border)',
          animation: 'slideDown 0.3s ease-out'
        }}>
          {navLinks.map((link) => 
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: 'var(--text)',
                  textDecoration: 'none',
                  padding: '12px 8px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  transition: 'transform 0.2s',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-soft)'
                  e.currentTarget.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: 'var(--text)',
                  textDecoration: 'none',
                  padding: '12px 8px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  transition: 'transform 0.2s',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-soft)'
                  e.currentTarget.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      )}

      <style>{`
        .desktop-nav {
          display: flex;
        }
        .mobile-menu-btn {
          display: none;
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}