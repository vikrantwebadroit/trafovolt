import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 group">
          <span className={`text-2xl font-black tracking-tighter uppercase italic transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>TRAFOVOLT</span>
          <span className={`h-4 w-[1px] ${isScrolled ? 'bg-slate-900' : 'bg-white'} opacity-30`}></span>
          <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>R&D Centre</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-xs font-bold uppercase tracking-[0.15em] transition-all hover:text-brand-blue ${
                  isActive 
                    ? 'text-brand-blue border-b-2 border-brand-blue pb-1' 
                    : isScrolled ? 'text-slate-900' : 'text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink 
            to="/contact" 
            className="bg-brand-blue hover:bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-md active:scale-95"
          >
            Inquire Now
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-brand-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 md:hidden flex flex-col gap-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-lg font-medium transition-colors ${
                    isActive ? 'text-brand-blue' : 'text-brand-dark'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-brand-blue text-white text-center py-3 rounded-lg font-bold"
            >
              Get a Quote
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
