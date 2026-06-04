import { motion } from 'motion/react';
import Hero from '../components/sections/Hero';
import { Zap, Shield, Globe, Award, Settings, Leaf, ArrowRight, Beaker, Search, Activity } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const highlights = [
    { title: 'Transformer Testing', icon: <Zap />, description: 'Comprehensive analysis following international standards.' },
    { title: 'Oil Testing Laboratory', icon: <Beaker />, description: 'Expert chemical and physical oil diagnostics.' },
    { title: 'Research & Development', icon: <Search />, description: 'Next-gen energy and material research solutions.' },
    { title: 'Diagnostic Services', icon: <Activity />, description: 'On-site health checks and energy audits.' },
  ];

  const features = [
    { title: 'Advanced Lab Setup', icon: <Settings />, desc: 'State-of-the-art testing equipment.' },
    { title: 'Experienced Team', icon: <Award />, desc: 'Highly skilled engineer network.' },
    { title: 'Global Reach', icon: <Globe />, desc: 'Serving clients across continents.' },
    { title: 'ISO Certified', icon: <Shield />, desc: 'Adhering to strict quality standards.' },
    { title: 'Customized Solutions', icon: <Activity />, desc: 'Tailored testing for unique needs.' },
    { title: 'Sustainability Focus', icon: <Leaf />, desc: 'Environmentally conscious methodologies.' },
  ];

  return (
    <div id="home-page">
      <Hero />

      {/* Company Overview */}
      <section className="section-padding bg-slate-50 border-y border-slate-900/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Engineered Excellence</span>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-10 leading-[0.9]">
                Precision<br />Performance.
              </h2>
              <p className="text-lg text-slate-600 font-serif leading-relaxed mb-8">
                Trafovolt R&D Centre is an innovation-driven laboratory specializing in transformer testing, oil analysis, and research solutions. Based in Una (HP), we bridge the critical gap between grid reliability and engineering innovation.
              </p>
              <div className="flex items-center gap-6">
                <NavLink to="/about" className="brutalist-button px-12">
                  Read Journal
                </NavLink>
                <div className="h-0.5 w-12 bg-slate-900 hidden md:block"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 hidden md:block">Est. 2009 / NABL ACCREDITED</span>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <div className="border-l-2 border-slate-900 pl-8 space-y-12">
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest mb-4">Transformer Testing</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider leading-relaxed">Full Type and Routine evaluations following IEC 60076 benchmarks.</p>
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest mb-4">Oil Laboratory</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider leading-relaxed">Dissolved Gas Analysis (DGA) and precision moisture monitoring.</p>
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest mb-4">Research & Development</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider leading-relaxed">IoT-integrated diagnostic platforms and sustainable material research.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Highlights */}
      <section className="section-padding bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex justify-between items-end">
            <div>
               <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Our Specialties</span>
               <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">Core<br/>Capability.</h2>
            </div>
            <div className="hidden md:block max-w-xs">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Deploying state-of-the-art diagnostic equipment to manufacturers across six continents.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 editorial-border border-white/20">
            {highlights.map((h, i) => (
              <motion.div 
                key={i}
                className="p-12 border-b md:border-b-0 md:border-r border-white/20 last:border-r-0 group hover:bg-brand-blue transition-colors cursor-pointer"
              >
                <span className="block text-4xl font-black italic mb-10 text-white/20 group-hover:text-white/40">{`0${i+1}.`}</span>
                <h3 className="text-lg font-black uppercase tracking-tight mb-4">{h.title}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white leading-loose">{h.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <p className="text-gray-500 mb-8">What sets Trafovolt apart in the competitive landscape of industrial diagnostics.</p>
              <div className="space-y-4">
                {features.slice(0, 3).map((f, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-brand-gray transition-colors">
                    <div className="text-brand-blue shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm">{f.title}</h4>
                      <p className="text-xs text-gray-400">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 hidden lg:block">
               <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-2xl skew-x-3 grayscale hover:grayscale-0 transition-all duration-1000" alt="Tech" />
            </div>
            <div className="lg:w-1/3">
               <div className="space-y-4">
                {features.slice(3).map((f, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-brand-gray transition-colors">
                    <div className="text-brand-blue shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm">{f.title}</h4>
                      <p className="text-xs text-gray-400">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-1 text-white/30 bg-white/30 rounded-full" />
              <h2 className="text-4xl font-bold">Our Vision</h2>
              <p className="text-xl text-blue-100 leading-relaxed italic">
                "To be the global leader in transformer testing and innovation, setting world-class standards for reliability and energy efficiency."
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="w-12 h-1 text-white/30 bg-white/30 rounded-full" />
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                "Deliver high-quality research and testing solutions that empower manufacturers and utilities to build a more sustainable energy future."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Dummy) */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((t) => (
              <div key={t} className="bg-brand-gray p-8 rounded-2xl relative">
                <div className="text-brand-blue/20 absolute top-4 right-8 font-serif text-8xl leading-none">"</div>
                <p className="text-gray-600 mb-8 italic relative z-10">
                  "Trafovolt's team demonstrated exceptional technical skill during our recent transformer type testing. Their NABL accredited lab provides results we can trust worldwide."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-blue rounded-full" />
                  <div>
                    <h4 className="font-bold text-sm">Industrial Partner {t}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Maintenance Director</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold mb-6">Ready to Ensure Reliability?</h2>
                <p className="text-gray-500 mb-10">Get in touch with our experts today for a customized consultation on your testing requirements.</p>
                <NavLink to="/contact" className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-brand-blue/30 active:scale-95">
                    <span>Schedule a Consultation</span>
                    <ArrowRight size={20} />
                </NavLink>
            </div>
        </div>
      </section>
    </div>
  );
}
