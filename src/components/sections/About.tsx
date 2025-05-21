import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 opacity-0 animate-fadeIn">About Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-slideInLeft animation-delay-300">
              <h3 className="text-xl font-medium mb-4">Our Vision</h3>
              <p className="mb-6 text-gray-300 leading-relaxed">
                We believe in creating digital experiences that transcend ordinary design. Our approach merges aesthetics with functionality, 
                delivering solutions that not only look exceptional but perform flawlessly.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Every project we undertake is driven by a commitment to excellence and a passion for innovation.
              </p>
            </div>
            
            <div className="opacity-0 animate-slideInRight animation-delay-600">
              <h3 className="text-xl font-medium mb-4">Our Approach</h3>
              <p className="mb-6 text-gray-300 leading-relaxed">
                We don't believe in one-size-fits-all solutions. Each client's needs are unique, and we tailor our approach accordingly. 
                Our process begins with deep understanding, evolves through collaborative creation, and culminates in meticulous execution.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The result is a product that authentically represents your brand while engaging your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;