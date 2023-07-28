import { useQuery } from '@apollo/client';
import { GET_PROPERTY_DETAILS, PropertyDetailsData } from './queries/get-property-details';

export const fetchPropertyDetails = (propertyDetailsId?: string) => {
  const { data, loading, error } = useQuery<PropertyDetailsData>(GET_PROPERTY_DETAILS, {
    variables: { propertyDetailsId },
  });

  return { data: data?.propertyDetails, loading, error };
};
