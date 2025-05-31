import React from 'react';
import logo from '../public/logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
        <img className="w-1/4 mix-blend-difference" src={logo}  alt={'wuff-logo'}/>
    </div>
  );
};

export default Logo;