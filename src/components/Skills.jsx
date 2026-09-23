const GROUPS = [
  { title: 'Languages', items: ['Java', 'Python', 'C++', 'C'] },
  { title: 'MERN Stack', items: ['MongoDB', 'Express.js', 'React.js', 'Node.js'] },
  { title: 'Backend & APIs', items: ['REST APIs', 'JWT', 'API Development'] },
  { title: 'Databases', items: ['SQL', 'MongoDB'] },
  { title: 'ML & Deep Learning', items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'XGBoost', 'Random Forest', 'Decision Tree', 'CNN', 'MLP', 'FNN', 'NLP', 'Pandas', 'NumPy'] },
  { title: 'Core CS', items: ['Data Structures & Algorithms', 'OOPs', 'Computer Networks'] },
  { title: 'Engineering Practice', items: ['SDLC', 'Agile', 'CI/CD', 'Unit Testing', 'Docker', 'FastAPI'] },
  { title: 'Tools', items: ['Git', 'GitHub'] },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {GROUPS.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
