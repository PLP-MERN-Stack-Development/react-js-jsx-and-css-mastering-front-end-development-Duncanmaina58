import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// KEEP useTheme as a named export
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  // ... (rest of the logic remains the same)
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Make ThemeProvider the default export (or explicitly named)
export default ThemeProvider;