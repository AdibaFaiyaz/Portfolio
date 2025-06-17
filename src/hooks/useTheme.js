import { useState } from 'react';

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return {
    darkMode,
    setDarkMode,
    toggleTheme
  };
};

export default useTheme;
