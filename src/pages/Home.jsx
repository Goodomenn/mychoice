import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiStar, FiCompass, FiUsers, FiCamera, FiMap, FiMapPin } from 'react-icons/fi'
import './Home.css'

const stats = [
  { num: '3M+', label: 'Years of Human History' },
  { num: '9', label: 'UNESCO World Heritage Sites' },
  { num: '80+', label: 'Ethnic Groups & Languages' },
  { num: '500+', label: 'Happy Travelers Guided' },
]

const destinations = [
  {
    id: 1,
    name: 'Lalibela',
    tag: 'Historical',
    desc: 'Eleven medieval rock-hewn churches carved from a single stone, a UNESCO marvel and Ethiopia\'s holiest pilgrimage site.',
    img: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=600&q=80',
  },
  {
    id: 2,
    name: 'Simien Mountains',
    tag: 'Adventure',
    desc: 'Jagged peaks and 1,500m precipices — a UNESCO Natural Heritage refuge for endemic gelada baboons and Ethiopian wolves.',
    img: 'https://images.unsplash.com/photo-1598430772299-8a97f3d9d1d0?w=600&q=80',
  },
  {
    id: 3,
    name: 'Omo Valley Tribes',
    tag: 'Cultural',
    desc: 'Home to some of the world\'s last isolated tribes — vivid body painting, ancient rituals, and timeless traditions.',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
  },
  {
    id: 4,
    name: 'Danakil Depression',
    tag: 'Adventure',
    desc: 'One of earth\'s most alien landscapes — bubbling lava lakes, salt deserts, and sulfuric hot springs ablaze in color.',
    img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80',
  },
  {
    id: 5,
    name: 'Axum',
    tag: 'Historical',
    desc: 'Heart of ancient Ethiopian civilization, home of the Queen of Sheba and the revered Ark of the Covenant.',
    img: 'https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=600&q=80',
  },
  {
    id: 6,
    name: 'Bale Mountains',
    tag: 'Wildlife',
    desc: 'Africa\'s largest Afro-alpine habitat with the rare Ethiopian wolf, mountain nyala, and Africa\'s highest road.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
  },
]

const categories = [
  { icon: <FiCompass />, title: 'Historical Tours', desc: 'Walk through 3 million years of human civilization across Axum, Lalibela, and Gondar.', path: '/tours' },
  { icon: <FiUsers />, title: 'Cultural & Tribal', desc: 'Immerse yourself in the living traditions of the Omo Valley\'s incredible indigenous tribes.', path: '/tours' },
  { icon: <FiMap />, title: 'Adventure & Trek', desc: 'Conquer the peaks of the Simien Mountains or venture into the volcanic Danakil Depression.', path: '/tours' },
  { icon: <FiCamera />, title: 'Photographic Tours', desc: 'Capture Ethiopia\'s stunning landscapes, ancient churches, and vibrant cultures through your lens.', path: '/tours' },
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    country: 'United Kingdom',
    rating: 5,
    text: 'MyChoiceEthiopia exceeded every expectation. The Lalibela sunrise was the most spiritual experience of my life. Our guide\'s knowledge was unparalleled.',
  },
  {
    id: 2,
    name: 'David Fontaine',
    country: 'France',
    rating: 5,
    text: 'The Omo Valley cultural tour was extraordinary. We felt welcomed, never like tourists. Absolutely premium from start to finish.',
  },
  {
    id: 3,
    name: 'Priya Nair',
    country: 'United States',
    rating: 5,
    text: 'Danakil Depression was terrifying and magical at the same time. Every detail was perfectly organized. Ethiopia changed how I see the world.',
  },
]

