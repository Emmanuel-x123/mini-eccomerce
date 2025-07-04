'use client';

import { create } from 'zustand';
import type { Product } from '@/types/product';


interface ProductsState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductsStore = create<ProductsState>()((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

