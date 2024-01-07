'use client'
import Image from 'next/image';
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation';
// import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

import ProductGallery from "@/components/productGallery";
import AddToCart from "@/components/addToCart";
import SizeModal from '@/app/components/modals/SizeModal';
import DeliveryReturnModal from '@/app/components/modals/DeliveryReturnModal';
// import { product } from '../../../../../../public/data';
import { baseURL } from '@/app/config/apiUrl';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart, getTotals } from '@/redux/slices/cartSlice';
import ProductCard from '@/app/components/ProductCard';
// import $ from 'jquery';
const page = () => {
  const params = useParams();
  console.log(params)
  const [product, setProduct] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  let [num, setNum] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (num < 20) {
      setNum(Number(num) + 1);
    }
  };
  const handleDecrement = () => {
    if (num > 1) {
      setNum(Number(num) - 1);
    }
  };

  let handleChange = (e) => {
    setNum(e.target.value);
  };
  let handleAddToCart = (product, num) => {
    let data = {
      ...product,
      num,
      size:selectedSize,
      color:selectedColor
    };
    dispatch(addToCart(data));
    // dispatch(getTotals());
    setNum(1);
  };



  const fetchProduct = async () => {
    setLoading(true)
    try {
      const response = await axios.get(baseURL + `/get_product_by_${params.id}`);
      const { data } = response.data;
      setProduct(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  };
  const fetchRelatedProduct = async () => {
    setLoading(true)
    try {
      const response = await axios.get(baseURL + `/get_related_product_by_id/${product?.id}`);
      const { data } = response.data;
      setRelatedProduct(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchProduct()
    if(product?.id){

      fetchRelatedProduct()
    }
  }, [])
  useEffect(() => {
    if(product?.id){

      fetchRelatedProduct()
    }
  }, [product?.id])
  
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  console.log(selectedColor)
  console.log(selectedSize)
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
                  <ProductGallery images={product?.images} />

                </div>
                <div className="col-lg-6">
                  <div className="product-details">
                    <div className="pd-title">
                      <span>{product?.title}</span>
                      <h3>{product?.name}</h3>
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
                      {/* <p>
                  {product?.description}
                  </p> */}
                      {product?.sale > 0 &&
                        <h4>
                          ${product?.discounted_price}
                          <span>${product?.price}</span>
                        </h4>
                      }
                      {product?.sale == 0 &&
                        <h4>
                          ${product?.price}
                        </h4>
                      }
                    </div>
                    <div className="pd-color">
                      <h6>Color</h6>
                      <div className="pd-color-choose">
          {product &&
            product.colors?.map((value, index) => (
              <div className="cc-item" key={index}>
                <input
                  type="radio"
                  id={`cc-${value.color}`}
                  name="color"
                  checked={selectedColor === value.color}
                  onChange={() => handleColorChange(value.color)}
                />
                <label className={selectedColor === value.color ? 'active' : ''} htmlFor={`cc-${value.color}`} style={{ background: value.color }} />
              </div>
            ))}
        </div>
                    </div>
                    <div className="pd-size-choose">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <div className="sc-item" key={size}>
            <input
              type="radio"
              id={`size-${size}`}
              name="size"
              checked={selectedSize === size}
              onChange={() => handleSizeChange(size)}
            />
            <label className={selectedSize === size ? 'active' : ''} htmlFor={`size-${size}`}>{size}</label>
          </div>
        ))}
      </div>
                    <div className="quantity">
                      <div className="pro-qty">
                        <span className="dec qtybtn" onClick={handleDecrement}>-</span>
                        <input type="text"
                          disabled
                          value={num}
                          onChange={handleChange} />
                        <span className="inc qtybtn" onClick={handleIncrement}>+</span>
                      </div>
                      <button className="primary-btn pd-cart" onClick={() => handleAddToCart(product, num)}>
                        Add To Cart
                      </button>
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

                  </div>
                </div>
              </div>
              <div className="product-tab-wrap my-5">

                <ul class="nav tab-item justify-content-center nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item me-3" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">DESCRIPTION</button>
                  </li>
                  <li class="nav-item me-3" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">COLOR DISCLAIMER</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">SHIPPING INFORMATION'</button>
                  </li>
                </ul>
                <div class="tab-content my-5" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    {product?.description}
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="alert alert-warning" role="alert">
                      The colors of the actual product may slightly differ from the image due to photographic lighting and varying screen calibrations.
                    </div>
                  </div>
                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="alert alert-secondary">
                      <h3>DELIVERY TIME:</h3>
                      <p>It takes one working day to process your order. All orders received before 4:30 PM on a working day are processed and dispatched the same day. Orders received after 4:30 PM are processed and dispatched the next day.</p>
                      <p>In case an order is placed on Sunday or on a holiday; the order will be processed on the next working day.</p>
                      <p>All orders will be processed after phone verification from the customer.</p>

                      <h3>SHIPPING PARTNER:</h3>
                      <p>All orders are dispatched via TCS or LEOPARD and tracking number is provided to customer once the order is shipped.</p>


                      <h3>PAYMENT:</h3>
                      <p>We accept payment through Credit Card, Online Banking & Cash On Delivery.</p>

                      <p>Flat Rate of Rs 199 will be applied in the total amount of the order.</p>
                      <p>Shipping charges will be free if the order value exceeded Rs 3500.</p>

                      <h3>INTERNATIONAL DELIVERY:</h3>
                      <p>We offer international delivery all over the world. International Delivery via DHL and calculated at checkout page.</p>
                      <p>International Orders are shipped after verification of payment.</p>
                      <p>DHL Tracking is provided after shipment is made. If you have any shipment instructions, please mention in the notes or contact the customer support with your query.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="product-tab">
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
          </div> */}
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
          <ProductCard products={relatedProduct}/>

          {/* <div className="row">
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
          </div> */}
        </div>
      </div>
      {/* -------Size-Guide-Modal-Start------------ */}
      <SizeModal />
      {/* -------Size-Guide-Modal-Start------------ */}
      {/* -------Delivery-Return-Modal-Start------------ */}
      <DeliveryReturnModal />
      {/* -------Delivery-Return-Modal-end------------ */}
      {/* Related Products Section End */}
    </>

  )
}

export default page
