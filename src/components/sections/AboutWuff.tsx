import React from 'react';
import intro_wuff from '../../static/intro_wuff.png';

const AboutWuff: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-10 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-slideInLeft animation-delay-300">
              <h3 className="font-bold mb-4 text-7xl">the <span className={"text-blue-600"}>artist</span></h3>
              <h3 className="font-bold mb-4 text-7xl">the one and only</h3>
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