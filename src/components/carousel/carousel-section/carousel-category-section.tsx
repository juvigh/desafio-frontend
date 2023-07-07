import { CardCarouselSection } from './card-carousel-section';
import { CardCategory } from '../../cards/card-category';
import { fetchCategories } from '../../../api/fetch-categories';
import { Category } from '../../../api/queries/get-category';
import { LoadingError } from '../../loading/loading-error';

export const CategoryCarousel = () => {
  const { data = [], loading, error } = fetchCategories();

  return (
    <>
      <LoadingError loading={loading} error={!!error} emptyMessage="Não há categorias disponíveis." data={!!data}>
        <CardCarouselSection title="Encontre o imóvel ideal para o seu estilo de vida!">
          {data.map((category: Category) => (
            <CardCategory
              key={category.id}
              name={category.name}
              image={category.imageUrl}
              numberOfProperties={category.numberOfProperties}
            />
          ))}
        </CardCarouselSection>
      </LoadingError>
    </>
  );
};
