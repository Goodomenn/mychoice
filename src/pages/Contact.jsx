import { useState, useEffect } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi'
import { FiInstagram, FiFacebook } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call to backend
    await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).catch(() => {})
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="contact-page">
      <div className="page-banner">
        <div className="container">
          <span className="page-banner-label">Get In Touch</span>
          <h1 className="page-banner-title">Contact Us</h1>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">
          {/* Info Column */}
          <div className="contact-info">
            <span className="section-label reveal">We'd Love to Hear From You</span>
            <span className="gold-divider reveal" />
            <h2 className="contact-info__title reveal">
              Let's Plan Your<br />Perfect Ethiopian Journey
            </h2>
            <p className="contact-info__sub reveal">
              Our local travel specialists are ready to craft a personalised itinerary tailored to your interests, budget, and travel dates. Reach out — we typically respond within 24 hours.
            </p>

            {/* Details */}
            <div className="contact-details">
              <div className="contact-detail reveal">
                <div className="contact-detail__icon"><FiPhone /></div>
                <div>
                  <span className="contact-detail__label">Phone</span>
                  <a href="tel:+251911420000" className="contact-detail__value">+251 911 420 000</a>
                  <a href="tel:+251116183163" className="contact-detail__value">+251 116 183 163</a>
                </div>
              </div>
              <div className="contact-detail reveal">
                <div className="contact-detail__icon"><FiMail /></div>
                <div>
                  <span className="contact-detail__label">Email</span>
                  <a href="mailto:info@mychoiceethiopia.com" className="contact-detail__value">info@mychoiceethiopia.com</a>
                  <a href="mailto:bookings@mychoiceethiopia.com" className="contact-detail__value">bookings@mychoiceethiopia.com</a>
                </div>
              </div>
              <div className="contact-detail reveal">
                <div className="contact-detail__icon"><FiMapPin /></div>
                <div>
                  <span className="contact-detail__label">Office</span>
                  <span className="contact-detail__value">Bole Airport Road, Around Skylight Hotel</span>
                  <span className="contact-detail__value">Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <div className="contact-detail reveal">
                <div className="contact-detail__icon"><FiClock /></div>
                <div>
                  <span className="contact-detail__label">Office Hours</span>
                  <span className="contact-detail__value">Mon–Sat: 8:00 AM – 6:00 PM (EAT)</span>
                  <span className="contact-detail__value">Sunday: 10:00 AM – 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/251911420000"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn reveal"
            >
              <svg viewBox="0 0 24 24" className="whatsapp-btn__icon" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>

            <div className="contact-socials reveal">
              <a href="#" className="contact-social"><FiInstagram /> Instagram</a>
              <a href="#" className="contact-social"><FiFacebook /> Facebook</a>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrap reveal">
            {submitted ? (
              <div className="contact-success">
                <FiCheckCircle className="contact-success__icon" />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. One of our travel specialists will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form__title">Send Us a Message</h3>
                <div className="contact-form__grid">
                  <div className="contact-form__group">
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input id="phone" name="phone" type="tel" placeholder="+1 234 567 890" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="date">Preferred Travel Date</label>
                    <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
                  </div>
                </div>
                <div className="contact-form__group contact-form__group--full">
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" name="message" rows="6" placeholder="Tell us about your dream Ethiopian journey — interests, group size, duration..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary contact-form__submit" disabled={loading}>
                  {loading ? (
                    <span className="contact-form__loading" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
