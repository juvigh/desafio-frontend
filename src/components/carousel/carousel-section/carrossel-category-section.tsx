import { CardCarouselSection } from './card-carousel-section';
import { CardCategory } from '../../cards/card-category';
import { fetchCategories } from '../../../api/fetch-categories';
import { Category } from '../../../api/queries/get-category';

export const CategoryCarousel = () => {
  const { data = [], loading, error } = fetchCategories();

  return (
    <>
      {loading ? (
        <div>Carregando...</div>
      ) : error ? (
        <div>Ocorreu um erro ao carregar as categorias.</div>
      ) : data.length === 0 ? (
        <div>Não há categorias disponíveis.</div>
      ) : (
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
      )}
    </>
  );
};
