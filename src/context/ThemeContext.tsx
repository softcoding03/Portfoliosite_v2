import React, { createContext, useContext, ReactNode } from 'react';

type ThemeType = 'dark';

interface ThemeContextType {
  theme: ThemeType;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme: ThemeType = 'dark';

  // 항상 다크모드 적용
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.backgroundColor = '#111827'; // bg-gray-900
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;