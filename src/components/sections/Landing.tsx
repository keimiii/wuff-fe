import React from 'react';
import { ArrowDown } from 'lucide-react';
import bg from '../../static/wuff_grass.mp4';
import '../../styles/landing.css';

const Landing: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about_wuff');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center relative">
      <video id='bg-video' className='videoTag h-dvh' autoPlay loop muted>
        <source src={bg} type='video/mp4'/>
      </video>
      <div className="container h-2/5 mx-auto px-4 text-center">
        <h1 className="font-titan text-white text-5xl md:text-6xl lg:text-7xl mb-2">
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

export default Landing;