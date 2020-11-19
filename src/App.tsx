import React from 'react';
import { ThemeProvider } from 'styled-components';
import { TesteProvider } from './Hooks/testeData';

import GlobalStyles from './styles/global';

import Routes from './Routes';

import { useTheme } from './Hooks/themes';
import { useTeste } from './Hooks/testeData';


function App() {

  const {theme} = useTheme();
  return (
      <ThemeProvider theme={theme}>
         <TesteProvider >
          <GlobalStyles/>
          <Routes />
        </TesteProvider>
      </ThemeProvider>
  );
}

export default App;
