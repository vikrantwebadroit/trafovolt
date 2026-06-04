import { CheckCircle2, Zap, Settings, Shield } from 'lucide-react';

export default function TransformerTesting() {
  const typeTests = [
    'Temperature Rise Test',
    'Short Circuit Test',
    'Lightning Impulse Test',
    'Dielectric Tests',
  ];

  const routineTests = [
    'Insulation Resistance Test',
    'Winding Resistance Test',
    'Turns Ratio Test',
    'Magnetic Balance Test',
  ];

  const specializedTests = [
    'High Voltage Testing',
    'No-Load & Load Loss Measurement',
    'Temperature Rise Evaluation',
    'Noise Level Measurement',
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Transformer Testing</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive analysis following international and national standards (IEC 60076, IS 1180, IS 2026). Our laboratory provides the rigorous environment needed to verify the integrity of distribution and power transformers.
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200" 
            alt="Transformer Testing" 
            className="w-full h-[400px] object-cover rounded-3xl mb-16 shadow-2xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-brand-blue" />
                Type Testing
              </h2>
              <ul className="space-y-4">
                {typeTests.map((test, i) => (
                  <li key={i} className="flex gap-3 items-center p-4 bg-brand-gray rounded-xl">
                    <CheckCircle2 className="text-brand-blue shrink-0" size={18} />
                    <span className="font-medium text-brand-dark">{test}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Settings className="text-brand-blue" />
                Routine Testing
              </h2>
              <ul className="space-y-4">
                {routineTests.map((test, i) => (
                  <li key={i} className="flex gap-3 items-center p-4 bg-brand-gray rounded-xl">
                    <CheckCircle2 className="text-brand-blue shrink-0" size={18} />
                    <span className="font-medium text-brand-dark">{test}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="text-brand-blue" />
              Specialized Testing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specializedTests.map((test, i) => (
                <div key={i} className="flex gap-3 items-center p-5 border border-gray-100 rounded-xl hover:border-brand-blue transition-colors group">
                   <div className="w-10 h-10 bg-brand-gray rounded-full flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                      <Zap size={16} className="text-brand-blue" />
                   </div>
                   <span className="font-bold text-sm">{test}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-brand-blue text-white p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Accelerated Life Testing</h2>
            <p className="text-lg text-blue-50 leading-relaxed mb-6">
              Our advanced facility allows for simulated ageing of transformer components under extreme thermal and electrical stress. This evaluation provides critical data on the expected operational life and identifies potential failure points before they occur in the field.
            </p>
            <div className="flex items-center gap-3 text-sm font-bold bg-white/20 px-4 py-2 rounded-full w-fit">
               <span>Compliance: IEC 60076, IS 1180, IS 2026</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
