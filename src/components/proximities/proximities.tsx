import { fetchPropertyDetails } from '../../api/fetch-property-details';
import { LoadingError } from '../loading/loading-error';
import { ProximitiesSection } from './proximities-section';

interface ProximitiesProps {
  propertyDetailsId?: string;
}

export const Proximities = ({ propertyDetailsId }: ProximitiesProps) => {
  const { data, loading, error } = fetchPropertyDetails(propertyDetailsId);
  const proximities = data?.proximities ?? [];
  const latitude = data?.address.latitude ?? 0;
  const longitude = data?.address.longitude ?? 0;

  return (
    <LoadingError loading={loading} error={!!error} emptyMessage="Não há proximidades" data={!!data}>
      <ProximitiesSection proximities={proximities} latitude={latitude} longitude={longitude} />
    </LoadingError>
  );
};
