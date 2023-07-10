import { fetchProperties } from '../../../api/fetch-properties';
import { Property } from '../../../api/queries/get-property';
import { CardProperty } from '../../cards/card-property';
import { LoadingError } from '../../loading/loading-error';
import { CardCarouselSection } from './card-carousel-section';

export const PropertyCarousel = () => {
  const { data = [], loading, error } = fetchProperties();

  return (
    <LoadingError loading={loading} error={!!error} emptyMessage="Não há lançamentos disponíveis." data={!!data}>
      <CardCarouselSection title="Lançamentos que você pode se interessar!">
        {data.map((property: Property) => (
          <CardProperty
            key={property?.id}
            price={property?.buyPrices?.total}
            image={property?.imageUrls}
            streetNumber={property?.address?.streetNumber}
            beds={property?.bedrooms}
            bath={property?.bathrooms}
            dimension={property?.area}
            district={property?.address?.district}
            state={property?.address?.state}
            city={property?.address?.city}
          />
        ))}
      </CardCarouselSection>
    </LoadingError>
  );
};
