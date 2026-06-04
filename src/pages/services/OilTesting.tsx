import { Beaker, CheckCircle2 } from 'lucide-react';

export default function OilTesting() {
  const tests = [
    { title: 'Dielectric Strength (BDV Test)', desc: 'Measuring the breakdown voltage to determine insulating capability.' },
    { title: 'Moisture Content Analysis', desc: 'Precision detection of water PPM levels using Karl Fischer titration.' },
    { title: 'Furan Analysis', desc: 'Evaluating the health of paper insulation by monitoring furanic compounds.' },
    { title: 'Oil Chromatography (DGA)', desc: 'Dissolved Gas Analysis to detect internal faults and overheating.' },
    { title: 'Acidity & Viscosity Monitoring', desc: 'Tracking oxidation and fluid flow properties for long-term stability.' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Oil Testing Laboratory</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transformer oil is the lifeblood of the power system. Our NABL accredited chemical laboratory provides exhaustive analytical services to ensure the chemical, physical, and dielectric properties of your insulating fluids are maintained at peak performance.
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1579154235602-3c2c2abb5b4a?auto=format&fit=crop&q=80&w=1200" 
            alt="Oil Laboratory" 
            className="w-full h-[400px] object-cover rounded-3xl mb-16 shadow-2xl"
          />

          <div className="space-y-6 mb-16">
            {tests.map((test, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-brand-gray rounded-2xl group hover:bg-white hover:shadow-xl hover:border-brand-blue/20 border border-transparent transition-all">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-xl flex items-center justify-center shrink-0">
                  <Beaker size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-brand-dark">{test.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{test.desc}</p>
                </div>
                <div className="md:ml-auto self-center">
                   <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                   </div>
                </div>
              </div>
            ))}
          </div>

          <section className="p-10 border-4 border-dashed border-brand-blue/20 rounded-3xl">
             <h3 className="text-2xl font-bold mb-4">Precision Diagnostics</h3>
             <p className="text-gray-600 leading-relaxed">
               Early detection of impurities in transformer oil can prevent catastrophic equipment failure and save millions in replacement costs. We use high-precision gas chromatography and titration equipment to provide reports with ±0.1% accuracy.
             </p>
          </section>
        </div>
      </div>
    </div>
  );
}
