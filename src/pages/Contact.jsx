import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiSend, 
  FiCheckCircle, 
  FiHelpCircle,
  FiChevronDown,
  FiShield,
  FiLock,
  FiTruck,
  FiCompass
} from 'react-icons/fi'
import { FaWhatsapp, FaAward, FaShieldHeart } from 'react-icons/fa6'
import './Contact.css'

const regionalBranches = [
  {
    city: 'Addis Ababa (Headquarters)',
    sub: 'Central Command, Nationwide Tenders & VIP Logistics',
    address: 'Bole Airport Road, Around Skylight Hotel Area, Addis Ababa, Ethiopia',
    phone: '+251 911 420 000 / +251 116 183 163',
    email: 'info@mychoiceethiopia.com',
    hours: 'Mon – Sat: 08:00 – 18:30 EAT',
    lead: 'Head of Operations & International Tenders'
  },
  {
    city: 'Semera Branch (Afar Gateway)',
    sub: 'Danakil Depression & Desert Staging Hub',
    address: 'Afar Regional Hub, Semera Logistics Corridor',
    phone: 'Field Operations Direct Desk',
    email: 'semera@mychoiceethiopia.com',
    hours: '24/7 Field Dispatch & Convoy Staging',
    lead: 'Regional Afar Logistics Coordinator'
  },
  {
    city: 'Mekelle Branch (Tigray Hub)',
    sub: 'Northern Humanitarian & Expedition Depot',
    address: 'Kedamay Woyane Sub City, Mekelle, Tigray, Ethiopia',
    phone: 'Northern Logistics Operations Line',
    email: 'mekelle@mychoiceethiopia.com',
    hours: 'Mon – Sat: 08:30 – 18:00 EAT',
    lead: 'Regional Northern Operations Officer'
  }
]

const operationalPersonnel = [
  {
    role: 'Vice Manager (Tour Operations & B2C Expeditions)',
    desk: 'Oversees customized private departures, boutique heritage lodges, Danakil expeditions, and cultural guides.',
    contact: 'travel@mychoiceethiopia.com'
  },
  {
    role: 'Commercial Operations Officer (Group & Institutional Travel)',
    desk: 'Manages delegation transport, private group charters, and customized organizational travel arrangements across Ethiopia.',
    contact: 'logistics@mychoiceethiopia.com'
  },
  {
    role: 'Ethics & Compliance Officer (Whistleblower & Regulatory Desk)',
    desk: 'Confidential reporting channel for anti-bribery oversight, human rights verification, and vendor audit dossiers.',
    contact: 'compliance@mychoiceethiopia.com'
  }
]

