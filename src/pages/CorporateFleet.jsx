import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiFileText, 
  FiShield, 
  FiTruck, 
  FiCheckCircle, 
  FiCreditCard, 
  FiUsers, 
  FiDownload, 
  FiSend, 
  FiMapPin, 
  FiPhone, 
  FiMail,
  FiLock
} from 'react-icons/fi'
import { 
  FaCarSide, 
  FaBus, 
  FaGasPump, 
  FaWrench, 
  FaAward, 
  FaHandshake,
  FaFileContract
} from 'react-icons/fa6'
import './CorporateFleet.css'

const fleetVehicles = [
  {
    id: 1,
    name: 'Toyota Land Cruiser 4x4 Hardtop (HZJ76/78)',
    category: 'Heavy-Duty Expedition 4x4',
    capacity: '4 – 6 Passengers + Cargo',
    features: ['Snorkel & Dual Fuel Tanks', 'High-Lift Jack & Off-Road Winch', 'Reinforced Heavy Suspension', 'Full First Aid & Trauma Kit'],
    idealFor: 'Afar Danakil Depression, Simien backcountry, Omo Valley gravel roads, and remote humanitarian field missions.',
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80'
  },
  {
    id: 2,
    name: 'Toyota Land Cruiser V8 / Prado TXL',
    category: 'VIP & Diplomatic Chauffeur',
    capacity: '4 Passengers + Luggage',
    features: ['Plush Leather Interior', 'Multi-Zone Climate Control', 'Tinted Security Windows', 'Satellite GPS Tracking'],
    idealFor: 'Executive UN delegation transport, embassy diplomatic details, and cross-country executive logistics.',
    img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80'
  },
  {
    id: 3,
    name: 'Toyota Coaster 30-Seater Deluxe Bus',
    category: 'Delegation & Group Logistics',
    capacity: '28 – 30 Passengers',
    features: ['High-Power AC Cooling', 'Reclining Comfort Seats', 'Overhead Luggage Compartments', 'PA Microphone System'],
    idealFor: 'NGO mission staff transfers, conference attendees, and large-scale project workforce movements.',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80'
  },
  {
    id: 4,
    name: 'Toyota HiAce High-Roof Minivan',
    category: 'Rapid Regional Transport',
    capacity: '10 – 12 Passengers',
    features: ['Smooth Highway Suspension', 'Ample Rear Cargo Space', 'Efficient Diesel Engine', 'Dual Side Sliding Doors'],
    idealFor: 'Inter-city travel, airport transfers, and urban team transit across Addis Ababa, Semera, and Mekelle.',
    img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80'
  }
]

const complianceSpecs = [
  { label: 'Business License No.', value: '14/666/128419/2005' },
  { label: 'VAT Registration No.', value: '80692' },
  { label: 'Tax Identification (TIN)', value: 'Verified Active (SIGTAS Compliant)' },
  { label: 'Commercial Registry', value: 'Federal Democratic Republic of Ethiopia' },
  { label: 'Credit Facility', value: '30-Day Post-Paid for Certified NGOs & UN Agencies' },
  { label: 'Driver Certification', value: '17 Grade-8 and Above Licensed Operators' }
]

