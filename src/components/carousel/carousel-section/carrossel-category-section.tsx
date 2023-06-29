import React, { useEffect, useState } from 'react';
import { Category, fetchCategories } from '../../../api/api';
import { CardCarouselSection } from './card-carousel-section';
import { CardCategory } from '../../cards/card-category';

export const CategoryCarousel = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategoriesData().catch((error) => {
      console.error('Error fetching categories:', error);
    });
  }, []);

  return (
    <CardCarouselSection title="Encontre o imóvel ideal para o seu estilo de vida!">
      {categories.map((category) => (
        <CardCategory
          key={category.id}
          name={category.name}
          image={category.imageUrl}
          numberOfProperties={category.numberOfProperties}
        />
      ))}
    </CardCarouselSection>
  );
};
