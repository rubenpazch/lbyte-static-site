export const CaseStudies = () => {
  const cases = [
    {
      title: 'BizFlow - Plataforma de Automatización',
      client: 'Startup de SaaS',
      sector: 'Enterprise Automation',
      challenge: 'Necesitaban una plataforma para automatizar procesos empresariales sin código',
      solution: 'Desarrollamos una web app con React, Node.js y PostgreSQL con UI drag-and-drop',
      result: '500+ usuarios activos en primer trimestre, integración con +50 aplicaciones',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      title: 'EcomPlus - Sistema de E-commerce',
      client: 'Retail tradicional',
      sector: 'E-commerce',
      challenge: 'Migrar de plataforma antigua a solución moderna y escalable',
      solution: 'API REST con Node.js, base de datos optimizada, frontend React con SEO mejorado',
      result: '+300% en conversiones, carga 60% más rápida, soporte de 10K concurrent users',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Analytics Pro - Dashboard de Datos',
      client: 'Consultora empresarial',
      sector: 'Business Intelligence',
      challenge: 'Centralizar datos de múltiples fuentes en un dashboard intuitivo',
      solution: 'Web app con gráficos interactivos, real-time analytics, APIs de integración',
      result: 'Insights valiosos en tiempo real, reducción de 40% en tiempo de análisis',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB']
    }
  ]

  return (
    <section id="cases" style={{
      background: 'var(--surface-2)',
      borderRadius: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
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
          WebkitTextFillColor: 'transparent',
          marginBottom: '12px'
        }}>
          Casos de éxito
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '48px', fontSize: '1.0625rem' }}>
          Proyectos reales que hemos transformado en soluciones que generan impacto.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {cases.map((caseStudy, index) => (
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
              <div style={{ marginBottom: '24px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  background: 'var(--accent-soft)',
                  color: 'var(--accent-bright)',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}>
                  {caseStudy.sector}
                </span>
                <h3 style={{
                  margin: '0 0 8px 0',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text)'
                }}>
                  {caseStudy.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>
                  {caseStudy.client}
                </p>
              </div>

              <div style={{ marginBottom: '20px', flex: 1 }}>
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ margin: '0 0 6px 0', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)' }}>
                    Desafío:
                  </p>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {caseStudy.challenge}
                  </p>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <p style={{ margin: '0 0 6px 0', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)' }}>
                    Resultado:
                  </p>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--accent-bright)' }}>
                    ✓ {caseStudy.result}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                paddingTop: '20px',
                borderTop: '1px solid var(--accent-border)'
              }}>
                {caseStudy.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '4px 10px',
                      background: 'var(--surface-2)',
                      color: 'var(--muted)',
                      borderRadius: '6px',
                      fontSize: '0.8rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
