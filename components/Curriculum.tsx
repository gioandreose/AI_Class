import React from 'react';
import { Bot, Database, Image, Code2, ShieldAlert, MessageSquarePlus } from 'lucide-react';

const CurriculumItem: React.FC<{ icon: React.ElementType, title: string, description: string, color: string }> = ({ icon: Icon, title, description, color }) => (
  <div className="flex gap-4 md:gap-6 items-start p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors">
    <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${color} bg-opacity-20`}>
      <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  </div>
);

const Curriculum: React.FC = () => {
  const themes = [
    {
      icon: Bot,
      title: "Automazioni & AI Agents",
      description: "Smetti di fare copia-incolla. Scopri cosa puoi delegare davvero all'AI per liberare il tuo tempo.",
      color: "bg-blue-500 text-blue-400"
    },
    {
      icon: Database,
      title: "Parlare con i tuoi dati",
      description: "Usa RAG e NotebookLM per interrogare documenti, PDF e appunti come se parlassi con un esperto.",
      color: "bg-emerald-500 text-emerald-400"
    },
    {
      icon: Image,
      title: "Content Creation",
      description: "Dalla teoria alla pratica: creare foto, video, post e materiale social di qualità in pochi secondi.",
      color: "bg-purple-500 text-purple-400"
    },
    {
      icon: Code2,
      title: "Vibe Coding",
      description: "Come creare piccole piattaforme e tool AI-powered anche se non hai mai scritto una riga di codice.",
      color: "bg-amber-500 text-amber-400"
    },
    {
      icon: ShieldAlert,
      title: "Etica & Uso Responsabile",
      description: "I rischi da evitare e come usare questi strumenti mantenendo il controllo e l'autenticità.",
      color: "bg-red-500 text-red-400"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cosa imparerai</h2>
            <p className="text-lg text-slate-300 mb-8">
              Niente fuffa teorica. Abbiamo selezionato i 5 pilastri fondamentali per renderti operativo da subito.
            </p>
            
            <div className="p-6 bg-brand-900/30 border border-brand-500/30 rounded-2xl mb-8">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquarePlus className="w-6 h-6 text-accent-400" />
                <span className="font-bold text-accent-400 uppercase tracking-wider text-sm">Bonus Interattivo</span>
              </div>
              <p className="text-white font-medium">
                Durante il workshop voterete voi l’argomento da approfondire live.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {themes.map((theme, index) => (
              <CurriculumItem key={index} {...theme} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Curriculum;