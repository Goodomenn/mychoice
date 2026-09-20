import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin, FiClock } from 'react-icons/fi'
import './Destinations.css'

const destinations = [
  {
    id: 1,
    name: 'Lalibela',
    region: 'Northern Ethiopia',
    tag: 'Historical · UNESCO',
    access: '45-min flight from Addis Ababa',
    img: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=900&q=80',
    desc: 'Once the medieval capital of Ethiopia, Lalibela is a UNESCO World Heritage Site and the second holiest site of Ethiopian Christianity after Axum. Lalibela is renowned for its eleven churches carved entirely from a single rock, dating to the 12th–13th centuries.',
    highlights: ['11 Rock-Hewn Churches', 'UNESCO World Heritage', 'Major Pilgrimage Site', 'Living Medieval Architecture'],
  },
  {
    id: 2,
    name: 'Danakil Depression & Erta Ale',
    region: 'Afar Region',
    tag: 'Adventure · Geology',
    access: '2-day expedition from Mekelle',
    img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=900&q=80',
    desc: 'The Erta Ale Volcano is a magical sight, especially when its lava lake glows and bubbles within the crater. The geological activity creates unique landscapes featuring vast salt deserts, hydrothermal lakes, and hot springs with striking yellow, green, and orange mineral deposits.',
    highlights: ['Active Lava Lake', 'Salt Flat Desert', 'Colorful Hot Springs', "Earth's Lowest Land Point"],
  },
  {
    id: 3,
    name: 'Simien Mountains',
    region: 'Amhara Region',
    tag: 'Adventure · UNESCO',
    access: '1-hr drive from Gondar',
    img: 'https://images.unsplash.com/photo-1598430772299-8a97f3d9d1d0?w=900&q=80',
    desc: 'Formed by massive erosion over millions of years, the Simien Mountains boast jagged peaks, deep valleys, and sharp precipices plunging up to 1,500 meters. A UNESCO Natural Heritage site and refuge for the endemic gelada baboon and the rare Ethiopian wolf.',
    highlights: ['UNESCO Natural Heritage', 'Multi-Day Trekking', 'Gelada Baboons', 'Ethiopian Wolf Sightings'],
  },
  {
    id: 4,
    name: 'Bale Mountains',
    region: 'Oromia Region',
    tag: 'Wildlife · Nature',
    access: 'Drive south from Addis Ababa',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=80',
    desc: "Renowned for its biodiversity, Bale Mountains National Park covers 2,400 km² and contains Africa's largest Afro-alpine habitat. Home to the rare Ethiopian wolf, mountain nyala, and Menelik's bushbuck. The highest road in Africa crosses the stunning Sanetti Plateau.",
    highlights: ['Rare Ethiopian Wolf', 'Africa\'s Largest Afro-Alpine', 'Sanetti Plateau', 'Mountain Nyala'],
  },
  {
    id: 5,
    name: 'Lake Tana & Monasteries',
    region: 'Amhara Region',
    tag: 'Cultural · Historical',
    access: 'From Bahir Dar by boat',
    img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=900&q=80',
    desc: "Ethiopia's largest lake and the source of the Blue Nile River, providing about 85% of the Nile's water. Famous for its historic monasteries and churches affiliated with the Ethiopian Orthodox Church, housing remarkable treasures and artistic medieval wall paintings.",
    highlights: ['Source of the Blue Nile', 'Island Monasteries', 'Medieval Murals', 'Excellent Birdwatching'],
  },
  {
    id: 6,
    name: 'Omo Valley Tribes',
    region: 'Southern Ethiopia',
    tag: 'Cultural · Tribal',
    access: 'Multi-day from Addis Ababa',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80',
    desc: "Home to some of the world's last isolated tribes — each with unique languages, customs, and ancient cultural practices closely tied to cattle herding. Their vibrant social life is expressed through ritual ceremonies, body scarification, intricate beadwork, and body painting.",
    highlights: ['Mursi & Hamer Tribes', 'Body Painting Traditions', 'Cattle Jumping Ceremony', 'Traditional Markets'],
  },
  {
    id: 7,
    name: 'Gondar',
    region: 'Amhara Region',
    tag: 'Historical · Architecture',
    access: 'Flight or drive from Addis',
    img: 'https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=900&q=80',
    desc: 'Once the capital of the Ethiopian Empire from 1632 to 1855, Gondar is famous for its royal castles and medieval churches within the royal enclosure. Often called the "Camelot of Africa," these castles are unique in sub-Saharan Africa and reflect a remarkable cultural heritage.',
    highlights: ['Royal Castle Complex', '"Camelot of Africa"', 'Debre Birhan Selassie Church', 'Imperial Enclosure'],
  },
  {
    id: 8,
    name: 'Axum',
    region: 'Tigray Region',
    tag: 'Historical · Ancient',
    access: 'Flight from Addis Ababa',
    img: 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?w=900&q=80',
    desc: "Heart of ancient Ethiopian civilization and one of the world's four great ancient kingdoms. Traditionally regarded as the birthplace of the Queen of Sheba. The Church of Our Lady Mary of Zion is believed to house the original Ark of the Covenant — the holiest relic in Christianity.",
    highlights: ['Ark of the Covenant', 'Ancient Obelisks (Stelae)', "Queen of Sheba's Bath", 'Royal Tombs & Museums'],
  },
  {
    id: 9,
    name: 'Bahir Dar',
    region: 'Amhara Region',
    tag: 'Nature · Culture',
    access: 'Short flight from Addis Ababa',
    img: 'https://images.unsplash.com/photo-1509660933844-6910e12765a0?w=900&q=80',
    desc: 'Located on the shores of Lake Tana, Bahir Dar is known for its scenic beauty and role as the gateway to the Blue Nile Falls — located just 30 km away. The spectacular falls plunge into deep gorges on their journey to Egypt, earning the name "Smoke of Fire."',
    highlights: ['Blue Nile Falls', 'Lake Tana Gateway', 'Scenic Tree-Lined Boulevards', 'Boat Trips to Monasteries'],
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

export default function Destinations() {
  useScrollReveal()
  return (
    <div className="destinations-page">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="page-banner-label">Explore Ethiopia</span>
          <h1 className="page-banner-title">Our Destinations</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container dest-intro">
          <p className="dest-intro__text reveal">
            Ethiopia is the birthplace of humanity and home to unique tribes, ancient civilizations, abundant wildlife, majestic mountains, and stunning landscapes. Visiting Ethiopia's top attractions requires time, but these destinations are highly popular on our itineraries and consistently receive outstanding reviews from travellers around the world.
          </p>
          <Link to="/contact" className="btn btn-primary reveal">
            <span>Plan My Journey</span>
            <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Destinations */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {destinations.map((d, i) => (
            <div key={d.id} className={`dest-detail reveal ${i % 2 !== 0 ? 'dest-detail--reverse' : ''}`}>
              <div className="dest-detail__image-wrap">
                <img src={d.img} alt={d.name} className="dest-detail__img" loading="lazy" />
                <div className="dest-detail__tag">{d.tag}</div>
              </div>
              <div className="dest-detail__content">
                <span className="section-label">{d.region}</span>
                <span className="gold-divider" />
                <h2 className="dest-detail__title">{d.name}</h2>
                <p className="dest-detail__desc">{d.desc}</p>
                <div className="dest-detail__access">
                  <FiMapPin size={14} />
                  <span>{d.access}</span>
                </div>
                <ul className="dest-detail__highlights">
                  {d.highlights.map(h => (
                    <li key={h}><span className="dest-highlight-dot" />{h}</li>
                  ))}
                </ul>
                <Link to="/tours" className="btn btn-gold-outline">
                  <span>See Tours to {d.name.split(' ')[0]}</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
