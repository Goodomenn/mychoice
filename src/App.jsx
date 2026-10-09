import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Tours from './pages/Tours'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import CorporateFleet from './pages/CorporateFleet'
import Governance from './pages/Governance'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/corporate-fleet" element={<CorporateFleet />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </HelmetProvider>
  )
}

export default App
