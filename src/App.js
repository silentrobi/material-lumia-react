import { useState } from 'react';
import { Home } from './pages';
import { Theme } from './theme';
import { ThemeContext } from './context/context';
import './App.css';
function App() {
  //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    console.log("cscs");
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Theme darkMode={darkMode}>
        <ThemeContext.Provider value={{ darkMode, handleDarkModeToggle }}>
          <Home />
        </ThemeContext.Provider>
      </Theme>
    </>
  );
}

export default App;
