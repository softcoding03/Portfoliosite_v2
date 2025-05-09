import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp, Target, Award, Zap, Star, Code, Database, Cloud } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Metric {
  icon: JSX.Element;
  value: string;
  label: string;
}

interface Technology {
  name: string;
  icon: JSX.Element;
  level: 'primary' | 'secondary';
}

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: Technology[];
  metrics: Metric[];
}

const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  
  const experiences: Experience[] = [
    {
      id: 1,
      role: '비트캠프 - JAVA 웹 개발자 과정 수료',
      company: '비트캠프',
      location: '서울특별시 강남구',
      period: '2022년 12월 - 2023년 6월',
      description: [
        'Java 문법, 객체지향 개념, JDBC 등을 활용한 백엔드 기초 학습',
        'Oracle과 MySQL을 활용한 SQL 쿼리 작성 및 DB 설계 학습',
        'JSP, Servlet, JavaScript 기반의 웹 UI 구현 및 MVC 패턴 학습',
        'Spring 프레임워크 기반 게시판 개발 및 AOP, Mybatis 적용 경험',
        '쇼핑몰 구축 프로젝트 2건 수행을 통해 주문·결제·장바구니 기능 개발 경험',
        'Git을 활용한 협업 경험 및 버전 관리 학습'
      ],
      technologies: [
        { name: 'Java', icon: <Code size={16} />, level: 'primary' },
        { name: 'JavaScript', icon: <Code size={16} />, level: 'primary' },
        { name: 'Spring', icon: <Code size={16} />, level: 'primary' },
        { name: 'MySQL', icon: <Database size={16} />, level: 'primary' },
        { name: 'jQuery', icon: <Cloud size={16} />, level: 'secondary' },
        { name: 'Naver cloud', icon: <Cloud size={16} />, level: 'secondary' },
        { name: 'Git', icon: <Cloud size={16} />, level: 'secondary' }
      ],
      metrics: [
        {
          icon: <TrendingUp size={20} className="text-emerald-500" />,
          value: '99.99%',
          label: 'System Uptime'
        },
        {
          icon: <Zap size={20} className="text-amber-500" />,
          value: '65%',
          label: 'Performance Boost'
        },
        {
          icon: <Target size={20} className="text-sky-500" />,
          value: '2M+',
          label: 'Daily API Requests'
        }
      ]
    },
    {
      id: 2,
      role: '매직에꼴 - 웹 백엔드 개발자',
      company: '매직에꼴',
      location: 'Boston, MA',
      period: '2023년 8월 - 현재',
      description: [
        'Kotlin + Spring Boot 기반 Restful API 개발 수행',
        '출결관리, 영상 업로드, 인증 기능 등 주요 도메인의 DB 설계 및 API 개발',
        'MySQL 데이터베이스 설계 및 최적화',
        'Docker 기반 서버 운용 및 GitAction CI/CD 배포 경험',
        '주요 프로젝트: 교육관리 플랫폼(LMS) 구축, Wecandeo API 마이그레이션, 출결 기능 신규 설계'
      ],
      technologies: [
        { name: 'Kotlin', icon: <Code size={16} />, level: 'primary' },
        { name: 'SpringBoot', icon: <Code size={16} />, level: 'primary' },
        { name: 'MySQL', icon: <Database size={16} />, level: 'primary' },
        { name: 'Kotlin Exposed DAO', icon: <Database size={16} />, level: 'secondary' },
        { name: 'Git', icon: <Cloud size={16} />, level: 'secondary' },
        { name: 'Docker', icon: <Cloud size={16} />, level: 'secondary' }
      ],
      metrics: [
        {
          icon: <TrendingUp size={20} className="text-emerald-500" />,
          value: '45%',
          label: 'Query Performance'
        },
        {
          icon: <Award size={20} className="text-purple-500" />,
          value: '500K+',
          label: 'Active Users'
        },
        {
          icon: <Zap size={20} className="text-amber-500" />,
          value: '40%',
          label: 'Response Time'
        }
      ]
    }
  ];

  return (
    <section id="experience" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Work <span className={`${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>Experience</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${theme === 'dark' ? 'bg-sky-400' : 'bg-sky-600'}`}></div>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            My professional journey and achievements in backend development ✨
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Center Timeline Line */}
            <div 
              className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            ></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 ${
                      theme === 'dark' 
                        ? 'border-gray-700 bg-sky-400' 
                        : 'border-white bg-sky-600'
                    } flex items-center justify-center animate-pulse`}
                  >
                    <Briefcase size={12} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Empty space for alignment */}
                    <div className={`hidden md:block ${index % 2 === 0 ? 'order-2' : 'order-1'}`}></div>
                    
                    {/* Experience Card */}
                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      <div 
                        className={`p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02] ${
                          theme === 'dark' 
                            ? 'bg-gray-800 hover:shadow-[0_0_15px_rgba(56,189,248,0.1)]' 
                            : 'bg-white hover:shadow-xl'
                        }`}
                      >
                        <div className="flex flex-wrap justify-between items-start mb-4">
                          <div>
                            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                              {exp.role}
                            </h3>
                            <div className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              {exp.company}
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              theme === 'dark' 
                                ? 'bg-sky-400/10 text-sky-400' 
                                : 'bg-sky-100 text-sky-800'
                            }`}>
                              <Calendar size={12} className="mr-1" />
                              {exp.period}
                            </div>
                            <div className={`flex items-center text-sm mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                              <MapPin size={14} className="mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span 
                                key={i}
                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                                  tech.level === 'primary'
                                    ? theme === 'dark'
                                      ? 'bg-sky-400/20 text-sky-300'
                                      : 'bg-sky-100 text-sky-800'
                                    : theme === 'dark'
                                      ? 'bg-gray-700 text-gray-300'
                                      : 'bg-gray-100 text-gray-700'
                                } transition-all duration-300 hover:scale-105`}
                              >
                                <span className="mr-1">{tech.icon}</span>
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {exp.metrics.map((metric, i) => (
                            <div 
                              key={i}
                              className={`p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 ${
                                theme === 'dark' 
                                  ? 'bg-gray-900' 
                                  : 'bg-gray-50'
                              }`}
                            >
                              <div className="flex justify-center mb-2">
                                {metric.icon}
                              </div>
                              <div className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {metric.value}
                              </div>
                              <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <Star size={16} className={`mr-2 mt-1 flex-shrink-0 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className={`inline-flex items-center px-6 py-3 rounded-md text-white font-medium ${
                theme === 'dark' 
                  ? 'bg-sky-500 hover:bg-sky-400' 
                  : 'bg-sky-600 hover:bg-sky-700'
              } transition-colors duration-300`}
            >
              Let's Work Together ✨
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;