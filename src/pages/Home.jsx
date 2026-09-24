import { useEffect } from 'react'
import Hero from '../components/Hero.jsx'
import { Link } from 'react-router-dom'
import { initHomeAnimations } from '../animations/homeAnimations.js'

function Home() {
  useEffect(() => {
    const cleanup = initHomeAnimations()

    return () => {
      cleanup?.()
    }
  }, [])

  return (
    <>
      <Hero />

      <section className="trust-section">
        <div className="container">
          <div className="trust-intro">
            <span className="section-eyebrow">BUILT FOR PEOPLE-LED GROWTH</span>

            <h2>
              HR that connects
              <span> people to progress.</span>
            </h2>

            <p>
              From finding exceptional talent to developing stronger teams,
              NEXORA connects every stage of the employee journey with a clear
              business purpose.
            </p>
          </div>

          <div className="trust-grid">
            <div className="trust-card">
              <span className="trust-number">01</span>
              <div>
                <h3>People First</h3>
                <p>Human-centered strategies designed around real people, teams, and workplace needs.</p>
              </div>
            </div>

            <div className="trust-card">
              <span className="trust-number">02</span>
              <div>
                <h3>Data Informed</h3>
                <p>Smarter decisions supported by structured insights, talent data, and measurable progress.</p>
              </div>
            </div>

            <div className="trust-card">
              <span className="trust-number">03</span>
              <div>
                <h3>Built for Impact</h3>
                <p>HR solutions focused on stronger teams, better retention, and sustainable organizational growth.</p>
              </div>
            </div>
          </div>

          <div className="trust-bottom">
            <span>OUR APPROACH</span>
            <div className="trust-line" />
            <strong>PEOPLE → POTENTIAL → PROGRESS</strong>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <div className="impact-heading">
            <div>
              <span className="section-eyebrow">TALENT → IMPACT</span>

              <h2>
                Turn potential into
                <span> measurable progress.</span>
              </h2>
            </div>

            <p>
              Great people create stronger businesses when the right systems,
              opportunities, and support are connected around them.
            </p>
          </div>

          <div className="impact-flow">
            <div className="impact-step">
              <span className="impact-index">01</span>
              <div className="impact-icon">+</div>
              <h3>Discover</h3>
              <p>Identify the people, skills, and capabilities your organization needs next.</p>
            </div>

            <div className="impact-connector">→</div>

            <div className="impact-step">
              <span className="impact-index">02</span>
              <div className="impact-icon">↗</div>
              <h3>Develop</h3>
              <p>Build employee capability through targeted development, leadership, and learning strategies.</p>
            </div>

            <div className="impact-connector">→</div>

            <div className="impact-step">
              <span className="impact-index">03</span>
              <div className="impact-icon">◎</div>
              <h3>Align</h3>
              <p>Connect individual potential with team priorities and meaningful business objectives.</p>
            </div>

            <div className="impact-connector">→</div>

            <div className="impact-step impact-step-final">
              <span className="impact-index">04</span>
              <div className="impact-icon">✦</div>
              <h3>Impact</h3>
              <p>Create stronger teams, healthier workplaces, and sustainable organizational growth.</p>
            </div>
          </div>

          <div className="impact-highlight">
            <div>
              <span>THE NEXORA APPROACH</span>
              <strong>Human insight + intelligent systems</strong>
            </div>

            <div className="impact-highlight-arrow">↗</div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <div className="services-preview-heading">
            <div>
              <span className="section-eyebrow">WHAT WE DO</span>

              <h2>
                Solutions built around
                <span> human potential.</span>
              </h2>
            </div>

            <Link to="/services" className="text-link">
              View all services <span>↗</span>
            </Link>
          </div>

          <div className="services-preview-grid">
            <article className="service-preview-card service-featured">
              <span className="service-number">01</span>
              <div className="service-symbol">◎</div>
              <h3>Talent Acquisition</h3>
              <p>Find exceptional people who match your culture, capabilities, and long-term business goals.</p>
              <Link to="/services">Explore service <span>→</span></Link>
            </article>

            <article className="service-preview-card">
              <span className="service-number">02</span>
              <div className="service-symbol">◇</div>
              <h3>Executive Search</h3>
              <p>Identify experienced leaders who can shape your organization's next chapter.</p>
              <Link to="/services">Explore service <span>→</span></Link>
            </article>

            <article className="service-preview-card">
              <span className="service-number">03</span>
              <div className="service-symbol">↗</div>
              <h3>HR Consulting</h3>
              <p>Build practical people strategies aligned with organizational priorities.</p>
              <Link to="/services">Explore service <span>→</span></Link>
            </article>

            <article className="service-preview-card">
              <span className="service-number">04</span>
              <div className="service-symbol">✦</div>
              <h3>Employee Development</h3>
              <p>Turn employee capability into stronger performance, leadership, and career growth.</p>
              <Link to="/services">Explore service <span>→</span></Link>
            </article>

            <article className="service-preview-card">
              <span className="service-number">05</span>
              <div className="service-symbol">□</div>
              <h3>HR Operations</h3>
              <p>Simplify essential HR processes with structured, reliable people operations support.</p>
              <Link to="/services">Explore service <span>→</span></Link>
            </article>

            <article className="service-preview-card">
              <span className="service-number">06</span>
              <div className="service-symbol">⌁</div>
              <h3>Workplace Strategy</h3>
              <p>Create workplace environments where people, culture, and business objectives work together.</p>
              <Link to="/services">Explore service <span>→</span></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="people-index-section">
        <div className="container">
          <div className="people-index-heading">
            <div>
              <span className="section-eyebrow">PEOPLE INDEX</span>

              <h2>
                The signals behind
                <span> stronger organizations.</span>
              </h2>
            </div>

            <p>
              A simple view of the people signals that can shape healthier teams,
              stronger leadership, and sustainable growth.
            </p>
          </div>

          <div className="people-index-layout">
            <div className="people-index-intro">
              <span className="index-label">NEXORA / PEOPLE INDEX</span>

              <div className="index-main-number">
                <strong>84</strong>
                <span>/100</span>
              </div>

              <h3>Human Potential Score</h3>
              <p>
                An illustrative framework for understanding the relationship between talent,
                development, culture, and organizational impact.
              </p>
              <span className="index-note">Illustrative demo metric - not a real company statistic.</span>
            </div>

            <div className="people-metrics">
              <div className="people-metric">
                <div className="metric-top"><span>Talent Retention</span><strong className="metric-value" data-value="84">0%</strong></div>
                <div className="metric-bar"><span style={{ width: '84%' }} /></div>
              </div>

              <div className="people-metric">
                <div className="metric-top"><span>Employee Growth</span><strong className="metric-value" data-value="91">0%</strong></div>
                <div className="metric-bar"><span style={{ width: '91%' }} /></div>
              </div>

              <div className="people-metric">
                <div className="metric-top"><span>Workplace Culture</span><strong className="metric-value" data-value="87">0%</strong></div>
                <div className="metric-bar"><span style={{ width: '87%' }} /></div>
              </div>

              <div className="people-metric">
                <div className="metric-top"><span>Leadership Readiness</span><strong className="metric-value" data-value="72">0%</strong></div>
                <div className="metric-bar"><span style={{ width: '72%' }} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-nexora-section">
        <div className="container">
          <div className="why-nexora-heading">
            <span className="section-eyebrow">WHY NEXORA</span>

            <h2>
              A smarter way to build
              <span> people-powered organizations.</span>
            </h2>
          </div>

          <div className="why-nexora-grid">
            <article className="why-card why-card-large">
              <span className="why-number">01</span>
              <div className="why-card-icon">◉</div>
              <h3>Human-centered by design</h3>
              <p>Technology helps us work smarter, but people remain at the center of every strategy, decision, and outcome.</p>
              <div className="why-card-line" />
            </article>

            <article className="why-card">
              <span className="why-number">02</span>
              <div className="why-card-icon">⌁</div>
              <h3>Connected thinking</h3>
              <p>We connect recruitment, development, culture, and business priorities instead of treating HR as separate pieces.</p>
            </article>

            <article className="why-card">
              <span className="why-number">03</span>
              <div className="why-card-icon">↗</div>
              <h3>Built around outcomes</h3>
              <p>Our approach focuses on meaningful progress that organizations and their people can actually see.</p>
            </article>

            <article className="why-card why-card-wide">
              <div>
                <span className="why-number">04</span>
                <div className="why-card-icon">✦</div>
                <h3>Ready for what's next</h3>
                <p>Modern organizations need HR that can evolve with changing skills, workplaces, technologies, and expectations.</p>
              </div>

              <div className="why-visual-text">
                <span>PEOPLE</span>
                <span>+</span>
                <span>TECHNOLOGY</span>
                <span>=</span>
                <strong>PROGRESS</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-heading">
            <div>
              <span className="section-eyebrow">WHAT PEOPLE SAY</span>

              <h2>
                Better people decisions
                <span> create better outcomes.</span>
              </h2>
            </div>

            <span className="testimonial-note">SAMPLE TESTIMONIALS</span>
          </div>

          <div className="testimonials-grid">
            <article className="testimonial-card testimonial-featured">
              <div className="quote-mark">“</div>
              <blockquote>
                NEXORA helped us rethink how we approach talent. The focus shifted from simply filling roles to building teams with a clear long-term purpose.
              </blockquote>
              <div className="testimonial-person">
                <div className="person-avatar">AR</div>
                <div>
                  <strong>Alex Rivera</strong>
                  <span>People Director · Technology</span>
                </div>
              </div>
            </article>

            <article className="testimonial-card">
              <div className="quote-mark">“</div>
              <blockquote>
                Their approach brought recruitment, development, and organizational goals into one connected strategy.
              </blockquote>
              <div className="testimonial-person">
                <div className="person-avatar">SM</div>
                <div>
                  <strong>Sarah Mitchell</strong>
                  <span>Chief People Officer · Growth Company</span>
                </div>
              </div>
            </article>

            <article className="testimonial-card">
              <div className="quote-mark">“</div>
              <blockquote>
                What stood out was the balance between technology, data, and genuinely human decision-making.
              </blockquote>
              <div className="testimonial-person">
                <div className="person-avatar">DK</div>
                <div>
                  <strong>Daniel Kim</strong>
                  <span>Operations Lead · Professional Services</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="final-cta-glow final-cta-glow-one" />
        <div className="final-cta-glow final-cta-glow-two" />

        <div className="container">
          <div className="final-cta">
            <div className="final-cta-content">
              <span className="section-eyebrow">READY TO MOVE FORWARD?</span>

              <h2>
                Let's turn human potential
                <span> into what's next.</span>
              </h2>

              <p>
                Whether you are building a team, developing your people, or shaping your next stage of growth, let's create a smarter path forward together.
              </p>

              <div className="final-cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  Start a Conversation <span>→</span>
                </Link>

                <Link to="/services" className="btn btn-secondary">
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="final-cta-visual">
              <div className="cta-ring cta-ring-one" />
              <div className="cta-ring cta-ring-two" />
              <div className="cta-ring cta-ring-three" />

              <div className="cta-core">
                <span>PEOPLE</span>
                <strong>+</strong>
                <span>POTENTIAL</span>
                <strong>+</strong>
                <span>PROGRESS</span>
              </div>

              <span className="cta-node cta-node-one" />
              <span className="cta-node cta-node-two" />
              <span className="cta-node cta-node-three" />
              <span className="cta-node cta-node-four" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
