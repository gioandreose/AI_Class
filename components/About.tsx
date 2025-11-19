import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 relative">
             {/* Placeholder for image composition */}
             <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-brand-100 rounded-full transform -translate-x-4 translate-y-4"></div>
                <div className="relative bg-slate-200 w-full h-full rounded-3xl overflow-hidden shadow-xl flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300">
                    <span className="text-4xl font-bold text-slate-400">Gio & Leo</span>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                    <p className="font-bold text-brand-600 text-lg">AI Enthusiasts</p>
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Chi siamo: Gio & Leo</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                Non siamo guru in giacca e cravatta. Siamo <strong>Giovanni Andreose</strong> e <strong>Leonardo Bertocco</strong>, due appassionati che usano l'Intelligenza Artificiale ogni singolo giorno.
              </p>
              <p>
                Abbiamo deciso di organizzare questa prima edizione perché siamo stanchi di vedere l'AI trattata come una "magia" inaccessibile o solo come un chatbot per scrivere email.
              </p>
              <p>
                Il nostro obiettivo è semplice: <strong>rendere l’AI accessibile, pratica e utile a tutti</strong>, smontando i miti e mostrando gli strumenti reali.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;