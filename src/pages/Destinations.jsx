import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'
import { 
  FiArrowRight, 
  FiMapPin, 
  FiCalendar, 
  FiSun, 
  FiAward, 
  FiCompass,
  FiCheckCircle
} from 'react-icons/fi'
import { 
  FaLandmark, 
  FaPersonHiking, 
  FaVolcano, 
  FaWater, 
  FaPaw,
  FaMosque
} from 'react-icons/fa6'
import './Destinations.css'

const destinationsData = [
  {
    id: 'lalibela',
    name: 'Lalibela',
    region: 'Amhara Highlands',
    altitude: '2,600m',
    bestTime: 'Oct – Mar',
    unesco: true,
    tag: 'Historical Sanctuary',
    img: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&q=80',
    icon: <FaLandmark />,
    desc: 'Eleven monolithic medieval churches carved directly into volcanic rock in the 12th century, considered the 8th Wonder of the World.',
    highlights: ['Church of Saint George (Bet Giyorgis)', 'Bete Medhane Alem (World\'s largest monolithic church)', 'Ancient liturgical ceremonies', 'Chanted subterranean passages']
  },
  {
    id: 'simien',
    name: 'Simien Mountains',
    region: 'North Gondar',
    altitude: 'Up to 4,550m',
    bestTime: 'Sep – Apr',
    unesco: true,
    tag: 'Alpine Wilderness',
    img: 'https://images.unsplash.com/photo-1598430772299-8a97f3d9d1d0?w=800&q=80',
    icon: <FaPersonHiking />,
    desc: 'Massive jagged pinnacles and precipitous 1,500m cliffs crowned by Ras Dashen, providing sanctuary for thousands of endemic Gelada baboons.',
    highlights: ['Dramatic escarpment panoramas', 'Gelada baboon social troops', 'Walia ibex viewing', 'Jinbar waterfall drop']
  },
  {
    id: 'danakil',
    name: 'Danakil Depression',
    region: 'Afar Triangle',
    altitude: '-125m below sea level',
    bestTime: 'Nov – Feb',
    unesco: false,
    tag: 'Extreme Adventure',
    img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80',
    icon: <FaVolcano />,
    desc: 'One of Earth’s most surreal geological cauldrons — glowing bubbling lava lakes, vivid neon sulfur springs, and vast blinding salt desert plains.',
    highlights: ['Erta Ale active lava lake', 'Dallol hydrothermal sulfuric terraces', 'Lake Karum endless salt flats', 'Camel salt trade caravans']
  },
  {
    id: 'omo',
    name: 'Omo Valley',
    region: 'Southern Nations',
    altitude: '500m',
    bestTime: 'Aug – Oct / Dec – Mar',
    unesco: true,
    tag: 'Cultural Heritage',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    icon: <FiCompass />,
    desc: 'A cultural crossroads sheltering indigenous pastoralist communities whose body art, rituals, and ceremonies have endured untouched for millennia.',
    highlights: ['Mursi lip-plate traditions', 'Hamer ceremonial bull-jumping', 'Karo body-chalk ornamentation', 'Vibrant tribal barter markets']
  },
  {
    id: 'bale',
    name: 'Bale Mountains',
    region: 'Oromia',
    altitude: '3,000m – 4,377m',
    bestTime: 'Nov – Mar',
    unesco: true,
    tag: 'Wildlife Habitat',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    icon: <FaPaw />,
    desc: 'Africa’s largest Afro-alpine ecosystem and glacial lakes, home to over half of the world’s surviving wild population of Ethiopian wolves.',
    highlights: ['Sanetti Plateau wolf sightings', 'Mountain Nyala in Dinsho', 'Enchanted Harenna Forest canopy', 'Africa\'s highest all-weather road']
  },
  {
    id: 'harar',
    name: 'Harar Jugol',
    region: 'Eastern Harari',
    altitude: '1,885m',
    bestTime: 'Year-Round',
    unesco: true,
    tag: 'Walled Islamic City',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    icon: <FaMosque />,
    desc: 'The fourth-holiest city in Islam, enclosed by 16th-century historic stone walls, labyrinthine alleyways, and the famous nightly wild hyena feeding.',
    highlights: ['82 historic mosques and shrines', 'Traditional Harari colorful houses', 'Nighttime hyena-feeding ritual', 'Aromatic spice & coffee markets']
  }
]

