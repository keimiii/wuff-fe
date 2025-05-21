import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationMenuProps {
  inverted?: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ inverted = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  return (
    <div ref={menuRef} className="relative z-50">
      {/* Menu Button */}
      <button
        aria-label="Toggle Menu"
        className={`p-2 focus:outline-none transition-colors duration-300 ease-in-out ${
          inverted ? 'text-white' : 'text-black'
        }`}
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-end mb-6">
            <button 
              aria-label="Close Menu" 
              className="p-2 text-black focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex-1">
            <ul className="space-y-6 text-2xl">
              <li>
                <a href="#home" className="hover:opacity-70 transition-opacity duration-200 block">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-70 transition-opacity duration-200 block">About</a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-70 transition-opacity duration-200 block">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:opacity-70 transition-opacity duration-200 block">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-70 transition-opacity duration-200 block">Contact</a>
              </li>
            </ul>
          </nav>
          
          <div className="mt-auto pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">&copy; 2025 Horizon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;