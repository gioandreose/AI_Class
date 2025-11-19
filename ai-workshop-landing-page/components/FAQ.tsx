import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 pr-12">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Serve il computer?",
      answer: "Consigliato ma non obbligatorio. Vedremo molti esempi pratici, se vuoi provare in tempo reale portalo pure, altrimenti potrai seguire tutto a schermo e prendere appunti."
    },
    {
      question: "Serve esperienza con l’AI?",
      answer: "Assolutamente no! Il workshop è pensato proprio per chi parte da zero o ha usato solo ChatGPT un paio di volte. Parleremo chiaro."
    },
    {
      question: "Posso portare un amico?",
      answer: "Certamente! Ogni partecipante deve però registrarsi singolarmente per permetterci di gestire la capienza della sala."
    },
    {
      question: "E se non posso più venire?",
      answer: "Scrivici prima possibile. Essendo i posti limitati, cercheremo di liberare il tuo posto per qualcun altro in lista d'attesa."
    },
    {
      question: "È un corso tecnico per programmatori?",
      answer: "No. C'è una piccola parte di 'Vibe Coding' ma è dimostrativa su come chiunque possa creare software oggi. Il focus è sull'utilizzo pratico per tutti."
    },
    {
      question: "Riceverò materiali dopo il workshop?",
      answer: "Sì, invieremo un recap con i link agli strumenti citati e le slide della presentazione a tutti i partecipanti."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Domande Frequenti</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;