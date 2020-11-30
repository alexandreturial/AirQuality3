import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DataProvider } from './Hooks/airData';

import GlobalStyles from './styles/global';

import Routes from './Routes/index';

import { useTheme } from './Hooks/themes';


function App() {

  const {theme} = useTheme();
  return (
      <ThemeProvider theme={theme}>
         <DataProvider >
          <GlobalStyles/>
          <Routes />
        </DataProvider>
      </ThemeProvider>
  );
}

export default App;
