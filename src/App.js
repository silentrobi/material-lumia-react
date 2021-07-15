import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Home } from './pages';
import theme from './theme';
import './App.css';
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
