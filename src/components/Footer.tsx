import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Logo inverted={true} />
          
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-300">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <address className="not-italic text-gray-400">
              <p>123 Design Street</p>
              <p>San Francisco, CA 94103</p>
              <p className="mt-2">info@horizon.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2025 Horizon. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;