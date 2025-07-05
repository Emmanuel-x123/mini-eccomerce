'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useUIStore } from '@/store/uiStore';
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { setShowCart } = useUIStore();
  const {
    items: cartItems,
    totalPrice,
    totalItems: totalQuantities,
    updateQuantity,
    removeItem
  } = useCartStore();

  const handleCheckout = async () => {
    // Your checkout logic here
  };

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button 
          type='button' 
          className='cart-heading'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft/>
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities()} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart items-center justify-center flex flex-col">
            <AiOutlineShopping size={150}/>
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item.id}>
             
                <Image
                  src={item.image}
                  width={96}
                  height={96}
                  alt={item.name}
                  className="cart-product-image"
                />
              <div className="item-desc">
                <div className="flex top">
                  <h5 className="font-medium">{item.name}</h5>
                  <h4 className="font-bold">${item.price.toFixed(2)}</h4>
                </div>
                <div className="flex bottom">
                 <div>
                  <div className="quantity-desc flex">
                    <span 
                      className="minus"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <AiOutlineMinus />
                    </span>
                    <span className="num">{item.quantity}</span>
                    <span 
                      className="plus"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => removeItem(item.id)}
                  >
                    <TiDeleteOutline size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice().toFixed(2)}</h3>
            </div>
            <div className="btn-container">
              <button 
                type="button" 
                className="btn"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;