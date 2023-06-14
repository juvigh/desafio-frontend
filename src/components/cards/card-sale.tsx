import React, { useState } from 'react';
import { CardHeader } from './sub-components/card-header';
import { CardContact } from './sub-components/card-contact';
import { CardButtons } from './sub-components/card-buttons';
import { Body2 } from '../../styles/typography/body-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { IconText } from './sub-components/icon-text';
import { commonStyles } from './cards-styles';
import { CardContainer } from './sub-components/card-container';
import './sub-components/sub-components.css';
import { InfoItem } from './sub-components/info-item';
import { Divider } from '../divider/divider';

interface CardSalesProps {
  price: string;
  condominium: string;
  iptu: string;
  name: string;
  workplace: string;
  address: string;
  image: string;
}

export const CardSales = ({ price, condominium, iptu, name, workplace, address, image }: CardSalesProps) => {
  const [isHearted, setIsHearted] = useState(false);

  const handleHeartClick = () => {
    setIsHearted(!isHearted);
  };

  return (
    <CardContainer>
      <CardHeader title={price} />
      <Divider />
      <InfoItem label="Condomínio" value={condominium} />
      <InfoItem label="IPTU" value={iptu} />
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
