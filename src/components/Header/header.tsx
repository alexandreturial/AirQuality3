import React from 'react';

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
                <li>Statics</li>
                <li>Overview</li>
                <li>Dashboard</li>
                <li>Analitics</li>
            </ul>
        </div>
    </header>
  );
}

export default Header;