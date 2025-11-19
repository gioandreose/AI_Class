import React from 'react';
import Button from './Button';
import { MapPin, Clock, Ticket, CalendarDays } from 'lucide-react';

const DetailItem: React.FC<{ icon: React.ElementType, title: string, value: string, sub?: string }> = ({ icon: Icon, title, value, sub }) => (
    <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-2xl border border-slate-700">
        <Icon className="w-8 h-8 text-brand-400 mb-4" />
        <h3 className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-2">{title}</h3>
        <p className="text-white text-xl font-bold">{value}</p>
        {sub && <p className="text-slate-500 text-sm mt-1">{sub}</p>}
    </div>
);

const Details: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Dettagli Pratici</h2>
            <p className="text-slate-400 mt-2">Tutto quello che devi sapere per partecipare.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <DetailItem 
                icon={MapPin} 
                title="Dove" 
                value="Padova" 
                sub="Location esatta via email" 
            />
            <DetailItem 
                icon={CalendarDays} 
                title="Quando" 
                value="TBD" 
                sub="Definito in base alle adesioni" 
            />
            <DetailItem 
                icon={Clock} 
                title="Durata" 
                value="3 Ore" 
                sub="2h30 workshop + rinfresco" 
            />
            <DetailItem 
                icon={Ticket} 
                title="Prezzo" 
                value="15€" 
                sub="Tutto incluso" 
            />
        </div>

        <div className="flex justify-center">
            <Button className="text-lg px-10 py-4 shadow-lg shadow-brand-900/50">
                Prenota ora — 15€
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Details;