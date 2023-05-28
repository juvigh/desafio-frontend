import React, { useState } from 'react';
import { cardCategoryStyles } from './cards-styles';
import { H3 } from '../../styles/typography/h3';
import { Separator } from '../separator/separator';
import { Body2 } from '../../styles/typography/body-2';
import './cards.css';

interface CardCategoryProps {
  image: string;
  title: string;
  description: string;
}

export const CardCategory = ({ image, title, description }: CardCategoryProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const cardStyle = {
    ...cardCategoryStyles,
    boxShadow: isClicked ? '0px 3.40299px 4.53731px rgba(153, 155, 168, 0.15)' : 'none',
  };

  return (
    <div className={'cardContainer'} style={cardStyle} onClick={handleClick}>
      <div className={'imageContainer'}>
        <img src={image} alt={title} />
      </div>
      <div className={'textContainer'}>
        <Separator horizontal size={10} />
        <H3 color="NeutralXdark" weight="regular" lineHeight="15px">
          {title}
        </H3>
      </div>
      <div className={'textContainer'}>
        <Separator horizontal size={10} />
        <Body2 color="NeutralMedium" weight="regular">
          {description}
        </Body2>
      </div>
    </div>
  );
};
