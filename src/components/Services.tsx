const services = [
  {
    icon: '💻',
    title: 'Desarrollo de Software a Medida',
    description: 'Creamos soluciones personalizadas que se ajustan perfectamente a tus procesos de negocio y objetivos.'
  },
  {
    icon: '🌐',
    title: 'Aplicaciones Web (Frontend y Backend)',
    description: 'Aplicaciones web completas, modernas y escalables con las últimas tecnologías.'
  },
  {
    icon: '🔌',
    title: 'APIs y Sistemas Backend Escalables',
    description: 'Infraestructura backend robusta diseñada para crecer con tu negocio.'
  },
  {
    icon: '🔄',
    title: 'Integraciones con Servicios Externos',
    description: 'Conectamos tus sistemas con plataformas externas para automatizar y optimizar procesos.'
  },
  {
    icon: '🛠️',
    title: 'Mantenimiento y Mejora de Sistemas',
    description: 'Mantenemos y evolucionamos tus sistemas existentes para garantizar su óptimo funcionamiento.'
  },
  {
    icon: '🎯',
    title: 'Consultoría Técnica y Arquitectura',
    description: 'Asesoramiento experto en decisiones tecnológicas, arquitectura de software y mejores prácticas.'
  }
]

export const Services = () => {
  return (
    <section id="services" style={{
      background: 'linear-gradient(180deg, rgba(15, 15, 16, 0) 0%, var(--accent-soft) 100%)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 style={{
          background: 'linear-gradient(135deg, var(--text) 0%, var(--muted) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Nuestros Servicios
        </h2>
        <p style={{ margin: '0 auto' }}>
          Software confiable y bien diseñado que ayuda a optimizar procesos y escalar productos digitales
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {services.map(service => (
          <div key={service.title} style={{
            padding: '32px',
            background: 'var(--surface)',
            border: '1px solid var(--accent-border)',
            borderRadius: '16px',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.boxShadow = '0 12px 40px var(--accent-shadow)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--accent-border)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>
              {service.icon}
            </div>
            <h3 style={{ color: 'var(--text)', marginBottom: '12px' }}>
              {service.title}
            </h3>
            <p style={{ fontSize: '1rem', margin: 0, color: 'var(--muted)' }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '64px' }}>
        <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
          Conoce cómo hemos ayudado a otras empresas a alcanzar sus objetivos digitales
        </p>
        <a
          href="#cases"
          style={{
            display: 'inline-block',
            padding: '14px 28px',
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 20px var(--accent-shadow)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Ver Casos de Éxito →
        </a>
      </div>
    </section>
  )
}
