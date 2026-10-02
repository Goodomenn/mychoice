import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'
import { 
  FiArrowRight, 
  FiClock, 
  FiUsers, 
  FiStar, 
  FiFilter, 
  FiSearch, 
  FiMapPin, 
  FiCheckCircle, 
  FiX,
  FiCalendar
} from 'react-icons/fi'
import './Tours.css'

const categories = ['All', 'Historical', 'Cultural', 'Adventure', 'Wildlife', 'Combination']

const toursData = [
  {
    id: 1,
    category: 'Historical',
    name: 'Northern Ethiopia Historic Circuit',
    duration: '8 Days / 7 Nights',
    groupSize: 'Max 8',
    difficulty: 'Moderate',
    price: '1,850 Birr',
    rating: 4.9,
    reviews: 54,
    badge: 'Best Seller',
    location: 'Lalibela, Gondar, Axum, Bahir Dar',
    img: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&q=80',
    highlights: ['Lalibela Rock-Hewn Churches', 'Fasil Ghebbi Royal Castles', 'Axum Obelisks & Ark', 'Lake Tana Monasteries'],
    desc: 'The definitive Ethiopian journey through 3,000 years of civilization, from medieval rock churches to royal mountain castles.'
  },
  {
    id: 2,
    category: 'Cultural',
    name: 'Omo Valley Tribal Cultural Immersion',
    duration: '10 Days / 9 Nights',
    groupSize: 'Max 6',
    difficulty: 'Comfortable',
    price: '2,200 Birr',
    rating: 5.0,
    reviews: 38,
    badge: 'Exclusive',
    location: 'Lower Omo Valley, Jinka, Turmi',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    highlights: ['Mursi Tribe Ceremonies', 'Hamer Bull-Jumping Ritual', 'Karo Body-Painting', 'Key Afer Weekly Market'],
    desc: 'An intimate, respectful expedition connecting with the indigenous tribes of the Omo Valley in one of Earth’s last living traditions.'
  },
  {
    id: 3,
    category: 'Adventure',
    name: 'Danakil Depression & Erta Ale Volcano',
    duration: '4 Days / 3 Nights',
    groupSize: 'Max 8',
    difficulty: 'Challenging',
    price: '980 Birr',
    rating: 4.9,
    reviews: 62,
    badge: 'Top Expedition',
    location: 'Afar Depression, Dallol, Erta Ale',
    img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80',
    highlights: ['Active Lava Lake at Night', 'Dallol Sulfur Geysers', 'Lake Karum Salt Flats', 'Camel Caravan Trails'],
    desc: 'Descend to Africa’s lowest depression to witness bubbling volcanic lava lakes, rainbow mineral hot springs, and ancient salt mining.'
  },
  {
    id: 4,
    category: 'Adventure',
    name: 'Simien Mountains Roof of Africa Trek',
    duration: '7 Days / 6 Nights',
    groupSize: 'Max 10',
    difficulty: 'Moderate–Hard',
    price: '1,350 Birr',
    rating: 5.0,
    reviews: 44,
    badge: 'Popular',
    location: 'Simien Mountains National Park, Debark',
    img: 'https://images.unsplash.com/photo-1598430772299-8a97f3d9d1d0?w=800&q=80',
    highlights: ['Ras Dashen (4,550m) Ascent', 'Gelada Baboon Troops', 'Jinbar Waterfall Gorge', 'Sankaber & Chenek Camps'],
    desc: 'Trek along dramatic jagged escarpments dropping 1,500m into deep valleys, observing endemic wildlife found nowhere else on Earth.'
  },
  {
    id: 5,
    category: 'Wildlife',
    name: 'Bale Mountains Afro-Alpine Safari',
    duration: '5 Days / 4 Nights',
    groupSize: 'Max 8',
    difficulty: 'Comfortable',
    price: '1,100 Birr',
    rating: 4.8,
    reviews: 29,
    badge: 'Wildlife',
    location: 'Bale Mountains, Sanetti Plateau, Dinsho',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    highlights: ['Rare Ethiopian Wolf Tracking', 'Mountain Nyala Herds', 'Sanetti High Plateau', 'Lush Harenna Cloud Forest'],
    desc: 'Explore Africa’s largest Afro-alpine ecosystem and search for the world’s rarest canid across misty volcanic plateau landscapes.'
  },
  {
    id: 6,
    category: 'Combination',
    name: 'Best of Ethiopia Grand Overland Circuit',
    duration: '14 Days / 13 Nights',
    groupSize: 'Max 8',
    difficulty: 'Moderate',
    price: '3,450 Birr',
    rating: 5.0,
    reviews: 21,
    badge: 'Grand Tour',
    location: 'Addis Ababa, Lalibela, Gondar, Simien, Omo',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
    highlights: ['All UNESCO Sites Included', 'Private Domestic Flights', 'Luxury Lodges & Glamping', 'Personal Guide & Chauffeur'],
    desc: 'The ultimate luxury itinerary combining the mystical churches of the north with the vibrant indigenous tribal cultures of the south.'
  }
]

