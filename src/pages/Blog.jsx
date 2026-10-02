import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiArrowRight, 
  FiClock, 
  FiCalendar, 
  FiUser, 
  FiTag, 
  FiBookmark,
  FiSend
} from 'react-icons/fi'
import './Blog.css'

const categories = ['All Articles', 'Travel Guides', 'Culture & History', 'Adventure & Trekking', 'Photography Tips']

const articles = [
  {
    id: 1,
    category: 'Culture & History',
    title: 'A Spiritual Journey to Lalibela: Experiencing the Living Jerusalem of Africa',
    excerpt: 'Deep underground in the Ethiopian highlands, eleven 12th-century medieval churches carved from solid basalt rock continue to echo with chants from ancient Ge\'ez liturgy.',
    date: 'Sep 15, 2026',
    readTime: '6 min read',
    author: 'Yohannes Bekele',
    img: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&q=80',
    featured: true
  },
  {
    id: 2,
    category: 'Adventure & Trekking',
    title: 'Danakil Depression Expedition: Preparing for Earth’s Most Surreal Cauldron',
    excerpt: 'From active bubbling lava lakes at Erta Ale to blinding salt desert flats and neon-green sulfur hydrothermal springs, here is everything you need to know before visiting.',
    date: 'Aug 28, 2026',
    readTime: '8 min read',
    author: 'Sara Lindqvist',
    img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80',
    featured: false
  },
  {
    id: 3,
    category: 'Culture & History',
    title: 'The Living Traditions of the Lower Omo Valley: Etiquette & Ethical Tourism',
    excerpt: 'How to experience the timeless rituals and body ornamentation of the Mursi, Hamer, and Karo communities while fostering mutual dignity and cultural preservation.',
    date: 'Aug 14, 2026',
    readTime: '7 min read',
    author: 'Marcus Vance',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    featured: false
  },
  {
    id: 4,
    category: 'Adventure & Trekking',
    title: 'Trekking Among Thousands of Gelada Baboons in the Simien Mountains',
    excerpt: 'Ascending Ras Dashen across 1,500m precipices. Why the Simien Mountains National Park is Africa’s premier Afro-alpine trekking paradise.',
    date: 'Jul 30, 2026',
    readTime: '5 min read',
    author: 'Yohannes Bekele',
    img: 'https://images.unsplash.com/photo-1598430772299-8a97f3d9d1d0?w=800&q=80',
    featured: false
  },
  {
    id: 5,
    category: 'Travel Guides',
    title: 'The Origin of Coffee: An Aromatic Pilgrimage to Ethiopia’s Wild Cloud Forests',
    excerpt: 'Trace the legendary tale of Kaldi the goatherd and discover the sacred Buna coffee ceremony practiced daily across Ethiopian households.',
    date: 'Jul 12, 2026',
    readTime: '5 min read',
    author: 'Elena Rossi',
    img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    featured: false
  },
  {
    id: 6,
    category: 'Culture & History',
    title: 'Midnight in Harar: Feeding Wild Hyenas Outside the 16th-Century Walled City',
    excerpt: 'Step into the fourth-holiest city of Islam, navigate 82 mosques through narrow stone alleys, and witness the legendary hyena men bonding with apex predators.',
    date: 'Jun 22, 2026',
    readTime: '6 min read',
    author: 'Sara Lindqvist',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    featured: false
  }
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Articles')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const featuredArticle = articles.find(a => a.featured)
  const regularArticles = articles.filter(a => {
    const matchCat = activeCategory === 'All Articles' || a.category === activeCategory
    return matchCat && !a.featured
  })

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <div className="triply-page blog-page">
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80" 
            alt="Travel writer overlooking mountain vista" 
            className="page-hero__img"
          />
          <div className="page-hero__overlay"></div>
        </div>

        <div className="container page-hero__container">
          <div className="page-hero__breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span>Blog</span>
          </div>

          <h1 className="page-hero__title">
            Travel Stories & <span className="script-accent">local</span> Insights
          </h1>
          <p className="page-hero__subtitle">
            Authentic travel narratives, cultural etiquette, packing guides, and insider knowledge 
            written by our senior expedition leaders.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FEATURED STORY HERO                                       */}
      {/* ============================================================ */}
      {featuredArticle && (
        <section className="blog-featured-section">
          <div className="container">
            <div className="featured-story-card">
              <div className="featured-story-img-box">
                <img src={featuredArticle.img} alt={featuredArticle.title} className="featured-story-img" />
                <span className="featured-pill">FEATURED STORY</span>
              </div>

              <div className="featured-story-body">
                <div className="featured-meta">
                  <span className="featured-cat">{featuredArticle.category}</span>
                  <span className="meta-dot">&bull;</span>
                  <span className="featured-time">{featuredArticle.readTime}</span>
                </div>

                <h2 className="featured-story-title">{featuredArticle.title}</h2>
                <p className="featured-story-excerpt">{featuredArticle.excerpt}</p>

                <div className="featured-story-footer">
                  <div className="author-wrap">
                    <div className="author-avatar">{featuredArticle.author.charAt(0)}</div>
                    <div>
                      <strong className="author-name">{featuredArticle.author}</strong>
                      <span className="author-date">{featuredArticle.date}</span>
                    </div>
                  </div>

                  <Link to="/contact" className="triply-btn-orange" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
                    <span>Read Article</span>
                    <FiArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* 3. CATEGORIES & ARTICLE GRID                                 */}
      {/* ============================================================ */}
      <section className="blog-grid-section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="blog-categories-strip">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="blog-articles-grid">
            {regularArticles.map((art) => (
              <article key={art.id} className="article-card">
                <div className="article-img-box">
                  <img src={art.img} alt={art.title} className="article-img" />
                  <span className="article-category-badge">{art.category}</span>
                </div>

                <div className="article-body">
                  <div className="article-meta">
                    <span className="article-date">
                      <FiCalendar size={13} className="icon-orange" />
                      {art.date}
                    </span>
                    <span className="article-read">
                      <FiClock size={13} className="icon-orange" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="article-title">{art.title}</h3>
                  <p className="article-excerpt">{art.excerpt}</p>

                  <div className="article-footer">
                    <span className="article-author">By {art.author}</span>
                    <Link to="/contact" className="article-link">
                      <span>Read More</span>
                      <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. NEWSLETTER SUBSCRIPTION CARD                              */}
      {/* ============================================================ */}
      <section className="blog-newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-text">
              <span className="section-script-subtitle" style={{ color: '#FDBA74' }}>Stay Inspired</span>
              <h3 className="newsletter-heading">Receive Handcrafted Itineraries & Stories</h3>
              <p className="newsletter-desc">
                Subscribe to our monthly travel dispatch featuring off-the-beaten-path expeditions and cultural deep dives.
              </p>
            </div>

            <div className="newsletter-form-box">
              {subscribed ? (
                <div className="newsletter-success">
                  <strong>Thank you for subscribing!</strong>
                  <span>Check your inbox for our latest expedition dispatches.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input 
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                  />
                  <button type="submit" className="triply-btn-orange newsletter-btn">
                    <span>Subscribe</span>
                    <FiSend size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
