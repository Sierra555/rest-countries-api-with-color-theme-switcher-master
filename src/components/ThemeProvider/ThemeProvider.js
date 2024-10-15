import React from 'react';
import {LIGHT_COLORS, DARK_COLORS} from '/src/constants.js';

export const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');
  const COLORS = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  React.useEffect(() => {
    const savedValue = window.localStorage.getItem('color-theme');

    if (savedValue) {
      setTheme(savedValue);
    }
  }, []);

  React.useEffect(() => {
  window.localStorage.setItem('color-theme', theme);
  }, [theme]);

  return (
  <ThemeContext.Provider value={{theme, setTheme, COLORS}}>{children}</ThemeContext.Provider>
);
}

export default ThemeProvider;
