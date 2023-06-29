import React, { useEffect, useState } from 'react';
import { Category, fetchCategories } from '../../../api/api';
import { CardCarouselSection } from './card-carousel-section';
import { CardCategory } from '../../cards/card-category';

export const CategoryCarousel = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };

    fetchCategoriesData().catch((error) => {
      console.error('Error fetching categories:', error);
      setError('Error fetching categories.');
    });
  }, []);

  return (
    <>
      {error || categories.length === 0 ? null : (
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
      )}
    </>
  );
};