export default function Destinations() {
  const [destinationsList, setDestinationsList] = useState(destinationsData)
  const [selectedDest, setSelectedDest] = useState(null)

  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(collection(db, 'destinations'), (snapshot) => {
        if (!snapshot.empty) {
          const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          setDestinationsList(docs)
        }
      }, (error) => {
        console.warn('Firestore live listener warning, using fallback destinations:', error);
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn('Firebase error:', e);
    }
  }, []);

  return (
    <div className="triply-page destinations-page">
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80" 
            alt="Scenic Ethiopian landscapes" 
            className="page-hero__img"
          />
          <div className="page-hero__overlay"></div>
        </div>

        <div className="container page-hero__container">
          <div className="page-hero__breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span>Destinations</span>
          </div>

          <h1 className="page-hero__title">
            Wonders of <span className="script-accent">ancient</span> Ethiopia
          </h1>
          <p className="page-hero__subtitle">
            From volcanic hydrothermal wonders and alpine mountain escarpments to medieval rock sanctuaries. 
            Discover the most captivating destinations across the Cradle of Civilization.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. DESTINATIONS GRID WITH ARCH CARDS                         */}
      {/* ============================================================ */}
      <section className="dest-grid-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-script-subtitle">Explore by Region</span>
            <h2 className="section-main-heading">Iconic Ethiopian Destinations</h2>
            <p className="section-lead-text">
              Each destination offers unique ecological biodiversity, timeless architecture, and rich traditions.
            </p>
          </div>

          <div className="dest-cards-grid">
            {destinationsList.map((dest) => (
              <div key={dest.id} className="dest-arch-card">
                <div className="dest-arch-img-wrap">
                  <img src={dest.img} alt={dest.name} className="dest-arch-img" />
                  {dest.unesco && (
                    <span className="unesco-badge">
                      <FiAward size={12} />
                      UNESCO
                    </span>
                  )}
                  <div className="dest-icon-badge">
                    {dest.icon}
                  </div>
                </div>

                <div className="dest-card-content">
                  <span className="dest-tag">{dest.tag}</span>
                  <h3 className="dest-name">{dest.name}</h3>
                  <p className="dest-desc">{dest.desc}</p>

                  <div className="dest-meta-strip">
                    <div className="d-meta-item">
                      <FiMapPin size={13} className="icon-orange" />
                      <span>{dest.region}</span>
                    </div>
                    <div className="d-meta-item">
                      <FiSun size={13} className="icon-gold" />
                      <span>Best: {dest.bestTime}</span>
                    </div>
                  </div>

                  <div className="dest-highlights-box">
                    <strong className="hl-title">Must-Experience Highlights:</strong>
                    <ul className="hl-list">
                      {(Array.isArray(dest.highlights) ? dest.highlights : []).slice(0, 3).map((h, idx) => (
                        <li key={idx}>
                          <FiCheckCircle size={13} className="icon-green" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="dest-card-footer">
                    <Link 
                      to={`/tours`}
                      className="btn-explore-tours"
                    >
                      <span>Explore Tours in {dest.name}</span>
                      <FiArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TAILOR-MADE ADVICE CALLOUT                                */}
      {/* ============================================================ */}
      <section className="dest-callout-section">
        <div className="container">
          <div className="dest-callout-card">
            <div>
              <span className="section-script-subtitle" style={{ color: '#FDBA74' }}>Personalized Itineraries</span>
              <h3 className="callout-heading">Can't Decide Which Region to Visit?</h3>
              <p className="callout-text">
                Our local travel designers can combine the Simien mountains, Lalibela rock churches, and 
                Omo Valley tribal cultures into one seamless private journey.
              </p>
            </div>
            <Link to="/contact" className="triply-btn-orange" style={{ padding: '14px 32px' }}>
              <span>Consult a Local Specialist</span>
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
