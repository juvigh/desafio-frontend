import React from 'react';
import { Button } from '../buttons/button';
import logo from '../../assets/logo-header.svg';
import './menu.css';
import { Separator } from '../separator/separator';
import { MenuItem } from './menu-item';

export const Menu = () => {
  return (
    <div className="menu-container">
      <img src={logo} alt="Logo" />
      <div className="menu-items">
        <MenuItem title="Home" />
        <MenuItem title="Quem Somos" />
        <MenuItem title="Contatos" />
      </div>
      <div className="button-container">
        <Button compact titleWeight="regular" title="Logar" color="Accessory1" type="secondary" />
        <Separator horizontal size={8} />
        <Button compact titleWeight="bold" title="Cadastrar" color="NeutralWhite" type="primary" />
      </div>
    </div>
  );
};
