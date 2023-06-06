import React from 'react';
import { CardHeader } from './sub-components/card-header';
import { CardContact } from './sub-components/card-contact';
import { CardButtons } from './sub-components/card-buttons';
import { Body2 } from '../../styles/typography/body-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { IconText } from './sub-components/icon-text';
import { commonStyles } from './cards-styles';
import { CardContainer } from './sub-components/card-container';
import './sub-components/sub-components.css';
import { InfoItem } from './sub-components/info-item';

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
  return (
    <CardContainer>
      <CardHeader title={price} />
      <InfoItem label="Condomínio" value={condominium} isBold />
      <InfoItem label="IPTU" value={iptu} isBold />
      <CardContact image={image} name={name} workplace={workplace} address={address} />
      <CardButtons />
      <div className="icons">
        <IconText icon={<FontAwesomeIcon icon={faHeart} className="favorite-icon" />} text="Favoritar" />
        <IconText icon={<FontAwesomeIcon icon={faShareFromSquare} className="share-icon" />} text="Compartilhar" />
      </div>
    </CardContainer>
  );
};
