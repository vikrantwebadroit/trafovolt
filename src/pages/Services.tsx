import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, Beaker, Search, Activity, ArrowRight } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      title: 'Transformer Testing',
      icon: <Zap size={32} />,
      desc: 'Full range of type, routine, and specialized testing following IEC and IS standards.',
      link: '/services/transformer-testing',
      image: 'https://nggpowertech.com/trafovolt/1.jpeg?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Oil Testing Laboratory',
      icon: <Beaker size={32} />,
      desc: 'Comprehensive chemical and physical analysis of dielectric fluids for insulation health.',
      link: '/services/oil-testing',
      image: 'https://nggpowertech.com/trafovolt/22.jpeg?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Research & Development',
      icon: <Search size={32} />,
      desc: 'Innovative solutions for transformer design, IoT monitoring, and energy efficiency.',
      link: '/services/research-development',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Diagnostic Services',
      icon: <Activity size={32} />,
      desc: 'On-site preventive diagnostics, thermography, and energy auditing for infrastructure.',
      link: '/services/diagnostic-services',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div id="services-page">
      {/* Header */}
      <section className="pt-40 pb-20 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Precision engineering solutions designed to optimize and protect your critical electrical assets.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {serviceList.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[400px] overflow-hidden rounded-3xl"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                  <div className="bg-brand-blue w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 max-w-sm line-clamp-2">
                    {service.desc}
                  </p>
                  <NavLink 
                    to={service.link}
                    className="inline-flex items-center gap-2 font-bold text-sm bg-white text-brand-dark py-3 px-6 rounded-lg hover:bg-brand-blue hover:text-white transition-all shadow-lg active:scale-95"
                  >
                    <span>View Service Details</span>
                    <ArrowRight size={16} />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Compliance CTA */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="bg-brand-dark rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/10 skew-x-12 translate-x-20" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built on Global Standards</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Every test conducted in our facility adheres to the latest IEC (International Electrotechnical Commission) and IS (Indian Standards) benchmarks. We provide the certification you need for global compliance.
              </p>
              <div className="flex flex-wrap gap-6">
                <span className="text-brand-blue font-mono font-bold">IEC 60076</span>
                <span className="text-brand-blue font-mono font-bold">IS 1180</span>
                <span className="text-brand-blue font-mono font-bold">IS 2026</span>
                <span className="text-brand-blue font-mono font-bold">IS 1866</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
