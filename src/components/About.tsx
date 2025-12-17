export const About = () => {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
    { value: '5+', label: 'Years Experience' }
  ]

  return (
    <section id="about" style={{
      background: 'rgba(255, 106, 0, 0.03)',
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
        background: 'radial-gradient(circle, rgba(46, 204, 113, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #d4d4d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          About L BYTE
        </h2>

        <p style={{ marginBottom: '48px' }}>
          At L BYTE, we help companies and startups transform ideas into
          high-impact digital products. Our approach combines software engineering,
          best practices, and deep business understanding to deliver solutions that drive real results.
        </p>

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
                background: 'linear-gradient(135deg, #ff6a00 0%, #ff8534 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '8px'
              }}>
                {stat.value}
              </div>
              <div style={{ color: '#d4d4d4', fontSize: '0.875rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
