export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Tendencias en Desarrollo Web 2026',
      excerpt: 'Descubre las tecnologías y tendencias que están transformando el desarrollo web este año.',
      date: '15 de Febrero, 2026',
      category: 'Desarrollo',
      image: 'https://via.placeholder.com/600x400?text=Web+Development'
    },
    {
      id: 2,
      title: 'Mejores Prácticas en React',
      excerpt: 'Aprende cómo escribir código React más limpio, eficiente y mantenible.',
      date: '10 de Febrero, 2026',
      category: 'React',
      image: 'https://via.placeholder.com/600x400?text=React+Best+Practices'
    },
    {
      id: 3,
      title: 'Seguridad en Aplicaciones Web',
      excerpt: 'Protege tus aplicaciones con las mejores prácticas de seguridad en el desarrollo.',
      date: '5 de Febrero, 2026',
      category: 'Seguridad',
      image: 'https://via.placeholder.com/600x400?text=Web+Security'
    },
    {
      id: 4,
      title: 'Desarrollo a Medida: La Solución Perfecta para tu Negocio',
      excerpt: 'Descubre por qué el desarrollo a medida es la mejor inversión para tu empresa y cómo puede transformar tu negocio.',
      date: '12 de Febrero, 2026',
      category: 'Consultoría',
      image: 'https://via.placeholder.com/600x400?text=Custom+Development'
    }
  ]

  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: 'clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)'
      }}>
        {/* Header del Blog */}
        <div style={{ marginBottom: '64px' }}>
          <h1 style={{
            background: 'linear-gradient(135deg, var(--text) 0%, var(--muted) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '12px',
            fontSize: 'clamp(2rem, 5vw, 3rem)'
          }}>
            Blog de L BYTE
          </h1>
          <p style={{
            color: 'var(--muted)',
            fontSize: '1.0625rem',
            maxWidth: '600px'
          }}>
            Consejos, tutoriales y novedades sobre desarrollo de software y transformación digital.
          </p>
        </div>

        {/* Grid de Artículos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {blogPosts.map((post) => (
            <article
              key={post.id}
              style={{
                background: 'var(--surface)',
                borderRadius: '16px',
                border: '1px solid var(--accent-border)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, var(--accent-soft) 0%, var(--accent-glow) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text)',
                fontSize: '0.875rem',
                overflow: 'hidden'
              }}>
                {/* Placeholder para imagen */}
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '3rem' }}>📝</span>
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {post.category}
                  </span>
                  <span style={{
                    color: 'var(--muted)',
                    fontSize: '0.85rem'
                  }}>
                    {post.date}
                  </span>
                </div>

                <h3 style={{
                  color: 'var(--text)',
                  marginBottom: '12px',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  lineHeight: 1.3
                }}>
                  {post.title}
                </h3>

                <p style={{
                  color: 'var(--muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '16px'
                }}>
                  {post.excerpt}
                </p>

                <a href={`/blog/${post.id}`} style={{
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'color 0.2s'
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-bright)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                >
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
