import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import ToggleButton from '../ToogleButton';

import LogoImg from '../../assets/images/Logo.svg'
import { useTheme } from '../../Hooks/themes';

import {
  Container,
  Logo,
  HeaderContent,
  Options
} from './styles';

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(
    () => theme.title === 'Dark' ? true : false
  );

  const handleChangeTheme = () =>{
    setDarkTheme(!darkTheme);
    toggleTheme();
    
  }

  return (
    <Container>
        <Logo>
            <img src={LogoImg} alt="Logo"/>
            <strong>logo Name</strong>
        </Logo>
        <HeaderContent>
            <Options>
                <li>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/overview" className="link">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link to="/analitics" className="link">
                    Analitics
                  </Link>
                </li>
            </Options>
            <ToggleButton checked={darkTheme} onChange={handleChangeTheme} />
        </HeaderContent>
    </Container>
  );
}

export default Header;