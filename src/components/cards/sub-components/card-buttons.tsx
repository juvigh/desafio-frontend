import React from 'react';
import { Button } from '../../buttons/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Separator } from '../../separator/separator';

export const CardButtons = () => {
  return (
    <div className="buttons">
      <Button
        type="cta"
        titleWeight="bold"
        expand
        icon={<FontAwesomeIcon icon={faWhatsapp} />}
        title="Falar com o corretor"
      />

      <Separator vertical size={16} />
      <Button expand titleWeight="bold" type="primary" title="Agendar visita" />
    </div>
  );
};
