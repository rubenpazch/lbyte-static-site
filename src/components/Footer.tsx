export const Footer = () => {
  return (
    <footer style={{
      padding: '64px 40px 32px',
      borderTop: '1px solid var(--accent-border)',
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
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)',
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
          <h3 style={{ marginBottom: '16px', color: 'var(--text)', fontSize: '1.125rem', fontWeight: 600 }}>Servicios</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="/servicios" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Desarrollo Web</a>
            <a href="/servicios" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Desarrollo de APIs</a>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', color: 'var(--text)', fontSize: '1.125rem', fontWeight: 600 }}>Empresa</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="/nosotros" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Sobre Nosotros</a>
            {/* <a href="#cases" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Casos de Éxito</a> */}
            <a href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Testimonios</a>
            <a href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Blog</a>
            <a href="/faq" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Preguntas Frecuentes</a>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', color: 'var(--text)', fontSize: '1.125rem', fontWeight: 600 }}>Contacto</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="mailto:lbyteperu@gmail.com" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>lbyteperu@gmail.com</a>
            <a href="https://www.facebook.com/profile.php?id=100092624540974" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Facebook</a>
            <a href="https://www.instagram.com/lbyteperu?igsh=aDc4N2d4NWkzY3Qz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Instagram</a>
            <a href="https://www.tiktok.com/@lbyte2" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.875rem' }}>TikTok</a>
            <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Perú</span>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        paddingTop: '32px',
        borderTop: '1px solid var(--accent-border)',
        color: 'var(--muted)',
        fontSize: '0.875rem'
      }}>
        © {new Date().getFullYear()} L BYTE. Todos los derechos reservados.
      </div>
    </footer>
  )
}
