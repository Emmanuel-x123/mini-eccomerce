import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug}`}>
        <div className="product-card">
          <Image src={product.image} alt={product.name} width={250} height={250} className="product-image" />
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

