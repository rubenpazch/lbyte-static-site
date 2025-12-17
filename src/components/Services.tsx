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
      background: 'linear-gradient(180deg, transparent 0%, rgba(255, 106, 0, 0.03) 100%)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #d4d4d4 100%)',
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
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 106, 0, 0.2)',
            borderRadius: '16px',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.5)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 106, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.2)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>
              {service.icon}
            </div>
            <h3 style={{ color: '#ffffff', marginBottom: '12px' }}>
              {service.title}
            </h3>
            <p style={{ fontSize: '1rem', margin: 0 }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
