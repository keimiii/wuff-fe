import React from 'react';
import logo from '../public/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="mix-blend-difference">
        <img className="w-24 " src={logo}  alt={'wuff-logo'}/>
    </div>
  );
};

export default Logo;