import { useEffect, useRef, useState } from 'react'

const navItems = [
  { icon: '◉', label: 'Home' },
  { icon: '◌', label: 'Films' },
  { icon: '◎', label: 'About' },
  { icon: '◍', label: 'Crew' },
  { icon: '◐', label: 'Workshop' },
  { icon: '◔', label: 'Blog & Press' },
  { icon: '◕', label: 'Contact' },
]

const heroSlides = [
  {
    location: 'BALI, INDONESIA',
    date: 'SEPTEMBER 2025',
    couple: 'AASHNA',
    partner: 'GIRISH',
    text: 'Seven magical days. One unforgettable story.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80',
  },
  {
    location: 'UDAIPUR, INDIA',
    date: 'OCTOBER 2025',
    couple: 'KSHIRA',
    partner: 'MATTHEW',
    text: 'A royal celebration shaped by light, ritual, and feeling.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1800&q=80',
  },
  {
    location: 'GOA, INDIA',
    date: 'JANUARY 2025',
    couple: 'RIDDHIMA',
    partner: 'AKSHAY',
    text: 'Sunset vows, soulful music, and cinematic memories.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=80',
  },
]

const filterOptions = ['All', 'Destination', 'Celebrity', 'International', 'Luxury', 'Documentary']

const filmCards = [
  { title: 'Aashna & Girish', place: 'Bali, Indonesia', year: 'September 2025', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80', tag: 'Destination' },
  { title: 'Kshira & Matthew', place: 'Udaipur, India', year: 'October 2025', image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80', tag: 'Luxury' },
  { title: 'Riddhima & Akshay', place: 'Goa, India', year: 'January 2025', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80', tag: 'Documentary' },
  { title: 'Arya & Federico', place: 'Lake Como, Italy', year: 'June 2025', image: 'https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?auto=format&fit=crop&w=1000&q=80', tag: 'International' },
]

const songs = ['Ik Onkar', 'Vekheya Reprise', 'Tu Mila', 'Panaah', 'Sahib Sahiba']

const mediaLogos = ['Netflix', 'Amazon Prime Video', 'Sony Alpha', 'Made in Heaven', 'Nayanthara: Beyond the Fairy Tale']

const testimonials = [
  { name: 'Rhea & Dheeraj', quote: 'Our film felt like a memory capsule, not just a wedding video. Every frame was alive with emotion.', image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80' },
  { name: 'Aanya & Vivaan', quote: 'The team made us feel completely seen. It was beautiful, honest, and cinematic without ever feeling staged.', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80' },
  { name: 'Mira & Kabir', quote: 'We watched our wedding again through the lens of a true filmmaker. It felt intimate, elegant, and timeless.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80' },
]

const storySteps = [
  { year: '2013', title: 'A love for stories begins', text: 'What started as a passion for visual storytelling evolved into a love for capturing real, emotional wedding moments.' },
  { year: '2015', title: 'The first cinematic wedding films', text: 'With a handpicked team and a strong creative eye, the studio began creating wedding films that felt more like short films.' },
  { year: '2018', title: 'A growing global presence', text: 'The team traveled across India and abroad, filming intimate celebrations in destination cities and cultural landscapes.' },
  { year: 'Today', title: 'Crafting memory-first cinema', text: 'Each wedding is approached with a documentary sensibility, a cinematic eye, and a deeply personal storytelling process.' },
]

const faqs = [
  { q: 'What exactly do you do?', a: 'We craft cinematic wedding films, storytelling-driven edits, and original soundscapes for couples who want their love story documented with emotion and elegance.' },
  { q: 'Do you travel for weddings?', a: 'Yes. We travel across India and internationally for destination weddings, intimate celebrations, and multi-day wedding experiences.' },
  { q: 'How does the filmmaking process work?', a: 'We start with a discovery call, define the creative direction, document the wedding, and then shape the final film through editing, sound, and color.' },
  { q: 'Can we customize the package?', a: 'Absolutely. Every package is shaped around wedding size, story, crew requirements, coverage duration, and destination logistics.' },
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [introVisible, setIntroVisible] = useState(false)
  const introRef = useRef(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const introSection = introRef.current

    if (!introSection) return undefined

    if (!('IntersectionObserver' in window)) {
      setIntroVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntroVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.25 })

    observer.observe(introSection)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setShowMobileNav(window.scrollY > 120)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goToSlide = (direction) => {
    setActiveSlide((current) => {
      if (direction === 'next') {
        return (current + 1) % heroSlides.length
      }

      return (current - 1 + heroSlides.length) % heroSlides.length
    })
  }

  const currentSlide = heroSlides[activeSlide]

  return (
    <div className="page-shell">
      <aside className={mobileMenuOpen ? 'sidebar mobile-menu-open' : 'sidebar'}>
        <div className="brand" aria-label="Wedding Flim Maker for you logo">
          <span className="brand-small">The</span>
          <span className="brand-large">Wedding</span>
          <span className="brand-tilt">Flim Maker for you</span>
        </div>

        <nav className="nav-menu" aria-label="Main navigation">
          {navItems.map(({ icon, label }, index) => (
            <a
              key={label}
              href="#"
              className={index === 0 ? 'nav-item active' : 'nav-item'}
            >
              <span className="nav-icon" aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-cta">
          <p>We&apos;d love to hear your story!</p>
          <button type="button" className="primary-button small-button">
            Enquire <span>→</span>
          </button>
        </div>
      </aside>

      <nav className={showMobileNav ? 'mobile-bottom-nav is-visible' : 'mobile-bottom-nav'} aria-label="Mobile navigation">
        <button type="button" className="mobile-menu-button" onClick={() => setMobileMenuOpen((open) => !open)}>
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
        <div className="mobile-brand" aria-label="Wedding Flim Maker for you">
          <span>The</span>
          <strong>Wedding</strong>
          <strong>Flim Maker</strong>
        </div>
        <button type="button" className="mobile-enquire-button">
          Enquire
        </button>
      </nav>

      <main className="content-panel">
        <header className="topbar">
          <div className="search-wrap">
            <span className="search-icon">⌕</span>
            <input type="text" placeholder="Search a film here" aria-label="Search a film" />
            <span className="search-arrow">→</span>
          </div>

          <button type="button" className="faq-button">FAQs</button>
          <button type="button" className="primary-button">
            Enquire <span>→</span>
          </button>
        </header>

        <section
          className="hero-section"
          aria-label="Featured couple banner"
          style={{
            background: `linear-gradient(90deg, rgba(17, 13, 14, 0.7) 0%, rgba(17, 13, 14, 0.32) 26%, rgba(17, 13, 14, 0.14) 52%, rgba(17, 13, 14, 0.5) 100%), url('${currentSlide.image}') center center / cover no-repeat`,
          }}
        >
          <div className="hero-overlay" />
          <div className="hero-petals" aria-hidden="true" />

          <div className="hero-copy">
            <div className="eyebrow">
              <span>{currentSlide.location}</span>
              <span className="dot-separator">•</span>
              <span>{currentSlide.date}</span>
            </div>

            <h1>
              {currentSlide.couple} <span>&amp; {currentSlide.partner}</span>
            </h1>

            <p>
              {currentSlide.text}
            </p>
          </div>

          <button type="button" className="slide-arrow left" aria-label="Previous slide" onClick={() => goToSlide('prev')}>
            ‹
          </button>
          <button type="button" className="slide-arrow right" aria-label="Next slide" onClick={() => goToSlide('next')}>
            ›
          </button>

          <div className="slide-dots" aria-label="Slide indicators">
            {heroSlides.map((slide, index) => (
              <span
                key={`${slide.location}-${index}`}
                className={index === activeSlide ? 'dot active' : 'dot'}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section ref={introRef} className={introVisible ? 'intro-section is-visible' : 'intro-section'} aria-label="Studio introduction">
          <p>Our films bring people closer.</p>
        </section>

        <section className="watch-section">
          <div className="section-head">
            <span className="section-kicker">Watch a trailer</span>
            <span className="section-meta">RECENTS • FAVOURITES • CLASSICS</span>
          </div>

          <div className="chip-row" aria-label="Film filters">
            {filterOptions.map((filter, index) => (
              <button key={filter} type="button" className={index === 0 ? 'chip active' : 'chip'}>
                {filter}
              </button>
            ))}
          </div>

          <div className="film-grid">
            {filmCards.map((film, index) => (
              <article key={film.title} className="film-card">
                <div className="film-image" style={{ backgroundImage: `url(${film.image})` }}>
                  <span className="film-number">0{index + 1}</span>
                  <button type="button" className="film-play" aria-label={`Play trailer for ${film.title}`}>
                    ▶
                  </button>
                </div>
                <div className="film-meta">
                  <div>
                    <span>{film.year}</span>
                    <h3>{film.title}</h3>
                  </div>
                  <span className="film-arrow">↗</span>
                </div>
                <p>{film.place}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-trust-section">
          <div className="section-head compact-head">
            <span className="section-kicker">Media & partnerships</span>
          </div>

          <div className="media-strip" aria-label="Brand recognition and media features">
            {mediaLogos.map((brand) => (
              <span key={brand} className="media-badge">{brand}</span>
            ))}
          </div>
        </section>

        <section className="story-promo">
          <div className="story-promo-image" aria-hidden="true" />
          <div className="story-promo-copy">
            <span className="section-kicker">Real wedding films made by real filmmakers</span>
            <h2>We invented wedding films with emotion, honesty and cinematic rigor.</h2>
            <p>
              From intimate conversations to grand destination celebrations, every frame is shaped to feel as personal as the story itself.
            </p>
            <button type="button" className="primary-button">
              Discover our story <span>→</span>
            </button>
          </div>
        </section>

        <section className="map-section">
          <div className="map-copy">
            <span className="section-kicker subtle">Click on the hearts to know where we&apos;ve travelled</span>
            <h2>
              TWF <span>Around the world</span>
            </h2>
          </div>

          <div className="map-panel" aria-label="Travel map">
            <div className="map-dots" aria-hidden="true">
              <span className="map-pin one">♥</span>
              <span className="map-pin two">♥</span>
              <span className="map-pin three">♥</span>
            </div>
          </div>
        </section>

        <section className="music-section">
          <div className="music-head">
            <span className="section-kicker">Original compositions</span>
            <h2>Creating music that makes you feel.</h2>
          </div>

          <div className="song-list">
            {songs.map((song, index) => (
              <div key={song} className="song-row">
                <span className="song-play">▶</span>
                <span>{song}</span>
                <small>{String(index + 1).padStart(2, '0')}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-mark">“</div>
          <blockquote>Nothing is ever lost to us as long as we remember it.</blockquote>
          <cite>— Wedding Flim Maker for you</cite>
        </section>

        <section className="why-section">
          <span className="section-kicker">Why the Wedding Filmer?</span>
          <h2>Heartfelt • Cinematic • Timeless</h2>

          <div className="feature-grid">
            <article>
              <span className="feature-index">01</span>
              <h3>Powerful storytelling</h3>
              <p>Intimate conversations that capture the humor, drama, emotion and love of your wedding.</p>
            </article>
            <article>
              <span className="feature-index">02</span>
              <h3>Pioneering cinema</h3>
              <p>With decades of filmmaking experience, we reinvent ourselves for every story.</p>
            </article>
            <article>
              <span className="feature-index">03</span>
              <h3>Signature soundscapes</h3>
              <p>Original music and unforgettable sound design set the mood for every memory.</p>
            </article>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="section-head compact-head">
            <span className="section-kicker">Notes of gratitude</span>
          </div>

          <div className="testimonial-grid">
            {testimonials.map(({ name, quote, image }) => (
              <article key={name} className="testimonial-card">
                <img src={image} alt={name} />
                <blockquote>“{quote}”</blockquote>
                <span>{name}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section">
          <div className="section-head compact-head">
            <span className="section-kicker">Our story</span>
            <h2>How we became a wedding filmmaking house.</h2>
          </div>

          <div className="story-timeline">
            {storySteps.map(({ year, title, text }) => (
              <article key={year} className="story-item">
                <span className="story-year">{year}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <div className="section-head compact-head">
            <span className="section-kicker">FAQ</span>
            <h2>Everything you need to know before you enquire.</h2>
          </div>

          <div className="faq-list">
            {faqs.map(({ q, a }) => (
              <details key={q} className="faq-item" open={q === 'What exactly do you do?'}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="video-footer-section">
          <footer className="site-footer">
            <video
              className="footer-video"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            >
              <source src="/WhatsApp%20Video%202026-09-25%20at%2010.21.36%20AM.mp4" type="video/mp4" />
            </video>
            <div className="footer-video-overlay" />
            <div className="video-contact-details" aria-label="Studio contact details">
              <div>
                <span>Phone</span>
                <strong>9849797813</strong>
              </div>
              <div>
                <span>Studio</span>
                <strong>Kathmandu</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>ub@gmail.com</strong>
              </div>
            </div>
            <button type="button" className="video-enquire-button">
              Enquire <span>→</span>
            </button>
          </footer>

          <div className="footer-bottom">
            <span>© 2026 — Wedding Flim Maker for you</span>
            <span>Website Partners — Yubraj</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
