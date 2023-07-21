import { gql } from '@apollo/client';
import { Proximity } from '../../components/proximities/proximities-section';

export const GET_PROPERTY = gql`
  query RecentProperties {
    recentProperties {
      id
      imageUrls
      address {
        streetNumber
        district
        city
        state
        latitude
        longitude
      }
      buyPrices {
        total
      }
      bedrooms
      bathrooms
      area
      availableOnProperty
      availableOnCondominium
      proximities {
        type
        description
      }
    }
  }
`;

export interface Property {
  id: string;
  imageUrls: string[];
  address: {
    streetNumber: string;
    district: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
  };
  buyPrices: {
    total: number;
  };
  bedrooms: number;
  bathrooms: number;
  area: string;
  availableOnProperty: string[];
  availableOnCondominium: string[];
  proximities: Proximity[];
}

export interface PropertyData {
  recentProperties: Property[];
}
