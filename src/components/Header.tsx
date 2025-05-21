import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);
      
      // Check if header is over a dark section
      const darkSections = document.querySelectorAll('.bg-black');
      if (darkSections.length) {
        const headerBottom = 80; // Approximate header height
        
        for (const section of darkSections) {
          const rect = section.getBoundingClientRect();
          // If header overlaps with a dark section
          if (rect.top < headerBottom && rect.bottom > 0) {
            setIsOverDarkSection(true);
            return;
          }
        }
      }
      
      setIsOverDarkSection(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initialize on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Determine header style based on scroll position and section color
  const headerBg = isScrolled
    ? isOverDarkSection 
      ? 'bg-black' 
      : 'bg-white'
    : 'bg-transparent';
  
  // Need to invert colors when over dark background
  const shouldInvertColors = isOverDarkSection || (isScrolled && headerBg === 'bg-black');
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerBg} ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo inverted={shouldInvertColors} />
        <NavigationMenu inverted={shouldInvertColors} />
      </div>
    </header>
  );
};

export default Header;