"use client";
import React from "react";
import FooterBanner from "@/components/FooterBanner";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import useProducts from "@/hooks/useProduct";

export default function Home() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!products || products.length === 0) return <div>No products found</div>;

  return (
    <div>
      <HeroBanner
        headline="Headphones"
        subheadline="Wireless"
        productName="Beats Solo"
        description="Premium wireless headphones with noise cancellation"
        buttonText="Shop Now"
        imageUrl="https://file.aiquickdraw.com/imgcompressed/img/compressed_116f0026448d12885a4eeaf7a883205b.webp"
      />
      <div className="products-heading">
        <h1>Best selling products</h1>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <FooterBanner   discount="20% off"
  largeText1="Summer Sale"
  largeText2="Hot Deals"
  saleTime="Limited time offer"
  smallText="Don't miss out"
  midText="Get ready to save"
  product="beats"
  buttonText="Shop Now"
  imageUrl="https://file.aiquickdraw.com/imgcompressed/img/compressed_09f664a19dde696df53ee167f7d2a8a4.webp"
  desc="Description of the product"
/>
    </div>
  );
}


