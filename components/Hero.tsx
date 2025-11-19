import React from 'react';
import Button from './Button';
import { Users, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Abstract Background elements */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/50 border border-brand-700/50 text-brand-200 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
          </span>
          Prima Edizione Speciale
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          L’AI non è solo una Chat: <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-500">
            scopri come usarla davvero.
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          Un workshop pratico per imparare 5 utilizzi concreti dell’intelligenza artificiale da applicare subito a studio, lavoro e progetti personali.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="w-full sm:w-auto text-lg px-8 py-4">
            Prenota il tuo posto — 15€
          </Button>
          <p className="text-sm text-slate-400 mt-2 sm:mt-0">
            *Prezzo simbolico, posti limitati
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 text-slate-400 text-sm font-medium">
          <div className="flex items-center justify-center gap-2">
            <Users className="w-5 h-5 text-brand-400" />
            <span>Solo 30 posti disponibili</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-brand-400" />
            <span>Padova (Zona da definire)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;