const faqs = [
  {
    q: 'How does your 30-day post-paid credit facility operate for institutional clients?',
    a: 'For verified UN agencies, international NGOs, and diplomatic missions, we extend a formal 30-day post-paid credit facility. Mission logs and timesheets are validated weekly/monthly by your field officer, followed by a consolidated electronic VAT invoice (VAT #80692) payable via bank wire within 30 days.'
  },
  {
    q: 'Are your 17 drivers certified for rough terrain and remote field missions?',
    a: 'Yes. All 17 assigned chauffeurs hold Grade-8 and above commercial driving licenses, speak English, Amharic, and local regional dialects, and possess mandatory training in defensive driving, vehicle rollover prevention, off-road recovery, and first-aid trauma management.'
  },
  {
    q: 'How far in advance should leisure travelers book custom Ethiopian tours?',
    a: 'For major religious festivals (e.g., Timkat in January or Genna in Lalibela) and peak dry-season trekking (October through March), we recommend booking 2 to 4 months in advance to ensure premier boutique accommodations and private domestic flight charters.'
  },
  {
    q: 'Why are bank account details excluded from your public website?',
    a: 'In adherence to international cybersecurity standards and institutional anti-fraud policies, we exclude banking routing details from public-facing portals. Official Commercial Bank of Ethiopia (CBE) banking coordinates are securely transmitted alongside formal stamped service agreements.'
  }
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const initialTour = searchParams.get('tour') || ''

  const [inquiryType, setInquiryType] = useState('b2c') // 'b2c' | 'b2b'

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    destination: initialTour || 'Northern Historic Circuit (Lalibela & Gondar)',
    vehicleType: 'Toyota Land Cruiser 4x4 Hardtop',
    operatingHub: 'Addis Ababa HQ',
    travelers: '2 Travelers',
    travelDate: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    if (initialTour) {
      setFormData(prev => ({ ...prev, destination: initialTour }))
    }
  }, [initialTour])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="triply-page contact-page">
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img 
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80" 
            alt="Ethiopian sunset landscape" 
            className="page-hero__img"
          />
          <div className="page-hero__overlay"></div>
        </div>

        <div className="container page-hero__container">
          <div className="page-hero__breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span>Contact & Regional Branches</span>
          </div>

          <h1 className="page-hero__title">
            Connect With Our <span className="script-accent">regional</span> Offices
          </h1>
          <p className="page-hero__subtitle">
            Direct operational presence in Addis Ababa, Semera, and Mekelle. 
            Connect with our tour designers and regional operations officers for rapid dispatch.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. REGIONAL PHYSICAL BRANCHES                                */}
      {/* ============================================================ */}
      <section className="regional-offices-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-script-subtitle">Physical Presence</span>
            <h2 className="section-main-heading">3 Regional Operational Hubs</h2>
            <p className="section-lead-text">
              Ensuring on-the-ground support across central, eastern, and northern Ethiopian expedition and humanitarian corridors.
            </p>
          </div>

          <div className="branches-grid">
            {regionalBranches.map((b, i) => (
              <div key={i} className="branch-card">
                <div className="branch-header">
                  <div className="branch-icon-wrap">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h3 className="branch-title">{b.city}</h3>
                    <span className="branch-sub">{b.sub}</span>
                  </div>
                </div>

                <p className="branch-address">{b.address}</p>

                <div className="branch-meta">
                  <div className="branch-meta-row">
                    <FiPhone className="meta-icon" />
                    <span>{b.phone}</span>
                  </div>
                  <div className="branch-meta-row">
                    <FiMail className="meta-icon" />
                    <span>{b.email}</span>
                  </div>
                  <div className="branch-meta-row">
                    <FiClock className="meta-icon" />
                    <span>{b.hours}</span>
                  </div>
                </div>

                <div className="branch-lead">
                  <span className="lead-tag">{b.lead}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CONTACT FORM & OPERATIONAL DESKS                          */}
      {/* ============================================================ */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Segregated Operational Personnel */}
            <div className="contact-info-col">
              <span className="section-script-subtitle">Operational Desks</span>
              <h2 className="contact-col-title">Segregated Direct Channels</h2>
              <p className="contact-col-desc">
                To eliminate delays, your inquiry is routed directly to the specialized division manager responsible for your operational profile:
              </p>

              <div className="contact-cards-stack">
                {operationalPersonnel.map((p, idx) => (
                  <div key={idx} className="contact-info-card">
                    <div className="contact-card-icon">
                      {idx === 0 ? <FiCompass size={20} /> : idx === 1 ? <FiTruck size={20} /> : <FiShield size={20} />}
                    </div>
                    <div className="contact-card-text">
                      <strong>{p.role}</strong>
                      <p className="desk-desc">{p.desk}</p>
                      <span className="desk-email">{p.contact}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Entity Card */}
              <div className="contact-trust-box">
                <div className="trust-badge-item">
                  <FiShield size={18} className="trust-icon" />
                  <span>Business License No: 14/666/128419/2005</span>
                </div>
                <div className="trust-badge-item">
                  <FaAward size={18} className="trust-icon" />
                  <span>Official VAT Registration No: 80692</span>
                </div>
                <div className="trust-badge-item">
                  <FiLock size={18} className="trust-icon" />
                  <span>Secure Banking Protocol: CBE routing details shared upon contract execution.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Inquiry Form (B2C / B2B) */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="form-success-box">
                    <div className="success-icon-circle">
                      <FiCheckCircle size={44} />
                    </div>
                    <h3 className="success-title">Inquiry Transmitted Successfully!</h3>
                    <p className="success-text">
                      Thank you, <strong>{formData.name}</strong>. 
                      {inquiryType === 'b2b' ? (
                        <> Your institutional fleet and logistics tender request for <strong>{formData.organization || 'your organization'}</strong> has been assigned to our Commercial Logistics Officer. Our team will contact you at <strong>{formData.email}</strong> with an official proforma and credentials package within 12 hours.</>
                      ) : (
                        <> Our senior tour designer has received your travel request regarding <strong>{formData.destination}</strong>. We will formulate a tailored itinerary proposal and reach out to <strong>{formData.email}</strong> within 24 hours.</>
                      )}
                    </p>
                    <button 
                      className="triply-btn-orange" 
                      onClick={() => setSubmitted(false)}
                      style={{ marginTop: '20px' }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="custom-booking-form">
                    <div className="form-header">
                      {/* Inquiry Type Switcher */}
                      <div className="inquiry-type-toggle">
                        <button
                          type="button"
                          className={`type-toggle-btn ${inquiryType === 'b2c' ? 'active' : ''}`}
                          onClick={() => setInquiryType('b2c')}
                        >
                          <FiCompass size={15} />
                          <span>Private Tour / Holiday</span>
                        </button>
                        <button
                          type="button"
                          className={`type-toggle-btn ${inquiryType === 'b2b' ? 'active' : ''}`}
                          onClick={() => setInquiryType('b2b')}
                        >
                          <FiTruck size={15} />
                          <span>Group & Institutional Travel</span>
                        </button>
                      </div>

                      <h3 className="form-heading">
                        {inquiryType === 'b2b' ? 'Request Group / Delegation Travel Proposal' : 'Request Tailor-Made Itinerary'}
                      </h3>
                      <span className="form-subheading">
                        {inquiryType === 'b2b' 
                          ? 'Prompt quotation and verified vendor pack generation under VAT #80692.'
                          : 'Fill in your travel preferences and we will craft your bespoke itinerary.'}
                      </span>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label>Your Full Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Eleanor Vance"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label>{inquiryType === 'b2b' ? 'Organization / Agency Name *' : 'Email Address *'}</label>
                        {inquiryType === 'b2b' ? (
                          <input 
                            type="text" 
                            required
                            placeholder="e.g. UN Agency / DanChurchAid"
                            value={formData.organization}
                            onChange={(e) => setFormData({...formData, organization: e.target.value})}
                            className="form-input"
                          />
                        ) : (
                          <input 
                            type="email" 
                            required
                            placeholder="e.g. eleanor@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="form-input"
                          />
                        )}
                      </div>
                    </div>

                    <div className="form-row-2">
                      {inquiryType === 'b2b' && (
                        <div className="form-group">
                          <label>Official Corporate Email *</label>
                          <input 
                            type="email" 
                            required
                            placeholder="e.g. procurement@org.org"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="form-input"
                          />
                        </div>
                      )}

                      <div className="form-group">
                        <label>Phone / WhatsApp *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="+251 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="form-input"
                        />
                      </div>

                      {inquiryType === 'b2c' && (
                        <div className="form-group">
                          <label>Destination / Tour of Interest</label>
                          <input 
                            type="text" 
                            value={formData.destination}
                            onChange={(e) => setFormData({...formData, destination: e.target.value})}
                            className="form-input"
                          />
                        </div>
                      )}
                    </div>

                    {inquiryType === 'b2b' ? (
                      <div className="form-row-2">
                        <div className="form-group">
                          <label>Vehicle Configuration Required</label>
                          <select 
                            value={formData.vehicleType}
                            onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                            className="form-select"
                          >
                            <option>Toyota Land Cruiser 4x4 Hardtop (Expedition)</option>
                            <option>Toyota Land Cruiser V8 / Prado (VIP Chauffeur)</option>
                            <option>Toyota Coaster 30-Seater Bus</option>
                            <option>Toyota HiAce High-Roof Minivan</option>
                            <option>Multi-Vehicle Mixed Fleet</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Primary Deployment Hub</label>
                          <select 
                            value={formData.operatingHub}
                            onChange={(e) => setFormData({...formData, operatingHub: e.target.value})}
                            className="form-select"
                          >
                            <option>Addis Ababa HQ & Nationwide</option>
                            <option>Semera Base (Afar Region)</option>
                            <option>Mekelle Base (Tigray Region)</option>
                            <option>Multi-Region Deployment</option>
                          </select>
                        </div>
                      </div>
                    ) : (
                      <div className="form-row-2">
                        <div className="form-group">
                          <label>Number of Travelers</label>
                          <select 
                            value={formData.travelers}
                            onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                            className="form-select"
                          >
                            <option>Solo Traveler</option>
                            <option>2 Travelers (Couple)</option>
                            <option>3 - 5 Travelers (Family/Small Group)</option>
                            <option>6+ Travelers (Private Group)</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Estimated Travel Dates</label>
                          <input 
                            type="text" 
                            placeholder="e.g. November 2026"
                            value={formData.travelDate}
                            onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                            className="form-input"
                          />
                        </div>
                      </div>
                    )}

                    <div className="form-group">
                      <label>
                        {inquiryType === 'b2b' 
                          ? 'Tender Terms, 30-Day Credit Specifics, or Scope Mandates'
                          : 'Special Interests & Custom Preferences'}
                      </label>
                      <textarea 
                        rows={4}
                        placeholder={inquiryType === 'b2b' 
                          ? "Specify mission dates, driver requirements, spare tire mandates, or tender submission deadlines..."
                          : "Tell us about specific interests: photography, trekking, religious festivals, dietary preferences..."}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <button type="submit" className="triply-btn-orange form-submit-btn">
                      <span>{inquiryType === 'b2b' ? 'Transmit Institutional Tender RFQ' : 'Send Travel Inquiry'}</span>
                      <FiSend size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. INTERACTIVE FAQ SECTION                                   */}
      {/* ============================================================ */}
      <section className="contact-faq-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-script-subtitle">Travel & Procurement</span>
            <h2 className="section-main-heading">Frequently Asked Questions</h2>
            <p className="section-lead-text">
              Key guidance on institutional tender frameworks, 30-day post-paid credit, and private tour preparation.
            </p>
          </div>

          <div className="faq-accordion-wrap">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item-card ${openFaq === index ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <div className="faq-item-header">
                  <div className="faq-q-left">
                    <FiHelpCircle size={18} className="faq-q-icon" />
                    <h3 className="faq-q-text">{faq.q}</h3>
                  </div>
                  <FiChevronDown size={20} className={`faq-chevron ${openFaq === index ? 'rotated' : ''}`} />
                </div>
                {openFaq === index && (
                  <div className="faq-item-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
