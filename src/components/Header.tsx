import React from "react";
import logo from "../public/logo.png";
import logo_boop from "../public/logo_boop.png";
import logo_dex from "../public/logo_dex.png";
import logo_telegram from "../public/logo_telegram.png";
import logo_x from "../public/logo_x.png";

const Header: React.FC = () => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href={'/'}>
          <img 
            className="w-16 md:w-24 invert"
            src={logo} 
            alt={'wuff-logo'}
          />
        </a>
        <div className="flex flex-row gap-4 md:gap-8">
          {/*TODO: Add social media links*/}
          <a href={'https://x.com/wuffishere'} target="_blank"><img className="w-6 md:w-8" src={logo_x} alt={'logo-x'}/></a>
          <a href={'/'} target="_blank"><img className="w-6 md:w-8" src={logo_telegram} alt={'logo-telegram'}/></a>
          <a href={'/'} target="_blank"><img className="w-6 md:w-8" src={logo_boop} alt={'logo-boop'}/></a>
          <a href={'/'} target="_blank"><img className="w-6 md:w-8" src={logo_dex} alt={'logo-dex'}/></a>
        </div>
      </div>
    </header>
  );
};

export default Header;