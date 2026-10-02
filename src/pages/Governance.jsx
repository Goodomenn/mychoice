import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiShield, 
  FiFileText, 
  FiDownload, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiMail, 
  FiPhone, 
  FiLock,
  FiChevronDown,
  FiChevronUp,
  FiGlobe,
  FiHeart
} from 'react-icons/fi'
import { 
  FaHandshake, 
  FaScaleBalanced, 
  FaTree, 
  FaSuitcaseMedical,
  FaFilePdf
} from 'react-icons/fa6'
import './Governance.css'

const policies = [
  {
    id: 'anti-bribery',
    title: 'Anti-Bribery, Anti-Corruption & Transparent Bidding Policy',
    subtitle: 'Zero-tolerance governance framework compliant with UN Global Compact, FCPA, and Ethiopian Federal Anti-Corruption Laws.',
    icon: FaScaleBalanced,
    category: 'Institutional Integrity',
    lastReviewed: 'January 2026',
    docRef: 'MCE-GOV-2026-01',
    summary: 'Our enterprise operates on unequivocal principles of transparency, integrity, and ethical conduct across all procurement, tendering, and field operations. We maintain a zero-tolerance stance towards bribery, illicit kickbacks, facilitation payments, or any corrupt influence in securing commercial or institutional contracts.',
    keyPillars: [
      'Strict prohibition of gift offering or receiving in excess of nominal customary promotional tokens.',
      'Mandatory double-signoff on all commercial tender submissions and procurement price quotations.',
      'Protection and non-retaliation guarantees for institutional whistleblowers reporting suspicious activities.',
      'Comprehensive financial tracking through auditable digital SIGTAS and bank-cleared invoicing.'
    ]
  },
  {
    id: 'code-of-conduct',
    title: 'Employee Code of Conduct & Human Rights Charter',
    subtitle: 'Ethical workforce guidelines, child labor prohibition, and dignity in indigenous tourism and logistics.',
    icon: FaHandshake,
    category: 'Workforce & Human Rights',
    lastReviewed: 'February 2026',
    docRef: 'MCE-GOV-2026-02',
    summary: 'Outlines behavioral expectations for our entire 32-person workforce, including 17 Grade-8 certified drivers, tour managers, and field guides. Our framework strictly enforces universal human rights, dignity for local communities in remote expedition corridors (such as Afar and South Omo), and fair labor practices.',
    keyPillars: [
      'Absolute prohibition of child labor and forced labor across all direct operations and subcontractor relationships.',
      'Strict zero-tolerance policy against workplace harassment, discriminatory behavior, and gender bias.',
      'Respectful engagement protocols with indigenous elders and traditional community leaders during field expeditions.',
      'Fair living wages, health coverage, and continuous defensive driving and hospitality training for all operators.'
    ]
  },
  {
    id: 'environmental-sustainability',
    title: 'Environmental Sustainability & Carbon Stewardship Policy',
    subtitle: 'Ecological preservation protocols across fragile ecosystems: Danakil Depression, Simien & Bale Mountains.',
    icon: FaTree,
    category: 'Environmental Management',
    lastReviewed: 'January 2026',
    docRef: 'MCE-GOV-2026-03',
    summary: 'As operators venturing into Ethiopia’s most delicate geographical environments, we recognize our paramount obligation to minimize ecological impact. We enforce stringent vehicle emission monitoring, single-use plastic reduction, and leave-no-trace expedition rules.',
    keyPillars: [
      'Rigorous bi-annual emission diagnostics and proactive engine maintenance to ensure optimal fuel efficiency.',
      'Mandatory "pack-it-in, pack-it-out" waste containment protocols for all desert and mountain camping missions.',
      'Investment in local reforestation initiatives and partnership with national park conservation authorities.',
      'Standardized eco-driving training for all fleet drivers to curb unnecessary engine idling and fuel consumption.'
    ]
  },
  {
    id: 'health-safety',
    title: 'Occupational Health, Safety & Emergency Response Protocol',
    subtitle: 'Institutional safety standards, mandatory trauma response kits, and real-time corridor telematics.',
    icon: FaSuitcaseMedical,
    category: 'Safety & Risk Management',
    lastReviewed: 'March 2026',
    docRef: 'MCE-GOV-2026-04',
    summary: 'Guarantees comprehensive health and safety safeguards for passengers, NGO project personnel, and our operational drivers. Each 4x4 expedition vehicle is equipped as an autonomous safe haven outfitted with first-aid trauma supplies, dual communications, and off-road recovery gear.',
    keyPillars: [
      'Mandatory comprehensive medical trauma kits, high-lift jacks, and dual spare tires in every deployed expedition vehicle.',
      'Enforced maximum driving hours (strict 8-hour daily driving ceiling with mandated rest breaks to mitigate operator fatigue).',
      '24/7 central dispatch monitoring and coordination with regional medical centers in Addis Ababa, Semera, and Mekelle.',
      'Regular defensive driving drills, emergency desert evacuation procedures, and vehicle rollover prevention training.'
    ]
  }
]

