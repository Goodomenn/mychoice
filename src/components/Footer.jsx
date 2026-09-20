import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'
import './Footer.css'

const tourLinks = [
  { label: 'Historical Tours', path: '/tours' },
  { label: 'Cultural & Tribal Tours', path: '/tours' },
  { label: 'Adventure & Trekking', path: '/tours' },
  { label: 'Wildlife & Safari', path: '/tours' },
  { label: 'Combination Tours', path: '/tours' },
]

const destLinks = [
  { label: 'Lalibela', path: '/destinations' },
  { label: 'Simien Mountains', path: '/destinations' },
  { label: 'Omo Valley', path: '/destinations' },
  { label: 'Danakil Depression', path: '/destinations' },
  { label: 'Axum & Gondar', path: '/destinations' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">✦</span>
            <div>
              <span className="footer__logo-main">MyChoice</span>
              <span className="footer__logo-sub">Ethiopia</span>
            </div>
          </Link>
          <p className="footer__tagline">
            Ethiopia is not just a destination — it's a transformation. Let us show you the Africa the world has yet to discover.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram" className="footer__social"><FiInstagram /></a>
            <a href="#" aria-label="Facebook" className="footer__social"><FiFacebook /></a>
            <a href="#" aria-label="Twitter" className="footer__social"><FiTwitter /></a>
            <a href="#" aria-label="YouTube" className="footer__social"><FiYoutube /></a>
          </div>
        </div>

        {/* Tour Packages */}
        <div className="footer__col">
          <h4 className="footer__col-title">Tour Packages</h4>
          <ul className="footer__col-links">
            {tourLinks.map(l => (
              <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div className="footer__col">
          <h4 className="footer__col-title">Destinations</h4>
          <ul className="footer__col-links">
            {destLinks.map(l => (
              <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Get In Touch</h4>
          <ul className="footer__contact-list">
            <li>
              <FiPhone size={15} />
              <div>
                <a href="tel:+251911420000">+251 911 420 000</a>
                <a href="tel:+251116183163">+251 116 183 163</a>
              </div>
            </li>
            <li>
              <FiMail size={15} />
              <a href="mailto:info@mychoiceethiopia.com">info@mychoiceethiopia.com</a>
            </li>
            <li>
              <FiMapPin size={15} />
              <span>Bole Airport Road, Around Skylight Hotel, Addis Ababa, Ethiopia</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} MyChoiceEthiopia Tours & Travel. All Rights Reserved.</p>
          <div className="footer__bottom-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
            <Link to="#">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
