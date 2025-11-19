import React from 'react';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Curriculum from './components/Curriculum';
import WhyUs from './components/WhyUs';
import Agenda from './components/Agenda';
import About from './components/About';
import Details from './components/Details';
import FAQ from './components/FAQ';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-brand-200 selection:text-brand-900">
      <main>
        <Hero />
        <TargetAudience />
        <Curriculum />
        <WhyUs />
        <Agenda />
        <About />
        <Details />
        <FAQ />
      </main>
      
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;