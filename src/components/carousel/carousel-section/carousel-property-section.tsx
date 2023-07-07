import { fetchProperties } from '../../../api/fetch-properties';
import { CardProperty } from '../../cards/card-property';
import { LoadingError } from '../../loading/loading-error';
import { CardCarouselSection } from './card-carousel-section';

export const PropertyCarousel = () => {
  const { data = [], loading, error } = fetchProperties();
  const property = data[0];

  return (
    <>
      <LoadingError loading={loading} error={!!error} emptyMessage="Não há lançamentos disponíveis." data={!!data}>
        <CardCarouselSection title="Lançamentos que você pode se interessar!">
          <CardProperty
            key={property.id}
            price={property.buyPrices.total}
            image={property.imageUrls}
            streetNumber={property.address.streetNumber}
            beds={property.bedrooms}
            bath={property.bathrooms}
            dimension={property.area}
            district={property.address.district}
            state={property.address.state}
            city={property.address.city}
          />
        </CardCarouselSection>
      </LoadingError>
    </>
  );
};
