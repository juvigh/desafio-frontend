import { fetchProperties } from '../../api/fetch-properties';
import { LoadingError } from '../loading/loading-error';
import { ProximitiesSection } from './proximities-section';

export const Proximities = () => {
  const { data = [], loading, error } = fetchProperties();
  const proximities = data[0]?.proximities ?? [];
  const latitude = data[0]?.address.latitude ?? 0;
  const longitude = data[0]?.address.longitude ?? 0;

  return (
    <LoadingError loading={loading} error={!!error} emptyMessage="Não há proximidades" data={!!data}>
      <ProximitiesSection proximities={proximities} latitude={latitude} longitude={longitude} />
    </LoadingError>
  );
};
