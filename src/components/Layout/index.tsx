import React from 'react';

import Header from '../../components/Header/header';

import { Container, Main } from './styles';

const Layout: React.FC = ({children}) => {
  return(
    <Container>
        <Header />
        <Main>
            {children}
        </Main>
    </Container>
  );
}

export default Layout;