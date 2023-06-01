import React from 'react';
import { Button } from '../../buttons/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Separator } from '../../separator/separator';

export const CardButtons = () => {
  return (
    <div className="buttons">
      <Button type="cta" compact icon={<FontAwesomeIcon icon={faWhatsapp} />}>
        Falar com o corretor
      </Button>
      <Separator vertical size={16} />
      <Button type="primary" compact>
        Agendar visita
      </Button>
    </div>
  );
};
