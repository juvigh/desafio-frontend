import { commonStyles } from './cards-styles';
import { Body2 } from '../../styles/typography/body-2';
import './cards.css';
import { FacilitiesProperty } from './facilities-property';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Price } from '../../styles/typography/prices';
import { Caption } from '../../styles/typography/caption';

interface CardPropertyProps {
  image: string;
  title: string;
  description: string;
  price: number;
  beds: number;
  bath: number;
  dimension: string;
}

export const CardProperty = ({ image, title, description, price, beds, bath, dimension }: CardPropertyProps) => {
  const formatPrice = (price: number) => {
    const formattedPrice = (price / 100).toFixed(2);
    return `R$ ${formattedPrice}`;
  };

  return (
    <div className={'card-container'} style={commonStyles}>
      <div className={'image-container'}>
        <img src={image} alt={title} />
      </div>

      <div className={'price-container'}>
        <FontAwesomeIcon icon={faHeart} />
        <Price size="medium">{formatPrice(price)}</Price>
      </div>
      <div className={'description-container'}>
        <Body2 weight="bold"> {title}</Body2>
        <Caption>{description}</Caption>
      </div>
      <FacilitiesProperty beds={beds} bath={bath} dimensions={dimension} />
    </div>
  );
};
