import React from 'react';
import { Server, Database, Code2, Coffee, Rocket, Star, Trophy, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  
  const stats = [
    { value: '5+', label: 'Years Experience', icon: <Server size={20} /> },
    { value: '20+', label: 'Projects Completed', icon: <Code2 size={20} /> },
    { value: '10+', label: 'Databases Mastered', icon: <Database size={20} /> },
    { value: '∞', label: 'Cups of Coffee', icon: <Coffee size={20} /> },
  ];

  const highlights = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Backend Specialist",
      description: "Expert in building scalable and robust server-side applications"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about solving complex technical challenges"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Performance Optimizer",
      description: "Skilled in optimizing system performance and efficiency"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaborator",
      description: "Experienced in working with cross-functional teams"
    }
  ];

  return (
    <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            About <span className={`${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>Me</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${theme === 'dark' ? 'bg-sky-400' : 'bg-sky-600'}`}></div>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Passionate backend developer crafting efficient and reliable systems ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg transform transition-all duration-300 hover:scale-105 ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
                  }`}
                >
                  <div className={`mb-4 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>
                    {highlight.icon}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {highlight.title}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className={`px-5 py-2 ${
                  theme === 'dark' 
                    ? 'bg-sky-500 hover:bg-sky-400 transform hover:scale-105' 
                    : 'bg-sky-600 hover:bg-sky-700 transform hover:scale-105'
                } text-white font-medium rounded-md transition-all duration-300`}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className={`px-5 py-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white transform hover:scale-105' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 transform hover:scale-105'
                } font-medium rounded-md transition-all duration-300`}
              >
                Contact Me
              </a>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transform transition-all duration-300 hover:scale-[1.02]`}>
              <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                My Development Philosophy
              </h3>
              <div className="space-y-6">
                <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className={`p-2 rounded-md mr-4 ${theme === 'dark' ? 'bg-gray-800 text-sky-400' : 'bg-sky-100 text-sky-700'}`}>01</div>
                  <div>
                    <h4 className={`font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Code Quality & Maintainability
                    </h4>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Writing clean, well-documented code that's easy to maintain and extend.
                    </p>
                  </div>
                </div>
                <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className={`p-2 rounded-md mr-4 ${theme === 'dark' ? 'bg-gray-800 text-sky-400' : 'bg-sky-100 text-sky-700'}`}>02</div>
                  <div>
                    <h4 className={`font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Scalability & Performance
                    </h4>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Building systems that can scale with growing demands while maintaining optimal performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className={`p-2 rounded-md mr-4 ${theme === 'dark' ? 'bg-gray-800 text-sky-400' : 'bg-sky-100 text-sky-700'}`}>03</div>
                  <div>
                    <h4 className={`font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Security First
                    </h4>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Implementing best security practices and staying updated with potential vulnerabilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <div className={`p-2 rounded-md mr-4 ${theme === 'dark' ? 'bg-gray-800 text-sky-400' : 'bg-sky-100 text-sky-700'}`}>04</div>
                  <div>
                    <h4 className={`font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Continuous Learning
                    </h4>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Always learning new technologies and approaches to improve development practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`p-6 rounded-lg text-center ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
              } transform transition-all duration-300 hover:scale-110`}
            >
              <div className="flex justify-center mb-2">
                <div className={`p-3 rounded-full ${
                  theme === 'dark' ? 'bg-gray-800 text-sky-400' : 'bg-sky-100 text-sky-700'
                }`}>
                  {stat.icon}
                </div>
              </div>
              <h3 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;