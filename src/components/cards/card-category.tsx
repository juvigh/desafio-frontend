import { H3 } from '../../styles/typography/h3';
import { Body2 } from '../../styles/typography/body-2';
import './cards.css';
import { CardContainer } from './sub-components/card-container';

export interface CardCategoryProps {
  image: string;
  name: string;
  numberOfProperties: number;
}

export const CardCategory = ({ image, name, numberOfProperties }: CardCategoryProps) => {
  return (
    <CardContainer>
      <div className={'category-image-container'}>
        <img src={image} alt={name} />
      </div>
      <div className={'title-container'}>
        <H3 color="NeutralXdark" weight="regular" lineHeight="15px">
          {name}
        </H3>
      </div>
      <div className={'properties-container'}>
        <Body2 color="NeutralMedium" weight="regular">
          {numberOfProperties} Imóveis
        </Body2>
      </div>
    </CardContainer>
  );
};
