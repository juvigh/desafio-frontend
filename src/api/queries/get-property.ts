import { gql } from '@apollo/client';

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
      }
      buyPrices {
        total
      }
      bedrooms
      bathrooms
      area
      availableOnProperty
      availableOnCondominium
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
  };
  buyPrices: {
    total: number;
  };
  bedrooms: number;
  bathrooms: number;
  area: string;
  availableOnProperty: string[];
  availableOnCondominium: string[];
}

export interface PropertyData {
  recentProperties: Property[];
}
