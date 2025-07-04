'use client';
import { useState } from 'react';
import Image from 'next/image';
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useCartStore } from '@/store/cartStore';

export default function ProductDetails({ product, relatedProducts = [] }: ProductDetailsProps) {
  const [currentProduct, setCurrentProduct] = useState(product);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(currentProduct, quantity);
  };

  const handleBuyNow = () => {
    addItem(currentProduct, quantity);
    // router.push('/checkout');
  };

  const handleRelatedProductClick = (item: Product) => {
    setCurrentProduct(item);
    setQuantity(1);
  };

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <Image src={currentProduct.image} alt={currentProduct.name} width={400} height={400} className="product-detail-image" priority />
          </div>
        </div>
        <div className="product-detail-desc">
          <h1 className='text-2xl font-bold'>{currentProduct.name}</h1>
          <div className="reviews">
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20 reviews)</p>
          </div>
          <h4>Details:</h4>
          <p>{currentProduct.description}</p>
          <p className="price">${currentProduct.price.toFixed(2)}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc flex items-center">
              <span onClick={() => setQuantity(q => Math.max(1, q - 1))} className="minus" aria-label="Decrease quantity" >
                <AiOutlineMinus />
              </span>
              <span className="num">{quantity}</span>
              <span onClick={() => setQuantity(q => q + 1)} className="plus" aria-label="Increase quantity" >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button onClick={handleAddToCart} className="add-to-cart" >
              Add to Cart
            </button>
            <button onClick={handleBuyNow} className="buy-now" >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {relatedProducts.map((item) => (
                <div key={item.id} className="maylike-product-card" onClick={() => handleRelatedProductClick(item)}>
                  <Image src={item.image} alt={item.name} width={200} height={200} className="maylike-product-image" />
                  <p className="font-medium">{item.name}</p>
                  <p className="text-primary">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
}

interface ProductDetailsProps {
  product: Product;
  relatedProducts?: Product[];
}
