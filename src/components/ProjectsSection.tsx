import React, { useState } from 'react';
import { Github, ExternalLink, Lightbulb, Target, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images?: {
    src: string;
    alt: string;
  }[];
  tags: string[];
  githubUrl: string;
  liveUrl: string | null;
  period: string;
  teamSize: string;
  role: string;
  techStack: {
    frontend?: string[];
    backend?: string[];
    cloud?: string[];
    api?: string[];
    tools?: string[];
    security?: string[];
  };
  features: {
    title: string;
    description: string;
  }[];
  challenges: string[];
  outcomes: string[];
  insights: {
    title: string;
    description: string;
  }[];
}

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Wecandeo API 마이그레이션',
      description: '기존 VOD 영상 관리 시스템을 Wecandeo API 기반으로 마이그레이션하여 비용 효율성과 보안성을 개선한 프로젝트',
      longDescription: '기존 사내 VOD 영상 등록 및 재생 기능을 외부 플랫폼인 Wecandeo API 기반으로 마이그레이션하는 프로젝트였습니다. 기존 시스템 구조를 유지하며 API를 전환하여 사용자 경험의 변화 없이 비용 효율성을 개선하는 것을 목표로 했습니다. 특히 DRM 보안 시스템 구축과 영상 상태값 세분화를 통해 사용자 경험을 개선하고, 운영 효율성을 크게 향상시켰습니다.',
      images: [
        {
          src: '/images/projects/wecandeo1.png',
          alt: 'Wecandeo Project Screenshot 1'
        },
        {
          src: '/images/projects/wecandeo2.png',
          alt: 'Wecandeo Project Screenshot 2'
        },
        {
          src: '/images/projects/wecandeo3.png',
          alt: 'Wecandeo Project Screenshot 3'
        }
      ],
      tags: ['Kotlin', 'Spring Boot', 'REST API', 'DRM', 'AES-256', 'HMAC SHA-256', 'JWT', 'Object Storage'],
      githubUrl: '#',
      liveUrl: null,
      period: '2024.11 ~ 2024.12 (2개월)',
      teamSize: '1명',
      role: '주도적 개발자',
      techStack: {
        backend: ['Kotlin', 'Spring Boot', 'REST API'],
        api: ['Wecandeo API', 'Object Storage'],
        security: ['JWT 인증', 'DRM (Widevine, PlayReady, FairPlay)', 'AES-256 암호화', 'HMAC SHA-256 해시']
      },
      features: [
        {
          title: '영상 관리 시스템 마이그레이션',
          description: '기존 영상 등록 및 재생 흐름을 철저히 분석하고 구조를 파악한 후, Wecandeo API를 분석하여 연동을 구현했습니다. 기존 시스템의 구조를 유지하면서도 새로운 API로의 전환을 원활하게 진행했습니다.'
        },
        {
          title: '보안 시스템 구축',
          description: '안전한 동영상 스트리밍을 위해 Widevine, PlayReady, FairPlay 등 다양한 DRM 방식을 지원하는 보안 시스템을 구축했습니다. 보안 정책을 설정하고 토큰 기반 인증 시스템을 구현하여 콘텐츠의 보안성을 크게 향상시켰습니다.'
        },
        {
          title: '시스템 개선 및 최적화',
          description: '영상 상태값을 세분화하여 업로드중/완료/인코딩중/완료/실패/성공 등 다양한 상태를 관리할 수 있도록 했습니다. 또한 재사용 가능한 유틸리티 클래스를 구현하고 API 호출을 추상화하여 유지보수성을 크게 향상시켰습니다.'
        }
      ],
      challenges: [
        '인코딩 중 상태 인식 오류가 발생했으나, 상태값을 세분화하고 이를 UX에 반영하여 문제를 해결했습니다. 이를 통해 사용자에게 더 정확한 영상 상태 정보를 제공할 수 있게 되었습니다.'
      ],
      outcomes: [
        '상태값 세분화를 통해 사용자 경험(UX)을 크게 개선했습니다. 사용자들은 영상의 현재 상태를 더 명확하게 파악할 수 있게 되었습니다.',
        '기존 스트리밍 성능을 유지하면서도 비용을 1/4로 절감했습니다. 이는 Wecandeo API의 효율적인 활용과 시스템 최적화를 통해 달성했습니다.',
        'DRM 시스템 도입으로 콘텐츠 보안성이 크게 향상되었습니다. 불법 복제를 방지하고 수익을 보호할 수 있게 되었습니다.',
        '자동화된 토큰 생성/관리와 간편한 동영상 업로드/관리 기능을 통해 운영 효율성이 크게 향상되었습니다.'
      ],
      insights: [
        {
          title: '외부 API 연동 프로젝트의 일정 관리',
          description: '포스트모템 회고를 진행하며 외부 API 연동 시 일정 버퍼와 리스크 대응 전략의 필요성을 체감했습니다. 특히 API 문서화가 부족한 경우나 예상치 못한 응답이 발생할 수 있는 상황에 대한 대비가 중요하다는 것을 배웠습니다.'
        },
        {
          title: 'API 설계 역량 강화',
          description: 'UX와 에러 핸들링까지 고려한 API 설계 역량을 강화하는 중요성을 배웠습니다. 단순히 기능 구현에만 집중하는 것이 아니라, 사용자 경험과 에러 상황까지 고려한 설계가 필요하다는 것을 실무적으로 경험했습니다.'
        },
        {
          title: '확장성 있는 시스템 구축',
          description: '모듈화된 설계 및 설정 기반 구성을 통해 다양한 DRM 시스템 지원 및 환경 변경에 유연하게 대응할 수 있는 확장성 있는 시스템 구축 경험을 쌓았습니다. 이는 향후 다른 보안 시스템 도입이나 API 변경 시에도 큰 도움이 될 것으로 기대됩니다.'
        }
      ]
    },
    {
      id: 2,
      title: '출결관리 시스템 개발',
      description: '기존 시스템에 존재하지 않던 출결 기능을 처음부터 설계하고 도입한 프로젝트',
      longDescription: '기존 시스템에 존재하지 않던 출결 기능을 처음부터 설계하고 도입하는 프로젝트였습니다. 초기 기획 화면만 있는 상태에서 시작하여 요구사항 정의부터 구조 설계, API 개발까지 주도적으로 진행했습니다. 특히 확장성을 고려한 설계와 모듈화를 통해 향후 기능 추가가 용이한 시스템을 구축했습니다.',
      images: [
        {
          src: '/images/projects/attendance1.png',
          alt: 'Attendance Project Screenshot 1'
        },
        {
          src: '/images/projects/attendance2.png',
          alt: 'Attendance Project Screenshot 2'
        },
        {
          src: '/images/projects/attendance3.png',
          alt: 'Attendance Project Screenshot 3'
        }
      ],
      tags: ['Kotlin', 'Spring Boot', 'MySQL', 'Exposed DAO', 'REST API', 'Swagger'],
      githubUrl: '#',
      liveUrl: null,
      period: '2024.12 ~ 2025.1 (2개월)',
      teamSize: '1명',
      role: '주도적 개발자',
      techStack: {
        backend: ['Kotlin', 'Spring Boot', 'MySQL', 'Exposed DAO'],
        api: ['REST API', 'Swagger']
      },
      features: [
        {
          title: '요구사항 정의 및 설계',
          description: '클라이언트와 긴밀한 협업을 통해 기능 명세를 도출하고, 출결 상태를 모델링하여 도메인을 설계했습니다. 특히 확장성을 고려하여 DB 스키마와 enum 기반 상태를 정의했으며, 향후 기능 추가가 용이하도록 설계했습니다.'
        },
        {
          title: 'API 개발 및 문서화',
          description: '상세한 API 명세를 작성하고 프론트엔드 팀과 프로토콜을 협의했습니다. 출결 등록/수정/조회/집계 API를 개발하고, Swagger를 활용하여 API 문서화를 진행했습니다. 이를 통해 프론트엔드 개발자들이 쉽게 API를 이해하고 활용할 수 있도록 했습니다.'
        },
        {
          title: '모듈화 설계 및 구현',
          description: '출석 관리와 클래스 그룹 관리를 독립적인 모듈로 구현했습니다. 각 모듈은 자체적인 책임을 가지고 있으며, 모듈 간의 결합도를 최소화하여 유지보수성과 확장성을 높였습니다.'
        }
      ],
      challenges: [
        '초기 요구사항이 불명확했으나, 클라이언트와의 지속적인 커뮤니케이션을 통해 요구사항을 정제했습니다. 특히 실제 사용자 입장에서 필요한 기능들을 파악하고 반영하는 데 중점을 두었습니다.'
      ],
      outcomes: [
        '명세 정리부터 개발까지 전 단계를 주도적으로 이끌어냈습니다. 이를 통해 프로젝트의 방향성을 명확히 하고, 개발 효율을 향상시켰습니다.',
        '요구사항을 철저히 정제하여 전체 개발 효율을 향상시켰습니다. 불필요한 기능 개발을 방지하고, 핵심 기능에 집중할 수 있었습니다.',
        '효율적인 출석 관리 시스템 구축으로 운영 효율성이 향상되었습니다. 특히 대규모 클래스의 출석 관리가 용이해졌습니다.',
        '직관적인 클래스 그룹 관리 기능을 통해 사용자 경험이 향상되었습니다. 복잡한 출석 관리 업무가 간소화되었습니다.'
      ],
      insights: [
        {
          title: '확장성 있는 설계의 중요성',
          description: '확장성과 변경 유연성을 고려한 설계 경험을 쌓았습니다. 특히 enum 기반 상태 관리와 모듈화된 설계는 향후 기능 추가 시 큰 도움이 되었습니다.'
        },
        {
          title: '기획 커뮤니케이션 역량 강화',
          description: '실사용자 입장에서 생각하며 기획 커뮤니케이션 역량을 강화할 수 있었습니다. 이를 통해 더 실용적이고 사용자 친화적인 기능을 개발할 수 있었습니다.'
        },
        {
          title: '모듈화의 이점',
          description: '모듈화된 설계가 새로운 기능 추가에 얼마나 용이한지 실무적으로 경험했습니다. 특히 출석 관리와 클래스 그룹 관리의 독립적인 모듈화는 향후 기능 확장 시 큰 장점이 되었습니다.'
        }
      ]
    },
    {
      id: 3,
      title: '굿즈 쇼핑몰',
      description: 'Web MVC 모델 구조 및 외부 API/라이브러리를 활용한 아이돌 굿즈 판매 쇼핑몰 사이트',
      longDescription: '개인 미니 프로젝트로 진행한 아이돌 굿즈 판매 쇼핑몰입니다. 회원 관리, 상품 관리, 구매 관리 등 핵심 기능을 구현했습니다. 특히 외부 API를 활용한 결제 시스템과 주소 검색 기능을 구현하여 사용자 경험을 향상시켰습니다.',
      images: [
        {
          src: '/images/projects/shop1.png',
          alt: 'Shop Project Screenshot 1'
        },
        {
          src: '/images/projects/shop2.png',
          alt: 'Shop Project Screenshot 2'
        },
        {
          src: '/images/projects/shop3.png',
          alt: 'Shop Project Screenshot 3'
        }
      ],
      tags: ['Java', 'MyBatis', 'Oracle', 'Bootstrap', 'jQuery', 'PortOne', 'Naver SENS'],
      githubUrl: 'https://github.com/softcoding03/Shop_MiniProject',
      liveUrl: null,
      period: '2023.02 ~ 2023.03 (1개월)',
      teamSize: '1명',
      role: '개발자',
      techStack: {
        frontend: ['HTML5', 'CSS', 'JavaScript', 'BootStrap3', 'jQuery', 'Ajax'],
        backend: ['Java(JDK 1.8)', 'Apache Tomcat 9.0', 'MyBatis', 'Oracle 10g'],
        api: ['PortOne', 'Naver SENS', 'Daum 주소']
      },
      features: [
        {
          title: '회원 관리 시스템',
          description: '회원의 CRUD 기능을 구현하고, Daum 주소 API를 활용하여 사용자 친화적인 주소 검색 기능을 구현했습니다. 이를 통해 회원가입과 주소 입력 과정이 크게 개선되었습니다.'
        },
        {
          title: '상품 관리 시스템',
          description: '상품의 CRUD 기능을 구현하고, 무한 스크롤과 AutoComplete를 활용하여 사용자 친화적인 상품 목록과 검색 기능을 구현했습니다. 특히 대량의 상품 데이터를 효율적으로 처리할 수 있도록 설계했습니다.'
        },
        {
          title: '구매 관리 시스템',
          description: '구매 관련 CRUD 기능을 구현하고, PortOne API를 활용하여 안전한 결제 프로세스를 구현했습니다. 또한 Naver SENS API를 활용하여 구매/환불 시 SMS 알림을 자동으로 발송하는 기능을 구현했습니다.'
        }
      ],
      challenges: [
        '결제 완료 페이지 새로고침 시 발생하는 중복 결제 문제를 POST-Redirect-GET 패턴을 적용하여 해결했습니다. 이를 통해 웹 브라우저의 동일 요청 반복 문제를 방지할 수 있었습니다.',
        '외부 API 연동 시 발생하는 다양한 에러 상황에 대한 처리를 구현했습니다. 특히 결제 실패나 SMS 발송 실패 등의 상황에서 사용자에게 적절한 피드백을 제공하도록 했습니다.',
        '사용자 경험을 고려한 UI/UX 설계를 진행했습니다. 특히 모바일 환경에서의 사용성을 개선하고, 직관적인 인터페이스를 구현했습니다.'
      ],
      outcomes: [
        '웹 MVC 모델 구조에 대한 이해도를 향상시켰습니다. 특히 모델, 뷰, 컨트롤러의 역할과 상호작용에 대한 실무적인 경험을 쌓았습니다.',
        '외부 API 통합 및 활용 능력을 향상시켰습니다. PortOne, Naver SENS, Daum 주소 API 등 다양한 외부 서비스를 효과적으로 연동했습니다.',
        '사용자 중심의 기능 설계 경험을 쌓았습니다. 실제 사용자의 니즈를 파악하고 이를 반영한 기능을 구현했습니다.'
      ],
      insights: [
        {
          title: 'POST-Redirect-GET 패턴의 중요성',
          description: '결제 완료 페이지 새로고침 시 POST 요청이 중복 발생하는 문제를 POST-Redirect-GET 패턴을 적용하여 해결했습니다. 이를 통해 웹 브라우저의 동일 요청 반복 문제를 방지하는 방법을 배웠습니다.'
        },
        {
          title: '외부 API 연동의 중요성',
          description: '외부 API를 활용하여 핵심 기능을 구현하는 방법을 배웠습니다. 특히 API 문서화와 에러 처리의 중요성을 실무적으로 경험했습니다.'
        },
        {
          title: '사용자 경험 중심의 설계',
          description: '사용자 경험을 고려한 UI/UX 설계의 중요성을 배웠습니다. 특히 모바일 환경에서의 사용성과 직관적인 인터페이스 설계에 대한 경험을 쌓았습니다.'
        }
      ]
    },
    {
      id: 4,
      title: 'YaguRoute',
      description: 'Spring 프레임워크 및 Web MVC 모델을 적용한 야구 관련 서비스 통합 플랫폼',
      longDescription: '5명의 팀원과 함께 개발한 야구 관련 서비스 통합 플랫폼입니다. 커뮤니티 게시판, 티켓 판매/구매 등 다양한 기능을 구현했습니다. 특히 클라우드 환경에서의 서비스 배포와 운영 경험을 쌓았습니다.',
      images: [
        {
          src: '/images/projects/yagu1.png',
          alt: 'YaguRoute Project Screenshot 1'
        },
        {
          src: '/images/projects/yagu2.png',
          alt: 'YaguRoute Project Screenshot 2'
        },
        {
          src: '/images/projects/yagu3.png',
          alt: 'YaguRoute Project Screenshot 3'
        }
      ],
      tags: ['Spring', 'Spring Boot', 'MySQL', 'Bootstrap', 'jQuery', 'Naver Cloud'],
      githubUrl: 'https://github.com/softcoding03/YaguRoute',
      liveUrl: null,
      period: '2023.04 ~ 2023.06 (3개월)',
      teamSize: '5명',
      role: '개발자 (기여도: 소스코드 9.5%, 커밋 22.4%)',
      techStack: {
        frontend: ['HTML5', 'CSS', 'JavaScript', 'BootStrap3', 'jQuery', 'Ajax'],
        backend: ['Java(JDK 1.8)', 'Apache Tomcat 9.0', 'MyBatis', 'MySQL Cloud'],
        cloud: ['Naver Cloud (Server, VPC, Cloud DB for MySQL, CDN+, GDNS)'],
        api: ['Spring', 'Spring Boot', 'PortOne', 'Naver SENS', 'Naver Optimizer', 'Object Storage', 'SummerNote'],
        tools: ['Git', 'Notion']
      },
      features: [
        {
          title: '커뮤니티 게시판',
          description: '게시물 및 댓글의 CRUD 기능을 구현하고, SummerNote API를 활용하여 풍부한 에디터 기능을 제공했습니다. 또한 Naver Object Storage와 Optimizer를 활용하여 이미지 업로드 기능을 구현했습니다.'
        },
        {
          title: '티켓 판매/구매 시스템',
          description: '티켓의 CRUD 기능을 구현하고, PortOne API를 활용하여 안전한 결제 프로세스를 구현했습니다. 또한 Naver SENS를 활용하여 결제/취소 시 SMS 알림을 자동으로 발송하는 기능을 구현했습니다.'
        },
        {
          title: '결제 및 SMS 모듈화',
          description: 'PortOne을 이용한 결제 기능과 Naver SENS를 이용한 SMS 발송 기능을 모듈화하여 다른 팀원이 재사용할 수 있도록 구현했습니다. 이를 통해 코드의 재사용성과 유지보수성을 크게 향상시켰습니다.'
        }
      ],
      challenges: [
        'CORS 문제 해결을 통한 Naver SENS API 연동: 서버 측에서 API 요청을 처리하는 방식으로 문제를 해결했습니다.',
        '팀원들과의 효율적인 협업을 위한 코드 모듈화: 재사용 가능한 모듈을 설계하고 구현하여 팀 전체의 개발 효율을 향상시켰습니다.',
        '클라우드 환경에서의 서비스 배포 및 운영: Naver Cloud를 활용한 서비스 배포와 운영 경험을 쌓았습니다.'
      ],
      outcomes: [
        'Spring 프레임워크 활용 능력을 향상시켰습니다. 특히 Spring Boot를 활용한 개발 경험을 쌓았습니다.',
        '팀 프로젝트 협업 경험을 쌓았습니다. Git을 활용한 버전 관리와 Notion을 활용한 문서화 경험을 쌓았습니다.',
        '클라우드 서비스 활용 능력을 향상시켰습니다. Naver Cloud의 다양한 서비스를 활용한 경험을 쌓았습니다.'
      ],
      insights: [
        {
          title: 'CORS 문제 해결 경험',
          description: 'Naver SENS API 사용 시 발생한 CORS 문제를 서버 측에서 API 요청을 처리하는 방식으로 해결했습니다. 이를 통해 CORS 문제 해결 방법과 보안 관련 지식을 쌓았습니다.'
        },
        {
          title: '유연하고 재사용 가능한 소스 코드의 필요성',
          description: '결제 및 SMS 발송 기능을 모듈화하여 다른 팀원들이 쉽게 사용할 수 있도록 구현하며 유연한 코드 설계의 중요성을 실무적으로 배웠습니다.'
        },
        {
          title: '주기적인 형상 관리의 중요성',
          description: '매일 저녁 9시에 Git을 이용한 형상 관리를 필수적으로 진행하며 주기적인 커밋과 버전 통합의 중요성을 몸소 느꼈습니다.'
        }
      ]
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className={`${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>Projects</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${theme === 'dark' ? 'bg-sky-400' : 'bg-sky-600'}`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className={`p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
              }`}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
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

              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.description}
              </p>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <p>기간: {project.period}</p>
                <p>인원: {project.teamSize}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal}></div>
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <div 
                className={`relative max-w-6xl w-full rounded-xl shadow-2xl ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                } animate-modal-slide overflow-hidden`}
              >
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

                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="relative aspect-video rounded-t-xl overflow-hidden">
                    <img
                      src={selectedProject.images[currentImageIndex].src}
                      alt={selectedProject.images[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                    />
                    
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
                  </div>
                )}

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
                        프로젝트 개요
                      </h4>
                      <div className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p><span className="font-medium">기간:</span> {selectedProject.period}</p>
                        <p><span className="font-medium">인원:</span> {selectedProject.teamSize}</p>
                        <p><span className="font-medium">역할:</span> {selectedProject.role}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        기술 스택
                      </h4>
                      <div className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {selectedProject.techStack.frontend && (
                          <p><span className="font-medium">Frontend:</span> {selectedProject.techStack.frontend.join(', ')}</p>
                        )}
                        {selectedProject.techStack.backend && (
                          <p><span className="font-medium">Backend:</span> {selectedProject.techStack.backend.join(', ')}</p>
                        )}
                        {selectedProject.techStack.cloud && (
                          <p><span className="font-medium">Cloud:</span> {selectedProject.techStack.cloud.join(', ')}</p>
                        )}
                        {selectedProject.techStack.api && (
                          <p><span className="font-medium">API/Library:</span> {selectedProject.techStack.api.join(', ')}</p>
                        )}
                        {selectedProject.techStack.tools && (
                          <p><span className="font-medium">Tools:</span> {selectedProject.techStack.tools.join(', ')}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className={`text-lg font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      <Lightbulb className={`mr-2 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`} />
                      주요 기능
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg ${
                            theme === 'dark' 
                              ? 'bg-gray-800 hover:bg-gray-750' 
                              : 'bg-gray-50 hover:bg-gray-100'
                          } transition-all duration-300`}
                        >
                          <h5 className={`font-medium mb-2 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>
                            {feature.title}
                          </h5>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className={`text-lg font-semibold mb-3 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        <Target className={`mr-2 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`} />
                        도전 과제
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
                        주요 성과
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

                  {selectedProject.insights && selectedProject.insights.length > 0 && (
                    <div className="mb-8">
                      <h4 className={`text-lg font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        <Lightbulb className={`mr-2 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`} />
                        프로젝트 인사이트
                      </h4>
                      <div className="space-y-4">
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
                  )}

                  <div className="flex gap-4">
                    {selectedProject.githubUrl !== '#' && (
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
                    )}
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
      </div>
    </section>
  );
};

export default ProjectsSection;