export const Hero = () => {
  return (
    <section style={{
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 106, 0, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          background: 'rgba(255, 106, 0, 0.1)',
          border: '1px solid rgba(255, 106, 0, 0.3)',
          borderRadius: '100px',
          marginBottom: '24px',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#ff8534'
        }}>
          ✨ Modern Software Development
        </div>

        <h1 style={{
          marginBottom: '32px',
          background: 'linear-gradient(135deg, #ffffff 0%, #d4d4d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Code that drives
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #ff6a00 0%, #ff8534 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            your business
          </span>
        </h1>

        <p style={{
          fontSize: '1.25rem',
          marginBottom: '48px',
          maxWidth: '600px'
        }}>
          We build modern, scalable software aligned with your company's real needs.
          From MVP to enterprise solutions.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            padding: '16px 32px',
            background: 'linear-gradient(135deg, #ff6a00 0%, #ff8534 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 20px rgba(255, 106, 0, 0.3)'
          }}>
            Get Started
          </a>
          <a href="#services" style={{
            padding: '16px 32px',
            background: 'transparent',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            border: '2px solid rgba(255, 106, 0, 0.5)',
            transition: 'all 0.2s'
          }}>
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
