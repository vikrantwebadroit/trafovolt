import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe, Award, Settings, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070" 
          alt="Industrial Transformer Engineering" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 lg:col-span-8 lg:border-r lg:border-white/20 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-2 w-2 bg-brand-blue rounded-full animate-pulse shadow-[0_0_12px_rgba(37,99,235,0.8)]"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue">System Active / Una Laboratory</span>
              </div>
              
              <h1 className="text-[60px] md:text-[100px] leading-[0.85] font-black italic tracking-tighter uppercase text-white mb-8">
                Advanced<br/>Power<br/>Solutions.
              </h1>
              
              <p className="max-w-md text-lg md:text-xl text-slate-300 font-serif leading-relaxed mb-12">
                Innovation-driven transformer testing, oil analysis, and research laboratory solutions serving a global network of power utilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-20">
                <NavLink 
                  to="/services" 
                  className="bg-brand-blue text-white px-10 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-brand-blue transition-all"
                >
                  Explore Services
                </NavLink>
                <NavLink 
                  to="/about" 
                  className="border border-white/30 text-white px-10 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
                >
                  Core Laboratory
                </NavLink>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-10">
              {[
                { n: '01.', t: 'ISO Certified', d: 'Adhering to IEC 60076 & IS 1180.' },
                { n: '02.', t: 'Global Reach', d: 'Serving manufacturers worldwide.' },
                { n: '03.', t: 'IoT Ready', d: 'Smart diagnostic platforms.' }
              ].map((item, idx) => (
                <div key={idx}>
                  <span className="block text-3xl font-black mb-2 italic text-brand-blue">{item.n}</span>
                  <h3 className="font-bold uppercase text-[10px] tracking-widest text-white mb-2">{item.t}</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:col-span-4 lg:flex flex-col justify-end p-12 text-right">
             <div className="border border-white/20 p-8 brutalist-shadow backdrop-blur-sm">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-4 block">Innovation Bulletin</span>
                <p className="text-white font-serif italic text-lg leading-snug">
                  "Advancing sustainability through innovative oil enhancement and real-time smart monitoring."
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
