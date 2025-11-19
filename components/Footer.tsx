import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-500 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold text-slate-300">L’AI non è solo una Chat</p>
          <p className="text-sm mt-1">Organizzato da Gio & Leo</p>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Tutti i diritti riservati.</p>
          <p className="mt-1 text-slate-600">Fatto con ❤️ a Padova</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;