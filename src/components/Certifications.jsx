const CERTS = [
  {
    title: 'Java Certification',
    issuer: 'edX',
    desc: 'OOP, multithreading and exception handling for enterprise backend development.',
  },
  {
    title: 'MERN Stack Bootcamp',
    issuer: 'CodeOn Technologies',
    desc: 'MongoDB, Express.js, React.js, Node.js, REST APIs and JWT authentication.',
  },
  {
    title: 'INNO SPARK 1.0',
    issuer: 'Participation, 2024',
    desc: '24-hour innovation hackathon — agile prototyping and team collaboration.',
  },
  {
    title: 'Project Expo Coordinator, ASHV 2K25',
    issuer: 'College tech expo',
    desc: 'Spearheaded a college-wide expo, managing 20+ projects, logistics and judging panels.',
  },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-head">
          <span className="section-index">05</span>
          <h2>Certifications</h2>
        </div>

        <div className="cert-grid">
          {CERTS.map((cert) => (
            <div className="cert-card" key={cert.title}>
              <span className="cert-issuer">{cert.issuer}</span>
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
