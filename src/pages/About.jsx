import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <span className="section-eyebrow">ABOUT NEXORA</span>
          <h1>
            Building better organizations
            <span> through human potential.</span>
          </h1>
          <p>
            NEXORA is a modern human resources and talent solutions company connecting people, potential, and business progress.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-two-column">
          <div>
            <span className="section-eyebrow">OUR STORY</span>
            <h2>
              HR should be more
              <span> connected.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>Organizations are changing quickly. Skills evolve, workplaces become more flexible, and people expect more from their careers.</p>
            <p>NEXORA was created around a simple idea: human resources should connect people decisions with the bigger picture of business.</p>
            <p>We combine human insight, structured talent strategies, and intelligent systems to help organizations build teams that are ready for what comes next.</p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <article className="mission-card">
              <span>01 / MISSION</span>
              <h3>Help people and organizations<strong> move forward together.</strong></h3>
              <p>We create practical HR strategies that help organizations attract, develop, and retain exceptional people.</p>
            </article>

            <article className="mission-card mission-card-accent">
              <span>02 / VISION</span>
              <h3>A future where<strong> potential is connected to opportunity.</strong></h3>
              <p>We envision workplaces where people can grow, teams can perform, and organizations can build sustainable progress.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-eyebrow">OUR PHILOSOPHY</span>
            <h2>People first.<span> Progress always.</span></h2>
            <p>Our work is guided by four principles that keep human potential at the center of every decision.</p>
          </div>

          <div className="values-grid">
            <article className="value-card"><span>01</span><h3>Human First</h3><p>Every strategy begins with understanding people, teams, and the realities of the workplace.</p></article>
            <article className="value-card"><span>02</span><h3>Think Connected</h3><p>Recruitment, development, culture, and business goals should work as one connected system.</p></article>
            <article className="value-card"><span>03</span><h3>Stay Curious</h3><p>We continuously learn, question assumptions, and adapt to the changing world of work.</p></article>
            <article className="value-card"><span>04</span><h3>Create Impact</h3><p>Good HR creates measurable progress for both organizations and the people within them.</p></article>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container about-two-column">
          <div>
            <span className="section-eyebrow">THE NEXORA JOURNEY</span>
            <h2>From people<span> to progress.</span></h2>
          </div>

          <div className="timeline">
            <div className="timeline-item"><span>01</span><div><small>DISCOVER</small><h3>Understand the challenge</h3><p>We listen first and identify the people and organizational needs behind every challenge.</p></div></div>
            <div className="timeline-item"><span>02</span><div><small>CONNECT</small><h3>Build the right strategy</h3><p>We connect talent, capabilities, culture, and business priorities into one clear direction.</p></div></div>
            <div className="timeline-item"><span>03</span><div><small>DEVELOP</small><h3>Strengthen potential</h3><p>We help people and teams develop the skills and confidence needed for their next stage.</p></div></div>
            <div className="timeline-item"><span>04</span><div><small>GROW</small><h3>Create lasting progress</h3><p>The goal is sustainable growth that benefits people, teams, and the organization.</p></div></div>
          </div>
        </div>
      </section>

      <section className="inner-cta">
        <div className="container">
          <div className="inner-cta-box">
            <span className="section-eyebrow">WORK WITH NEXORA</span>
            <h2>Your people are your<span> next advantage.</span></h2>
            <p>Let's build the people strategy that takes your organization forward.</p>
            <Link to="/contact" className="btn btn-primary">Start a Conversation <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
