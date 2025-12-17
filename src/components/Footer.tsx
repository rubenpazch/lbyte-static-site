export const Footer = () => {
  return (
    <footer style={{
      padding: '64px 40px 32px',
      borderTop: '1px solid rgba(255, 106, 0, 0.2)',
      marginTop: '100px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '48px',
        marginBottom: '48px'
      }}>
        <div>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ff6a00 0%, #ff8534 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            L BYTE
          </div>
          <p style={{ fontSize: '0.875rem', margin: 0 }}>
            Construyendo el futuro, una línea de código a la vez.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px', color: '#ffffff' }}>Servicios</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#services" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>Desarrollo Web</a>
            <a href="#services" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>Apps Móviles</a>
            <a href="#services" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>Desarrollo de APIs</a>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px', color: '#ffffff' }}>Contacto</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="mailto:lbyteperu@gmail.com" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>lbyteperu@gmail.com</a>
            <a href="https://www.facebook.com/profile.php?id=61584959411904" target="_blank" rel="noopener noreferrer" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>Facebook</a>
            <span style={{ color: '#d4d4d4', fontSize: '0.875rem' }}>Perú</span>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        paddingTop: '32px',
        borderTop: '1px solid rgba(255, 106, 0, 0.1)',
        color: '#757575',
        fontSize: '0.875rem'
      }}>
        © {new Date().getFullYear()} L BYTE. Todos los derechos reservados.
      </div>
    </footer>
  )
}
