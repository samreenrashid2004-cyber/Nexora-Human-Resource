import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <NavLink to="/" className="logo">
            <span className="logo-mark">N</span>
            <span>NEXORA</span>
          </NavLink>

          <p>Human potential, intelligently connected.</p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/insights">Insights</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-links">
          <h3>Connect</h3>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NEXORA — Concept Website</p>
        <p>People. Potential. Progress.</p>
      </div>
    </footer>
  )
}

export default Footer
