import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiShield, FiLock, FiFileText } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const tourLinks = [
  { label: 'Historic Circuit (Lalibela & Gondar)', path: '/tours' },
  { label: 'Omo Valley Tribal Culture', path: '/tours' },
  { label: 'Danakil Depression Expedition', path: '/tours' },
  { label: 'Simien Mountains Trekking', path: '/tours' },
  { label: 'Bale Mountains Wildlife Safari', path: '/tours' },
]

const corporateLinks = [
  { label: 'Corporate Governance Overview', path: '/governance' },
  { label: 'Anti-Bribery & Corruption Policy', path: '/governance' },
  { label: 'Occupational Health & Safety (OHS)', path: '/governance' },
  { label: 'Environmental Stewardship Charter', path: '/governance' },
  { label: 'Employee Code of Conduct', path: '/governance' },
]

export default function Footer() {
  return (
    <footer className="triply-footer">
      {/* Compliance & Regulatory Banner */}
      <div className="triply-footer__compliance-bar">
        <div className="container triply-footer__comp-inner">
          <div className="comp-bar-left">
            <FiShield className="comp-bar-icon" />
            <span>
              <strong>Official Registered Ethiopian Enterprise:</strong> Business License No. <strong>14/666/128419/2005</strong> | VAT Registration No. <strong>80692</strong> | SIGTAS Tax Verified
            </span>
          </div>
          <div className="comp-bar-right">
            <Link to="/governance" className="comp-bar-link">
              <FiFileText size={14} />
              <span>Corporate Governance & Compliance</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="triply-footer__top container">
        {/* Brand Col */}
        <div className="triply-footer__brand">
          <Link to="/" className="triply-footer__logo">
            <div className="triply-logo__icon-wrap">
              <img 
                src="/logo.png" 
                alt="MyChoice Ethiopia Logo" 
                style={{ width: '40px', height: '40px', objectFit: 'contain' }} 
              />
            </div>
            <span className="triply-footer__brand-name">
              MyChoice <span style={{ color: '#E26D3C' }}>Ethiopia</span>
            </span>
          </Link>
          <p className="triply-footer__tagline">
            Dual-funnel Ethiopian travel and institutional fleet enterprise. 
            Delivering bespoke cultural expeditions alongside rigorous NGO & UN logistics across Addis Ababa, Semera, and Mekelle.
          </p>
          <div className="triply-footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-btn"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer-social-btn"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-social-btn"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="footer-social-btn"><FaYoutube /></a>
          </div>
        </div>

        {/* Leisure Tours */}
        <div className="triply-footer__col">
          <h4 className="triply-footer__col-title">Premier Tours</h4>
          <ul className="triply-footer__links">
            {tourLinks.map((l, i) => (
              <li key={i}><Link to={l.path}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Corporate & Governance */}
        <div className="triply-footer__col">
          <h4 className="triply-footer__col-title">Corporate Governance</h4>
          <ul className="triply-footer__links">
            {corporateLinks.map((l, i) => (
              <li key={i}><Link to={l.path}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Regional Hubs & Contact */}
        <div className="triply-footer__col">
          <h4 className="triply-footer__col-title">Regional Hubs</h4>
          <div className="triply-footer__contact-items">
            <div className="f-contact-row">
              <FiPhone className="f-contact-icon" />
              <div>
                <a href="tel:+251911420000">Addis HQ: +251 911 420 000</a>
                <span className="hub-sub">Semera & Mekelle Depots 24/7</span>
              </div>
            </div>
            <div className="f-contact-row">
              <FiMail className="f-contact-icon" />
              <div>
                <a href="mailto:logistics@mychoiceethiopia.com">logistics@mychoiceethiopia.com</a>
                <a href="mailto:travel@mychoiceethiopia.com">travel@mychoiceethiopia.com</a>
              </div>
            </div>
            <div className="f-contact-row">
              <FiMapPin className="f-contact-icon" />
              <span>Bole Airport Road, Around Skylight Hotel, Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Bank Notice */}
      <div className="triply-footer__security-bar container">
        <div className="security-bar-inner">
          <FiLock size={15} className="sec-icon" />
          <span>
            <strong>Cybersecurity Notice:</strong> Commercial Bank of Ethiopia (CBE) banking coordinates are strictly withheld from public view for anti-fraud protection and are released upon bilateral execution of agreements.
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="triply-footer__bottom">
        <div className="container triply-footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} MyChoice Ethiopia Tours & Travel. All rights reserved.</p>
          <div className="triply-footer__legal">
            <Link to="/governance">Code of Conduct</Link>
            <span className="dot">&bull;</span>
            <Link to="/governance">Anti-Bribery Policy</Link>
            <span className="dot">&bull;</span>
            <Link to="/contact">Booking Terms</Link>
            <span className="dot">&bull;</span>
            <Link to="/contact">Contact Hubs</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
