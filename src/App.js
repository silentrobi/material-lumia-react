import { useState, useMemo, useEffect } from 'react';
import { Home } from './pages';
import { lightTheme, darkTheme } from './theme';
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core';
import ThemeContext from './context/Context';
function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => {
    if (isDark) {
      localStorage.setItem("preferred-theme", "light")
      setIsDark(false)
    } else {
      localStorage.setItem("preferred-theme", "dark")
      setIsDark(true)
    }
  }

  const memoizedTheme =
    useMemo(() => {
      if (isDark) {
        return createTheme({
          ...darkTheme
        });
      }
      return createTheme({
        ...lightTheme
      });
    }, [isDark]);

  useEffect(() => {
    const theme = localStorage.getItem("preferred-theme")
    if (theme) {
      const themePreference = localStorage.getItem("preferred-theme")
      if (themePreference === "dark") {
        setIsDark(true)
      } else {
        setIsDark(false)
      }
    } else {
      localStorage.setItem("preferred-theme", "light")
      setIsDark(true)
    }
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
        <ThemeProvider theme={memoizedTheme}>
          <Home />
        </ThemeProvider>
      </ThemeContext.Provider >
    </>
  );
}

export default App;
