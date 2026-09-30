import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiArrowRight, 
  FiStar, 
  FiCompass, 
  FiMapPin, 
  FiCalendar, 
  FiClock, 
  FiCheckCircle, 
  FiShield, 
  FiAward, 
  FiMap,
  FiTruck,
  FiFileText,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi'
import { 
  FaSignHanging, 
  FaLandmark, 
  FaWater, 
  FaPersonHiking, 
  FaShip, 
  FaCompass,
  FaHandshake,
  FaScaleBalanced
} from 'react-icons/fa6'
import './Home.css'

// Categories matching the arch cards from Triply design
const categories = [
  {
    id: 1,
    title: 'City Tours',
    count: '5 Tours',
    price: '$550',
    img: '/images/city.jpg',
    icon: <FaSignHanging />,
    link: '/destinations'
  },
  {
    id: 2,
    title: 'Museum Tours',
    count: '5 Tours',
    price: '$450',
    img: '/images/museum.png',
    icon: <FaLandmark />,
    link: '/destinations'
  },
  {
    id: 3,
    title: 'Beaches & Lakes',
    count: '10 Tours',
    price: '$100',
    img: '/images/lakes.png',
    icon: <FaWater />,
    link: '/destinations'
  },
  {
    id: 4,
    title: 'Hiking',
    count: '4 Tours',
    price: '$250',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    icon: <FaPersonHiking />,
    link: '/tours'
  },
  {
    id: 5,
    title: 'Cruises & Boats',
    count: '8 Tours',
    price: '$100',
    img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80',
    icon: <FaShip />,
    link: '/tours'
  }
]

// Featured Tours
const featuredTours = [
  {
    id: 1,
    title: 'Historic Lalibela Rock-Hewn Churches',
    duration: '4 Days / 3 Nights',
    location: 'Lalibela, Amhara',
    price: '$680',
    rating: 4.9,
    reviews: 48,
    badge: 'Popular',
    img: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&q=80'
  },
  {
    id: 2,
    title: 'Simien Mountains Roof of Africa Trek',
    duration: '5 Days / 4 Nights',
    location: 'Simien National Park',
    price: '$790',
    rating: 5.0,
    reviews: 32,
    badge: 'Adventure',
    img: 'https://images.unsplash.com/photo-1598430772299-8a97f3d9d1d0?w=800&q=80'
  },
  {
    id: 3,
    title: 'Danakil Depression & Erta Ale Volcano',
    duration: '3 Days / 2 Nights',
    location: 'Afar Triangle',
    price: '$620',
    rating: 4.9,
    reviews: 29,
    badge: 'Expedition',
    img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80'
  }
]

// Feature items for "We create the trips you love"
const features = [
  {
    id: 1,
    title: '17 Grade-8 Certified Operators',
    desc: 'Mandatory defensive driving, mechanical field literacy, and regional dialect fluency ensuring uncompromising passenger safety.'
  },
  {
    id: 2,
    title: '3 Regional Logistical Depots',
    desc: 'Physical operational bases in Addis Ababa, Semera (Afar Gate), and Mekelle (Tigray) for immediate on-the-ground support.'
  },
  {
    id: 3,
    title: 'Rigorous Corporate Governance',
    desc: 'Strict anti-bribery policies, child labor prohibition, and leave-no-trace ecological protocols aligned with UN principles.'
  }
]

