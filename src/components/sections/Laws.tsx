import React from 'react';
import law1 from '../../static/law-1.png';
import law2 from '../../static/law-2.png';
import law3 from '../../static/law-3.png';
import law4 from '../../static/law-4.png';

interface ProjectProps {
  title: string;
  imageUrl: string;
  index: number;
  classNames: string;
}

const Project: React.FC<ProjectProps> = ({ title, imageUrl, index, classNames }) => {
  const imgClass = `md:h-1/3 object-contain transition-transform duration-500 ${classNames}`;

  return (
    <div
      className={`group relative opacity-0 animate-fadeIn`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <img
        src={imageUrl}
        alt={title}
        className={imgClass}
      />
    </div>
  );
};

const Laws: React.FC = () => {
  return (
    <section id="laws" className="min-h-screen bg-amber-300 md:p-16 text-white">
      <div className="container mx-auto">
        <h2 className="font-titan -rotate-6 text-black text-4xl md:text-5xl lg:text-6xl font-bold pt-8 md:pt-4 md:mb-16 text-center">LAW OF VIBES</h2>
        <div className="md:border-8 md:border-black md:border-solid ">
          <Project 
            title='law_one'
            imageUrl={law1}
            index={1}
            classNames='left-0 md:pt-8'
          />
          <Project
              title='law_two'
              imageUrl={law2}
              index={2}
              classNames='right-0'
          />
          <Project
              title='law_three'
              imageUrl={law3}
              index={3}
              classNames='left-0'
          />
          <Project
              title='law_four'
              imageUrl={law4}
              index={4}
              classNames='right-0 pb-8'
          />
        </div>
      </div>
    </section>
  );
};

export default Laws;