const PROJECTS = [
  {
    name: 'Federated Learning for 6G Beamforming',
    stat: '90% accuracy',
    points: [
      <>Led a federated learning pipeline predicting 6G beamforming, training <strong>XGBoost, Random Forest and Decision Tree</strong> models across decentralized systems without centralizing raw data.</>,
      <>Built an inference engine combining <strong>FNN, CNN and MLP</strong> architectures, reaching a near-perfect precision-recall balance across varied edge-client setups.</>,
      <>Tree-based models (XGBoost, Random Forest) outperformed the deep learning approaches, hitting a perfect <strong>1.00 F1-score</strong> while converging via federated averaging — preserving data sovereignty throughout.</>,
    ],
    stack: ['Python', 'XGBoost', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Federated Learning'],
  },
  {
    name: 'Ride-Sharing Application',
    stat: '<2s live tracking',
    points: [
      <>Built a responsive frontend with <strong>React.js, CSS3 and Tailwind CSS</strong>, working smoothly across 99% of devices through reusable components and clean state handling.</>,
      <>Integrated the <strong>Google Maps API</strong> and geolocation for real-time ride tracking — live routes and driver-rider matching in under 2 seconds.</>,
      <>Designed a <strong>MongoDB</strong> schema for user profiles and transaction data that cut query response time by 40% while holding 99.9% consistency.</>,
    ],
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API'],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2>Projects</h2>
        </div>

        {PROJECTS.map((project) => (
          <div className="project-card" key={project.name}>
            <div className="project-head">
              <h3>{project.name}</h3>
              <span className="project-stat">{project.stat}</span>
            </div>
            <ul>
              {project.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
            <div className="stack-row">
              {project.stack.map((tech) => (
                <span className="stack-chip" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
