import React, { useState, useEffect } from 'react';
import Button from './Button';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 z-50 shadow-2xl md:hidden animate-fade-in-up">
      <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
        <div className="flex flex-col">
            <span className="font-bold text-slate-900 text-sm">Workshop AI</span>
            <span className="text-xs text-slate-500">30 posti • 15€</span>
        </div>
        <Button className="px-6 py-2 text-sm w-auto">
          Prenota Ora
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;