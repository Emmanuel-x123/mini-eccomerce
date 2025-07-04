export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  inventory?: number;
  rating?: number;
  features?: string[];
};