'use client';
import { logout } from '@/redux/features/auth/authSlice';
import { getCategories } from '@/redux/features/categories/categoriesSlice';
import { decreaseCart, getTotals, removeFromCart } from '@/redux/slices/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { baseURL, imageUrl } from '../config/apiUrl';
import axios from 'axios';

const Header = () => {
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector((state) => state.cart);
  const { token, name } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.category);
  const cart = useSelector((state) => state.cart);
  const [searchValue, setSearchValue] = useState();
  const router = useRouter()

  const handleClick = async () => {
    // setLoading(true)
    // try {
    //   var FormData = require("form-data");
    //   var value = new FormData();
    //   value.append("keyword",searchValue);
    //   const response = await axios.post(baseURL + `/search`,value);
    //   // const { data } = response.data;
      router.push(`/search?q=${searchValue}`);
      // setProduct(data);
      // navigate(`/product-category/search`, {
      //   state: 
      //    { data:data,
      //      value:value
      //     }})
      //     searchhandle()
      // setLoading(false)
    // } catch (error) {
    //   // setLoading(false)
    // }
  };

  const pathname = usePathname()
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };


  const handleLogout = () => {
    dispatch(logout())
    router.push("/")
  }

  const fetchCategories = async () => {
    try {
      const response = await axios.get(baseURL + "/allCategories");
      const { data } = response.data;
      dispatch(getCategories(data));
      // setCatalog(data);
    } catch (error) { }
  };
  useEffect(() => {
    fetchCategories()
    // dispatch(getTotals())

  }, [])
  useEffect(() => {
    dispatch(getTotals());
    console.log("first")
  }, [cart, dispatch]);

  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
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
              {!token && (

                <Link href="/login" className="login-panel">
                  <i className="fa fa-user" />
                  Login
                </Link>
              )}

              {token && (
                <div className="position-relative login-panel login__Regs">
                  <i className="fa-regular fa-circle-user" />
                  <span>&nbsp;Hi, {name}!</span>
                  <div className="login_content">
                    <div>
                      <ul>
                        {/* <li>
                        <h6>Hello, {name}!</h6>
                      </li> */}
                        <li>
                          <Link href="/my-account">My Account</Link>
                        </li>
                        <li>
                          <Link href="/orders">Orders</Link>
                        </li>
                        <li className="border-bottom">
                          <Link href="/edit-account">Account details</Link>
                        </li>
                        <li className="py-2">
                          <span onClick={handleLogout}>
                            <i className="fa-solid fa-right-from-bracket"></i>{" "}
                            Logout
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
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
                    <input type="text" placeholder="What do you need?" onChange={(e)=>setSearchValue(e.target.value)}/>
                    <button type="button" onClick={handleClick}>
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
              <i class="bi bi-bag cart-icon"></i>
                    {/* <i className="ti-shopping-cart" /> */}
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
                                    <Image src={`${imageUrl}/${value.images[0].image}`} alt="" width={70} height={70} />
                                  </td>
                                  <td className="si-text">
                                    <div className="product-selected">
                                      <p>${value.sale > 0 ? value.discounted_price : value.price} x {value.cartQuantity}</p>
                                      <h6>{value.name}</h6>
                                        <h6>Size :<span>{value.size}</span></h6>
                                        <div className='d-flex'> <h6>Color :</h6><div style={{width:"15px",height:"15px",backgroundColor:value.color}}></div></div>

                                    </div>
                                  </td>
                                  <td className="si-close">
                                    <i className="ti-close" onClick={() => handleRemoveFromCart(value)} />
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
                                  width={100}
                                  height={100}
                                  className="img-fluid mb-4 mr-3"
                                  alt="Empty Cart"
                                />
                                <h3 className='fs-5'>
                                  <strong>Your Cart is Empty</strong>
                                </h3>
                                <h4 className='fs-6'>Please add products before they run out of stock!</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </li>
                  <li className="cart-price">{cartItems.length > 0 && `$ ${cartTotalAmount}`}</li>

                </ul>
                <span className='d-block d-md-none'>
                  <span
                    className="navbar-toggler"
                    // type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >

                    <i className="fa-solid fa-bars"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <div className="container text-center">
            <nav className="nav-menu mobile-menu">
              <ul>
                <li
                  className={`${pathname === '/' ? 'active' : ''}`}
                >
                  <Link href="/">Home</Link>
                </li>
                {categories && categories.map(category => (
                  <li>
                    <li className={`${pathname === `/collections/${category.slug}` ? 'active' : ''}`} key={category.id}>
                      <Link
                        href={`/collections/${category.slug}`}
                      >{category.name}</Link>
                    </li>
                    {category.sub_categories && category.sub_categories.length > 0 && (
                      <ul className="dropdown">
                        {category.sub_categories.map(subCategory => (
                          <li className={`${pathname === `/collections/${subCategory.slug}` ? 'active' : ''}`} key={subCategory.id}>
                            <Link href={`/collections/${subCategory.slug}`}>{subCategory.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}


                <li
                  className={`${pathname === '/about-us' ? 'active' : ''}`}
                >
                  <Link href="/about-us">About</Link>
                </li>
                <li
                  className={`${pathname === '/contact-us' ? 'active' : ''}`}
                >
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </nav>
            {/* <div id="mobile-menu-wrap" /> */}
          </div>
        </div>
      </header>
      {/* Header End */}


      {/* =========== FOR MOBILE NAVBAR STARTS ==============  */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-body">
          <div className="">
            <div
              className="close_btn_MobNav"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="fa-solid fa-chevron-left" />
            </div>
            <a className="navbar-brand fw-bold p-0   mb-5" href="#">
              <img
                src="https://jew.zishstudio.com/wp-content/themes/elessi-theme/assets/images/logo.jpg"
                alt=""
              />
            </a>
            <div className="filterMain_height">
              <div>
                <div className="categories__Main">
                  <ul className="ul_style">
                    <Link href="/">
                      <li className={`${pathname === '/' ? 'active' : ''}`}>
                        <p className="d-flex justify-content-between mb-2 border-top mt-4 mob_naV_linK">
                          <span className="active_link">Home</span>
                        </p>
                      </li>
                    </Link>


                    {categories && categories.map((category, index) => {
                      const hasSubcategories = category.sub_categories && category.sub_categories.length > 0;

                      return (
                        <li className="mob_naV_linK" key={category.id}>
                          <p
                            className="collapsed d-flex justify-content-between mb-2"
                            data-bs-toggle={hasSubcategories ? "collapse" : ""}
                            data-bs-target={hasSubcategories ? `#category-${category.id}` : ""}
                            aria-expanded="false"
                            aria-controls={hasSubcategories ? `category-${category.id}` : ""}
                          >
                            <Link href={`/collections/${category.slug}`}>{category.name}</Link>
                            {hasSubcategories && (
                              <span>
                                <i className="fa-solid fa-plus"></i>
                              </span>
                            )}
                          </p>
                          <div id={`category-${category.id}`} className="accordion-collapse collapse">
                            {hasSubcategories && (
                              <ul>
                                {category.sub_categories.map(subcategory => (
                                  <Link href={`/collections/${subcategory.slug}`} key={subcategory.id}>
                                    <li>{subcategory.name}</li>
                                  </Link>
                                ))}
                              </ul>
                            )}
                            {!hasSubcategories && (
                              <a href="#">
                                <li>
                                  <p className="d-flex justify-content-between mb-2 border-top mt-4 mob_naV_linK">
                                    <span className="active_link">Home</span>
                                  </p>
                                </li>
                              </a>
                            )}
                          </div>
                        </li>
                      );
                    })}

<Link href="/about-us">
                      <li className={`${pathname === '/about-us' ? 'active' : ''}`}>
                        <p className="d-flex justify-content-between mb-2   mob_naV_linK">
                          <span className="active_link">About</span>
                        </p>
                      </li>
                    </Link>

                    <Link href="/contact-us">
                      <li className={`${pathname === '/contact-us' ? 'active' : ''}`}>
                        <p className="d-flex justify-content-between mb-2   mob_naV_linK">
                          <span className="active_link">Contact</span>
                        </p>
                      </li>
                    </Link>


                  </ul>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =========== FOR MOBILE NAVBAR ENDS ==============  */}
    </>

  )
}

export default Header










