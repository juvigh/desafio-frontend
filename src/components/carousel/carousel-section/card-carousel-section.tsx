import React from 'react';
import { CardData, CarouselCard } from '../carousel-card';
import { H2 } from '../../../styles/typography/h2';
import { Separator } from '../../separator/separator';
import './card-carousel-section.css';

interface CardCarouselSectionProps {
  title: string;
  cardsData: CardData[];
}

export const CardCarouselSection = ({ title, cardsData }: CardCarouselSectionProps) => {
  return (
    <section className="carousel-section">
      <H2 color="NeutralXdark">{title}</H2>
      <Separator vertical size={8} />
      <CarouselCard cardsData={cardsData} />
    </section>
  );
};
