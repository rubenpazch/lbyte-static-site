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
            Building the future, one line of code at a time.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px', color: '#ffffff' }}>Services</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#services" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>Web Development</a>
            <a href="#services" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>Mobile Apps</a>
            <a href="#services" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>API Development</a>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px', color: '#ffffff' }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="mailto:contact@lbyte.dev" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>contact@lbyte.dev</a>
            <a href="https://github.com/rubenpazch" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>GitHub</a>
            <a href="https://linkedin.com" style={{ color: '#d4d4d4', textDecoration: 'none', fontSize: '0.875rem' }}>LinkedIn</a>
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
        © {new Date().getFullYear()} L BYTE. All rights reserved.
      </div>
    </footer>
  )
}
