import { Search, Lightbulb, Zap, Globe, Cpu } from 'lucide-react';

export default function ResearchDevelopment() {
  const initiatives = [
    {
      title: 'Innovative Transformer Design',
      icon: <Lightbulb size={24} />,
      desc: 'Optimizing core and winding geometries for reduced losses and compact footprints.',
    },
    {
      title: 'Sustainable Energy Solutions',
      icon: <Globe size={24} />,
      desc: 'Researching biodegradable insulation fluids and recyclable transformer components.',
    },
    {
      title: 'Transformer Oil Enhancement',
      icon: <Zap size={24} />,
      desc: 'Nanotech-based additives to improve thermal conductivity and dielectric strength.',
    },
    {
      title: 'Smart Monitoring (IoT)',
      icon: <Cpu size={24} />,
      desc: 'Developing embedded sensor arrays for real-time health and load monitoring.',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Research & Development</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Trafovolt, research is not just a department—it is our core identity. We dedicate significant resources to pushing the boundaries of electrical engineering to create safer, more efficient power infrastructures.
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200" 
            alt="Research and Development" 
            className="w-full h-[400px] object-cover rounded-3xl mb-16 shadow-2xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {initiatives.map((item, i) => (
              <div key={i} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <section className="bg-brand-dark text-white p-12 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-3xl" />
             <h3 className="text-2xl font-bold mb-6">Future-Proofing the Grid</h3>
             <p className="text-gray-400 leading-relaxed mb-8">
               Our current research focus is on the integration of artificial intelligence with dissolved gas analysis (DGA). By training models on thousands of historical failure patterns, we are building systems that can predict transformer failures weeks before they become detectable via traditional methods.
             </p>
             <div className="flex gap-4">
                <div className="px-4 py-2 border border-white/10 rounded-lg text-xs font-mono">Neural Networks</div>
                <div className="px-4 py-2 border border-white/10 rounded-lg text-xs font-mono">Predictive Analytics</div>
                <div className="px-4 py-2 border border-white/10 rounded-lg text-xs font-mono">Real-time IoT</div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
