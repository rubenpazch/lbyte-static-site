export const Header = () => {
  return (
    <header style={{
      padding: '24px 40px',
      position: 'sticky',
      top: 0,
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(10, 10, 10, 0.8)',
      zIndex: 100,
      borderBottom: '1px solid rgba(255, 106, 0, 0.2)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #ff6a00 0%, #ff8534 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em'
        }}>
          L BYTE
        </div>
        <nav style={{ display: 'flex', gap: '32px' }}>
          <a href="#services" style={{ color: '#d4d4d4', textDecoration: 'none', transition: 'color 0.3s' }}>Services</a>
          <a href="#about" style={{ color: '#d4d4d4', textDecoration: 'none', transition: 'color 0.3s' }}>About</a>
          <a href="#contact" style={{ color: '#d4d4d4', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
