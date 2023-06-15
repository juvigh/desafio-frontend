import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardButtons } from './sub-components/card-buttons';
import { CardContact } from './sub-components/card-contact';
import { CardHeader } from './sub-components/card-header';
import { IconText } from './sub-components/icon-text';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { CardContainer } from './sub-components/card-container';
import './sub-components/sub-components.css';
import { InfoItem } from './sub-components/info-item';
import { Divider } from '../divider/divider';

interface CardRentalProps {
  condominium: number;
  iptu: number;
  name: string;
  workplace: string;
  address: string;
  image: string;
  serviceFee: number;
  grossRent: number;
}

export const CardRental = ({
  condominium,
  iptu,
  name,
  workplace,
  address,
  image,
  serviceFee,
  grossRent,
}: CardRentalProps) => {
  const [isHearted, setIsHearted] = useState(false);

  const handleHeartClick = () => {
    setIsHearted(!isHearted);
  };

  const price = (condominium + iptu + serviceFee + grossRent).toFixed(2);
  return (
    <CardContainer>
      <CardHeader title={`${price}`} />
      <Divider />
      <InfoItem label="Condomínio" value={condominium} />
      <InfoItem label="IPTU" value={iptu} />
      <InfoItem label="Taxa de Serviços" value={serviceFee} />
      <InfoItem label="Aluguel Bruto" value={grossRent} />
      <Divider />
      <InfoItem label="Total" value={price} mediumPrice />
      <CardContact image={image} name={name} workplace={workplace} address={address} />
      <CardButtons />
      <div className="icons">
        <IconText
          icon={
            <FontAwesomeIcon
              icon={isHearted ? faHeartSolid : faHeartRegular}
              className={isHearted ? 'hearted' : ''}
              onClick={handleHeartClick}
            />
          }
          text={isHearted ? 'Favoritado' : 'Favoritar'}
          onClick={handleHeartClick}
        />
        <IconText icon={<FontAwesomeIcon icon={faShareSquare} className="share-icon" />} text="Compartilhar" />
      </div>
    </CardContainer>
  );
};
