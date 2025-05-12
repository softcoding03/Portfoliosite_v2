import React from 'react';
import { Heart, Code, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-full mb-8 transition-all duration-300 transform hover:scale-110 ${
              theme === 'dark'
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'
            }`}
            aria-label="Scroll to top"
            data-aos="fade-up"
          >
            <ArrowUp size={20} />
          </button>
          
          <div 
            className={`text-center max-w-2xl mx-auto mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
          </div>
          
          <div 
            className="flex items-center justify-center space-x-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            
          </div>
          
          <div 
            className={`flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="ml-1">&copy; {new Date().getFullYear()} KIM YANG SOO. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;