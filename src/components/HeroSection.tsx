import React, { useEffect, useRef } from 'react';
import { Terminal, Github, Linkedin, ArrowDown, Sparkles, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const terminalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const typeWriterEffect = async () => {
      if (!terminalRef.current) return;
      
      const text = "const developer = {\n  name: 'John Doe',\n  role: 'Backend Developer',\n  skills: ['Node.js', 'Python', 'Java', 'Databases'],\n  passion: 'Building robust and scalable systems'\n};";
      let i = 0;
      
      const type = () => {
        if (i < text.length && terminalRef.current) {
          const char = text.charAt(i);
          if (char === '\n') {
            terminalRef.current.innerHTML += '<br>';
          } else {
            terminalRef.current.innerHTML += char;
          }
          i++;
          setTimeout(type, Math.random() * 60 + 30);
        }
      };
      
      type();
    };

    setTimeout(typeWriterEffect, 500);
  }, []);

  return (
    <section id="home" className={`min-h-screen flex flex-col justify-center ${theme === 'dark' ? 'bg-gradient-radial from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-radial from-sky-50 via-white to-sky-50'} pt-16`}>
      <div className="container mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1" data-aos="fade-right">
          <div className={`mb-4 inline-flex items-center gap-2 ${theme === 'dark' ? 'bg-sky-400/10 text-sky-400' : 'bg-sky-600/10 text-sky-700'} rounded-full px-4 py-1 text-sm font-medium`}>
            <Sparkles size={16} className="animate-float" />
            Backend Developer
          </div>
          
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <span className={`${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>KIM YangSoo</span><br/><br/>
            <span>
              Code for Systems,
            </span><br/>
            <span>
              Think for People
            </span>
          </h1>
          <p className={`text-lg mb-8 max-w-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            백엔드를 넘어, 팀과 협업하고 사용자를 생각하는 개발자 김양수입니다. ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className={`px-6 py-3 flex items-center justify-center gap-2 ${
                theme === 'dark' 
                  ? 'bg-sky-500 hover:bg-sky-400' 
                  : 'bg-sky-600 hover:bg-sky-700'
              } text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
            >
              <Rocket size={18} className="animate-float" />
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className={`px-6 py-3 ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100'
              } font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center`}
            >
              View Projects 🚀
            </a>
          </div>
          <div className="mt-8 flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } transition-all duration-300 transform hover:scale-110`}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } transition-all duration-300 transform hover:scale-110`}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end" data-aos="fade-left">
          <div 
            className={`w-full max-w-md p-4 rounded-lg transform transition-all duration-300 hover:scale-[1.02] ${
              theme === 'dark' ? 'bg-gray-800 shadow-[0_0_15px_rgba(56,189,248,0.1)]' : 'bg-white shadow-xl'
            }`}
          >
            <div className="flex items-center mb-4">
              <Terminal size={24} className={`mr-2 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`} />
              <div className={`text-sm font-mono ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>developer.profile</div>
            </div>
            <div 
              ref={terminalRef} 
              className={`font-mono text-sm whitespace-pre-wrap min-h-60 ${
                theme === 'dark' ? 'text-sky-400' : 'text-sky-600'
              }`}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center pb-8" data-aos="fade-up" data-aos-delay="500">
        <a 
          href="#about" 
          className={`animate-bounce p-2 rounded-full ${
            theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          } transition-all duration-300 transform hover:scale-110`}
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;