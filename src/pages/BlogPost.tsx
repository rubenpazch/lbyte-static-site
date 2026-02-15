import { useParams, Link } from 'react-router-dom'

export const BlogPost = () => {
  const { id } = useParams()

  // Datos de ejemplo - en producción esto vendría de una API o base de datos
  const blogPosts: Record<string, any> = {
    '1': {
      id: 1,
      title: 'Tendencias en Desarrollo Web 2026',
      date: '15 de Febrero, 2026',
      category: 'Desarrollo',
      author: 'L BYTE',
      readTime: '5 min lectura',
      content: `
        <h2>Las Tendencias que Transforman el Desarrollo Web</h2>
        
        <p>El desarrollo web sigue evolucionando a un ritmo acelerado. En 2026, vemos cómo nuevas tecnologías y prácticas se consolidan como estándares en la industria.</p>

        <h3>1. Frameworks Modernos y Escalables</h3>
        <p>React, Vue y Angular continúan dominando el ecosistema, pero ahora con mayor enfoque en performance y experiencia del desarrollador. Los nuevos frameworks como SolidJS y Svelte siguen ganando tracción.</p>

        <h3>2. AI y Machine Learning Integrado</h3>
        <p>Las aplicaciones web ahora integran capacidades de IA de forma nativa. Desde chatbots hasta recomendaciones personalizadas, la IA es parte integral del desarrollo moderno.</p>

        <h3>3. Web Components</h3>
        <p>Los Web Components se han vuelto más relevantes, permitiendo crear componentes reutilizables sin dependencia de frameworks específicos.</p>

        <h3>4. Performance y Core Web Vitals</h3>
        <p>Google sigue enfatizando la importancia de las Core Web Vitals. Las herramientas de medición y optimización de rendimiento son más sofisticadas que nunca.</p>

        <p>El futuro del desarrollo web es emocionante. Las oportunidades son infinitas para quienes se mantienen aprendiendo y adaptándose.</p>
      `
    },
    '2': {
      id: 2,
      title: 'Mejores Prácticas en React',
      date: '10 de Febrero, 2026',
      category: 'React',
      author: 'L BYTE',
      readTime: '8 min lectura',
      content: `
        <h2>Escribiendo código React Profesional</h2>
        
        <p>React ha revolucionado la forma en que desarrollamos aplicaciones web. Aquí te compartimos las mejores prácticas que hemos aprendido después de años desarrollando con esta librería.</p>

        <h3>1. Componentes Funcionales y Hooks</h3>
        <p>Los componentes funcionales con hooks son el estándar actual. Son más fáciles de entender y mantener que los class components.</p>

        <h3>2. Gestión de Estado</h3>
        <p>Elige la solución de estado que mejor se adapte a tu proyecto. Desde useState hasta Redux o Zustand, cada una tiene su lugar.</p>

        <h3>3. Memoización Inteligente</h3>
        <p>Usa React.memo y useMemo con propósito, no de forma indiscriminada. La memoización incorrecta puede ser contraproducente.</p>

        <h3>4. Testing</h3>
        <p>El testing es fundamental. Usa Testing Library para escribir tests que imiten el comportamiento real del usuario.</p>

        <h3>5. Performance</h3>
        <p>Mantén tus componentes pequeños y especializados. Esto facilita el testing, mantenimiento y rendimiento.</p>

        <p>Siguiendo estas prácticas, tu código React será más limpio, mantenible y escalable.</p>
      `
    },
    '3': {
      id: 3,
      title: 'Seguridad en Aplicaciones Web',
      date: '5 de Febrero, 2026',
      category: 'Seguridad',
      author: 'L BYTE',
      readTime: '6 min lectura',
      content: `
        <h2>Protegiendo tus Aplicaciones Web</h2>
        
        <p>La seguridad es una responsabilidad que no podemos tomar a la ligera. En este artículo, cubrimos las vulnerabilidades más comunes y cómo prevenirlas.</p>

        <h3>1. OWASP Top 10</h3>
        <p>Familiarízate con las 10 vulnerabilidades más críticas identificadas por OWASP. Conocerlas es el primer paso para prevenirlas.</p>

        <h3>2. Inyección SQL</h3>
        <p>Usa consultas parametrizadas y prepared statements. Nunca concatenes entrada de usuario directamente en tus queries.</p>

        <h3>3. Cross-Site Scripting (XSS)</h3>
        <p>Escapa y valida toda entrada de usuario. Los frameworks modernos lo hacen por defecto, pero mantén los ojos abiertos.</p>

        <h3>4. Autenticación y Tokens</h3>
        <p>Implementa autenticación robusta. Usa JWT con firmas, almacena tokens de forma segura y siempre usa HTTPS.</p>

        <h3>5. CORS y CSP</h3>
        <p>Configura CORS correctamente. Usa Content Security Policy para prevenir ataques más sofisticados.</p>

        <h3>6. Mantén Dependencias Actualizadas</h3>
        <p>Las vulnerabilidades en librerías de terceros son comunes. Mantén todo actualizado y monitorea alertas de seguridad.</p>

        <p>La seguridad es un proceso continuo. Mantente educado y siempre revisa tu código pensando en seguridad.</p>
      `
    },
    '4': {
      id: 4,
      title: 'Desarrollo a Medida: La Solución Perfecta para tu Negocio',
      date: '15 de Febrero, 2026',
      category: 'Consultoría',
      author: 'L BYTE',
      readTime: '7 min lectura',
      content: `
        <h2>¿Por Qué Elegir Desarrollo a Medida?</h2>
        
        <p>En el mundo digital actual, las soluciones genéricas no siempre se ajustan a los requerimientos específicos de tu negocio. El desarrollo a medida es la respuesta a esta necesidad, permitiéndote obtener aplicaciones, sistemas y plataformas diseñadas exclusivamente para tu empresa.</p>

        <h3>¿Qué es el Desarrollo a Medida?</h3>
        <p>El desarrollo a medida es el proceso de crear software específicamente diseñado para satisfacer las necesidades únicas de tu organización. A diferencia de las soluciones off-the-shelf, cada línea de código se escribe pensando en tus objetivos, flujos de negocio y requisitos técnicos particulares.</p>

        <h3>Ventajas del Desarrollo a Medida</h3>

        <h3>1. Personalización Total</h3>
        <p>Tu software se adapta perfectamente a tu negocio, no al revés. Cada funcionalidad se desarrolla según tus especificaciones exactas.</p>

        <h3>2. Escalabilidad</h3>
        <p>Las soluciones a medida están diseñadas para crecer con tu empresa. Puedes agregar nuevas funcionalidades sin limitaciones.</p>

        <h3>3. Mayor ROI</h3>
        <p>Aunque la inversión inicial puede ser mayor, el retorno es significativo: reducción de costos operativos, mejor eficiencia y ventaja competitiva.</p>

        <h3>4. Integración Perfecta</h3>
        <p>Tu sistema se integra fluidamente con tus herramientas y procesos existentes.</p>

        <h3>El Proceso de Desarrollo a Medida</h3>

        <h3>1. Análisis de Requerimientos</h3>
        <p>Estudiamos profundamente tu negocio, tus procesos y tus objetivos para entender exactamente qué necesitas.</p>

        <h3>2. Diseño y Arquitectura</h3>
        <p>Creamos la estructura técnica del proyecto, garantizando escalabilidad y mantenibilidad.</p>

        <h3>3. Desarrollo</h3>
        <p>Construimos tu software con las mejores prácticas, tecnologías modernas y código de calidad profesional.</p>

        <h3>4. Testing</h3>
        <p>Realizamos pruebas exhaustivas para garantizar que todo funciona perfectamente.</p>

        <h3>5. Implementación y Capacitación</h3>
        <p>Desplegamos tu aplicación y capacitamos a tu equipo para su máximo aprovechamiento.</p>

        <h3>6. Mantenimiento y Evolución</h3>
        <p>Continuamos optimizando y mejorando tu sistema conforme tu negocio evoluciona.</p>

        <h3>Consideraciones Importantes</h3>

        <p><strong>Tiempo de Desarrollo:</strong> El desarrollo a medida toma más tiempo que implementar una solución existente, pero el resultado es incomparablemente mejor.</p>

        <p><strong>Inversión:</strong> Representa una inversión mayor, pero con retornos significativos a largo plazo.</p>

        <p><strong>Equipo Experto:</strong> La calidad depende del equipo de desarrollo que elijas. Busca experiencia, referencias y portafolio sólido.</p>

        <h3>¿Es el Desarrollo a Medida la Mejor Opción para Ti?</h3>

        <p>Si tu negocio tiene requerimientos únicos, procesos complejos, o necesita diferenciarse del mercado con funcionalidades innovadoras, el desarrollo a medida es definitivamente el camino correcto.</p>

        <p>En L BYTE, entendemos las complejidades del desarrollo a medida. Con años de experiencia transformando ideas en software de calidad, estamos listos para convertir tu visión en realidad.</p>
      `
    }
  }

  const post = blogPosts[id || '']

  if (!post) {
    return (
      <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <section style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: 'clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)',
          textAlign: 'center'
        }}>
          <h1 style={{ color: 'var(--text)', marginBottom: '16px' }}>Post no encontrado</h1>
          <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>El artículo que buscas no existe.</p>
          <Link 
            to="/blog" 
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Volver al Blog
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <article style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: 'clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)'
      }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '32px' }}>
          <Link 
            to="/blog" 
            style={{
              color: 'var(--accent)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-bright)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          >
            ← Volver al Blog
          </Link>
        </div>

        {/* Header del Post */}
        <header style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 600
            }}>
              {post.category}
            </span>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
              {post.date}
            </span>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>•</span>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
              {post.readTime}
            </span>
          </div>

          <h1 style={{
            background: 'linear-gradient(135deg, var(--text) 0%, var(--muted) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '16px',
            lineHeight: 1.2
          }}>
            {post.title}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid var(--accent-border)'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              LB
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--text)' }}>
                {post.author}
              </p>
              <p style={{ margin: '4px 0 0 0', color: 'var(--muted)', fontSize: '0.85rem' }}>
                Equipo de Desarrollo
              </p>
            </div>
          </div>
        </header>

        {/* Contenido del Post */}
        <div style={{
          color: 'var(--text)',
          lineHeight: 1.8,
          fontSize: '1rem'
        }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} style={{
            color: 'var(--text)'
          }} />
        </div>

        {/* Estilos para el contenido HTML */}
        <style>{`
          article h2 {
            color: var(--text);
            font-size: 1.75rem;
            margin: 32px 0 16px 0;
            font-weight: 600;
          }

          article h3 {
            color: var(--accent-bright);
            font-size: 1.25rem;
            margin: 24px 0 12px 0;
            font-weight: 600;
          }

          article p {
            margin: 16px 0;
            color: var(--text);
            line-height: 1.8;
          }

          article ul, article ol {
            margin: 16px 0;
            padding-left: 24px;
          }

          article li {
            margin: 8px 0;
            color: var(--text);
          }

          article a {
            color: var(--accent);
            text-decoration: underline;
            transition: color 0.2s;
          }

          article a:hover {
            color: var(--accent-bright);
          }

          article code {
            background: var(--surface-2);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
            color: var(--accent);
          }

          article blockquote {
            border-left: 4px solid var(--accent);
            padding-left: 16px;
            margin: 24px 0;
            color: var(--muted);
            font-style: italic;
          }
        `}</style>

        {/* CTA al final */}
        <div style={{
          marginTop: '64px',
          paddingTop: '32px',
          borderTop: '1px solid var(--accent-border)',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
            ¿Te gustó este artículo?
          </p>
          <Link 
            to="/blog" 
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 25px var(--accent-shadow)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Leer más artículos
          </Link>
        </div>
      </article>
    </main>
  )
}
