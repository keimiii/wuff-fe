import React from 'react';
import { ArrowDown } from 'lucide-react';
import bg from '../../static/grass_bg.png';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center relative"
             style={{
                 background: `url(${bg})`,
                 backgroundPosition: 'center 45%',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
             }}
    >
      <div className="container h-3/5 mx-auto px-4 text-center">
        <h1 className="top-4/5 font-titan text-white text-4xl md:text-6xl lg:text-7xl mb-2">
          MEET WUFF
        </h1>
      </div>
      
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 cursor-pointer"
        onClick={scrollToNextSection}
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;