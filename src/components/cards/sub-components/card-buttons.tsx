import React from 'react';
import { Button } from '../../buttons/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Separator } from '../../separator/separator';

export const CardButtons = () => {
  return (
    <div className="buttons">
      <Button type="cta" icon={<FontAwesomeIcon icon={faWhatsapp} />}>
        Falar com o corretor
      </Button>
      <Separator vertical size={16} />
      <Button type="primary">Agendar visita</Button>
    </div>
  );
};
