import React from 'react';
import { Display } from '../../styles/typography/display';
import { Body1 } from '../../styles/typography/body-1';
import { Button } from '../buttons/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { LargeLabel } from '../../styles/typography/label';
import './hero.css';
import picture from './assets/picture.svg';
import { Separator } from '../separator/separator';

export const Hero = () => {
  const handleBuscarClick = () => {
    alert('Em construção');
  };

  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src={picture} alt="foto de duas mulheres e dois cachorros sentados na cama" />
      </div>
      <Separator horizontal size={40} />
      <div className="hero-content">
        <Display color="CTA">Encontre seu espaço no mundo!</Display>
        <Separator vertical size={4} />
        <Body1 color="NeutralDark">Os melhores imóveis de acordo com as suas preferências.</Body1>
        <Separator vertical size={16} />
        <div className="hero-button">
          <Button type="primary" compact expand icon={<FontAwesomeIcon icon={faSearch} />} onClick={handleBuscarClick}>
            <LargeLabel weight="semiBold" color="NeutralWhite">
              Buscar
            </LargeLabel>
          </Button>
        </div>
      </div>
    </section>
  );
};
