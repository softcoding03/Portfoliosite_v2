import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Github, ArrowDown, Sparkles, Code, Braces, Database, Cloud } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const terminalRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const typeWriterEffect = async () => {
      if (!terminalRef.current) return;
      
      const text = `public class Developer {
    private final String name = "KIM YangSoo";
    private final String role = "Backend Developer";
    private final String[] expertise = {
        "System Architecture",
        "Clean Code",
        "User-Centric Design"
    };
    
    public String getMission() {
        return "Code for Systems, Think for People";
    }
    
    public boolean isPassionate() {
        return true;
    }
}`;
      
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
          setTimeout(type, Math.random() * 40 + 20);
        }
      };
      
      type();
    };

    setTimeout(typeWriterEffect, 500);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Interactive Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
        style={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
          transition: 'background-position 0.3s ease-out',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute transition-transform duration-1000 ease-out"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `
                  translate(
                    ${(mousePosition.x - 50) * 0.1}px,
                    ${(mousePosition.y - 50) * 0.1}px
                  ) 
                  rotate(${Math.random() * 360}deg)
                `,
              }}
            >
              {i % 4 === 0 && <Code className="text-sky-400" size={24} />}
              {i % 4 === 1 && <Braces className="text-emerald-400" size={24} />}
              {i % 4 === 2 && <Database className="text-purple-400" size={24} />}
              {i % 4 === 3 && <Cloud className="text-pink-400" size={24} />}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-8 items-center relative">
        <div className="order-2 md:order-1" data-aos="fade-right">
          <div className="mb-4 inline-flex items-center gap-2 bg-sky-400/10 text-sky-400 rounded-full px-4 py-1 text-sm font-medium">
            <Sparkles size={16} className="animate-float" />
            Backend Developer
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
            <span className="text-sky-400">KIM YangSoo</span><br/><br/>
            <span>
              Code for Systems,
            </span><br/>
            <span>
              Think for People
            </span>
          </h1>
          <p className="text-lg mb-8 max-w-xl text-gray-300">
            백엔드를 넘어, 팀과 협업하고 사용자를 생각하는 개발자 김양수입니다. ✨
          </p>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end" data-aos="fade-left">
          <div className="w-full max-w-md backdrop-blur-sm bg-gray-800/80 rounded-lg border border-gray-700 shadow-[0_0_30px_rgba(56,189,248,0.15)] transform transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center">
                <Code size={16} className="text-sky-400 mr-2" />
                <span className="text-sm font-mono text-gray-400">Developer.java</span>
              </div>
            </div>
            <div className="p-6">
              <div 
                ref={terminalRef} 
                className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-sky-400"
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center pb-8" data-aos="fade-up" data-aos-delay="500">
        <a 
          href="#about" 
          className="animate-bounce p-2 rounded-full text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;