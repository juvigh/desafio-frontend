import React from 'react';
import { CarouselCard } from '../carousel-card';
import { H2 } from '../../../styles/typography/h2';
import { Separator } from '../../separator/separator';
import './card-carousel-section.css';

interface CardCarouselSectionProps {
  title: string;
  children: React.ReactNode;
}

export const CardCarouselSection = ({ title, children }: CardCarouselSectionProps) => {
  return (
    <section className="carousel-section">
      <H2 color="NeutralXdark">{title}</H2>
      <Separator vertical size={2} />
      <CarouselCard> {children} </CarouselCard>
    </section>
  );
};
