import React from 'react';
import { Briefcase, GraduationCap, Rocket, Users } from 'lucide-react';

const AudienceCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-brand-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const TargetAudience: React.FC = () => {
  const targets = [
    {
      icon: Briefcase,
      title: "Professionisti",
      description: "Per chi lavora e vuole risparmiare ore ogni settimana automatizzando task noiosi e velocizzando la produzione."
    },
    {
      icon: GraduationCap,
      title: "Studenti & Neolaureati",
      description: "Per chi vuole aggiungere una skill fondamentale e molto richiesta oggi nel mercato del lavoro."
    },
    {
      icon: Rocket,
      title: "Startupper & Curiosi",
      description: "Per chi ha un'idea nel cassetto e vuole capire le potenzialità reali dell’AI per realizzarla velocemente."
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Per chi organizza progetti, eventi o gestisce community e vuole strumenti per scalare l'impatto."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Per chi è questo workshop?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Non serve essere programmatori. L'abbiamo pensato per chi vuole risultati pratici.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, index) => (
            <AudienceCard key={index} {...target} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;