export default function Governance() {
  const [openPolicy, setOpenPolicy] = useState('anti-bribery')
  const [downloadingId, setDownloadingId] = useState(null)

  const handleDownload = (policyId, title) => {
    setDownloadingId(policyId)
    setTimeout(() => {
      setDownloadingId(null)
      alert(`Official PDF Document for "${title}" has been initiated for secure download.`)
    }, 1200)
  }

  const togglePolicy = (id) => {
    setOpenPolicy(openPolicy === id ? null : id)
  }

  return (
    <div className="triply-page governance-page">
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80" 
            alt="Corporate governance and institutional integrity" 
            className="page-hero__img"
          />
          <div className="page-hero__overlay"></div>
        </div>

        <div className="container page-hero__container">
          <div className="page-hero__breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span>Corporate Governance & Compliance</span>
          </div>

          <h1 className="page-hero__title">
            Institutional <span className="script-accent">governance</span> & Compliance
          </h1>
          <p className="page-hero__subtitle">
            Rigorous ethical standards, zero-tolerance anti-corruption frameworks, environmental stewardship, 
            and occupational health safety protocols satisfying international NGO and diplomatic pre-qualification criteria.
          </p>
        </div>
      </section>

      {/* 2. REGULATORY BADGE STRIP */}
      <section className="gov-badge-strip">
        <div className="container">
          <div className="gov-strip-card">
            <div className="strip-item">
              <FiShield className="strip-icon" />
              <div>
                <strong>Business License</strong>
                <span>14/666/128419/2005</span>
              </div>
            </div>

            <div className="strip-item">
              <FiCheckCircle className="strip-icon" />
              <div>
                <strong>VAT Registration</strong>
                <span>80692</span>
              </div>
            </div>

            <div className="strip-item">
              <FaScaleBalanced className="strip-icon" />
              <div>
                <strong>Tax Identification (TIN)</strong>
                <span>Verified Active & Compliant</span>
              </div>
            </div>

            <div className="strip-item">
              <FiGlobe className="strip-icon" />
              <div>
                <strong>Standards Alignment</strong>
                <span>UN Global Compact Principles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POLICIES ACCORDION / EXPANDABLE LIST */}
      <section className="gov-policies-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-script-subtitle">Corporate Framework</span>
            <h2 className="section-main-heading">Institutional Governance Policies</h2>
            <p className="section-lead-text">
              Review executive summaries of our core operating policies or trigger authenticated PDF downloads for formal vendor tender dossiers.
            </p>
          </div>

          <div className="policies-accordion">
            {policies.map((p) => {
              const Icon = p.icon
              const isOpen = openPolicy === p.id

              return (
                <div key={p.id} className={`policy-item-card ${isOpen ? 'is-open' : ''}`}>
                  <div className="policy-header" onClick={() => togglePolicy(p.id)}>
                    <div className="policy-title-area">
                      <div className="policy-icon-box">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="policy-meta-tags">
                          <span className="policy-tag category">{p.category}</span>
                          <span className="policy-tag ref">Ref: {p.docRef}</span>
                          <span className="policy-tag date">Reviewed: {p.lastReviewed}</span>
                        </div>
                        <h3 className="policy-name">{p.title}</h3>
                        <p className="policy-sub-desc">{p.subtitle}</p>
                      </div>
                    </div>

                    <div className="policy-toggle-btn">
                      {isOpen ? <FiChevronUp size={22} /> : <FiChevronDown size={22} />}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="policy-body">
                      <div className="policy-summary-box">
                        <h4 className="summary-heading">Executive Summary</h4>
                        <p className="summary-text">{p.summary}</p>
                      </div>

                      <div className="pillars-box">
                        <h4 className="pillars-heading">Key Regulatory Pillars & Enforceable Measures</h4>
                        <div className="pillars-grid">
                          {p.keyPillars.map((pillar, i) => (
                            <div key={i} className="pillar-item">
                              <FiCheckCircle className="pillar-check" />
                              <span>{pillar}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="policy-action-row">
                        <button 
                          className="triply-btn-orange download-policy-btn"
                          onClick={() => handleDownload(p.id, p.title)}
                        >
                          <FaFilePdf size={16} />
                          <span>
                            {downloadingId === p.id 
                              ? 'Packaging Official PDF...' 
                              : `Download Full ${p.category} Policy (PDF)`}
                          </span>
                        </button>
                        <span className="download-hint">
                          Includes official organizational signature and legal stamping.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE & WHISTLEBLOWER CONTACT */}
      <section className="whistleblower-section">
        <div className="container">
          <div className="whistleblower-card">
            <div className="whistleblower-content">
              <div className="wb-badge">
                <FiLock size={16} />
                <span>CONFIDENTIAL & PROTECTED CHANNEL</span>
              </div>
              <h2 className="wb-title">Compliance & Whistleblower Reporting</h2>
              <p className="wb-desc">
                We maintain an independent, secure reporting hotline for employees, institutional clients, 
                and partner organizations to report any deviation from our Code of Conduct or ethical standards. 
                Reports can be submitted anonymously and are reviewed directly by the executive oversight committee.
              </p>

              <div className="wb-contact-grid">
                <div className="wb-contact-item">
                  <FiMail className="wb-c-icon" />
                  <div>
                    <span className="wb-c-label">Dedicated Compliance Desk</span>
                    <strong className="wb-c-val">compliance@mychoiceethiopia.com</strong>
                  </div>
                </div>

                <div className="wb-contact-item">
                  <FiPhone className="wb-c-icon" />
                  <div>
                    <span className="wb-c-label">Direct Whistleblower Line</span>
                    <strong className="wb-c-val">+251 911 420 000 (Ext. 4)</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="wb-side-badge">
              <FiShield size={64} className="wb-big-shield" />
              <span className="wb-seal-text">ISO & UN GLOBAL COMPACT COMPLIANT PRINCIPLES</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
