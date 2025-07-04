import { useQuery } from '@tanstack/react-query';
import products from '../data/products.json';

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => products,
    initialData: products,
  });
};

export default useProducts;

