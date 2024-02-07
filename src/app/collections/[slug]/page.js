"use client";
import { baseURL, imageUrl } from "@/app/config/apiUrl";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categories } = useSelector((state) => state.category);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const pathname = usePathname();
console.log(params,"params")
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseURL}/products_by_${params.slug}?page=${page}`
      );
      const { data } = response.data;

      // If it's the first page, set products directly; otherwise, append to existing products
      setProducts((prevProducts) =>
        page === 1 ? data.data : [...prevProducts, ...data.data]
      );
      setLastPage(data.last_page === page);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchNewArrivals = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseURL}/get_new_arrival_products?page=${page}`
      );
      const { data } = response.data;

      // If it's the first page, set products directly; otherwise, append to existing products
      setProducts((prevProducts) =>
        page === 1 ? data.data : [...prevProducts, ...data.data]
      );
      setLastPage(data.last_page === page);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchDeals = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseURL}/get_deal_products?page=${page}`
      );
      const { data } = response.data;

      // If it's the first page, set products directly; otherwise, append to existing products
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
    if(params.slug === "new-arrivals"){
      fetchNewArrivals()
    }
    else if (params.slug === "deals-of-the-week"){
      fetchDeals()
    }else{

      fetchProducts();
    }
  }, [page]);

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
            <div className="col-md-3 d-none d-md-block produts-sidebar-filter">
              <div className="filter-widget">
                <h4 className="fw-title">Categories</h4>
                <ul className="filter-catagories">
                  {categories &&
                    categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/collections/${category.slug}`}
                          className={`${
                            pathname === `/collections/${category.slug}`
                              ? "active"
                              : ""
                          }`}
                        >
                          {category.name}
                        </Link>
                        {category.sub_categories &&
                          category.sub_categories.length > 0 && (
                            <ul className="ms-3">
                              {category.sub_categories.map((subCategory) => (
                                <li key={subCategory.id}>
                                  <Link
                                    href={`/collections/${subCategory.slug}`}
                                    className={`${
                                      pathname ===
                                      `/collections/${subCategory.slug}`
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    {subCategory.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="col-md-9">
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
                      return (
                        <div className="col-lg-4 col-6" key={index}>
                          <Link
                            href={`/collections/${params.slug}/products/${value.slug}`}
                          >
                            <div className="product-item">
                              <div className="pi-pic">
                                <Image
                                  src={`${imageUrl}/${value.images[0].image}`}
                                  layout="responsive"
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
                                      <span> ${value.price}</span>
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
    </>
  );
};

export default page;
