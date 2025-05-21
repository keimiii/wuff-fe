import React from 'react';
import { Layers } from 'lucide-react';

interface LogoProps {
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ inverted = false }) => {
  return (
    <div className="flex items-center gap-2">
      <Layers 
        className={`transition-colors duration-300 ease-in-out ${
          inverted ? 'text-white' : 'text-black'
        }`} 
        size={28} 
      />
      <span 
        className={`font-bold text-xl transition-colors duration-300 ease-in-out ${
          inverted ? 'text-white' : 'text-black'
        }`}
      >
        Horizon
      </span>
    </div>
  );
};

export default Logo;