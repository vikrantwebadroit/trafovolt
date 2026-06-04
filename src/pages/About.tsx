import { motion } from 'motion/react';
import { Globe, Users, Award, Shield, CheckCircle2, Zap } from 'lucide-react';

export default function About() {
  const clients = [
    'Power Utilities',
    'Transformer Manufacturers',
    'Electrical Component Suppliers',
    'Renewable Energy Providers',
    'Government Institutions',
  ];

  return (
    <div id="about-page">
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About the Centre</h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Bridging the gap between electrical engineering theory and industrial excellence from our core in Una (HP).
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8 text-brand-dark">Our Engineering Legacy</h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                <p>
                  Trafovolt Research and Development Centre Private Limited stands at the forefront of electrical diagnostic technology. Founded with a vision to revolutionize transformer maintenance and testing, we have grown into a trusted partner for global power utilities and manufacturers.
                </p>
                <p>
                  Located in the industrial hub of <strong>Una, Himachal Pradesh</strong>, our centre is equipped with state-of-the-art laboratory infrastructure designed to handle the complexities of modern power systems. We don't just test; we analyze, innovate, and provide actionable insights that extend the lifecycle of critical electrical assets.
                </p>
                <p>
                  Our team of seasoned engineers and research scientists combine decades of field experience with rigorous academic standards, ensuring that every report we issue meets the highest global benchmarks (IEC, IS).
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-brand-gray rounded-2xl">
                  <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                    <Award className="text-brand-blue" />
                    Accredited Quality
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Our laboratory operations are NABL accredited and ISO 9001:2015 certified, guaranteeing transparency and precision in every diagnostic test performed.
                  </p>
                </div>
                <div className="p-8 bg-brand-gray rounded-2xl">
                  <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                    <Globe className="text-brand-blue" />
                    Global Footprint
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    While based in Himachal Pradesh, our reach extends to clients across South Asia, the Middle East, and beyond, supporting diverse power grid configurations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="sticky top-32 bg-brand-blue text-white p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Key Clients</h3>
                <ul className="space-y-4">
                  {clients.map((client, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/40 transition-colors">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                      <span className="text-lg font-medium">{client}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-10 border-t border-white/20">
                  <p className="text-xs text-blue-100 italic">
                    "Trusted by over 100 industrial partners for mission-critical diagnostics."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
                alt="Collaboration" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Research & Innovation Partnerships</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that the future of power is collaborative. Trafovolt maintains active research partnerships with leading technical universities and government bodies to develop sustainable transformer oil enhancements and IoT-based monitoring systems.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Material Science', desc: 'Developing high-temperature insulation materials.' },
                  { title: 'Smart Grids', desc: 'Real-time diagnostic sensor integration.' },
                  { title: 'Green Energy', desc: 'Biodegradable dielectric liquid research.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-auto bg-brand-blue rounded-full" />
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-500 text-sm">Unbiased testing results backed by rigorous scientific verification.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-500 text-sm">Constantly evolving our methodologies to meet future energy challenges.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Partnership</h3>
              <p className="text-gray-500 text-sm">Working closely with clients to understand their unique engineering needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
