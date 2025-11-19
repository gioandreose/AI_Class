import React from 'react';

const AgendaItem: React.FC<{ time: string, title: string, description?: string, last?: boolean }> = ({ time, title, description, last }) => (
  <div className="relative pl-8 pb-8 group">
    {!last && (
      <div className="absolute left-[11px] top-3 w-0.5 h-full bg-slate-200 group-hover:bg-brand-200 transition-colors"></div>
    )}
    <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-white bg-brand-500 shadow-sm z-10"></div>
    
    <div>
      <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-brand-700 bg-brand-100 rounded-full">
        {time}
      </span>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      {description && <p className="text-slate-600 mt-1">{description}</p>}
    </div>
  </div>
);

const Agenda: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Come funziona la serata</h2>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="mt-4">
            <AgendaItem 
              time="30 min" 
              title="Introduzione + Demo Wow" 
              description="Settiamo il contesto e vediamo cosa è possibile fare oggi."
            />
            <AgendaItem 
              time="1 ora" 
              title="I 5 Pilastri Pratici" 
              description="Analisi dei casi d'uso: Automazioni, RAG, Content, Coding, Etica."
            />
            <AgendaItem 
              time="30 min" 
              title="Deep Dive a scelta" 
              description="Approfondimento verticale sull'argomento più votato dalla classe."
            />
            <AgendaItem 
              time="30 min" 
              title="Q&A + Rinfresco" 
              description="Domande libere, networking e relax finale."
              last={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;