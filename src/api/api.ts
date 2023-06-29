import { client } from './graphql';
import { GET_CATEGORIES } from './queries';

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  numberOfProperties: number;
}

interface CategoryData {
  categories: Category[];
}

export const fetchCategories = async (): Promise<Category[]> => {
  const { data } = await client.query<CategoryData>({
    query: GET_CATEGORIES,
  });
  return data.categories;
};
