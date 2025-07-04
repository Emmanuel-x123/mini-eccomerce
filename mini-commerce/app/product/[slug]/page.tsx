// app/product/[slug]/page.tsx
import { notFound } from 'next/navigation';
import products from '@/data/products.json';
import ProductDetails from '@/components/ProductDetails';


export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }
  const relatedProducts = products.filter(p => p.id !== product.id);
  return <ProductDetails product={product} relatedProducts={relatedProducts} />;
}
