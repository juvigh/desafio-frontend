import { useQuery } from '@apollo/client';
import { GET_PROPERTY, PropertyData } from './queries/get-property';

export const fetchProperties = () => {
  const { data, loading, error } = useQuery<PropertyData>(GET_PROPERTY);

  return { data: data?.recentProperties, loading, error };
};
