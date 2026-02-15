import logoDark from '../assets/JPG/logo_black_background_lbyte.jpg'
import logoLight from '../assets/JPG/logo_black_lbyte.jpg'

type HeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  return (
    <header style={{
      padding: '24px 40px',
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
        <img
          src={theme === 'light' ? logoLight : logoDark}
          alt="L BYTE"
          style={{ height: '56px', width: 'auto', display: 'block', objectFit: 'contain' }}
        />
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#services" style={{ color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }}>Servicios</a>
          <a href="#about" style={{ color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }}>Nosotros</a>
          <a href="#contact" style={{ color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }}>Contacto</a>
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
              fontWeight: 600
            }}
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? 'Claro' : 'Oscuro'}
          </button>
        </nav>
      </div>
    </header>
  )
}
