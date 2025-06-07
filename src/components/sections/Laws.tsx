import React from 'react';
import law1 from '../../static/law-1.png';

interface ProjectProps {
  title: string;
  imageUrl: string;
  index: number;
}

const Project: React.FC<ProjectProps> = ({ title, imageUrl, index }) => {
  return (
    <div 
      className={`group relative opacity-0 animate-fadeIn`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <img 
        src={imageUrl} 
        alt={title}
        className="w-4/5 object-contain transition-transform duration-500"
      />
    </div>
  );
};

const Laws: React.FC = () => {
  return (
    <section id="laws" className="min-h-screen w-full bg-amber-300 text-white">
      <div className="container mx-auto">
        <h2 className="font-titan text-black text-4xl md:text-5xl lg:text-6xl font-bold pt-20 pb-16 text-center">LAW OF VIBES</h2>
        <div className="">
          <Project 
            title='law_one'
            imageUrl={law1}
            index={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Laws;