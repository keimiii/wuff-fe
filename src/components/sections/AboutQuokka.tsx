import React from 'react';
import intro_quokka from '../../static/intro_quokka.png';

const AboutQuokka: React.FC = () => {
  return (
    <section id="about_quokka" className="min-h-screen bg-black text-white py-10 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 md:gap-12">
            <div className="opacity-0 animate-slideInLeft animation-delay-900">
              <h3 className="font-bold mb-4 md:mb-8 text-5xl md:text-7xl">The <span className={"text-emerald-500"}>sidekick</span></h3>
              <h3 className="font-bold mb-4 md:mb-8 text-2xl md:text-4xl">Annoying. Idiotic.</h3>
              <h3 className="font-bold mb-4 md:mb-8 text-2xl md:text-4xl">World would be a better place without him</h3>
            </div>
            
            <div className="opacity-0 animate-slideInRight animation-delay-1200">
              <img src={intro_quokka}  alt='intro_quokka'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQuokka;