'use client'
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
// import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'
import styles from "./page.module.css";
import utils from "@/components/utils.module.css";
import ProductGallery from "@/components/productGallery";
import AddToCart from "@/components/addToCart";
import { product } from "../../../../public/data";
import SizeModal from '@/app/components/modals/SizeModal';
import DeliveryReturnModal from '@/app/components/modals/DeliveryReturnModal';
// import $ from 'jquery';
const page = () => {
    const router = useRouter();
    const data = router.query;
    console.log(data)


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
            <span>Detail</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb Section Begin */}
  {/* Product Shop Section Begin */}
  <section className="product-shop spad page-details">
    <div className="container">
      <div className="row">
   
        <div className="col-lg-12">
          <div className="row">
          <div className="col-lg-6">
          <ProductGallery images={product.images} />

</div>
            <div className="col-lg-6">
              <div className="product-details">
                <div className="pd-title">
                  <span>oranges</span>
                  <h3>Pure Pineapple</h3>
                  <Link href="/" className="heart-icon">
                    <i className="icon_heart_alt" />
                  </Link>
                </div>
                <div className="pd-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                  <span>(5)</span>
                </div>
                <div className="pd-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ing elit, sed do
                    eiusmod tempor sum dolor sit amet, consectetur adipisicing
                    elit, sed do mod tempor
                  </p>
                  <h4>
                    $495.00 <span>629.99</span>
                  </h4>
                </div>
                {/* <div className="pd-color">
                  <h6>Color</h6>
                  <div className="pd-color-choose">
                    <div className="cc-item">
                      <input type="radio" id="cc-black" />
                      <label htmlFor="cc-black" />
                    </div>
                    <div className="cc-item">
                      <input type="radio" id="cc-yellow" />
                      <label htmlFor="cc-yellow" className="cc-yellow" />
                    </div>
                    <div className="cc-item">
                      <input type="radio" id="cc-violet" />
                      <label htmlFor="cc-violet" className="cc-violet" />
                    </div>
                  </div>
                </div> */}
                <div className="pd-size-choose">
                  <div className="sc-item">
                    <input type="radio" id="sm-size" />
                    <label htmlFor="sm-size">s</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="md-size" />
                    <label htmlFor="md-size">m</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="lg-size" />
                    <label htmlFor="lg-size">l</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="xl-size" />
                    <label htmlFor="xl-size">xs</label>
                  </div>
                </div>
                <div className="quantity">
                  <div className="pro-qty">
                  <span class="dec qtybtn" >-</span>
                    <input type="text" defaultValue={1} />
                    <span class="inc qtybtn" >+</span>
                  </div>
                  <Link href="/" className="primary-btn pd-cart">
                    Add To Cart
                  </Link>
                </div>
                <div className="my-3">
                  <div className="size__del flex-wrap">
                    <p className="me-md-5 me-2">
                      <span className="me-3">
                        <i className="fa-solid fa-book"></i>
                      </span>
                      <span
                      
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                        
                      >
                        Size Guide
                      </span>
                    </p>
                    <p className="me-md-5 me-2">
                      <span className="me-3">
                        <i className="fa-solid fa-rotate-left"></i>
                      </span>
                      <span
                      
                        data-bs-toggle="modal"
                        data-bs-target="#delivery_return"
                        
                      >
                        Delivery & Return
                      </span>
                    </p>
                      <Link href="/contact-us">
                    <p className="">
                      <span className="me-3">
                        <i className="fa-regular fa-circle-question"></i>
                      </span>
                      Ask a Question
                    </p>
                      </Link>
                  </div>
                </div>
                {/* <ul className="pd-tags">
                  <li>
                    <span>CATEGORIES</span>: More Accessories, Wallets &amp;
                    Cases
                  </li>
                  <li>
                    <span>TAGS</span>: Clothing, T-shirt, Woman
                  </li>
                </ul>
                <div className="pd-share">
                  <div className="p-code">Sku : 00012</div>
                  <div className="pd-social">
                    <Link href="/">
                      <i className="ti-facebook" />
                    </Link>
                    <Link href="/">
                      <i className="ti-twitter-alt" />
                    </Link>
                    <Link href="/">
                      <i className="ti-linkedin" />
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="product-tab">
            <div className="tab-item">
              <ul className="nav" role="tablist">
                <li>
                  <Link
                    className="active"
                    data-toggle="tab"
                    href="#tab-1"
                    role="tab"
                  >
                    DESCRIPTION
                  </Link>
                </li>
                <li>
                  <span data-toggle="tab" href="#tab-2" role="tab">
                    SPECIFICATIONS
                  </span>
                </li>
                <li>
                  <span data-toggle="tab" href="#tab-3" role="tab">
                    Customer Reviews (02)
                  </span>
                </li>
              </ul>
            </div>
            <div className="tab-item-content">
              <div className="tab-content">
                <div
                  className="tab-pane fade-in active"
                  id="tab-1"
                  role="tabpanel"
                >
                  <div className="product-content">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5>Introduction</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in{" "}
                        </p>
                        <h5>Features</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in{" "}
                        </p>
                      </div>
                      <div className="col-lg-5">
                        <img src="img/product-single/tab-desc.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-2" role="tabpanel">
                  <div className="specification-table">
                    <table>
                      <tbody>
                        <tr>
                          <td className="p-catagory">Customer Rating</td>
                          <td>
                            <div className="pd-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o" />
                              <span>(5)</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-catagory">Price</td>
                          <td>
                            <div className="p-price">$495.00</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-catagory">Add To Cart</td>
                          <td>
                            <div className="cart-add">+ add to cart</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-catagory">Availability</td>
                          <td>
                            <div className="p-stock">22 in stock</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-catagory">Weight</td>
                          <td>
                            <div className="p-weight">1,3kg</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-catagory">Size</td>
                          <td>
                            <div className="p-size">Xxl</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-catagory">Color</td>
                          <td>
                            <span className="cs-color" />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-catagory">Sku</td>
                          <td>
                            <div className="p-code">00012</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-3" role="tabpanel">
                  <div className="customer-review-option">
                    <h4>2 Comments</h4>
                    <div className="comment-option">
                      <div className="co-item">
                        <div className="avatar-pic">
                          <img src="img/product-single/avatar-1.png" alt="" />
                        </div>
                        <div className="avatar-text">
                          <div className="at-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                          </div>
                          <h5>
                            Brandon Kelley <span>27 Aug 2019</span>
                          </h5>
                          <div className="at-reply">Nice !</div>
                        </div>
                      </div>
                      <div className="co-item">
                        <div className="avatar-pic">
                          <img src="img/product-single/avatar-2.png" alt="" />
                        </div>
                        <div className="avatar-text">
                          <div className="at-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                          </div>
                          <h5>
                            Roy Banks <span>27 Aug 2019</span>
                          </h5>
                          <div className="at-reply">Nice !</div>
                        </div>
                      </div>
                    </div>
                    <div className="personal-rating">
                      <h6>Your Ratind</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </div>
                    </div>
                    <div className="leave-comment">
                      <h4>Leave A Comment</h4>
                      <form action="/" className="comment-form">
                        <div className="row">
                          <div className="col-lg-6">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div className="col-lg-6">
                            <input type="text" placeholder="Email" />
                          </div>
                          <div className="col-lg-12">
                            <textarea
                              placeholder="Messages"
                              defaultValue={""}
                            />
                            <button type="submit" className="site-btn">
                              Send message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Product Shop Section End */}
  {/* Related Products Section End */}
  <div className="related-products spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Related Products</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="product-item">
            <div className="pi-pic">
              <img src="img/products/women-1.jpg" alt="" />
              <div className="sale">Sale</div>
              <div className="icon">
                <i className="icon_heart_alt" />
              </div>
              <ul>
                <li className="w-icon active">
                  <Link href="/">
                    <i className="icon_bag_alt" />
                  </Link>
                </li>
                <li className="quick-view">
                  <Link href="/">+ Quick View</Link>
                </li>
                <li className="w-icon">
                  <Link href="/">
                    <i className="fa fa-random" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pi-text">
              <div className="catagory-name">Coat</div>
              <Link href="/">
                <h5>Pure Pineapple</h5>
              </Link>
              <div className="product-price">
                $14.00
                <span>$35.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="product-item">
            <div className="pi-pic">
              <img src="img/products/women-2.jpg" alt="" />
              <div className="icon">
                <i className="icon_heart_alt" />
              </div>
              <ul>
                <li className="w-icon active">
                  <Link href="/">
                    <i className="icon_bag_alt" />
                  </Link>
                </li>
                <li className="quick-view">
                  <Link href="/">+ Quick View</Link>
                </li>
                <li className="w-icon">
                  <Link href="/">
                    <i className="fa fa-random" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pi-text">
              <div className="catagory-name">Shoes</div>
              <Link href="/">
                <h5>Guangzhou sweater</h5>
              </Link>
              <div className="product-price">$13.00</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="product-item">
            <div className="pi-pic">
              <img src="img/products/women-3.jpg" alt="" />
              <div className="icon">
                <i className="icon_heart_alt" />
              </div>
              <ul>
                <li className="w-icon active">
                  <Link href="/">
                    <i className="icon_bag_alt" />
                  </Link>
                </li>
                <li className="quick-view">
                  <Link href="/">+ Quick View</Link>
                </li>
                <li className="w-icon">
                  <Link href="/">
                    <i className="fa fa-random" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pi-text">
              <div className="catagory-name">Towel</div>
              <Link href="/">
                <h5>Pure Pineapple</h5>
              </Link>
              <div className="product-price">$34.00</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="product-item">
            <div className="pi-pic">
              <img src="img/products/women-4.jpg" alt="" />
              <div className="icon">
                <i className="icon_heart_alt" />
              </div>
              <ul>
                <li className="w-icon active">
                  <Link href="/">
                    <i className="icon_bag_alt" />
                  </Link>
                </li>
                <li className="quick-view">
                  <Link href="/">+ Quick View</Link>
                </li>
                <li className="w-icon">
                  <Link href="/">
                    <i className="fa fa-random" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pi-text">
              <div className="catagory-name">Towel</div>
              <Link href="/">
                <h5>Converse Shoes</h5>
              </Link>
              <div className="product-price">$34.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        {/* -------Size-Guide-Modal-Start------------ */}
        <SizeModal/>
      {/* -------Size-Guide-Modal-Start------------ */}
         {/* -------Delivery-Return-Modal-Start------------ */}
         <DeliveryReturnModal/>
      {/* -------Delivery-Return-Modal-end------------ */}
  {/* Related Products Section End */}
</>

  )
}

export default page
