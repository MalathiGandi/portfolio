const CONTACTS = [
  { label: 'Email', value: 'malathigandi008@gmail.com', href: 'mailto:malathigandi008@gmail.com', icon: '✉' },
  { label: 'Phone', value: '+91 81436 61025', href: 'tel:+918143661025', icon: '☎' },
  { label: 'GitHub', value: 'github.com/MalathiGandi', href: 'https://github.com/MalathiGandi', icon: '</>' },
  { label: 'LinkedIn', value: 'linkedin.com/in/gandi-malathi', href: 'https://linkedin.com/in/gandi-malathi-65473028b', icon: 'in' },
]

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="section-index">06</span>
          <h2>Contact</h2>
        </div>

        <div className="contact-grid">
          {CONTACTS.map((c) => (
            <a className="contact-card" href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={c.label}>
              <span className="contact-icon">{c.icon}</span>
              <span>
                <span className="contact-card-label">{c.label}</span>
                <span className="contact-card-value">{c.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
