import { NavLink } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="bg-brand-blue p-2 rounded-lg">
                <Zap className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold leading-none text-xl">TRAFOVOLT</span>
                <span className="text-[10px] tracking-widest font-medium opacity-70">R&D CENTRE</span>
              </div>
            </NavLink>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trafovolt R&D Centre is an innovation-driven company specializing in transformer testing, oil testing, and research solutions based in Una (HP), serving global clients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-blue transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><NavLink to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</NavLink></li>
              <li><NavLink to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</NavLink></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><NavLink to="/services/transformer-testing" className="text-gray-400 hover:text-white transition-colors text-sm">Transformer Testing</NavLink></li>
              <li><NavLink to="/services/oil-testing" className="text-gray-400 hover:text-white transition-colors text-sm">Oil Testing Laboratory</NavLink></li>
              <li><NavLink to="/services/research-development" className="text-gray-400 hover:text-white transition-colors text-sm">Research & Development</NavLink></li>
              <li><NavLink to="/services/diagnostic-services" className="text-gray-400 hover:text-white transition-colors text-sm">Diagnostic Services</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin className="text-brand-blue mt-1 shrink-0" size={18} />
                <span className="text-gray-400 text-sm">Village Maluwal, PO Polian Beet, Distt Una (HP)</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-brand-blue shrink-0" size={18} />
                <span className="text-gray-400 text-sm">78071566659</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-brand-blue shrink-0" size={18} />
                <span className="text-gray-400 text-sm">trafovolt@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} Trafovolt Research and Development Centre Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-xs">ISO 9001:2015 Certified</span>
            <span className="text-gray-500 text-xs">NABL Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
