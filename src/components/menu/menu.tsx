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
        <MenuItem label="Home" />
        <MenuItem label="Quem Somos" />
        <MenuItem label="Contatos" />
      </div>
      <div className="button-container">
        <Button compact weight="regular" color="Accessory1" type="secondary">
          Logar
        </Button>
        <Separator horizontal size={8} />
        <Button compact weight="bold" color="NeutralWhite" type="primary">
          Cadastrar
        </Button>
      </div>
    </div>
  );
};
