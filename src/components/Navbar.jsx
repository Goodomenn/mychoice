import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import './Navbar.css'

const links = [
  { path: '/', label: 'Home' },
  { path: '/destinations', label: 'Destinations' },
  { path: '/tours', label: 'Tours' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-icon">✦</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">MyChoice</span>
            <span className="navbar__logo-sub">Ethiopia</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {links.map(l => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <a href="tel:+251911420000" className="navbar__phone">
            <FiPhone size={14} />
            <span>+251 911 420 000</span>
          </a>
          <Link to="/contact" className="btn btn-primary navbar__cta">
            <span>Book Now</span>
          </Link>
        </div>

        {/* Hamburger */}
        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-links">
          {links.map(l => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/'}
              className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary navbar__mobile-cta" onClick={() => setOpen(false)}>
            <span>Book a Tour</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