export default function Tours() {
  const [toursList, setToursList] = useState(toursData)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTourModal, setActiveTourModal] = useState(null)

  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(collection(db, 'tours'), (snapshot) => {
        if (!snapshot.empty) {
          const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          setToursList(docs)
        }
      }, (error) => {
        console.warn('Firestore live listener warning, using fallback tours:', error);
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn('Firebase error:', e);
    }
  }, []);

  const filteredTours = useMemo(() => {
    return toursList.filter(tour => {
      const matchCat = selectedCategory === 'All' || tour.category === selectedCategory
      const matchSearch = (tour.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (tour.location || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (tour.desc || '').toLowerCase().includes(searchQuery.toLowerCase())
      return matchCat && matchSearch
    })
  }, [toursList, selectedCategory, searchQuery])

  return (
    <div className="triply-page tours-page">
      {/* ============================================================ */}
      {/* 1. PAGE HERO BANNER                                          */}
      {/* ============================================================ */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80" 
            alt="Mountain trekking expeditions" 
            className="page-hero__img"
          />
          <div className="page-hero__overlay"></div>
        </div>

        <div className="container page-hero__container">
          <div className="page-hero__breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span>Tours</span>
          </div>

          <h1 className="page-hero__title">
            Extraordinary <span className="script-accent">guided</span> Expeditions
          </h1>
          <p className="page-hero__subtitle">
            Handcrafted luxury itineraries led by award-winning local experts. 
            From mystical rock-hewn sanctuaries to volcanic deserts and alpine peaks.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FILTER & SEARCH TOOLBAR                                    */}
      {/* ============================================================ */}
      <section className="tours-toolbar-section">
        <div className="container">
          <div className="tours-toolbar-card">
            {/* Category Pills */}
            <div className="tours-category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="tours-search-box">
              <FiSearch size={18} className="search-icon" />
              <input 
                type="text"
                placeholder="Search by tour name, region, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery('')}>
                  <FiX size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TOURS GRID                                                */}
      {/* ============================================================ */}
      <section className="tours-grid-section">
        <div className="container">
          <div className="tours-results-count">
            <span>Showing <strong>{filteredTours.length}</strong> premier travel packages</span>
          </div>

          <div className="tours-card-grid">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="tour-card">
                {/* Image Box */}
                <div className="tour-card__img-box">
                  <img src={tour.img} alt={tour.name} className="tour-card__img" />
                  <span className="tour-badge">{tour.badge}</span>
                  <div className="tour-card__price-tag">
                    <span>From</span>
                    <strong>{tour.price}</strong>
                  </div>
                </div>

                {/* Card Body */}
                <div className="tour-card__body">
                  <div className="tour-card__meta">
                    <span className="meta-loc">
                      <FiMapPin size={14} className="icon-orange" />
                      {tour.location.split(',')[0]}
                    </span>
                    <span className="meta-rating">
                      <FiStar size={14} className="icon-gold" />
                      <strong>{tour.rating}</strong> ({tour.reviews})
                    </span>
                  </div>

                  <h3 className="tour-card__title">{tour.name}</h3>
                  <p className="tour-card__desc">{tour.desc}</p>

                  <div className="tour-card__specs">
                    <div className="spec-item">
                      <FiClock size={14} className="icon-muted" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="spec-item">
                      <FiUsers size={14} className="icon-muted" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights tags */}
                  <div className="tour-card__highlights">
                    {tour.highlights.slice(0, 3).map((h, i) => (
                      <span key={i} className="highlight-tag">
                        <FiCheckCircle size={12} className="tag-check" />
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="tour-card__footer">
                    <button 
                      className="btn-view-details"
                      onClick={() => setActiveTourModal(tour)}
                    >
                      <span>View Itinerary</span>
                    </button>
                    <Link 
                      to={`/contact?tour=${encodeURIComponent(tour.name)}`}
                      className="btn-reserve-tour"
                    >
                      <span>Book Now</span>
                      <FiArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="tours-empty-state">
              <p>No tours match your search criteria. Try selecting another category or clearing your query.</p>
              <button 
                className="triply-btn-orange"
                onClick={() => { setSelectedCategory('All'); setSearchQuery('') }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TOUR DETAILS MODAL                                        */}
      {/* ============================================================ */}
      {activeTourModal && (
        <div className="modal-overlay" onClick={() => setActiveTourModal(null)}>
          <div className="tour-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="tour-modal__header">
              <div>
                <span className="modal-badge">{activeTourModal.category.toUpperCase()}</span>
                <h2 className="modal-title">{activeTourModal.name}</h2>
                <span className="modal-loc">{activeTourModal.location}</span>
              </div>
              <button 
                className="modal-close-btn"
                onClick={() => setActiveTourModal(null)}
                aria-label="Close"
              >
                <FiX size={22} />
              </button>
            </div>

            <div className="tour-modal__body">
              <img src={activeTourModal.img} alt={activeTourModal.name} className="modal-img" />

              <div className="modal-specs-strip">
                <div className="m-spec">
                  <FiClock size={16} />
                  <span>{activeTourModal.duration}</span>
                </div>
                <div className="m-spec">
                  <FiUsers size={16} />
                  <span>{activeTourModal.groupSize}</span>
                </div>
                <div className="m-spec">
                  <FiStar size={16} className="icon-gold" />
                  <span>{activeTourModal.rating} ({activeTourModal.reviews} reviews)</span>
                </div>
                <div className="m-spec">
                  <span>Price: <strong>{activeTourModal.price}</strong></span>
                </div>
              </div>

              <p className="modal-desc">{activeTourModal.desc}</p>

              <h4 className="modal-section-h">Tour Highlights & Included Experiences:</h4>
              <ul className="modal-highlights-list">
                {activeTourModal.highlights.map((item, idx) => (
                  <li key={idx}>
                    <FiCheckCircle size={16} className="icon-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tour-modal__footer">
              <button className="triply-btn-outline" onClick={() => setActiveTourModal(null)}>
                Close
              </button>
              <Link 
                to={`/contact?tour=${encodeURIComponent(activeTourModal.name)}`}
                className="triply-btn-orange"
                onClick={() => setActiveTourModal(null)}
              >
                <span>Reserve This Expedition</span>
                <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
