import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CardCategory, CardCategoryProps } from '../cards/card-category';
import { CardProperty, CardPropertyProps } from '../cards/card-property';
import './carousel.css';

export interface CardData {
  type: 'property' | 'category';
  data: CardPropertyProps | CardCategoryProps;
}

interface CarouselCardProps {
  cardsData: CardData[];
}

export const CarouselCard = ({ cardsData }: CarouselCardProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const renderCard = (cardData: CardData) => {
    if (cardData.type === 'property') {
      return <CardProperty {...(cardData.data as CardPropertyProps)} />;
    } else if (cardData.type === 'category') {
      return <CardCategory {...(cardData.data as CardCategoryProps)} />;
    }
    return null;
  };

  return (
    <Carousel responsive={responsive} className="carousel-card">
      {cardsData.map((card, index) => {
        return <div key={index}>{renderCard(card)}</div>;
      })}
    </Carousel>
  );
};
