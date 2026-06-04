import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TransformerTesting from './pages/services/TransformerTesting';
import OilTesting from './pages/services/OilTesting';
import ResearchDevelopment from './pages/services/ResearchDevelopment';
import DiagnosticServices from './pages/services/DiagnosticServices';
import NewsletterPopup from './components/modals/NewsletterPopup';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/transformer-testing" element={<TransformerTesting />} />
            <Route path="/services/oil-testing" element={<OilTesting />} />
            <Route path="/services/research-development" element={<ResearchDevelopment />} />
            <Route path="/services/diagnostic-services" element={<DiagnosticServices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <NewsletterPopup />
      </div>
    </Router>
  );
}
