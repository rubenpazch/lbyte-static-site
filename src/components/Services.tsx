const services = [
  {
    icon: '💻',
    title: 'Custom Software Development',
    description: 'Tailored solutions designed specifically for your business needs and workflows.'
  },
  {
    icon: '🌐',
    title: 'Modern Web Applications',
    description: 'Fast, responsive, and scalable web apps using cutting-edge technologies.'
  },
  {
    icon: '🔌',
    title: 'API & Backend Systems',
    description: 'Robust backend infrastructure and APIs that power your applications.'
  },
  {
    icon: '🔄',
    title: 'Integration & Automation',
    description: 'Streamline operations by connecting systems and automating workflows.'
  },
  {
    icon: '🎯',
    title: 'Technical Consulting',
    description: 'Expert guidance on architecture, technology stack, and best practices.'
  },
  {
    icon: '📱',
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile applications that reach users everywhere.'
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
          Our Services
        </h2>
        <p style={{ margin: '0 auto' }}>
          End-to-end software solutions for modern businesses
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
