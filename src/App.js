import { useContext, useReducer, useState } from 'react';
import { Home } from './pages';
import { lightTheme, darkTheme } from './theme';
import Theme, { ThemeDispatchContext } from './context/themeDispatchContext';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
          <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
