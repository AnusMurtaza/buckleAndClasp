'use client';
import { decreaseCart } from '@/redux/slices/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  return (
    <>
      {/* Header Section Begin */}
      <header className="header-section">
        <div className="header-top">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="ht-left">
              <div className="mail-service">
                <i className=" fa fa-envelope" />
                hello.colorlib@gmail.com
              </div>
            </div>
            <div className="phone-service">
              DELIVERY TIME 5-7 WORKING DAYS!
              {/* <i className=" fa fa-phone" />
            +65 11.188.888 */}

            </div>
            <div className="ht-right">
              <Link href="/login" className="login-panel">
                <i className="fa fa-user" />
                Login
              </Link>
              {/* <div className="lan-selector">
            <select
              className="language_drop"
              name="countries"
              id="countries"
              style={{ width: 300 }}
            >
              <option
                value="yt"
                data-image="img/flag-1.jpg"
                data-imagecss="flag yt"
                data-title="English"
              >
                English
              </option>
              <option
                value="yu"
                data-image="img/flag-2.jpg"
                data-imagecss="flag yu"
                data-title="Bangladesh"
              >
                German{" "}
              </option>
            </select>
          </div> */}
              {/* <div className="top-social">
            <Link href="/">
              <i className="ti-facebook" />
            </Link>
            <Link href="/">
              <i className="ti-twitter-alt" />
            </Link>
            <Link href="/">
              <i className="ti-linkedin" />
            </Link>
            <Link href="/">
              <i className="ti-pinterest" />
            </Link>
          </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inner-header">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-2">
                <div className="logo">
                  <Link href="/">
                    <Image src="/img/logoBnC.png" width={300} height={70} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="advanced-search">
                  {/* <button type="button" className="category-btn">
                All Categories
              </button> */}
                  <div className="input-group">
                    <input type="text" placeholder="What do you need?" />
                    <button type="button">
                      <i className="ti-search" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-end col-md-3 d-flex justify-content-between align-items-center d-md-block">
                <ul className="nav-right">
                  {/* <li className="heart-icon">
                <Link href="/">
                  <i className="ti-heart" />
                  <span>1</span>
                </Link>
              </li> */}
                  <li className="cart-icon">
                    {/* <Link href="/"> */}
                    <i className="ti-shopping-cart" />
                    {cartTotalQuantity > 0 && <span className='cart_count'>{cartTotalQuantity}</span>}
                    {/* </Link> */}
                    <div className="cart-hover">
                      {cartItems.length > 0 && (
                        <div className="select-items">
                          <table>
                            <tbody>
                              {cartItems.map((value, index) => (
                                <tr key={index}>
                                  <td className="si-pic">
                                    <Image src={value.image} alt="" width={70} height={70} />
                                  </td>
                                  <td className="si-text">
                                    <div className="product-selected">
                                      <p>${value.sale ? value.discount_price : value.price} x 1</p>
                                      <h6>{value.name}</h6>
                                    </div>
                                  </td>
                                  <td className="si-close">
                                    <i className="ti-close" onClick={() => handleDecreaseCart(value)} />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      {cartItems.length > 0 && (
                        <div className="select-total">
                          <span>total:</span>
                          <h5>${cartTotalAmount}</h5>
                        </div>
                      )}
                      {cartItems.length > 0 && (
                        <div className="select-button">
                          <Link href="/shopping-cart" className="primary-btn view-card">VIEW CARD</Link>
                          <Link href="/checkout" className="primary-btn checkout-btn"> CHECK OUT  </Link>
                        </div>
                      )}
                      {cartItems.length === 0 && (
                        <div className="empty_cart">
                          <div className="card">
                            <div className="card-body cart">
                              <div className="col-sm-12 empty-cart-cls text-center">
                                <img
                                  src="https://i.imgur.com/dCdflKN.png"
                                  width={130}
                                  height={130}
                                  className="img-fluid mb-4 mr-3"
                                  alt="Empty Cart"
                                />
                                <h3>
                                  <strong>Your Cart is Empty</strong>
                                </h3>
                                <h4>Please add products before they run out of stock!</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </li>
                  <li className="cart-price">{cartItems.length > 0 && `$ ${cartTotalAmount}`} 00</li>
                 
                </ul>
                <span className='d-block d-md-none'>

                <i class="fa-solid fa-bars"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <div className="container text-center">
            <div className="nav-depart">
              {/* <div className="depart-btn">
            <i className="ti-menu" />
            <span>All departments</span>
            <ul className="depart-hover">
              <li className="active">
                <Link href="/">Women’s Clothing</Link>
              </li>
              <li>
                <Link href="/">Men’s Clothing</Link>
              </li>
              <li>
                <Link href="/">Underwear</Link>
              </li>
              <li>
                <Link href="/">Kid's Clothing</Link>
              </li>
              <li>
                <Link href="/">Brand Fashion</Link>
              </li>
              <li>
                <Link href="/">Accessories/Shoes</Link>
              </li>
              <li>
                <Link href="/">Luxury Brands</Link>
              </li>
              <li>
                <Link href="/">Brand Outdoor Apparel</Link>
              </li>
            </ul>
          </div> */}
            </div>
            <nav className="nav-menu mobile-menu">
              <ul>
                <li className="active">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Men</Link>
                </li>
                <li>
                  <Link href="/">Women</Link>
                </li>
                <li>
                  <Link href="/">Kids</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="/">Boys Jackets</Link>
                    </li>
                    <li>
                      <Link href="/">Girls Jackets</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">Accessories</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="/">Men's Bag</Link>
                    </li>
                    <li>
                      <Link href="/">Women's Bag</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </nav>
            {/* <div id="mobile-menu-wrap" /> */}
          </div>
        </div>
      </header>
      {/* Header End */}
    </>

  )
}

export default Header










