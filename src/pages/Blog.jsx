import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiTag } from 'react-icons/fi'
import './Blog.css'

const posts = [
  {
    id: 1, category: 'Travel Tips', date: 'September 5, 2026',
    title: 'Ethiopia Travel Tips & Essential Facts for First-Time Visitors',
    excerpt: 'From visa requirements to the best time to visit, currency, health precautions, and cultural etiquette — everything a first-time traveller needs to know before arriving in Ethiopia.',
    img: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=700&q=80',
    readTime: '6 min read',
  },
  {
    id: 2, category: 'Destinations', date: 'August 18, 2026',
    title: 'Lalibela: The Jerusalem of Africa You Must See to Believe',
    excerpt: 'Carved from solid rock in the 12th century, Lalibela\'s 11 monolithic churches remain an active pilgrimage site. We explore what makes this UNESCO site so extraordinary.',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80',
    readTime: '8 min read',
  },
  {
    id: 3, category: 'Adventure', date: 'July 30, 2026',
    title: "Inside the Danakil Depression: Earth's Most Extreme Landscape",
    excerpt: "We joined an expedition to the Danakil — one of the planet's hottest, lowest, and most geologically active places. Here's what it's really like to stand next to an open lava lake.",
    img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=700&q=80',
    readTime: '10 min read',
  },
  {
    id: 4, category: 'Culture', date: 'July 12, 2026',
    title: 'The Tribes of the Omo Valley: A Journey Into Living Traditions',
    excerpt: 'The Lower Omo Valley is home to some of the most culturally distinctive people on the planet. A respectful, immersive visit here is one of the most humbling experiences in travel.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80',
    readTime: '9 min read',
  },
  {
    id: 5, category: 'Festivals', date: 'June 20, 2026',
    title: "Timkat Festival: Ethiopia's Spectacular Epiphany Celebration",
    excerpt: 'Timkat is Ethiopia\'s most colourful religious celebration — a three-day explosion of faith, processions, music, and sacred ceremony that takes place every January across the country.',
    img: 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?w=700&q=80',
    readTime: '7 min read',
  },
  {
    id: 6, category: 'Wildlife', date: 'May 28, 2026',
    title: 'Tracking the Ethiopian Wolf: The World\'s Rarest Canid',
    excerpt: 'With fewer than 500 individuals left, the Ethiopian wolf is critically endangered. The Bale Mountains offer one of the best chances to see this remarkable creature in the wild.',
    img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=700&q=80',
    readTime: '5 min read',
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

export default function Blog() {
  useScrollReveal()
  const [featured, ...rest] = posts

  return (
    <div className="blog-page">
      <div className="page-banner">
        <div className="container">
          <span className="page-banner-label">Travel Stories</span>
          <h1 className="page-banner-title">From the Field</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Featured Post */}
          <div className="blog-featured reveal">
            <div className="blog-featured__img-wrap">
              <img src={featured.img} alt={featured.title} className="blog-featured__img" loading="lazy" />
              <span className="blog-cat-tag">{featured.category}</span>
            </div>
            <div className="blog-featured__content">
              <div className="blog-meta">
                <span><FiCalendar size={13} /> {featured.date}</span>
                <span>· {featured.readTime}</span>
              </div>
              <h2 className="blog-featured__title">{featured.title}</h2>
              <p className="blog-featured__excerpt">{featured.excerpt}</p>
              <Link to="#" className="btn btn-gold-outline">
                <span>Read Article</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {rest.map(p => (
              <Link to="#" key={p.id} className="blog-card reveal">
                <div className="blog-card__img-wrap">
                  <img src={p.img} alt={p.title} className="blog-card__img" loading="lazy" />
                  <span className="blog-cat-tag">{p.category}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-meta">
                    <span><FiCalendar size={12} /> {p.date}</span>
                    <span>· {p.readTime}</span>
                  </div>
                  <h3 className="blog-card__title">{p.title}</h3>
                  <p className="blog-card__excerpt">{p.excerpt}</p>
                  <span className="blog-card__cta">Read More <FiArrowRight size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
