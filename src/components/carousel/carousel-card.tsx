import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.css';

export const CarouselCard = ({ children }: { children: React.ReactNode }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.3,
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

  if (!children) {
    return null;
  }

  const childArray = React.Children.toArray(children);
  const filteredChildren = childArray.slice(1, -1);

  return (
    <Carousel responsive={responsive} className="carousel-card">
      {filteredChildren.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </Carousel>
  );
};
