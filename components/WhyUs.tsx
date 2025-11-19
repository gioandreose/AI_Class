import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyUs: React.FC = () => {
  const points = [
    "Super pratico, zero teoria accademica inutile",
    "Nessuna esperienza tecnica o pregressa richiesta",
    "Prezzo simbolico (15€) per questa prima edizione",
    "Networking di qualità e rinfresco finale incluso"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-50 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Perché questo workshop è diverso?</h2>
          
          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <span className="text-lg text-slate-700 font-medium">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
             <p className="text-slate-600 mb-6">
                È perfetto per capire cosa si può fare con l’AI oggi, anche se parti da zero.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;