const projects = [
  {
    name: 'Sistema de Gestión Empresarial',
    client: 'Empresa A',
    description: 'Plataforma web completa para la gestión de inventarios, ventas y reportes en tiempo real.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Web App'
  },
  {
    name: 'Portal de E-commerce',
    client: 'Empresa B',
    description: 'Tienda online con pasarela de pagos, gestión de productos y panel administrativo.',
    technologies: ['React', 'Express', 'MongoDB'],
    category: 'E-commerce'
  },
  {
    name: 'Sistema de Reservas',
    client: 'Empresa C',
    description: 'Aplicación web para gestión de reservas, calendario y notificaciones automáticas.',
    technologies: ['TypeScript', 'Node.js', 'MySQL'],
    category: 'Web App'
  },
  {
    name: 'Dashboard Analítico',
    client: 'Empresa D',
    description: 'Panel de control con visualización de datos, gráficos interactivos y reportes personalizados.',
    technologies: ['React', 'D3.js', 'API REST'],
    category: 'Dashboard'
  }
]

export const Portfolio = () => {
  return (
    <section id="portfolio" style={{
      background: 'linear-gradient(180deg, rgba(255, 106, 0, 0.03) 0%, transparent 100%)',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(127, 63, 191, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #d4d4d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Nuestro Portafolio
          </h2>
          <p style={{ margin: '0 auto' }}>
            Proyectos que hemos desarrollado para nuestros clientes
          </p>
        </div>

        {/* Logos de clientes */}
        <div style={{
          marginBottom: '80px',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 106, 0, 0.1)'
        }}>
          <h3 style={{
            textAlign: 'center',
            color: '#d4d4d4',
            fontSize: '1rem',
            marginBottom: '32px',
            fontWeight: 500
          }}>
            Empresas que confían en nosotros
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '32px',
            alignItems: 'center',
            justifyItems: 'center'
          }}>
            {['Empresa A', 'Empresa B', 'Empresa C', 'Empresa D', 'Empresa E', 'Empresa F'].map((client) => (
              <div key={client} style={{
                width: '140px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 106, 0, 0.15)',
                padding: '16px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.15)';
              }}>
                <span style={{
                  fontSize: '0.875rem',
                  color: '#d4d4d4',
                  fontWeight: 600
                }}>
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Proyectos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {projects.map((project) => (
            <div key={project.name} style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 106, 0, 0.2)',
              borderRadius: '16px',
              overflow: 'hidden',
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
              {/* Header con categoría */}
              <div style={{
                padding: '24px 24px 16px',
                borderBottom: '1px solid rgba(255, 106, 0, 0.1)'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'rgba(255, 106, 0, 0.1)',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  color: '#ff8534',
                  marginBottom: '16px'
                }}>
                  {project.category}
                </div>
                <h3 style={{
                  color: '#ffffff',
                  marginBottom: '8px',
                  fontSize: '1.25rem'
                }}>
                  {project.name}
                </h3>
                <p style={{
                  color: '#ff8534',
                  fontSize: '0.875rem',
                  margin: 0,
                  fontWeight: 600
                }}>
                  {project.client}
                </p>
              </div>

              {/* Descripción */}
              <div style={{ padding: '24px' }}>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#d4d4d4',
                  marginBottom: '24px'
                }}>
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} style={{
                      padding: '6px 12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 106, 0, 0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div style={{
          textAlign: 'center',
          marginTop: '64px',
          padding: '48px',
          background: 'rgba(255, 106, 0, 0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 106, 0, 0.2)'
        }}>
          <h3 style={{
            color: '#ffffff',
            marginBottom: '16px',
            fontSize: '1.5rem'
          }}>
            ¿Tienes un proyecto en mente?
          </h3>
          <p style={{
            color: '#d4d4d4',
            marginBottom: '32px',
            fontSize: '1rem'
          }}>
            Conversemos sobre cómo podemos ayudarte a hacer realidad tu visión
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #ff6a00 0%, #ff8534 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            transition: 'transform 0.2s',
            boxShadow: '0 4px 20px rgba(255, 106, 0, 0.3)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            Contactar Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
