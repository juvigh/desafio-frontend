import { H3 } from '../../styles/typography/h3';
import { Separator } from '../separator/separator';
import { Body2 } from '../../styles/typography/body-2';
import './cards.css';
import { CardContainer } from './sub-components/card-container';

export interface CardCategoryProps {
  image: string;
  title: string;
  description: string;
}

export const CardCategory = ({ image, title, description }: CardCategoryProps) => {
  return (
    <CardContainer>
      <div className={'category-image-container'}>
        <img src={image} alt={title} />
      </div>
      <div className={'text-container'}>
        <Separator horizontal size={10} />
        <H3 color="NeutralXdark" weight="regular" lineHeight="15px">
          {title}
        </H3>
      </div>
      <div className={'text-container'}>
        <Separator horizontal size={10} />
        <Body2 color="NeutralMedium" weight="regular">
          {description}
        </Body2>
      </div>
    </CardContainer>
  );
};
