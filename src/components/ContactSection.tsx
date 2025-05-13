import React from 'react';
import { Mail, Phone, MapPin, Github, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  
  const contactInfo = [
    {
      icon: <Mail className={`w-5 h-5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />,
      title: 'Email',
      value: 'didtn1233@gmail.com',
      link: 'mailto:didtn1233@gmail.com'
    },
    {
      icon: <Phone className={`w-5 h-5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />,
      title: 'Phone',
      value: '+82 010 9783 3446',
      link: 'tel:+8201097833446'
    },
    {
      icon: <MapPin className={`w-5 h-5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />,
      title: 'Location',
      value: '서울',
      link: 'https://maps.google.com/?q=Seoul'
    },
    {
      icon: <Github className={`w-5 h-5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />,
      title: 'GitHub',
      value: '@softcoding03',
      link: 'https://github.com/softcoding03'
    },
    {
      icon: <BookOpen className={`w-5 h-5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />,
      title: 'Tistory',
      value: 'softpattern.tistory.com',
      link: 'https://softpattern.tistory.com/'
    }
  ];

  return (
    <section id="contact" className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Interactive Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="relative w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-current transform transition-transform duration-1000 ease-out"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.25,
                transform: `scale(${Math.random() * 2 + 1})`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto mb-16 text-center" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Get In <span className={`${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>Touch</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'}`}></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gray-900 hover:bg-gray-850' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full transform transition-all duration-300 group-hover:scale-110 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow'
                  }`}>
                    {item.icon}
                  </div>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;