import React from 'react';
import { Button } from '../buttons/button';
import logo from '../../assets/logo-header.svg';
import './menu.css';
import { Separator } from '../separator/separator';
import { MenuItem } from './menu-item';
import { MenuContainer } from './menu-styles';

export const Menu = () => {
  return (
    <div className="menu-container" style={MenuContainer}>
      <img src={logo} alt="Logo" />
      <div className="menu-items">
        <MenuItem title="Home" />
        <MenuItem title="Quem Somos" />
        <MenuItem title="Contatos" />
      </div>
      <div className="button-container">
        <Button compact titleWeight="regular" title="Logar" type="secondary" />
        <Separator horizontal size={8} />
        <Button compact titleWeight="bold" title="Cadastrar" type="primary" />
      </div>
    </div>
  );
};
