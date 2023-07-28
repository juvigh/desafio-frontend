import { gql } from '@apollo/client';
import { Proximity } from '../../components/proximities/proximities-section';

export const GET_PROPERTY_DETAILS = gql`
  query PropertyDetails($propertyDetailsId: String!) {
    propertyDetails(id: $propertyDetailsId) {
      id
      imageUrls
      shortDescription
      description
      address {
        street
        complement
        district
        city
        latitude
        longitude
      }
      buyPrices {
        condominium
        iptu
        total
      }
      rentPrices {
        condominium
        iptu
        serviceTax
        rent
      }
      broker {
        name
        company
        cresciSp
      }
      bedrooms
      bathrooms
      area
      hasPool
      hasGarage
      availableOnProperty
      availableOnCondominium
      proximities {
        type
        description
      }
    }
  }
`;

export interface PropertyDetails {
  id: string;
  imageUrls: string[];
  shortDescription: string;
  description: string;
  address: {
    street: string;
    complement: string;
    district: string;
    city: string;
    latitude: number;
    longitude: number;
  };
  buyPrices: {
    condominium: number;
    iptu: number;
    total: number;
  };
  rentPrices: {
    condominium: number;
    iptu: number;
    serviceTax: number;
    rent: number;
  };
  broker: {
    name: string;
    company: string;
    cresciSp: string;
  };
  bedrooms: number;
  bathrooms: number;
  area: string;
  hasPool: boolean;
  hasGarage: boolean;
  availableOnProperty: string[];
  availableOnCondominium: string[];
  proximities: Proximity[];
}

export interface PropertyDetailsData {
  propertyDetails: PropertyDetails;
}
