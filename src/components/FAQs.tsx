import { useState } from 'react'

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar una aplicación web?',
      answer: 'Depende de la complejidad. Un MVP simple puede tomar 6-8 semanas, mientras que una aplicación web completa puede tomar 3-6 meses. En la primera consulta evaluamos el proyecto y te damos un timeline exacto.'
    },
    {
      question: '¿Cuál es el costo de un proyecto?',
      answer: 'Ofrecemos modelos flexibles: tiempo y materiales, o presupuesto fijo. El costo varía según la complejidad, funcionalidades y tecnologías. En la consulta inicial te damos una estimación basada en tus requerimientos.'
    },
    {
      question: '¿Ofrecen mantenimiento después del lanzamiento?',
      answer: 'Sí. Ofrecemos planes de soporte y mantenimiento mensual que incluyen: corrección de bugs, updates de seguridad, optimización de performance y nuevas features.'
    },
    {
      question: '¿Cómo es el proceso de comunicación?',
      answer: 'Reuniones semanales, reportes de progreso, comunicación por WhatsApp, Meet etc. para comunicación directa. Transparencia total en cada etapa del proyecto.'
    },
    {
      question: '¿Trabajamos solo con empresas grandes?',
      answer: 'No, trabajamos con empresas de todos los tamaños, incluyendo emprendimientos y pymes.'
    }
  ]

  return (
    <section id="faq" style={{
      background: 'var(--surface-2)',
      borderRadius: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-30%',
        left: '-10%',
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
          Preguntas frecuentes
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '48px', fontSize: '1.0625rem' }}>
          Respuestas a las dudas más comunes de nuestros clientes.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--accent-border)',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div
                style={{
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  userSelect: 'none'
                }}
              >
                <h3 style={{
                  margin: 0,
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--text)'
                }}>
                  {faq.question}
                </h3>
                <span style={{
                  color: 'var(--accent)',
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                  marginLeft: '16px'
                }}>
                  ▼
                </span>
              </div>

              {openIndex === index && (
                <div style={{
                  padding: '0 20px 20px 20px',
                  borderTop: '1px solid var(--accent-border)',
                  color: 'var(--muted)',
                  lineHeight: '1.6',
                  animation: 'fadeIn 0.3s ease'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
