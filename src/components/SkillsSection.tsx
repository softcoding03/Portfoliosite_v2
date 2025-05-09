import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'databases', label: 'Databases' },
    { id: 'devops', label: 'DevOps' },
    { id: 'tools', label: 'Tools' }
  ];
  
  const skills: Skill[] = [
    // Languages
    { name: 'JavaScript', level: 90, category: 'languages' },
    { name: 'TypeScript', level: 85, category: 'languages' },
    { name: 'Python', level: 80, category: 'languages' },
    { name: 'Java', level: 75, category: 'languages' },
    { name: 'Go', level: 65, category: 'languages' },
    { name: 'SQL', level: 85, category: 'languages' },
    
    // Frameworks
    { name: 'Node.js', level: 90, category: 'frameworks' },
    { name: 'Express.js', level: 90, category: 'frameworks' },
    { name: 'NestJS', level: 80, category: 'frameworks' },
    { name: 'Django', level: 75, category: 'frameworks' },
    { name: 'Spring Boot', level: 70, category: 'frameworks' },
    { name: 'GraphQL', level: 80, category: 'frameworks' },
    
    // Databases
    { name: 'MongoDB', level: 85, category: 'databases' },
    { name: 'PostgreSQL', level: 90, category: 'databases' },
    { name: 'MySQL', level: 85, category: 'databases' },
    { name: 'Redis', level: 80, category: 'databases' },
    { name: 'Elasticsearch', level: 70, category: 'databases' },
    
    // DevOps
    { name: 'Docker', level: 85, category: 'devops' },
    { name: 'Kubernetes', level: 75, category: 'devops' },
    { name: 'CI/CD', level: 80, category: 'devops' },
    { name: 'AWS', level: 80, category: 'devops' },
    { name: 'Terraform', level: 70, category: 'devops' },
    
    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'REST API Design', level: 95, category: 'tools' },
    { name: 'Microservices', level: 85, category: 'tools' },
    { name: 'Testing', level: 80, category: 'tools' },
    { name: 'System Design', level: 85, category: 'tools' }
  ];
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Technical <span className={`${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>Skills</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'}`}></div>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up" data-aos-delay="100">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  filter === category.id
                    ? theme === 'dark'
                      ? 'bg-teal-500 text-white'
                      : 'bg-teal-600 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                data-aos="fade-up"
                data-aos-delay={150 + index * 50}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className={`p-6 rounded-lg transform transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-750' 
                    : 'bg-white hover:shadow-lg'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </h3>
                  <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;