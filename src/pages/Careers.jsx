import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const jobs = [
  { title: 'Frontend Developer', department: 'Technology', location: 'Lahore', type: 'Full Time', experience: 'Junior' },
  { title: 'Talent Acquisition Specialist', department: 'Human Resources', location: 'Lahore', type: 'Full Time', experience: 'Mid Level' },
  { title: 'HR Business Partner', department: 'Human Resources', location: 'Remote', type: 'Full Time', experience: 'Senior' },
  { title: 'People Operations Coordinator', department: 'Operations', location: 'Lahore', type: 'Full Time', experience: 'Junior' },
  { title: 'Learning & Development Associate', department: 'Learning', location: 'Remote', type: 'Part Time', experience: 'Mid Level' },
  { title: 'UX Designer', department: 'Design', location: 'Remote', type: 'Full Time', experience: 'Mid Level' },
]

function Careers() {
  const [department, setDepartment] = useState('All')
  const [location, setLocation] = useState('All')
  const [type, setType] = useState('All')
  const [experience, setExperience] = useState('All')

  const filteredJobs = useMemo(() => jobs.filter((job) => (
    (department === 'All' || job.department === department)
    && (location === 'All' || job.location === location)
    && (type === 'All' || job.type === type)
    && (experience === 'All' || job.experience === experience)
  )), [department, location, type, experience])

  return (
    <>
      <section className="careers-hero">
        <div className="container">
          <span className="section-eyebrow">CAREERS AT NEXORA</span>
          <h1>Build what comes<span> next.</span></h1>
          <p>Join a people-focused team working at the intersection of human potential, technology, and organizational progress.</p>
        </div>
      </section>

      <section className="career-explorer">
        <div className="container">
          <div className="career-heading">
            <div>
              <span className="section-eyebrow">CAREER EXPLORER</span>
              <h2>Find your next<span> opportunity.</span></h2>
            </div>
            <p>Explore current opportunities and find a role that matches your skills, experience, and ambitions.</p>
          </div>

          <div className="career-filters">
            <select value={department} onChange={(event) => setDepartment(event.target.value)} aria-label="Filter by department">
              <option value="All">All Departments</option>
              <option value="Technology">Technology</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Operations">Operations</option>
              <option value="Learning">Learning</option>
              <option value="Design">Design</option>
            </select>
            <select value={location} onChange={(event) => setLocation(event.target.value)} aria-label="Filter by location">
              <option value="All">All Locations</option>
              <option value="Lahore">Lahore</option>
              <option value="Remote">Remote</option>
            </select>
            <select value={type} onChange={(event) => setType(event.target.value)} aria-label="Filter by employment type">
              <option value="All">All Employment Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
            <select value={experience} onChange={(event) => setExperience(event.target.value)} aria-label="Filter by experience">
              <option value="All">All Experience</option>
              <option value="Junior">Junior</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          <div className="jobs-count">{filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'} available</div>

          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <article className="job-card" key={job.title}>
                <div className="job-top"><span>{job.department}</span><strong>OPEN</strong></div>
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span>⌖ {job.location}</span>
                  <span>◷ {job.type}</span>
                  <span>◇ {job.experience}</span>
                </div>
                <Link to="/contact" className="job-link">View Position <span>↗</span></Link>
              </article>
            ))}

            {filteredJobs.length === 0 && (
              <div className="no-jobs">
                <strong>No matching positions</strong>
                <p>Try changing your filters to explore more opportunities.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="career-benefits">
        <div className="container">
          <div className="career-heading">
            <div>
              <span className="section-eyebrow">WHY NEXORA</span>
              <h2>Work with purpose.<span> Grow with people.</span></h2>
            </div>
          </div>

          <div className="benefits-grid">
            <article><span>01</span><h3>Continuous Growth</h3><p>Learning opportunities that help you build skills and grow with your career.</p></article>
            <article><span>02</span><h3>Flexible Thinking</h3><p>A modern environment that values different ideas, perspectives, and ways of working.</p></article>
            <article><span>03</span><h3>Meaningful Work</h3><p>Work that contributes to better workplaces and stronger opportunities for people.</p></article>
            <article><span>04</span><h3>People First</h3><p>A culture built around collaboration, respect, development, and human potential.</p></article>
          </div>
        </div>
      </section>

      <section className="career-cta">
        <div className="container">
          <div className="career-cta-box">
            <span className="section-eyebrow">DON'T SEE YOUR ROLE?</span>
            <h2>Your next opportunity<span> might be unwritten.</span></h2>
            <p>Send us your details and tell us where you believe you could create the most impact.</p>
            <Link to="/contact" className="btn btn-primary">Connect With Us <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Careers
