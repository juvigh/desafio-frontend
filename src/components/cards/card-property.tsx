const formatPrice = (price: number) => {
  const formattedPrice = (price / 100).toFixed(2);
  return `R$ ${formattedPrice}`;
};

import { Body2 } from '../../styles/typography/body-2';
import './cards.css';
import { FacilitiesProperty } from './facilities-property';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { Price } from '../../styles/typography/prices';
import { Caption } from '../../styles/typography/caption';
import { useState } from 'react';
import { CardContainer } from './sub-components/card-container';

export interface CardPropertyProps {
  image: string;
  title: string;
  description: string;
  price: number;
  beds: number;
  bath: number;
  dimension: string;
}

export const CardProperty = ({ image, title, description, price, beds, bath, dimension }: CardPropertyProps) => {
  const [isHearted, setIsHearted] = useState(false);

  const handleHeartClick = () => {
    setIsHearted(!isHearted);
  };

  return (
    <CardContainer>
      <div className={'property-image-container'}>
        <img src={image} alt={title} />
      </div>

      <div className={'price-container'}>
        <Price size="medium">{formatPrice(price)}</Price>
        <FontAwesomeIcon
          icon={isHearted ? faHeartSolid : faHeartRegular}
          className={isHearted ? 'hearted' : ''}
          onClick={handleHeartClick}
        />
      </div>
      <div className={'description-container'}>
        <Body2 weight="bold"> {title}</Body2>
        <Caption>{description}</Caption>
      </div>
      <FacilitiesProperty beds={beds} bath={bath} dimensions={dimension} />
    </CardContainer>
  );
};
