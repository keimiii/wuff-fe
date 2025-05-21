import React from 'react';

interface ProjectProps {
  title: string;
  category: string;
  imageUrl: string;
  index: number;
}

const Project: React.FC<ProjectProps> = ({ title, category, imageUrl, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`group relative overflow-hidden opacity-0 animate-fadeIn`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-gray-300">{category}</p>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Modern E-commerce Platform",
      category: "Web Development",
      imageUrl: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Finance App Interface",
      category: "UI/UX Design",
      imageUrl: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Lifestyle Blog",
      category: "Web Development",
      imageUrl: "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      imageUrl: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Our Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;