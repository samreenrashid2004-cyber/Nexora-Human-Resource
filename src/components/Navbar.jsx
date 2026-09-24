import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">N</span>
          <span>NEXORA</span>
        </NavLink>

        <nav id="mobile-navigation" className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
          <NavLink to="/insights" onClick={closeMenu}>Insights</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

        <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>
          Start a Conversation <span>→</span>
        </NavLink>

        <button
          className={`menu-button ${menuOpen ? 'menu-button-open' : ''}`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
