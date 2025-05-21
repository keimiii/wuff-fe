import React from 'react';
import { Paintbrush, Code, Smartphone, Globe } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 opacity-0 animate-fadeIn`} style={{ animationDelay: `${delay}ms` }}>
      <div className="text-black mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive, engaging user experiences that delight and inspire.",
      icon: <Paintbrush size={36} />,
      delay: 100
    },
    {
      title: "Web Development",
      description: "Building responsive, high-performance websites with modern technologies.",
      icon: <Code size={36} />,
      delay: 300
    },
    {
      title: "Mobile Applications",
      description: "Developing cross-platform mobile apps that deliver exceptional user experiences.",
      icon: <Smartphone size={36} />,
      delay: 500
    },
    {
      title: "Digital Strategy",
      description: "Crafting comprehensive digital strategies to maximize your online presence.",
      icon: <Globe size={36} />,
      delay: 700
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;