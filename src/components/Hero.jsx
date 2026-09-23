export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">AI/ML Engineer, entry-level</div>
          <h1>Gandi Malathi builds learning systems that work across the edge, not just in the lab.</h1>
          <p className="hero-tagline">
            B.Tech Computer Science graduate focused on machine learning and full-stack development.
            Comfortable training models on decentralized data as much as shipping a MERN app end to end.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="/Gandi_Malathi_Resume.pdf" download>
              Download resume
            </a>
            <a className="btn btn-ghost" href="#projects">View projects</a>
          </div>

          <div className="hero-contact">
            <a href="mailto:malathigandi008@gmail.com">malathigandi008@gmail.com</a>
            <a href="tel:+918143661025">+91 81436 61025</a>
            <a href="https://github.com/MalathiGandi" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/gandi-malathi-65473028b" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-stat-big">90%</div>
          <div className="hero-stat-label">accuracy predicting 6G beamforming, trained across decentralized federated clients</div>

          <svg className="node-svg" viewBox="0 0 260 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g stroke="#232B45" strokeWidth="1">
              <line x1="30" y1="30" x2="130" y2="70" />
              <line x1="130" y1="70" x2="230" y2="24" />
              <line x1="130" y1="70" x2="210" y2="118" />
              <line x1="30" y1="30" x2="60" y2="112" />
              <line x1="60" y1="112" x2="130" y2="70" />
            </g>
            <circle cx="130" cy="70" r="7" fill="#6C8CFF" />
            <circle cx="30" cy="30" r="5" fill="#8B93A8" />
            <circle cx="230" cy="24" r="5" fill="#8B93A8" />
            <circle cx="210" cy="118" r="5" fill="#FFB454" />
            <circle cx="60" cy="112" r="5" fill="#8B93A8" />
          </svg>
        </div>
      </div>
    </header>
  )
}
