import React, { useEffect, useRef } from 'react';
import { Terminal, Github, ArrowDown, Sparkles, Code, Braces, Database, Cloud } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const terminalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const typeWriterEffect = async () => {
      if (!terminalRef.current) return;
      
      const text = `const developer = {
  name: 'KIM YangSoo',
  role: 'Backend Developer',
  expertise: ['Java', 'Spring', 'Kotlin'],
  passion: 'Building robust systems with clean code'
};`;
      
      let i = 0;
      terminalRef.current.innerHTML = '';
      
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
    <section id="home" className={`min-h-screen flex flex-col justify-center ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-sky-50 via-white to-sky-50'} pt-16`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {i % 4 === 0 && <Code size={24} />}
              {i % 4 === 1 && <Braces size={24} />}
              {i % 4 === 2 && <Database size={24} />}
              {i % 4 === 3 && <Cloud size={24} />}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-8 items-center relative">
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
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end" data-aos="fade-left">
          <div className={`w-full max-w-md p-6 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] ${
            theme === 'dark' 
              ? 'bg-gray-800/80 shadow-[0_0_15px_rgba(56,189,248,0.1)]' 
              : 'bg-white/80 shadow-xl'
          }`}>
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className={`ml-4 text-sm font-mono ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                developer.profile
              </div>
            </div>
            <div 
              ref={terminalRef} 
              className={`font-mono text-sm whitespace-pre-wrap min-h-[200px] ${
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