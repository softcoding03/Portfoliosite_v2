import React from 'react';
import { Briefcase, Calendar, MapPin, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Technology {
  name: string;
  logo: string;
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
        '6개월간의 실무 중심 교육과정을 통해 백엔드 개발의 전반적인 역량 습득',
        'Java 기반의 객체지향 프로그래밍과 JSP와 MVC 패턴 구조 이해 ',
        'Spring 프레임워크 기반 게시판 구현 및 Mybatis, AOP 기술 실습',
        'Oracle과 MySQL 기반 SQL 작성 및 데이터베이스 설계 경험',
        '2건의 쇼핑몰 구축 프로젝트 수행을 통해 주문, 결제, 게시판, 댓글 기능을 직접 개발',
        'Git을 통한 협업과 버전 관리 방법론 실습'
      ],
      technologies: [
        { 
          name: 'Java',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
          level: 'primary'
        },
        {
          name: 'Spring',
          logo: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
          level: 'primary'
        },
        {
          name: 'MySQL',
          logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg',
          level: 'primary'
        }
      ]
    },
    {
      id: 2,
      role: '매직에꼴 - 웹 백엔드 개발자',
      company: '매직에꼴',
      location: '서울특별시, 성동구',
      period: '2023년 8월 - 현재',
      description: [
        '교육관리 플랫폼(LMS) 백엔드 개발자로서 프로젝트 기획부터 설계, 개발까지 전반에 참여',
        'Kotlin + Spring Boot 환경에서 출결 관리 및 영상 기능 등 주요 도메인 API 개발',
        '요구사항 정리부터 프론트/디자인 팀과의 긴밀한 협업을 통해 사용자 중심 기능 구현',
        'Docker 기반 서버 환경 구성 및 GitHub Actions를 통한 CI/CD 배포 자동화 경험',
      ],
      technologies: [
        {
          name: 'Kotlin',
          logo: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
          level: 'primary'
        },
        {
          name: 'Spring Boot',
          logo: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
          level: 'primary'
        },
        {
          name: 'MySQL',
          logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg',
          level: 'primary'
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

                        {/* Technology Logos Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {exp.technologies.map((tech, i) => (
                            <div 
                              key={i}
                              className={`p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-110 ${
                                theme === 'dark' 
                                  ? 'bg-gray-900' 
                                  : 'bg-gray-50'
                              }`}
                            >
                              <div className="flex justify-center items-center h-16 mb-2">
                                <img 
                                  src={tech.logo} 
                                  alt={tech.name}
                                  className="h-12 w-12 object-contain"
                                />
                              </div>
                              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                {tech.name}
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;