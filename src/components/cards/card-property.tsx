import { commonStyles } from './cards-styles';
import { Body2 } from '../../styles/typography/body-2';
import './cards.css';
import { FacilitiesProperty } from './facilities-property';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { MediumPrice } from '../../styles/typography/prices';
import { Caption } from '../../styles/typography/caption';

interface CardPropertyProps {
  image: string;
  title: string;
  description: string;
  price: string;
  beds: number;
  bath: number;
  dimension: string;
}

export const CardProperty = ({ image, title, description, price, beds, bath, dimension }: CardPropertyProps) => {
  return (
    <div className={'cardContainer'} style={commonStyles}>
      <div className={'imageContainer'}>
        <img src={image} alt={title} />
      </div>

      <div className={'priceContainer'}>
        <MediumPrice> {price}</MediumPrice>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className={'descriptionContainer'}>
        <Body2 weight="bold"> {title}</Body2>
        <Caption>{description}</Caption>
      </div>
      <div>
        <FacilitiesProperty beds={beds} bath={bath} dimensions={dimension} />
      </div>
    </div>
  );
};
