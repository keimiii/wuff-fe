import React from 'react';
import intro_wuff from '../../static/intro_wuff.png';

const AboutWuff: React.FC = () => {
  return (
    <section id="about_wuff" className="min-h-screen bg-black text-white py-10 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 md:gap-12">
            <div className="opacity-0 animate-slideInLeft animation-delay-300">
              <h3 className="font-bold mb-4 md:mb-8 text-5xl md:text-7xl">The <span className={"text-blue-600"}>dog</span></h3>
              <h3 className="font-bold mb-4 md:mb-8 text-2xl md:text-4xl">He can't be bothered, loves his friends</h3>
              <h3 className="font-bold mb-4 md:mb-8 text-2xl md:text-4xl">Underdog with main character energy</h3>
              <h3 className="font-bold mb-4 md:mb-8 text-2xl md:text-4xl">Farming aura in his free time</h3>
            </div>
            
            <div className="opacity-0 animate-slideInRight animation-delay-600">
              <img src={intro_wuff}  alt='intro_wuff'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWuff;