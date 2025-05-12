import React from 'react';
import { useTheme } from '../context/ThemeContext';

const AboutSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            About <span className={`${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>Me</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-12 ${theme === 'dark' ? 'bg-sky-400' : 'bg-sky-600'}`}></div>
          <div className={`space-y-6 text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            <p>
              팀과 함께 일할 수 있는 법을 늘 고민합니다.
            </p>
            <p>
              정리되지 않은 아이디어에도 가능성을 먼저 보고, 함께 구체적인 기능으로 만들어냅니다.
            </p>
            <p>
              기술적으로 단단한 구조를 만들되, 그 안에 사용자 입장에서의 편리함을 꼭 담고 싶습니다.
            </p>
            <p>
              저는 백엔드 개발자이지만, 필요하다면 기획을 먼저 그리고, 프론트와의 경계도 스스럼없이 넘나듭니다.
            </p>
            <p>
              결국 내가 만든 기능을 누군가가 더 편하게, 더 빠르게 쓸 수 있다면 그게 가장 큰 보람이라고 생각합니다.
            </p>
            <p>
              문제 해결 그 자체보다, 사용자에게 가 닿는 해결을 만들고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;