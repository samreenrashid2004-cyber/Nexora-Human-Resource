import { Link } from 'react-router-dom'

const services = [
  { number: '01', title: 'Talent Acquisition', description: 'Find exceptional people who match your culture, capabilities, and long-term business goals.', points: ['Talent sourcing', 'Candidate assessment', 'Culture alignment'] },
  { number: '02', title: 'Executive Search', description: "Identify experienced leaders who can shape your organization's next chapter.", points: ['Leadership search', 'Executive assessment', 'Succession planning'] },
  { number: '03', title: 'HR Consulting', description: "Build practical people strategies aligned with your organization's priorities and future.", points: ['HR strategy', 'People operations', 'Organizational design'] },
  { number: '04', title: 'Employee Development', description: 'Turn employee capability into stronger performance, leadership, and career growth.', points: ['Learning programs', 'Leadership development', 'Career frameworks'] },
  { number: '05', title: 'HR Operations', description: 'Simplify essential HR processes with structured and reliable people operations support.', points: ['HR process design', 'Policy support', 'People administration'] },
  { number: '06', title: 'Workplace Strategy', description: 'Create workplace environments where people, culture, and business objectives work together.', points: ['Workplace planning', 'Culture strategy', 'Employee experience'] },
]

function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="container">
          <span className="section-eyebrow">OUR SERVICES</span>
          <h1>People strategies built<span> for what's next.</span></h1>
          <p>From finding the right talent to building stronger workplaces, we connect every part of the people journey with business impact.</p>
        </div>
      </section>

      <section className="service-explorer">
        <div className="container">
          <div className="service-heading">
            <div>
              <span className="section-eyebrow">WHAT WE SOLVE</span>
              <h2>One connected approach<span> to HR.</span></h2>
            </div>
            <p>Explore the areas where NEXORA helps organizations attract, develop, support, and retain great people.</p>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <article className="service-detail-card" key={service.number}>
                <div className="service-detail-number">{service.number}</div>
                <div className="service-detail-main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-points">
                    {service.points.map((point) => <span key={point}>{point}</span>)}
                  </div>
                </div>
                <div className="service-arrow">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="container">
          <div className="process-heading">
            <span className="section-eyebrow">HOW WE WORK</span>
            <h2>From challenge<span> to progress.</span></h2>
          </div>

          <div className="process-grid">
            <div className="process-step"><span>01</span><h3>Understand</h3><p>We identify your organization's people challenges, priorities, and goals.</p></div>
            <div className="process-step"><span>02</span><h3>Connect</h3><p>We connect the right people strategy with your wider business direction.</p></div>
            <div className="process-step"><span>03</span><h3>Build</h3><p>We create practical solutions designed around your organization's real needs.</p></div>
            <div className="process-step"><span>04</span><h3>Grow</h3><p>We focus on sustainable progress for people, teams, and the organization.</p></div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="services-cta-box">
            <span className="section-eyebrow">LET'S TALK</span>
            <h2>Have a people challenge?<span> Let's solve it.</span></h2>
            <p>Tell us what you're working on and we'll explore the right path forward together.</p>
            <Link to="/contact" className="btn btn-primary">Start a Conversation <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
