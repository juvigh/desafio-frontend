import { useQuery } from '@apollo/client';
import { CategoryData, GET_CATEGORIES } from './queries/get-category';

export const fetchCategories = () => {
  const { data, loading, error } = useQuery<CategoryData>(GET_CATEGORIES);

  return { data: data?.categories, loading, error };
};
