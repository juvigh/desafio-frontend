import { cardImovelStyles } from './cards-styles';
import { Body2 } from '../../styles/typography/body-2';
import './cards.css';
import { FacilitiesImovel } from './facilities-imovel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

interface CardImovelProps {
  image: string;
  title: string;
  description: string;
  price: string;
  beds: number;
  bath: number;
  dimension: string;
}

export const CardImovel = ({ image, title, description, price, beds, bath, dimension }: CardImovelProps) => {
  return (
    <div className={'cardContainer'} style={cardImovelStyles}>
      <div className={'imageContainer'}>
        <img src={image} alt={title} />
      </div>

      <div className={'priceContainer'}>
        <p style={cardImovelStyles.mediumPrice}> {price}</p>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className={'descriptionContainer'}>
        <Body2 weight="bold"> {title}</Body2>
        <p style={cardImovelStyles.caption}>{description}</p>
      </div>
      <div>
        <FacilitiesImovel beds={beds} bath={bath} dimensions={dimension} />
      </div>
    </div>
  );
};