// Scroll reveal hook
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  useScrollReveal()

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__grain" />
        <div className="container hero__content">
          <div className="hero__badge badge reveal">
            <FiStar size={11} />
            Award-Winning Local Tour Operator
          </div>
          <h1 className="hero__title reveal">
            Discover the<br />
            <em>Birthplace of</em><br />
            Humanity
          </h1>
          <p className="hero__subtitle reveal">
            Ethiopia — ancient, wild, and breathtaking. Let MyChoiceEthiopia craft your once-in-a-lifetime journey through one of Africa's most extraordinary destinations.
          </p>
          <div className="hero__actions reveal">
            <Link to="/tours" className="btn btn-primary">
              <span>Explore Tours</span>
              <FiArrowRight />
            </Link>
            <Link to="/destinations" className="btn btn-outline">
              <span>Our Destinations</span>
            </Link>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span />
          Scroll to discover
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {stats.map((s, i) => (
            <div key={i} className="stats-bar__item">
              <span className="stats-bar__num">{s.num}</span>
              <span className="stats-bar__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="section home-intro">
        <div className="container home-intro__grid">
          <div className="home-intro__image reveal">
            <img
              src="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&q=80"
              alt="Lalibela Rock Churches"
            />
            <div className="home-intro__image-badge">
              <FiMapPin size={16} />
              <span>Lalibela, Ethiopia</span>
            </div>
          </div>
          <div className="home-intro__text">
            <span className="section-label reveal">About Ethiopia</span>
            <span className="gold-divider reveal" />
            <h2 className="section-title reveal">
              A Land Beyond Imagination
            </h2>
            <p className="reveal" style={{ color: 'var(--color-text-dim)', marginBottom: '20px', lineHeight: '1.9' }}>
              Located in the Horn of Africa, Ethiopia is a rugged, landlocked country bisected by the Great Rift Valley. With archaeological finds dating back more than <strong style={{ color: 'var(--color-gold)' }}>3 million years</strong>, it is a cradle of ancient civilization.
            </p>
            <p className="reveal" style={{ color: 'var(--color-text-dim)', marginBottom: '36px', lineHeight: '1.9' }}>
              The birthplace of humanity — home to unique tribes, ancient kingdoms, abundant wildlife, and landscapes that seem from another world. Ethiopia's vast size, twice that of Texas, means every trip reveals something new.
            </p>
            <Link to="/destinations" className="btn btn-gold-outline reveal">
              <span>Explore Destinations</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <section className="section home-destinations">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">Top Destinations</span>
            <span className="gold-divider centered" />
            <h2 className="section-title reveal">Ethiopia's Finest Wonders</h2>
            <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>
              From ancient rock churches to volcanic landscapes — every destination tells a story millions of years in the making.
            </p>
          </div>
          <div className="dest-grid">
            {destinations.map((d, i) => (
              <Link to="/destinations" key={d.id} className={`dest-card reveal ${i === 0 ? 'dest-card--large' : ''}`}>
                <img src={d.img} alt={d.name} className="dest-card__img" loading="lazy" />
                <div className="dest-card__overlay" />
                <div className="dest-card__content">
                  <span className="dest-card__tag">{d.tag}</span>
                  <h3 className="dest-card__title">{d.name}</h3>
                  <p className="dest-card__desc">{d.desc}</p>
                  <span className="dest-card__cta">
                    Explore <FiArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOUR CATEGORIES ===== */}
      <section className="section home-categories">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Travel</span>
            <span className="gold-divider" />
            <h2 className="section-title reveal">Curated for Every Traveler</h2>
            <p className="section-subtitle reveal">
              Whether you seek ancient history, tribal culture, wild adventure, or photographic magic — we have the perfect journey for you.
            </p>
          </div>
          <div className="cat-grid">
            {categories.map((c, i) => (
              <Link to={c.path} key={i} className="cat-card reveal">
                <div className="cat-card__icon">{c.icon}</div>
                <h3 className="cat-card__title">{c.title}</h3>
                <p className="cat-card__desc">{c.desc}</p>
                <span className="cat-card__arrow"><FiArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section home-why">
        <div className="container home-why__grid">
          <div className="home-why__text">
            <span className="section-label">Why MyChoiceEthiopia</span>
            <span className="gold-divider" />
            <h2 className="section-title reveal">The Premium Ethiopia<br />Experience</h2>
            <div className="why-list">
              {[
                { title: 'Local Expertise', desc: 'Born and raised in Ethiopia — our guides carry knowledge no foreign operator can match.' },
                { title: 'Tailored Itineraries', desc: 'Every tour is custom-built for you. No cookie-cutter packages, ever.' },
                { title: 'Small Groups Only', desc: 'Maximum 8 travelers per group for an intimate, immersive experience.' },
                { title: 'Fully Supported', desc: '24/7 in-country support, premium transport, and handpicked accommodations.' },
              ].map((w, i) => (
                <div key={i} className="why-item reveal">
                  <span className="why-item__num">0{i + 1}</span>
                  <div>
                    <h4 className="why-item__title">{w.title}</h4>
                    <p className="why-item__desc">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="home-why__images reveal">
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80" alt="Ethiopia Safari" className="why-img why-img--main" />
            <img src="https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=400&q=80" alt="Ethiopia Culture" className="why-img why-img--small" />
            <div className="why-award">
              <FiStar className="why-award__star" />
              <span className="why-award__text">National Geographic<br /><strong>Partner Operator</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section home-testimonials">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">Traveler Stories</span>
            <span className="gold-divider centered" />
            <h2 className="section-title reveal">Voices from the Journey</h2>
          </div>
          <div className="testi-grid">
            {testimonials.map(t => (
              <div key={t.id} className="testi-card reveal">
                <div className="testi-card__stars">
                  {[...Array(t.rating)].map((_, i) => <FiStar key={i} className="testi-card__star" />)}
                </div>
                <p className="testi-card__text">"{t.text}"</p>
                <div className="testi-card__author">
                  <div className="testi-card__avatar">{t.name[0]}</div>
                  <div>
                    <span className="testi-card__name">{t.name}</span>
                    <span className="testi-card__country">{t.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="home-cta">
        <div className="home-cta__bg" />
        <div className="home-cta__overlay" />
        <div className="container home-cta__content">
          <span className="section-label reveal">Start Your Journey</span>
          <h2 className="home-cta__title reveal">
            Ready to Experience<br />the Real Ethiopia?
          </h2>
          <p className="home-cta__sub reveal">
            Speak with one of our local travel experts and let us design your dream Ethiopian adventure — completely tailored to you.
          </p>
          <div className="home-cta__actions reveal">
            <Link to="/contact" className="btn btn-primary">
              <span>Plan My Trip</span>
              <FiArrowRight />
            </Link>
            <Link to="/tours" className="btn btn-outline">
              <span>Browse All Tours</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
