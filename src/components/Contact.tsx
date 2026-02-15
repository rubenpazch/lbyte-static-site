export const Contact = () => {
  return (
    <section id="contact" style={{
      background: 'linear-gradient(135deg, var(--accent-soft) 0%, rgba(255, 75, 58, 0.06) 100%)',
      borderRadius: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2 style={{
          background: 'linear-gradient(135deg, var(--text) 0%, var(--muted) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '16px'
        }}>
          No Solo Escribimos Código
        </h2>

        <p style={{ margin: '0 auto 24px', fontSize: '1.25rem', maxWidth: '700px' }}>
          Analizamos el problema, proponemos soluciones claras y construimos software pensado para crecer junto con tu negocio.
        </p>

        <p style={{ margin: '0 auto 48px', fontSize: '1rem', color: 'var(--muted)' }}>
          ¿Listo para transformar tus ideas en productos digitales de alto impacto?
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto 48px'
        }}>
          <div style={{
            padding: '32px',
            background: 'var(--surface)',
            borderRadius: '16px',
            border: '1px solid var(--accent-border)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📧</div>
            <h4 style={{ color: 'var(--text)', marginBottom: '8px' }}>Email</h4>
            <a href="mailto:lbyteperu@gmail.com" style={{
              color: 'var(--accent-bright)',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}>
              lbyteperu@gmail.com
            </a>
          </div>

          <div style={{
            padding: '32px',
            background: 'var(--surface)',
            borderRadius: '16px',
            border: '1px solid var(--accent-border)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💬</div>
            <h4 style={{ color: 'var(--text)', marginBottom: '8px' }}>WhatsApp</h4>
            <a href="https://wa.me/message/JZSNQMEX5GQLP1" target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--accent-bright)',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}>
              Enviar mensaje
            </a>
          </div>

          <div style={{
            padding: '32px',
            background: 'var(--surface)',
            borderRadius: '16px',
            border: '1px solid var(--accent-border)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>👥</div>
            <h4 style={{ color: 'var(--text)', marginBottom: '8px' }}>Facebook</h4>
            <a href="https://www.facebook.com/profile.php?id=61584959411904" target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--accent-bright)',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}>
              Visítanos
            </a>
          </div>

          <div style={{
            padding: '32px',
            background: 'var(--surface)',
            borderRadius: '16px',
            border: '1px solid var(--accent-border)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🇵🇪</div>
            <h4 style={{ color: 'var(--text)', marginBottom: '8px' }}>Ubicación</h4>
            <p style={{
              color: 'var(--accent-bright)',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Perú
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/message/JZSNQMEX5GQLP1" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            padding: '16px 48px',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '1.125rem',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            💬 Chatea por WhatsApp
          </a>

          <a href="mailto:lbyteperu@gmail.com" style={{
          display: 'inline-block',
          padding: '16px 48px',
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '1.125rem',
          boxShadow: '0 4px 20px var(--accent-shadow)',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          📧 Enviar Email
        </a>
        </div>
      </div>
    </section>
  )
}
