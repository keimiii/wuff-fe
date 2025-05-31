import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import React from "react";

const Header: React.FC = () => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <NavigationMenu />
      </div>
    </header>
  );
};

export default Header;