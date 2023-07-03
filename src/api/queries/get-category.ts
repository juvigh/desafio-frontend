import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
      imageUrl
      numberOfProperties
    }
  }
`;

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  numberOfProperties: number;
}

export interface CategoryData {
  categories: Category[];
}
