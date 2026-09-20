import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock, FiUsers, FiStar, FiFilter } from 'react-icons/fi'
import './Tours.css'

const filters = ['All', 'Historical', 'Cultural', 'Adventure', 'Wildlife', 'Combination']

const tours = [
  {
    id: 1,
    category: 'Historical',
    name: 'Northern Ethiopia Historic Circuit',
    duration: '8 Days',
    groupSize: 'Max 8',
    difficulty: 'Moderate',
    price: 'From $1,850',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=700&q=80',
    highlights: ['Lalibela Rock Churches', 'Gondar Castles', 'Axum Obelisks', 'Bahir Dar & Lake Tana'],
    desc: 'The classic Ethiopian journey — from the castles of Gondar to the rock churches of Lalibela and the ancient stelae of Axum.',
  },
  {
    id: 2,
    category: 'Cultural',
    name: 'Omo Valley Tribal Immersion',
    duration: '10 Days',
    groupSize: 'Max 6',
    difficulty: 'Comfortable',
    price: 'From $2,200',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80',
    highlights: ['Mursi Tribe Visit', 'Hamer Bull Jumping', 'Karo Tribal Art', 'Omo River Communities'],
    desc: 'Deeply immersive cultural experience with the indigenous tribes of the Lower Omo Valley — one of the most unique journeys on Earth.',
  },
  {
    id: 3,
    category: 'Adventure',
    name: 'Danakil Depression Expedition',
    duration: '4 Days',
    groupSize: 'Max 8',
    difficulty: 'Challenging',
    price: 'From $980',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=700&q=80',
    highlights: ['Erta Ale Volcano Lava Lake', 'Salt Flat Walk', 'Colorful Hot Springs', 'Afar Village Visit'],
    desc: 'Descend to the lowest point in Africa and witness the supernatural landscape of the Danakil — bubbling lava, salt deserts, and sulfuric springs.',
  },
  {
    id: 4,
    category: 'Adventure',
    name: 'Simien Mountains Trek',
    duration: '7 Days',
    groupSize: 'Max 10',
    difficulty: 'Moderate–Hard',
    price: 'From $1,350',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1598430772299-8a97f3d9d1d0?w=700&q=80',
    highlights: ['Ras Dashen Summit', 'Gelada Baboons', 'Ethiopian Wolf', 'Panoramic Escarpments'],
    desc: 'Trek through the dramatic peaks and deep gorges of the UNESCO-listed Simien Mountains, spotting endemic wildlife along the route.',
  },
  {
    id: 5,
    category: 'Wildlife',
    name: 'Bale Mountains Wildlife Safari',
    duration: '5 Days',
    groupSize: 'Max 8',
    difficulty: 'Comfortable',
    price: 'From $1,100',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80',
    highlights: ['Ethiopian Wolf Search', 'Mountain Nyala', 'Sanetti Plateau Drive', 'Harenna Forest'],
    desc: 'Search for the rare Ethiopian wolf across the Sanetti Plateau in one of Africa\'s most biodiverse national parks.',
  },
  {
    id: 6,
    category: 'Combination',
    name: 'Best of Ethiopia Grand Tour',
    duration: '15 Days',
    groupSize: 'Max 8',
    difficulty: 'Moderate',
    price: 'From $3,800',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1509660933844-6910e12765a0?w=700&q=80',
    highlights: ['Lalibela · Gondar · Axum', 'Simien Mountains Trek', 'Omo Valley Tribes', 'Addis Ababa & Surrounds'],
    desc: 'The ultimate Ethiopia experience. Two weeks covering the historic north, tribal south, adventurous highlands, and vibrant capital.',
  },
]

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Tours() {
  const [active, setActive] = useState('All')
  useScrollReveal()

  const filtered = active === 'All' ? tours : tours.filter(t => t.category === active)

  return (
    <div className="tours-page">
      <div className="page-banner">
        <div className="container">
          <span className="page-banner-label">Our Packages</span>
          <h1 className="page-banner-title">Tour Packages</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className="tours-filters reveal">
            <FiFilter size={15} />
            {filters.map(f => (
              <button
                key={f}
                className={`tours-filter-btn ${active === f ? 'tours-filter-btn--active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="tours-grid">
            {filtered.map(t => (
              <div key={t.id} className="tour-card reveal">
                <div className="tour-card__img-wrap">
                  <img src={t.img} alt={t.name} className="tour-card__img" loading="lazy" />
                  <span className="tour-card__cat">{t.category}</span>
                </div>
                <div className="tour-card__body">
                  <div className="tour-card__meta">
                    <span><FiClock size={13} /> {t.duration}</span>
                    <span><FiUsers size={13} /> {t.groupSize}</span>
                    <span className="tour-card__diff">{t.difficulty}</span>
                  </div>
                  <h3 className="tour-card__title">{t.name}</h3>
                  <p className="tour-card__desc">{t.desc}</p>
                  <ul className="tour-card__highlights">
                    {t.highlights.map(h => <li key={h}><span />  {h}</li>)}
                  </ul>
                  <div className="tour-card__footer">
                    <div>
                      <span className="tour-card__price-label">Starting</span>
                      <span className="tour-card__price">{t.price}</span>
                    </div>
                    <Link to="/contact" className="btn btn-primary tour-card__cta">
                      <span>Book Now</span>
                      <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
