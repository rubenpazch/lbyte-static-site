const services = [
  'Desarrollo de software a medida',
  'Aplicaciones web modernas',
  'APIs y sistemas backend',
  'Integraciones y automatización',
  'Consultoría técnica'
]

export const Services = () => {
  return (
    <section style={{ background: 'rgba(0,0,0,0.1)' }}>
      <h2>Servicios</h2>
      <ul>
        {services.map(service => (
          <li key={service} style={{ marginBottom: 8 }}>
            {service}
          </li>
        ))}
      </ul>
    </section>
  )
}