// Authentic Ethiopian landmark images uploaded by user for the hero slideshow
const heroSlides = [
  {
    id: 1,
    image: '/hero-slides/slide-1-lalibela.png',
    title: 'Lalibela Rock-Hewn Churches',
    location: 'Lalibela, Amhara',
    badge: 'UNESCO World Heritage'
  },
  {
    id: 2,
    image: '/hero-slides/slide-2-gondar-castles.png',
    title: 'Fasil Ghebbi Royal Enclosure',
    location: 'Gondar, Camelot of Africa',
    badge: '17th Century Imperial Citadel'
  },
  {
    id: 3,
    image: '/hero-slides/slide-3-gondar-arch.png',
    title: 'Historic Castles of Gondar',
    location: 'Ancient Stone Gateways',
    badge: 'Medieval Architectural Marvel'
  },
  {
    id: 4,
    image: '/hero-slides/slide-4-gheralta.png',
    title: 'Gheralta Sandstone Mountains',
    location: 'Hawzen, Tigray',
    badge: 'Sky-High Rock Churches'
  },
  {
    id: 5,
    image: '/hero-slides/slide-5-danakil.png',
    title: 'Danakil Depression & Dallol Springs',
    location: 'Afar Triangle',
    badge: 'Vibrant Geothermal Wonder'
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance slideshow every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="triply-home">
      {/* ============================================================ */}
      {/* 1. HERO SECTION WITH BACKGROUND SLIDESHOW                    */}
      {/* ============================================================ */}
      <section 
        className="triply-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Animated Background Slides */}
        <div className="triply-hero__slides">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="hero-slide__img"
              />
            </div>
          ))}
          <div className="triply-hero__overlay"></div>
        </div>

        <div className="container triply-hero__container">
          {/* Active Landmark Subtitle Pill */}
          <div className="hero-slide-badge-wrap">
            <span className="slide-pulse-dot"></span>
            <span className="slide-landmark-title">{heroSlides[currentSlide].title}</span>
            <span className="slide-sep">•</span>
            <span className="slide-landmark-loc">{heroSlides[currentSlide].location}</span>
          </div>

          <div className="triply-hero__content">
            {/* Big Bold Headline with Script Accent */}
            <div className="triply-hero__headline-wrap">
              <h1 className="triply-hero__title">
                <span className="title-row-top">Unforgettable</span>
                <span className="title-row-bottom">
                  <span className="script-accent">travel</span>
                  <span className="title-word">Experiences</span>
                </span>
              </h1>
            </div>

            {/* Bottom Right CTA Box */}
            <div className="triply-hero__cta-box">
              <p className="triply-hero__cta-text">
                Find amazing things to do.<br />
                Anytime, anywhere.
              </p>
              <Link to="/tours" className="triply-btn-orange">
                <span>Explore Our Tours</span>
                <FiArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Slider Navigation Bar */}
          <div className="hero-slider-controls">
            <button onClick={prevSlide} className="hero-nav-btn" aria-label="Previous Slide">
              <FiChevronLeft size={20} />
            </button>

            <div className="hero-nav-dots">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`hero-dot-btn ${idx === currentSlide ? 'active' : ''}`}
                  aria-label={`Slide ${idx + 1}: ${s.title}`}
                >
                  <span className="dot-bar"></span>
                  <span className="dot-tooltip">{s.title}</span>
                </button>
              ))}
            </div>

            <button onClick={nextSlide} className="hero-nav-btn" aria-label="Next Slide">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. DUAL-FUNNEL INTENT SWITCHER                               */}
      {/* ============================================================ */}
      <section className="dual-funnel-section">
        <div className="container">
          <div className="dual-funnel-card">
            <div className="funnel-col b2c-funnel">
              <div className="funnel-badge b2c-badge">B2C LEISURE & CULTURAL EXPEDITIONS</div>
              <h3 className="funnel-title">International Travelers & Private Explorers</h3>
              <p className="funnel-desc">
                Immersive bespoke journeys across Lalibela, Simien Mountains, and Danakil Depression 
                with dedicated bilingual guides, luxury 4x4 vehicles, and 24/7 travel concierge.
              </p>
              <Link to="/tours" className="funnel-btn b2c-btn">
                <span>Browse Guided Tours</span>
                <FiArrowRight size={16} />
              </Link>
            </div>

            <div className="funnel-divider">
              <span className="divider-text">OR</span>
            </div>

            <div className="funnel-col b2b-funnel">
              <div className="funnel-badge b2b-badge">BESPOKE PRIVATE & VIP EXPEDITIONS</div>
              <h3 className="funnel-title">Tailor-Made VIP & Group Expeditions</h3>
              <p className="funnel-desc">
                Custom private itineraries crafted by senior tour designers, luxury accommodations, 
                private domestic flight charters, and personalized 24/7 concierge support.
              </p>
              <Link to="/contact" className="funnel-btn b2b-btn">
                <span>Request Custom Itinerary</span>
                <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. QUANTITATIVE OPERATIONAL METRICS                          */}
      {/* ============================================================ */}
      <section className="triply-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">12+</span>
              <span className="stat-label">Years Operating Excellence</span>
              <span className="stat-sub">Across All Ethiopian Corridors</span>
            </div>

            <div className="stat-card">
              <span className="stat-number">32</span>
              <span className="stat-label">Dedicated Personnel</span>
              <span className="stat-sub">Permanent Operations & Field Team</span>
            </div>

            <div className="stat-card">
              <span className="stat-number">17</span>
              <span className="stat-label">Grade-8 Certified Drivers</span>
              <span className="stat-sub">Multilingual Off-Road Chauffeurs</span>
            </div>

            <div className="stat-card">
              <span className="stat-number">3</span>
              <span className="stat-label">Regional Logistics Hubs</span>
              <span className="stat-sub">Addis Ababa • Semera • Mekelle</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PLAN YOUR TRIP / CATEGORIES SECTION                       */}
      {/* ============================================================ */}
      <section className="triply-section triply-categories-section">
        {/* Palm Leaf Decor Accent */}
        <div className="palm-leaf-accent">
          <svg viewBox="0 0 200 200" fill="none" className="palm-svg">
            <path d="M180 20C120 40 60 100 20 180M180 20C140 60 100 120 80 180M180 20C160 80 140 140 130 190M180 20C170 100 165 150 160 200" stroke="#2D6A4F" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
            <path d="M120 40C110 20 90 10 70 20M140 60C130 40 110 30 90 40M160 80C150 60 130 50 110 60M170 100C160 80 140 70 120 80M165 120C155 100 135 90 115 100" stroke="#52B788" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
          </svg>
        </div>

        <div className="container">
          {/* Section Header */}
          <div className="categories-header-row">
            <div className="categories-header-left">
              <span className="section-script-subtitle">Plan your trip</span>
              <h2 className="section-main-heading">
                Let us plan you a<br />perfect Holiday
              </h2>
            </div>
            <div className="categories-header-right">
              <Link to="/destinations" className="triply-btn-outline">
                <span>Browse Categories</span>
                <FiArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Arch Shape Cards Grid */}
          <div className="arch-cards-grid">
            {categories.map((cat) => (
              <Link to={cat.link} key={cat.id} className="arch-card">
                <div className="arch-card__image-wrap">
                  <img src={cat.img} alt={cat.title} className="arch-card__img" />
                  <div className="arch-card__icon-badge">
                    {cat.icon}
                  </div>
                </div>

                <div className="arch-card__info">
                  <h3 className="arch-card__title">{cat.title}</h3>
                  <div className="arch-card__meta">
                    <span className="arch-card__count">{cat.count}</span>
                    <span className="arch-card__dot">-</span>
                    <span className="arch-card__price">From <strong>{cat.price}</strong></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. INSTITUTIONAL TRUST & VENDOR COMPLIANCE STRIP             */}
      {/* ============================================================ */}
      <section className="triply-trust-strip">
        <div className="container">
          <div className="trust-strip-inner">
            <div className="trust-info">
              <div className="trust-badge">
                <FiShield className="trust-icon" />
                <span>OFFICIAL ETHIOPIAN VENDOR ENTITY</span>
              </div>
              <h3 className="trust-heading">Engineered for Institutional Reliability</h3>
              <p className="trust-text">
                Fully compliant under Business License <strong>14/666/128419/2005</strong>, VAT <strong>80692</strong>, 
                and verified SIGTAS tax status. We provide standardized 30-day post-paid credit facilities, 
                logbook tracking, and dedicated operations coordinators in Addis Ababa, Semera, and Mekelle.
              </p>
            </div>
            <div className="trust-actions">
              <Link to="/contact" className="triply-btn-orange">
                <span>Plan Your Journey</span>
                <FiArrowRight size={16} />
              </Link>
              <Link to="/governance" className="trust-link-secondary">
                <span>Governance Policies</span>
                <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. MAKE IT MEMORABLE / WE CREATE THE TRIPS YOU LOVE          */}
      {/* ============================================================ */}
      <section className="triply-section triply-features-section">
        <div className="container">
          <div className="features-layout">
            {/* Left Traveler Composite Graphic */}
            <div className="features-graphic-side">
              <div className="traveler-composite-card">
                <div className="watercolor-backdrop"></div>
                <div className="landmarks-sketch">
                  <span className="sketch-bird bird-1">✦</span>
                  <span className="sketch-bird bird-2">✦</span>
                  <span className="sketch-plane">✈</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=85" 
                  alt="Joyful traveler sitting on suitcase" 
                  className="traveler-photo"
                />
                <div className="floating-badge-award">
                  <FiAward size={20} className="award-icon" />
                  <div>
                    <strong>12+ Years</strong>
                    <span>Ethiopian Tour Excellence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="features-content-side">
              <span className="section-script-subtitle">Make it memorable</span>
              <h2 className="section-main-heading">
                We create the<br />trips you love
              </h2>
              <p className="features-desc">
                With 12+ years of in-depth logistical mastery and local field presence across Ethiopia, 
                we combine luxurious traveler comfort with battle-tested expedition and fleet safety.
              </p>

              {/* Feature Cards List */}
              <div className="feature-cards-list">
                {features.map((f) => (
                  <div key={f.id} className="feature-card-item">
                    <div className="feature-icon-circle">
                      <FaCompass size={20} />
                    </div>
                    <div className="feature-card-text">
                      <h4 className="feature-card-title">{f.title}</h4>
                      <p className="feature-card-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. FEATURED PACKAGES                                         */}
      {/* ============================================================ */}
      <section className="triply-section triply-packages-section">
        <div className="container">
          <div className="categories-header-row">
            <div className="categories-header-left">
              <span className="section-script-subtitle">Popular Packages</span>
              <h2 className="section-main-heading">Featured Guided Expeditions</h2>
            </div>
            <div className="categories-header-right">
              <Link to="/tours" className="triply-btn-outline">
                <span>View All Tours</span>
                <FiArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="packages-grid">
            {featuredTours.map((t) => (
              <div key={t.id} className="package-card">
                <div className="package-card__img-box">
                  <img src={t.img} alt={t.title} className="package-card__img" />
                  <span className="package-badge">{t.badge}</span>
                </div>

                <div className="package-card__body">
                  <div className="package-meta">
                    <span className="package-location">
                      <FiMapPin size={14} className="icon-orange" />
                      {t.location}
                    </span>
                    <span className="package-rating">
                      <FiStar size={14} className="icon-gold" />
                      <strong>{t.rating}</strong> ({t.reviews})
                    </span>
                  </div>

                  <h3 className="package-title">{t.title}</h3>

                  <div className="package-footer">
                    <div className="package-duration">
                      <FiClock size={14} />
                      <span>{t.duration}</span>
                    </div>
                    <div className="package-price">
                      <span>From</span>
                      <strong>{t.price}</strong>
                    </div>
                  </div>

                  <Link to="/contact" className="btn-book-package">
                    <span>Reserve Package</span>
                    <FiArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. NEWSLETTER / BOOKING BANNER                              */}
      {/* ============================================================ */}
      <section className="triply-cta-banner">
        <div className="container">
          <div className="triply-cta-card">
            <div className="cta-content">
              <span className="section-script-subtitle" style={{ color: '#FDBA74' }}>Begin Your Journey</span>
              <h2 className="cta-title">Ready for Your Next Great Adventure or Mission?</h2>
              <p className="cta-subtitle">
                Contact our local travel specialists or NGO logistics officers to structure your custom journey or fleet lease.
              </p>
            </div>
            <div className="cta-action">
              <Link to="/contact" className="triply-btn-orange" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                <span>Connect With Our Team</span>
                <FiArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
