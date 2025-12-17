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
          ✨ Soluciones Digitales Escalables
        </div>

        <h1 style={{
          marginBottom: '32px',
          background: 'linear-gradient(135deg, #ffffff 0%, #d4d4d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Transformamos ideas en
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #ff6a00 0%, #ff8534 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            productos tecnológicos de alto impacto
          </span>
        </h1>

        <p style={{
          fontSize: '1.25rem',
          marginBottom: '48px',
          maxWidth: '700px'
        }}>
          Creamos soluciones digitales escalables, eficientes y orientadas al negocio mediante ingeniería de software de calidad.
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
            Empezar Ahora
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
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  )
}
