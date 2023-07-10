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
import { formatPrice } from '../../utils/formatPrice';
import { colors } from '../../styles/colors';

export interface CardPropertyProps {
  image: string[];
  streetNumber: string;
  district: string;
  city: string;
  state: string;
  price: number;
  beds: number;
  bath: number;
  dimension: string;
}

export const CardProperty = ({
  image,
  price,
  beds,
  bath,
  dimension,
  streetNumber,
  district,
  city,
  state,
}: CardPropertyProps) => {
  const [isHearted, setIsHearted] = useState(false);

  const handleHeartClick = () => {
    setIsHearted(!isHearted);
  };

  const propertyImage = image?.[0] ?? '';

  return (
    <CardContainer>
      <div className="property-image-container">
        <img src={propertyImage} alt="property-imovel" />
      </div>

      <div className="price-container">
        <Price color="CTA" size="medium">
          {formatPrice(price)}
        </Price>
        <FontAwesomeIcon
          color={`${colors.NeutralMedium}`}
          icon={isHearted ? faHeartSolid : faHeartRegular}
          className={isHearted ? 'hearted' : ''}
          onClick={handleHeartClick}
        />
      </div>
      <div className="description-container">
        <Body2 weight="bold">
          {city}, {state}
        </Body2>
        <Caption opacity={0.5}>
          {district}, {streetNumber}, {city}
        </Caption>
      </div>
      <FacilitiesProperty beds={beds} bath={bath} dimensions={dimension} />
    </CardContainer>
  );
};
