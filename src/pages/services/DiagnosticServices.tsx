import { Activity, Zap, Camera, BarChart3, CheckCircle2 } from 'lucide-react';

export default function DiagnosticServices() {
  const services = [
    {
      title: 'Energy Audit',
      icon: <BarChart3 />,
      desc: 'Identifying system losses and efficiency improvements for power infrastructure.',
    },
    {
      title: 'Thermography',
      icon: <Camera />,
      desc: 'Infrared imaging to detect thermal anomalies and hot spots in electrical equipment.',
    },
    {
      title: 'SFRA Analysis',
      icon: <Zap />,
      desc: 'Sweep Frequency Response Analysis to verify the mechanical integrity of transformer windings.',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Diagnostic Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Beyond the laboratory, Trafovolt offers on-site field diagnostics to provide a snapshot of your equipment's health without decommissioning. Our portable diagnostic tools bring laboratory-grade precision to the field.
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
            alt="Field Diagnostics" 
            className="w-full h-[400px] object-cover rounded-3xl mb-16 shadow-2xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((s, i) => (
              <div key={i} className="p-8 bg-brand-gray rounded-2xl border border-gray-100 hover:border-brand-blue transition-all group">
                <div className="text-brand-blue mb-6 scale-125 origin-left">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-12 bg-white rounded-3xl shadow-xl border border-gray-50">
             <div>
                <h3 className="text-2xl font-bold mb-6">Comprehensive Field Reports</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our diagnostic experts provide detailed reports including high-resolution thermal maps, frequency response curves, and actionable recommendations for maintenance or replacement cycles.
                </p>
                <ul className="space-y-3">
                  {['NIST Traceable Equipment', 'Emergency Breakdown Support', 'Preventive Maintenance Planning'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-brand-dark">
                      <CheckCircle2 size={16} className="text-brand-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-brand-blue p-8 rounded-2xl text-white">
                <blockquote className="text-lg italic mb-6">
                  "The thermographic analysis provided by Trafovolt identified a loose connection in our substation that would have caused a major outage within weeks."
                </blockquote>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Substation Operations Manager</p>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
