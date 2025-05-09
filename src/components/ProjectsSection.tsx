import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Lightbulb, Target, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProjectImage {
  url: string;
  caption: string;
}

interface ProjectInsight {
  title: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: ProjectImage[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  outcomes: string[];
  insights: ProjectInsight[];
}

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projects: Project[] = [
    {
      id: 1,
      title: '매직에꼴 - 교육 플랫폼 사이트 구축 및 개발',
      description: '출결 관리 기능 신규 도입을 위한 요구사항 정의 및 DB/도메인 설계 주도, 기능 개발',
      longDescription: 'Built a comprehensive e-commerce platform using microservices architecture, handling millions of transactions monthly. The system includes services for product management, order processing, inventory tracking, and real-time analytics.',
      images: [
        {
          url: 'https://images.pexels.com/photos/8348457/pexels-photo-8348457.jpeg',
          caption: 'System Architecture Diagram'
        },
        {
          url: 'https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg',
          caption: 'Performance Metrics Dashboard'
        },
        {
          url: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
          caption: 'Service Communication Flow'
        }
      ],
      tags: ['Microservices', 'Node.js', 'Kubernetes', 'MongoDB', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.example.com',
      features: [
        'Distributed transaction management',
        'Event-driven architecture',
        'Real-time inventory synchronization',
        'Automated scaling based on traffic patterns'
      ],
      techStack: [
        'Node.js & Express for services',
        'MongoDB for product and order data',
        'Redis for caching and session management',
        'Kafka for event streaming',
        'Docker & Kubernetes for orchestration'
      ],
      challenges: [
        'Maintaining data consistency across services',
        'Implementing efficient service discovery',
        'Handling partial system failures gracefully'
      ],
      outcomes: [
        '99.99% system uptime',
        '40% reduction in response times',
        'Successfully handling 100K+ concurrent users'
      ],
      insights: [
        {
          title: 'Event-Driven Architecture',
          description: 'Learned the importance of event-driven patterns in distributed systems. Implementing event sourcing helped maintain data consistency and enabled easy system recovery.'
        },
        {
          title: 'Performance Optimization',
          description: 'Discovered that proper caching strategies and database indexing can dramatically improve response times. Implemented a multi-layer caching approach using Redis.'
        },
        {
          title: 'System Resilience',
          description: 'Implemented circuit breakers and fallback mechanisms to handle service failures gracefully. This significantly improved system reliability during partial outages.'
        }
      ]
    },
    {
      id: 2,
      title: '매직에꼴 - 교육 플랫폼 사이트 구축 및 개발',
      description: '플랫폼 내 구현된 영상 관리 기능 및 시스템을 외부 API로 마이그레이션 진행',
      longDescription: 'Developed a real-time analytics engine capable of processing and analyzing massive amounts of data streams. The system provides instant insights and visualizations for business intelligence.',
      images: [
        {
          url: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg',
          caption: 'Analytics Dashboard'
        },
        {
          url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
          caption: 'Data Processing Pipeline'
        },
        {
          url: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
          caption: 'Real-time Monitoring'
        }
      ],
      tags: ['Python', 'Apache Kafka', 'Elasticsearch', 'Docker', 'AWS'],
      githubUrl: 'https://github.com',
      features: [
        'Real-time data processing',
        'Custom analytics pipelines',
        'Automated reporting system',
        'Interactive dashboards'
      ],
      techStack: [
        'Python for data processing',
        'Apache Kafka for stream processing',
        'Elasticsearch for data storage and search',
        'Docker for containerization',
        'AWS for cloud infrastructure'
      ],
      challenges: [
        'Handling large-scale data streams',
        'Optimizing query performance',
        'Implementing fault tolerance'
      ],
      outcomes: [
        'Processing 1M+ events per second',
        'Sub-second query response times',
        'Reduced infrastructure costs by 60%'
      ],
      insights: [
        {
          title: 'Stream Processing Optimization',
          description: 'Discovered that batch processing certain types of data alongside streaming can improve overall system efficiency. Implemented a hybrid approach that reduced processing costs.'
        },
        {
          title: 'Data Partitioning Strategies',
          description: 'Learned the importance of proper data partitioning in distributed systems. Implemented custom partitioning logic that improved query performance by 300%.'
        },
        {
          title: 'Monitoring and Alerting',
          description: 'Developed comprehensive monitoring systems that helped identify and prevent potential issues before they affected users.'
        }
      ]
    },
    {
      id: 3,
      title: '비트캠프 - 스포츠 플랫폼 사이트 구축 및 개발(팀프로젝트)',
      description: 'High-performance distributed caching solution',
      longDescription: 'Created a distributed caching system that provides ultra-fast data access with intelligent cache invalidation and replication strategies. The system is used in production by multiple high-traffic applications.',
      images: [
        {
          url: 'https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg',
          caption: 'Cache Architecture'
        },
        {
          url: 'https://images.pexels.com/photos/8386431/pexels-photo-8386431.jpeg',
          caption: 'Performance Metrics'
        },
        {
          url: 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg',
          caption: 'Replication Strategy'
        }
      ],
      tags: ['Go', 'Redis', 'Protocol Buffers', 'Kubernetes'],
      githubUrl: 'https://github.com',
      features: [
        'Distributed cache coordination',
        'Automatic failover',
        'Cache invalidation strategies',
        'Real-time replication'
      ],
      techStack: [
        'Go for core implementation',
        'Redis for data storage',
        'Protocol Buffers for serialization',
        'Kubernetes for orchestration'
      ],
      challenges: [
        'Ensuring cache consistency',
        'Minimizing network overhead',
        'Implementing efficient failover'
      ],
      outcomes: [
        '95% cache hit rate',
        'Sub-millisecond response times',
        'Zero downtime during failovers'
      ],
      insights: [
        {
          title: 'Cache Invalidation Patterns',
          description: 'Implemented various cache invalidation strategies and learned that a combination of TTL and event-based invalidation provides the best balance.'
        },
        {
          title: 'Network Optimization',
          description: 'Discovered that proper network configuration and protocol selection can significantly impact distributed system performance.'
        },
        {
          title: 'Failure Recovery',
          description: 'Developed automated failure recovery mechanisms that helped maintain system stability during unexpected outages.'
        }
      ]
    },
    {
      id: 4,
      title: '비트캠프 - 쇼핑몰 사이트 구축 및 개발',
      description: 'Modern API gateway with service mesh capabilities',
      longDescription: 'Implemented a sophisticated API gateway that handles routing, authentication, rate limiting, and service mesh functionality. The system serves as the entry point for all client requests in a microservices architecture.',
      images: [
        {
          url: 'https://images.pexels.com/photos/8386428/pexels-photo-8386428.jpeg',
          caption: 'Gateway Architecture'
        },
        {
          url: 'https://images.pexels.com/photos/8386433/pexels-photo-8386433.jpeg',
          caption: 'Traffic Flow'
        },
        {
          url: 'https://images.pexels.com/photos/8386439/pexels-photo-8386439.jpeg',
          caption: 'Security Implementation'
        }
      ],
      tags: ['Node.js', 'TypeScript', 'GraphQL', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://api.example.com',
      features: [
        'Advanced rate limiting',
        'JWT authentication',
        'Request transformation',
        'Circuit breaking'
      ],
      techStack: [
        'Node.js & TypeScript',
        'GraphQL for API aggregation',
        'Redis for rate limiting',
        'Docker for deployment'
      ],
      challenges: [
        'Implementing efficient routing',
        'Managing service discovery',
        'Ensuring security compliance'
      ],
      outcomes: [
        'Handling 50K+ requests per second',
        'Reduced API latency by 60%',
        'Improved security posture'
      ],
      insights: [
        {
          title: 'API Design Patterns',
          description: 'Learned that consistent API design patterns and proper documentation are crucial for maintainability and developer experience.'
        },
        {
          title: 'Security Implementation',
          description: 'Implemented multiple layers of security and learned the importance of defense in depth in API gateways.'
        },
        {
          title: 'Performance Optimization',
          description: 'Discovered various techniques for optimizing API performance, including response caching and request batching.'
        }
      ]
    }
  ];

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className={`${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>Projects</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${theme === 'dark' ? 'bg-sky-400' : 'bg-sky-600'}`}></div>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A selection of my best backend development projects showcasing various technologies and solutions ✨
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className={`${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
              data-aos="fade-up"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-video">
                  <img
                    src={project.images[0].url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          theme === 'dark'
                            ? 'bg-sky-400/10 text-sky-300'
                            : 'bg-sky-50 text-sky-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div 
              className={`relative max-w-6xl w-full rounded-xl shadow-2xl ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } animate-modal-slide overflow-hidden`}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className={`absolute right-4 top-4 p-2 rounded-full z-10 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <X size={20} />
              </button>

              {/* Image slider */}
              <div className="relative aspect-video rounded-t-xl overflow-hidden">
                <img
                  src={selectedProject.images[currentImageIndex].url}
                  alt={selectedProject.images[currentImageIndex].caption}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation buttons */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 backdrop-blur-sm">
                  <p className="text-sm">
                    {selectedProject.images[currentImageIndex].caption}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark'
                          ? 'bg-sky-400/10 text-sky-300'
                          : 'bg-sky-50 text-sky-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {selectedProject.title}
                </h3>

                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedProject.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Key Features
                    </h4>
                    <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`mr-2 mt-1.5 h-1.5 w-1.5 rounded-full ${theme === 'dark' ? 'bg-sky-400' : 'bg-sky-600'}`}></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Tech Stack
                    </h4>
                    <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.techStack.map((tech, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`mr-2 mt-1.5 h-1.5 w-1.5 rounded-full ${theme === 'dark' ? 'bg-sky-400' : 'bg-sky-600'}`}></span>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Insights Section */}
                <div className="mb-8">
                  <h4 className={`text-lg font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <Lightbulb className={`mr-2 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`} />
                    Key Insights & Learnings
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.insights.map((insight, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${
                          theme === 'dark' 
                            ? 'bg-gray-800 hover:bg-gray-750' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        } transition-all duration-300`}
                      >
                        <h5 className={`font-medium mb-2 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>
                          {insight.title}
                        </h5>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {insight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className={`text-lg font-semibold mb-3 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      <Target className={`mr-2 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`} />
                      Challenges Overcome
                    </h4>
                    <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`mr-2 mt-1.5 h-1.5 w-1.5 rounded-full ${theme === 'dark' ? 'bg-sky-400' : 'bg-sky-600'}`}></span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold mb-3 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      <Zap className={`mr-2 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`} />
                      Key Outcomes
                    </h4>
                    <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`mr-2 mt-1.5 h-1.5 w-1.5 rounded-full ${theme === 'dark' ? 'bg-sky-400' : 'bg-sky-600'}`}></span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`flex items-center px-6 py-3 rounded-lg transition-all transform hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-sky-500 hover:bg-sky-400 text-white'
                        : 'bg-sky-600 hover:bg-sky-700 text-white'
                    }`}
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center px-6 py-3 rounded-lg transition-all transform hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-gray-800 hover:bg-gray-700 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;