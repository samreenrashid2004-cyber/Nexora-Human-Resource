import { Link } from 'react-router-dom'
import HumanNetwork from './HumanNetwork.jsx'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">HUMAN RESOURCES × TECHNOLOGY</span>
          <h1>
            Human potential,
            <span> intelligently connected.</span>
          </h1>
          <p className="hero-description">
            We help ambitious organizations find, develop, and retain the people who move their business forward.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation <span>→</span>
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Explore Services
            </Link>
          </div>

          <div className="hero-journey">
            <span>DISCOVER</span>
            <i />
            <span>CONNECT</span>
            <i />
            <span>DEVELOP</span>
            <i />
            <span>GROW</span>
            <i />
            <span>IMPACT</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="network-orbit orbit-one" />
          <div className="network-orbit orbit-two" />

          <HumanNetwork />

          <div className="network-label network-label-one">
            <span className="label-dot" />
            <div>
              <strong>PEOPLE</strong>
              <small>Talent &amp; teams</small>
            </div>
          </div>

          <div className="network-label network-label-two">
            <span className="label-dot" />
            <div>
              <strong>POTENTIAL</strong>
              <small>Skills &amp; growth</small>
            </div>
          </div>

          <div className="network-label network-label-three">
            <span className="label-dot" />
            <div>
              <strong>IMPACT</strong>
              <small>Business outcomes</small>
            </div>
          </div>

          <div className="network-center-caption">
            <span>HUMAN</span>
            <strong>POTENTIAL</strong>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

export default Hero
