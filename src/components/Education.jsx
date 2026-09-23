const EDUCATION = [
  {
    year: '2023 – 2026',
    school: 'B.Tech in Computer Science Engineering',
    place: 'Madanapalle Institute of Technology & Science, Andhra Pradesh',
    score: 'CGPA: 8.48 / 10',
  },
  {
    year: '2020 – 2023',
    school: 'Diploma in Computer Engineering',
    place: 'Govt. Polytechnic, Vempalli, Andhra Pradesh',
    score: '87.78%',
  },
  {
    year: '2019 – 2020',
    school: 'SSC (Matriculation)',
    place: 'KGBV, Peddapasupula, Andhra Pradesh',
    score: '99.6%',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-head">
          <span className="section-index">04</span>
          <h2>Education</h2>
        </div>

        <div className="timeline">
          {EDUCATION.map((item) => (
            <div className="timeline-item" key={item.school}>
              <div className="timeline-year">{item.year}</div>
              <h3>{item.school}</h3>
              <p>{item.place} &middot; <span className="timeline-score">{item.score}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
