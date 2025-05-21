import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen bg-white flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Design That
          <span className="block md:inline"> Inspires</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-700">
          Creating beautiful digital experiences that elevate your brand
        </p>
        <button 
          className="inline-flex items-center px-6 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Discover More
        </button>
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