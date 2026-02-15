export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'CEO - TechStartup',
      content: 'L BYTE transformó nuestra idea en una aplicación web escalable. Su equipo entendió perfectamente nuestras necesidades de negocio. Excelente servicio.',
      rating: 5
    },
    {
      name: 'Maria García',
      role: 'Directora Comercial - E-commerce',
      content: 'Desarrollaron nuestro API de integración de pagos en tiempo récord. El código es limpio, bien documentado y mantenible.',
      rating: 5
    },
    {
      name: 'Jorge López',
      role: 'Product Manager - SaaS',
      content: 'Trabajamos con L BYTE en nuestro MVP y fue un éxito. Son responsables, profesionales y entienden la urgencia de las startups.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" style={{
      background: 'var(--surface-2)',
      borderRadius: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          background: 'linear-gradient(135deg, var(--text) 0%, var(--muted) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '12px'
        }}>
          Lo que dicen nuestros clientes
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '48px', fontSize: '1.0625rem' }}>
          Somos orgullosos de haber ayudado a empresas latinoamericanas a crecer digitalmente.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                padding: '32px',
                background: 'var(--surface)',
                borderRadius: '16px',
                border: '1px solid var(--accent-border)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>★</span>
                ))}
              </div>
              <p style={{
                flex: 1,
                margin: '0 0 20px 0',
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                "{testimonial.content}"
              </p>
              <div style={{ borderTop: '1px solid var(--accent-border)', paddingTop: '16px' }}>
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--text)' }}>
                  {testimonial.name}
                </p>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--muted)' }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
