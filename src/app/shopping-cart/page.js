'use client';

import { addToCart, decreaseCart, getTotals, removeFromCart } from '@/redux/slices/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { imageUrl } from '../config/apiUrl';

const page = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleincreaseCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <>
     {/* Breadcrumb Section Begin */}
  <div className="breacrumb-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text product-more">
            <Link href="/">
              <i className="fa fa-home" /> Home
            </Link>
            <Link href="/">Shop</Link>
            <span>Shopping Cart</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb Section Begin */}
  {/* Shopping Cart Section Begin */}
  {cartItems.length > 0 && (

  <section className="shopping-cart spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th className="p-name">Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>
                    <i className="ti-close" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((value,index) => {
                   const amount = value.sale > 0 ?value.discounted_price:value.price
                  return(
                <tr key={index}>
                <td className="cart-pic first-row">
                  <Image src={`${imageUrl}/${value.images[0]?.image}`} alt="" width={170} height={170} />
                </td>
                <td className="cart-title first-row">
                  <h5>{value.name}</h5>
                </td>
                <td className="p-price first-row">${amount}</td>
                <td className="qua-col first-row">
                  <div className="quantity">
                    <div className="pro-qty">
                    <span className="dec qtybtn" onClick={() => handleDecreaseCart(value)}>-</span>
                      <input type="text" disabled  value={value.cartQuantity} />
                      <span className="inc qtybtn" onClick={() => handleincreaseCart(value)}>+</span>
                    </div>
                  </div>
                </td>
                <td className="total-price first-row">${(amount * value.cartQuantity).toFixed(2)}</td>
                <td className="close-td first-row">
                  <i className="ti-close" />
                </td>
              </tr>

                )})}


                {/* <tr>
                  <td className="cart-pic">
                    <img src="img/cart-page/product-2.jpg" alt="" />
                  </td>
                  <td className="cart-title">
                    <h5>American lobster</h5>
                  </td>
                  <td className="p-price">$60.00</td>
                  <td className="qua-col">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="text" defaultValue={1} />
                      </div>
                    </div>
                  </td>
                  <td className="total-price">$60.00</td>
                  <td className="close-td">
                    <i className="ti-close" />
                  </td>
                </tr>
                <tr>
                  <td className="cart-pic">
                    <img src="img/cart-page/product-3.jpg" alt="" />
                  </td>
                  <td className="cart-title">
                    <h5>Guangzhou sweater</h5>
                  </td>
                  <td className="p-price">$60.00</td>
                  <td className="qua-col">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="text" defaultValue={1} />
                      </div>
                    </div>
                  </td>
                  <td className="total-price">$60.00</td>
                  <td className="close-td">
                    <i className="ti-close" />
                  </td>
                </tr> */}
              </tbody>
            </table>
  
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="cart-buttons">
                <Link href="/" className="primary-btn continue-shop">
                  Continue shopping
                </Link>
                {/* <Link href="/" className="primary-btn up-cart">
                  Update cart
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 offset-lg-4">
            <div className="discount-coupon">
                <h6>Discount Codes</h6>
                <form action="/" className="coupon-form">
                  <input type="text" placeholder="Enter your codes" />
                  <button type="submit" className="site-btn coupon-btn">
                    Apply
                  </button>
                </form>
              </div>
              <div className="proceed-checkout">
                <ul>
                  <li className="subtotal">
                    Subtotal <span>$ {cartTotalAmount}</span>
                  </li>
                  <li className="subtotal text-success">
                    Shipping<span>$10.00</span>
                  </li>
                  <li className="cart-total">
                    Total <span>$ {cartTotalAmount + 10.00}</span>
                  </li>
                </ul>
                <Link href="/checkout" className="proceed-btn">
                  PROCEED TO CHECK OUT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}
{/* Shopping Cart Section End */}


  {cartItems.length === 0 && (
        <div className="text-center mt-5 mb-4">
          <i className="fa-solid fa-bag-shopping no_cart_bag" />
          <p className="no_pro__pp my-3">Your cart is currently empty.</p>
          <p className="my-2">
            Before proceed to checkout you must add some products to shopping
            cart.<br/>
            You will find a lot of interesting products on our "Shop"
            page.
          </p>
          <Link href="/"><button className="return_to_Shop">RETURN TO SHOP</button></Link>
        </div>
      )}
    </>
  )
}

export default page