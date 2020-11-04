import React from 'react';
import {Link} from 'react-router-dom';

import LogoImg from '../../assets/images/Logo.svg'

import './styles.css';

const Header: React.FC = () => {
  return (
    <header className="page-header">
        <div className="logo">
            <img src={LogoImg} alt="Logo"/>
            <strong>logo Name</strong>
        </div>
        <div className="header-content">
            <ul className="options">
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
            </ul>
        </div>
    </header>
  );
}

export default Header;