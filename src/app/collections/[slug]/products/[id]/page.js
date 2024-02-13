"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import ProductGallery from "@/components/productGallery";
import SizeModal from "@/app/components/modals/SizeModal";
import DeliveryReturnModal from "@/app/components/modals/DeliveryReturnModal";
// import { product } from '../../../../../../public/data';
import { baseURL } from "@/app/config/apiUrl";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "@/redux/slices/cartSlice";
import ProductCard from "@/app/components/ProductCard";
import { toast } from "react-toastify";
// import $ from 'jquery';
const page = () => {
  const params = useParams();
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
    if (selectedColor === null || selectedSize === null) {
      toast.error("PLease choose color and size");
    } else {
      let data = {
        ...product,
        num,
        size: selectedSize,
        color: selectedColor,
      };
      dispatch(addToCart(data));
      // dispatch(getTotals());
      setNum(1);
    }
  };

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        baseURL + `/get_product_by_${params.id}`
      );
      const { data } = response.data;
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const fetchRelatedProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        baseURL + `/get_related_product_by_id/${product?.id}`
      );
      const { data } = response.data;
      setRelatedProduct(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  useEffect(() => {
    if (product?.id) {
      fetchRelatedProduct();
    }
  }, [product?.id]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
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
                <span className="text-capitalize">
                  Product - {product?.name}
                </span>
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
                    {/* <div className="pd-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                      <span> (5)</span>
                    </div> */}
                    <div className="pd-desc">
                      {/* <p>
                  {product?.description}
                  </p> */}
                      {product?.sale > 0 && (
                        <h4>
                          ${product?.discounted_price}
                          <span>${product?.price}</span>
                        </h4>
                      )}
                      {product?.sale == 0 && <h4>${product?.price}</h4>}
                    </div>
                    <div className="pd-color d-flex align-items-center">
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
                              <label
                                className={
                                  selectedColor === value.color ? "active" : ""
                                }
                                htmlFor={`cc-${value.color}`}
                                style={{ background: value.color }}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="pd-size-choose ">
                      {product?.main_category?.name === "Kids" &&
                        [
                          "3-4",
                          "4-5",
                          "5-6",
                          "7-8",
                          "9-10",
                          "11-12",
                          "13-14",
                        ].map((size) => (
                          <div className="sc-item" key={size}>
                            <input
                              type="radio"
                              id={`size-${size}`}
                              name="size"
                              checked={selectedSize === size}
                              onChange={() => handleSizeChange(size)}
                            />
                            <label
                              className={selectedSize === size ? "active" : ""}
                              htmlFor={`size-${size}`}
                            >
                              {size}
                            </label>
                          </div>
                        ))}

                      {product?.main_category?.name !== "Kids" &&
                        ["S", "M", "L", "XL", "2XL"].map((size) => (
                          <div className="sc-item" key={size}>
                            <input
                              type="radio"
                              id={`size-${size}`}
                              name="size"
                              checked={selectedSize === size}
                              onChange={() => handleSizeChange(size)}
                            />
                            <label
                              className={selectedSize === size ? "active" : ""}
                              htmlFor={`size-${size}`}
                            >
                              {size}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className="quantity">
                      <div className="pro-qty">
                        <span className="dec qtybtn" onClick={handleDecrement}>
                          -
                        </span>
                        <input
                          type="text"
                          disabled
                          value={num}
                          onChange={handleChange}
                        />
                        <span className="inc qtybtn" onClick={handleIncrement}>
                          +
                        </span>
                      </div>
                      <button
                        className="primary-btn pd-cart"
                        onClick={() => handleAddToCart(product, num)}
                      >
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
                <ul
                  className="nav tab-item justify-content-center nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item me-3" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      DESCRIPTION
                    </button>
                  </li>
                  <li className="nav-item me-3" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      COLOR DISCLAIMER
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      SHIPPING INFORMATION'
                    </button>
                  </li>
                </ul>
                <div className="tab-content my-5" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    {product?.description}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="alert alert-warning" role="alert">
                      The colors of the actual product may slightly differ from
                      the image due to photographic lighting and varying screen
                      calibrations.
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="alert alert-secondary">
                      <h4 className="fw-bold my-3">DELIVERY TIME:</h4>
                      <p>
                        It takes one working day to process your order. All
                        orders received before 4:30 PM on a working day are
                        processed and dispatched the same day. Orders received
                        after 4:30 PM are processed and dispatched the next day.
                      </p>
                      <p>
                        In case an order is placed on Sunday or on a holiday;
                        the order will be processed on the next working day.
                      </p>
                      <p>
                        All orders will be processed after phone verification
                        from the customer.
                      </p>

                      <h4 className="fw-bold my-3">SHIPPING PARTNER:</h4>
                      <p>
                        All orders are dispatched via TCS or LEOPARD and
                        tracking number is provided to customer once the order
                        is shipped.
                      </p>

                      <h4 className="fw-bold my-3">PAYMENT:</h4>
                      <p>
                        We accept payment through Credit Card, Online Banking &
                        Cash On Delivery.
                      </p>

                      <p>
                        Flat Rate of Rs 199 will be applied in the total amount
                        of the order.
                      </p>
                      <p>
                        Shipping charges will be free if the order value
                        exceeded Rs 3500.
                      </p>

                      <h4 className="fw-bold my-3">INTERNATIONAL DELIVERY:</h4>
                      <p>
                        We offer international delivery all over the world.
                        International Delivery via DHL and calculated at
                        checkout page.
                      </p>
                      <p>
                        International Orders are shipped after verification of
                        payment.
                      </p>
                      <p>
                        DHL Tracking is provided after shipment is made. If you
                        have any shipment instructions, please mention in the
                        notes or contact the customer support with your query.
                      </p>
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

      {relatedProduct.length>0 &&
      <div className="related-products spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Related Products</h2>
              </div>
            </div>
          </div>
          <ProductCard products={relatedProduct} />
        </div>
      </div>
}
      {/* -------Size-Guide-Modal-Start------------ */}
      <SizeModal />
      {/* -------Size-Guide-Modal-Start------------ */}
      {/* -------Delivery-Return-Modal-Start------------ */}
      <DeliveryReturnModal />
      {/* -------Delivery-Return-Modal-end------------ */}
      {/* Related Products Section End */}
    </>
  );
};

export default page;
