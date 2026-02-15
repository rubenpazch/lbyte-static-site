export const About = () => {
  const stats = [
    { value: '50+', label: 'Proyectos Entregados' },
    { value: '100%', label: 'Satisfacción del Cliente' },
    { value: '24/7', label: 'Soporte Disponible' },
    { value: '5+', label: 'Años de Experiencia' }
  ]

  return (
    <section id="about" style={{
      background: 'var(--surface-2)',
      borderRadius: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          background: 'linear-gradient(135deg, var(--text) 0%, var(--muted) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Sobre L BYTE
        </h2>

        <p style={{ marginBottom: '24px', fontSize: '1.125rem' }}>
          En L BYTE diseñamos y desarrollamos software a medida que impulsa el crecimiento de nuestros clientes.
          Nos especializamos en construir aplicaciones web modernas, APIs robustas y soluciones digitales que se
          adaptan a las necesidades reales del negocio.
        </p>

        <p style={{ marginBottom: '48px' }}>
          Trabajamos con tecnologías actuales y buenas prácticas de ingeniería para garantizar productos seguros,
          mantenibles y escalables. Nuestro enfoque combina entendimiento del negocio, diseño funcional y
          desarrollo de software de alta calidad.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}>
          <div style={{
            padding: '24px',
            background: 'var(--surface)',
            borderRadius: '16px',
            border: '1px solid var(--accent-border)'
          }}>
            <h3 style={{ color: 'var(--accent-bright)', fontSize: '1.25rem', marginBottom: '12px' }}>🎯 Misión</h3>
            <p style={{ fontSize: '0.95rem', margin: 0, lineHeight: '1.7' }}>
              Crear software confiable y bien diseñado que ayude a las empresas a optimizar procesos,
              mejorar la experiencia de sus usuarios y escalar sus productos digitales.
            </p>
          </div>

          <div style={{
            padding: '24px',
            background: 'var(--surface)',
            borderRadius: '16px',
            border: '1px solid var(--accent-border)'
          }}>
            <h3 style={{ color: 'var(--accent-bright)', fontSize: '1.25rem', marginBottom: '12px' }}>🚀 Visión</h3>
            <p style={{ fontSize: '0.95rem', margin: 0, lineHeight: '1.7' }}>
              Convertirnos en un socio tecnológico de referencia, reconocido por la calidad de nuestro código,
              la claridad de nuestras soluciones y el impacto real en los negocios de nuestros clientes.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '32px',
          marginTop: '64px'
        }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '8px'
              }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
