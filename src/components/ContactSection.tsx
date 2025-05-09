import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This form is a frontend demo only.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  const contactInfo = [
    {
      icon: <Mail className={`w-5 h-5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />,
      title: 'Email',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com'
    },
    {
      icon: <Phone className={`w-5 h-5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className={`w-5 h-5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San+Francisco,+CA'
    }
  ];

  return (
    <section id="contact" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Get In <span className={`${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>Touch</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'}`}></div>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`p-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gray-900 hover:bg-gray-850' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
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
          
          <div 
            className={`p-8 rounded-lg transform transition-all duration-300 hover:scale-[1.01] ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-teal-400 focus:ring-teal-400/50' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-teal-600 focus:ring-teal-600/50'
                    } border focus:ring-2 focus:ring-opacity-50 focus:outline-none transform hover:scale-[1.01]`}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-teal-400 focus:ring-teal-400/50' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-teal-600 focus:ring-teal-600/50'
                    } border focus:ring-2 focus:ring-opacity-50 focus:outline-none transform hover:scale-[1.01]`}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-teal-400 focus:ring-teal-400/50' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-teal-600 focus:ring-teal-600/50'
                  } border focus:ring-2 focus:ring-opacity-50 focus:outline-none transform hover:scale-[1.01]`}
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-md transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-teal-400 focus:ring-teal-400/50' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-teal-600 focus:ring-teal-600/50'
                  } border focus:ring-2 focus:ring-opacity-50 focus:outline-none transform hover:scale-[1.01]`}
                  placeholder="Hello, I'm interested in working with you on a project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`px-6 py-3 rounded-md text-white font-medium transition-all duration-300 transform hover:scale-105 flex items-center ${
                  theme === 'dark' 
                    ? 'bg-teal-500 hover:bg-teal-400' 
                    : 'bg-teal-600 hover:bg-teal-700'
                } hover:shadow-lg`}
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;