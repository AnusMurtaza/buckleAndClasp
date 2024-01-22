"use client";
import { useSearchParams } from "next/navigation";
import { baseURL, imageUrl } from "@/app/config/apiUrl";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const page = () => {
  const { categories } = useSelector((state) => state.category);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      var FormData = require("form-data");
      var value = new FormData();
      value.append("keyword", search);
      const response = await axios.post(
        baseURL + `/search?page=${page}`,
        value
      );
      const { data } = response.data;
      setProducts((prevProducts) =>
        page === 1 ? data.data : [...prevProducts, ...data.data]
      );
      setLastPage(data.last_page === page);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [page, search]);
  return (
    <>
      {/* Breadcrumb Section Begin */}
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link href="/">
                  <i className="fa fa-home" /> Home
                </Link>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section Begin */}
      {/* Product Shop Section Begin */}
      <section className="product-shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
              <div className="filter-widget">
                <h4 className="fw-title">Categories</h4>
                <ul className="filter-catagories">
                  {categories &&
                    categories.map((category) => (
                      <li key={category.id}>
                        <Link href={`/collections/${category.slug}`}>
                          {category.name}
                        </Link>
                        {category.sub_categories &&
                          category.sub_categories.length > 0 && (
                            <ul className="ms-3">
                              {category.sub_categories.map((subCategory) => (
                                <li key={subCategory.id}>
                                  <Link
                                    href={`/collections/${subCategory.slug}`}
                                  >
                                    {subCategory.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}

                  {/* <li>
                  <Link href="/">Women</Link>
                </li>
                <li>
                  <Link href="/">Kids</Link>
                </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <div className="product-list">
                <div className="row">
                  {!loading && products.length === 0 && (
                    <div className="text-center mt-5">
                      <i className="fa-solid fa-bag-shopping no_cart_bag" />
                      <p className="no_pro__p my-3">
                        No products were found matching your selection.
                      </p>
                    </div>
                  )}
                  {products &&
                    products.map((value, index) => {
                      console.log(value);
                      return (
                        <div className="col-lg-4 col-sm-6">
                          <Link
                            href={`/collections/${value.sub_category.slug}/products/${value.slug}`}
                          >
                            <div className="product-item" key={index}>
                              <div className="pi-pic">
                                <Image
                                  src={`${imageUrl}/${value.images[0].image}`}
                                  alt=""
                                  width={244}
                                  height={298}
                                />
                                {value.sale > 0 && (
                                  <div className="sale">Sale</div>
                                )}
                                <div className="icon">
                                  <i className="icon_heart_alt" />
                                </div>
                                <ul>
                                  <li className="quick-view">
                                    <span>+ View</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="pi-text">
                                <div className="catagory-name">
                                  {value.title}
                                </div>
                                {/* <Link href="/"> */}
                                <h5>{value.name}</h5>
                                {/* </Link */}
                                {value.sale == 0 && (
                                  <div className="product-price">
                                    ${value.price}
                                  </div>
                                )}
                                {value.sale > 0 && (
                                  <div className="product-price">
                                    ${value.discounted_price}
                                    {value.sale > 0 && (
                                      <span>${value.price}</span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
              {!loading && products.length > 0 && !lastPage && (
                <div className="loading-more">
                  <i className="icon_loading" />

                  <span onClick={() => setPage((prevPage) => prevPage + 1)}>
                    Loading More
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Product Shop Section End */}
    </>
  );
};

export default page;