export default function CorporateFleet() {
  const [rfqData, setRfqData] = useState({
    organization: '',
    contactPerson: '',
    email: '',
    phone: '',
    vehicleType: 'Toyota Land Cruiser 4x4 Hardtop',
    quantity: '1 - 2 Vehicles',
    leaseDuration: 'Monthly Lease (30+ Days)',
    operatingRegion: 'Addis Ababa & Nationwide Corridors',
    fuelDriver: 'Driver Included + Fuel Covered by Client',
    comments: ''
  })

  const [rfqSubmitted, setRfqSubmitted] = useState(false)
  const [downloadingPack, setDownloadingPack] = useState(false)

  const handleRfqSubmit = (e) => {
    e.preventDefault()
    setRfqSubmitted(true)
  }

  const handleDownloadPack = () => {
    setDownloadingPack(true)
    setTimeout(() => {
      setDownloadingPack(false)
      alert('Vendor Pre-Qualification Packet (TIN, VAT 80692, License, Personnel Roster, and Credit Terms) initiated for download.')
    }, 1200)
  }

  return (
    <div className="triply-page corporate-fleet-page">
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img 
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1920&q=80" 
            alt="4x4 expedition fleet on rugged terrain" 
            className="page-hero__img"
          />
          <div className="page-hero__overlay"></div>
        </div>

        <div className="container page-hero__container">
          <div className="page-hero__breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span>Corporate & NGO Fleet Logistics</span>
          </div>

          <h1 className="page-hero__title">
            NGO & Institutional <span className="script-accent">fleet</span> Logistics
          </h1>
          <p className="page-hero__subtitle">
            Reliable 4x4 vehicle leasing, Grade-8 certified drivers, and 30-day credit facilities 
            engineered to satisfy the rigorous vendor pre-qualification frameworks of UN agencies, 
            international NGOs, and diplomatic missions across Ethiopia.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. VENDOR COMPLIANCE DASHBOARD                               */}
      {/* ============================================================ */}
      <section className="compliance-dashboard-section">
        <div className="container">
          <div className="compliance-dashboard-card">
            <div className="compliance-header">
              <div className="comp-badge-wrap">
                <FiShield size={20} className="comp-shield-icon" />
                <span className="comp-status">VERIFIED ETHIOPIAN VENDOR ENTITY</span>
              </div>
              <h2 className="compliance-title">Official Vendor Compliance Dashboard</h2>
              <p className="compliance-sub">
                Transparent regulatory parameters for streamlined procurement verification under SIGTAS and institutional ERP systems.
              </p>
            </div>

            <div className="compliance-grid">
              {complianceSpecs.map((spec, idx) => (
                <div key={idx} className="comp-grid-item">
                  <span className="comp-label">{spec.label}</span>
                  <strong className="comp-value">{spec.value}</strong>
                </div>
              ))}
            </div>

            <div className="compliance-footer">
              <div className="security-notice">
                <FiLock size={16} className="lock-icon" />
                <span>
                  <strong>Cybersecurity Protocol:</strong> Commercial Bank of Ethiopia routing and account numbers are strictly excluded from public view to prevent phishing and payment fraud. Banking coordinates are securely transmitted upon bilateral execution of service agreements.
                </span>
              </div>
              <button 
                className="triply-btn-orange download-btn"
                onClick={handleDownloadPack}
              >
                <FiDownload size={16} />
                <span>{downloadingPack ? 'Generating Packet...' : 'Download Vendor Pre-Qualification Pack (PDF)'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. 30-DAY CREDIT FACILITY & PAYMENT TERMS                     */}
      {/* ============================================================ */}
      <section className="credit-terms-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-script-subtitle">Institutional Payment Terms</span>
            <h2 className="section-main-heading">30-Day Post-Paid Credit Facility</h2>
            <p className="section-lead-text">
              We eliminate upfront capital barriers for international humanitarian missions and government tenders. 
              Our formalized credit protocol integrates seamlessly with institutional procurement cycles.
            </p>
          </div>

          <div className="credit-workflow-grid">
            <div className="workflow-step-card">
              <div className="step-num-badge">01</div>
              <h3 className="step-title">Timesheet & Duty Validation</h3>
              <p className="step-desc">
                Drivers maintain daily trip manifests, fuel vouchers, and mission logbooks, counter-signed by your designated field project officer.
              </p>
            </div>

            <div className="workflow-step-card">
              <div className="step-num-badge">02</div>
              <h3 className="step-title">Monthly Consolidated VAT Invoice</h3>
              <p className="step-desc">
                At the close of each calendar billing period, an official electronic VAT receipt (VAT #80692) is dispatched with validated logbook sheets attached.
              </p>
            </div>

            <div className="workflow-step-card">
              <div className="step-num-badge">03</div>
              <h3 className="step-title">30-Day Direct Settlement</h3>
              <p className="step-desc">
                Your financial department executes settlement within 30 days of invoice receipt via direct electronic fund transfer (EFT) or corporate cheque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. 17 GRADE-8 CERTIFIED DRIVERS & FLEET ROSTER                */}
      {/* ============================================================ */}
      <section className="fleet-drivers-section">
        <div className="container">
          {/* Driver Credentials Card */}
          <div className="drivers-highlight-card">
            <div className="drivers-card-inner">
              <div className="drivers-text">
                <span className="section-script-subtitle">Operational Personnel</span>
                <h2 className="section-main-heading" style={{ color: '#FFFFFF' }}>
                  17 Grade-8 Certified Multilingual Drivers
                </h2>
                <p className="drivers-p">
                  NGO tenders mandate that drivers possess advanced vehicle operation qualifications, 
                  basic mechanical repair capability, and literacy to maintain official travel manifests. 
                  Our cohort of 17 Grade-8 certified professionals act as trustworthy logistical assets across remote terrains.
                </p>

                <div className="driver-perks-grid">
                  <div className="perk-item">
                    <FiCheckCircle className="perk-icon" />
                    <span>Grade-8 & Above Public/Commercial Licenses</span>
                  </div>
                  <div className="perk-item">
                    <FiCheckCircle className="perk-icon" />
                    <span>Off-Road Recovery & Field Mechanical Literacy</span>
                  </div>
                  <div className="perk-item">
                    <FiCheckCircle className="perk-icon" />
                    <span>Defensive Driving & Security Protocol Trained</span>
                  </div>
                  <div className="perk-item">
                    <FiCheckCircle className="perk-icon" />
                    <span>English, Amharic & Regional Dialect Fluency</span>
                  </div>
                </div>
              </div>

              <div className="drivers-stat-badge">
                <div className="stat-circle">
                  <span className="stat-big">17</span>
                  <span className="stat-lbl">Grade-8 Certified Chauffeurs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Inventory */}
          <div className="section-header-centered" style={{ marginTop: '72px' }}>
            <span className="section-script-subtitle">Fleet Roster</span>
            <h2 className="section-main-heading">Heavy-Duty & Executive Vehicle Assets</h2>
            <p className="section-lead-text">
              Fully maintained in-house, outfitted with GPS telematics, dual spare wheels, and emergency medical kits.
            </p>
          </div>

          <div className="fleet-grid">
            {fleetVehicles.map((v) => (
              <div key={v.id} className="vehicle-card">
                <div className="v-img-box">
                  <img src={v.img} alt={v.name} className="v-img" />
                  <span className="v-cat-badge">{v.category}</span>
                </div>

                <div className="v-body">
                  <h3 className="v-title">{v.name}</h3>
                  <span className="v-capacity">Capacity: <strong>{v.capacity}</strong></span>
                  <p className="v-ideal"><strong>Ideal Application:</strong> {v.idealFor}</p>

                  <div className="v-features">
                    {v.features.map((f, i) => (
                      <span key={i} className="v-feature-tag">
                        <FiCheckCircle size={12} className="tag-check" />
                        {f}
                      </span>
                    ))}
                  </div>

                  <a href="#b2b-rfq" className="btn-lease-inquiry">
                    <span>Inquire Fleet Allocation</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. REGIONAL LOGISTICAL BASES (SEMERIA & MEKELLE)              */}
      {/* ============================================================ */}
      <section className="regional-bases-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-script-subtitle">Strategic Presence</span>
            <h2 className="section-main-heading">3 Regional Fleet Hubs Across Ethiopia</h2>
            <p className="section-lead-text">
              Unlike competitors operating solely from the capital, we maintain physical branch offices 
              and vehicle staging depots to ensure immediate on-the-ground support.
            </p>
          </div>

          <div className="bases-grid">
            <div className="base-card">
              <div className="base-card-top">
                <FiMapPin size={22} className="base-icon" />
                <h3 className="base-city">Addis Ababa Head Office</h3>
              </div>
              <span className="base-location">Bole Airport Road, Around Skylight Hotel Area</span>
              <p className="base-desc">
                Central command headquarters managing nationwide tender contracting, executive VIP transport, and airport protocol services.
              </p>
              <div className="base-contact">
                <span>Tel: +251 911 420 000</span>
                <span>Email: logistics@mychoiceethiopia.com</span>
              </div>
            </div>

            <div className="base-card">
              <div className="base-card-top">
                <FiMapPin size={22} className="base-icon" />
                <h3 className="base-city">Semera Branch (Afar)</h3>
              </div>
              <span className="base-location">Afar Regional Logistics Hub</span>
              <p className="base-desc">
                Direct staging gateway for Danakil Depression expeditions, Erta Ale volcanic missions, and desert relief operations with local Afar scouts.
              </p>
              <div className="base-contact">
                <span>Direct Field Coordinator Desk</span>
                <span>Email: semera@mychoiceethiopia.com</span>
              </div>
            </div>

            <div className="base-card">
              <div className="base-card-top">
                <FiMapPin size={22} className="base-icon" />
                <h3 className="base-city">Mekelle Branch (Tigray)</h3>
              </div>
              <span className="base-location">Kedamay Woyane Sub City</span>
              <p className="base-desc">
                Northern operational depot supporting humanitarian NGO fleet deployments, Gheralta mountain expeditions, and emergency vehicle recovery.
              </p>
              <div className="base-contact">
                <span>Regional Operations Officer</span>
                <span>Email: mekelle@mychoiceethiopia.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. B2B INSTITUTIONAL RFQ FORM                                */}
      {/* ============================================================ */}
      <section id="b2b-rfq" className="b2b-rfq-section">
        <div className="container">
          <div className="rfq-card">
            {rfqSubmitted ? (
              <div className="rfq-success">
                <FiCheckCircle size={54} className="rfq-success-icon" />
                <h3 className="rfq-success-title">Fleet Logistics Tender Received</h3>
                <p className="rfq-success-desc">
                  Thank you, <strong>{rfqData.contactPerson}</strong> representing <strong>{rfqData.organization}</strong>. 
                  Our Commercial Logistics Officer has received your vehicle request for <strong>{rfqData.vehicleType}</strong>. 
                  Our formal proforma invoice and vendor credentials packet will be dispatched to <strong>{rfqData.email}</strong> within 12 hours.
                </p>
                <button 
                  className="triply-btn-orange" 
                  onClick={() => setRfqSubmitted(false)}
                  style={{ marginTop: '20px' }}
                >
                  Submit Another Lease Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="rfq-form">
                <div className="rfq-form-header">
                  <span className="section-script-subtitle" style={{ color: '#E26D3C' }}>Institutional Procurement</span>
                  <h2 className="rfq-heading">Request Corporate Fleet Quotation (RFQ)</h2>
                  <p className="rfq-sub">Please furnish your tender specifications for immediate proforma generation.</p>
                </div>

                <div className="rfq-grid-2">
                  <div className="form-group">
                    <label>Agency / Organization Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. UN Agency / DanChurchAid / Private Firm"
                      value={rfqData.organization}
                      onChange={(e) => setRfqData({...rfqData, organization: e.target.value})}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Procurement Officer / Contact Person *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Samuel Gebre"
                      value={rfqData.contactPerson}
                      onChange={(e) => setRfqData({...rfqData, contactPerson: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="rfq-grid-2">
                  <div className="form-group">
                    <label>Official Corporate Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. s.gebre@organization.org"
                      value={rfqData.email}
                      onChange={(e) => setRfqData({...rfqData, email: e.target.value})}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Telephone / WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+251 ..."
                      value={rfqData.phone}
                      onChange={(e) => setRfqData({...rfqData, phone: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="rfq-grid-3">
                  <div className="form-group">
                    <label>Vehicle Configuration</label>
                    <select 
                      value={rfqData.vehicleType}
                      onChange={(e) => setRfqData({...rfqData, vehicleType: e.target.value})}
                      className="form-select"
                    >
                      <option>Toyota Land Cruiser 4x4 Hardtop (Expedition)</option>
                      <option>Toyota Land Cruiser V8 / Prado (VIP Chauffeur)</option>
                      <option>Toyota Coaster 30-Seater Bus</option>
                      <option>Toyota HiAce Minivan</option>
                      <option>Mixed Multi-Vehicle Fleet</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Lease Duration</label>
                    <select 
                      value={rfqData.leaseDuration}
                      onChange={(e) => setRfqData({...rfqData, leaseDuration: e.target.value})}
                      className="form-select"
                    >
                      <option>Spot Assignment (1 – 7 Days)</option>
                      <option>Short-Term Mission (1 – 4 Weeks)</option>
                      <option>Monthly Lease (30+ Days)</option>
                      <option>Annual Long-Term Framework Agreement</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Primary Operating Hub</label>
                    <select 
                      value={rfqData.operatingRegion}
                      onChange={(e) => setRfqData({...rfqData, operatingRegion: e.target.value})}
                      className="form-select"
                    >
                      <option>Addis Ababa & Nationwide Corridors</option>
                      <option>Afar Region (Semera Base)</option>
                      <option>Tigray Region (Mekelle Base)</option>
                      <option>Somali / Oromia / Southern Corridors</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Tender Scope, Special Requirements, or Security Constraints</label>
                  <textarea 
                    rows={4}
                    placeholder="Specify driver requirements, spare tire mandates, fuel card modalities, or tender submission deadlines..."
                    value={rfqData.comments}
                    onChange={(e) => setRfqData({...rfqData, comments: e.target.value})}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="triply-btn-orange rfq-submit-btn">
                  <FiSend size={16} />
                  <span>Transmit RFQ to Logistics Officer</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
