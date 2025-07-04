'use client';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { useUIStore } from '@/store/uiStore';
import { useCartStore } from '@/store/cartStore';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [hydrated, setHydrated] = useState(false);
  const { showCart, setShowCart } = useUIStore();
  const totalItems = useCartStore((state) => state.totalItems);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // or a loading indicator
  }

  return (
    <nav className="flex justify-between items-center mx-4 md:mx-6 lg:mx-8 my-2 md:my-4 relative">
      {/* Logo */}
      <p className="text-lg md:text-xl lg:text-2xl font-bold">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          E-Shop
        </Link>
      </p>
      {/* Cart Icon */}
      <button
        type="button"
        className="flex items-center justify-center p-2 text-gray-600 hover:text-blue-600 transition-colors"
        onClick={() => setShowCart(true)}
        aria-label="Open cart"
      >
        <AiOutlineShopping size={24} />
        {totalItems() > 0 && (
          <span className="ml-1 text-sm font-bold text-red-600">
            {totalItems()}
          </span>
        )}
      </button>
      {/* Cart Drawer */}
      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;

