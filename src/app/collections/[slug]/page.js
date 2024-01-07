"use client"
import { baseURL, imageUrl } from '@/app/config/apiUrl';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link'
import { useParams, } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const page = () => {
  const params = useParams()
  console.log(params)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categories } = useSelector((state) => state.category);

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const response = await axios.get(baseURL + `/products_by_${params.slug}`);
      const { data } = response.data;
      setProducts(data.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchProducts()
  }, [])
  console.log(products)
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
                  <li>
                    <Link href="/">Men</Link>
                      <ul>
                        <li className='ms-3'>mens leather</li>
                      </ul>
                  </li>
                  {categories && categories.map(category => (
                  <li key={category.id}>
                    <Link
                     href={`/collections/${category.slug}`}
                    >{category.name}</Link>
                    {category.sub_categories && category.sub_categories.length > 0 && (
                      <ul className="ms-3">
                        {category.sub_categories.map(subCategory => (
                          <li key={subCategory.id}>
                            <Link href={`/collections/${subCategory.slug}`}>{subCategory.name}</Link>
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
              {/* <div className="product-show-option">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="select-option">
                      <select className="sorting">
                        <option value="">Default Sorting</option>
                      </select>
                      <select className="p-show">
                        <option value="">Show:</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 text-right">
                    <p>Show 01- 09 Of 36 Product</p>
                  </div>
                </div>
              </div> */}
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
                  {products && products.map((value, index) => {
                    console.log(value)
                    return (
                      <div className="col-lg-4 col-sm-6">
                        <Link href={`/collections/${params.slug}/products/${value.slug}`}>
                          <div className="product-item" key={index}>
                            <div className="pi-pic">
                              <Image src={`${imageUrl}/${value.images[0].image}`} alt="" width={244} height={298} />
                              {value.sale > 0 && <div className="sale">Sale</div>}
                              <div className="icon">
                                <i className="icon_heart_alt" />
                              </div>
                              <ul>
                                <li className="quick-view">
                                  <span >
                                    + View
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="pi-text">
                              <div className="catagory-name">{value.title}</div>
                              {/* <Link href="/"> */}
                              <h5>{value.name}</h5>
                              {/* </Link */}
                              {value.sale == 0 &&
                              <div className="product-price">
                                ${(value.price)}
                              </div>
                                }
                              {value.sale > 0 &&
                              <div className="product-price">
                                ${(value.discounted_price)}
                                {value.sale > 0 && <span>${value.price}</span>}
                              </div>
                             }
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  })}

                  {/* <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="/img/products/product-2.jpg" alt="" />
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
                          <h5>Guangzhou sweater</h5>
                        </Link>
                        <div className="product-price">
                          $13.00
                          <span>$35.00</span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="/img/products/product-3.jpg" alt="" />
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
                        <div className="product-price">
                          $34.00
                          <span>$35.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="/img/products/product-4.jpg" alt="" />
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
                          <h5>Microfiber Wool Scarf</h5>
                        </Link>
                        <div className="product-price">
                          $64.00
                          <span>$35.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="/img/products/product-5.jpg" alt="" />
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
                          <h5>Men's Painted Hat</h5>
                        </Link>
                        <div className="product-price">
                          $44.00
                          <span>$35.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="/img/products/product-6.jpg" alt="" />
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
                          <h5>Converse Shoes</h5>
                        </Link>
                        <div className="product-price">
                          $34.00
                          <span>$35.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="/img/products/product-7.jpg" alt="" />
                        <div className="sale pp-sale">Sale</div>
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
                        <div className="product-price">
                          $64.00
                          <span>$35.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="/img/products/product-8.jpg" alt="" />
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
                          <h5>2 Layer Windbreaker</h5>
                        </Link>
                        <div className="product-price">
                          $44.00
                          <span>$35.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src="/img/products/product-9.jpg" alt="" />
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
                          <h5>Converse Shoes</h5>
                        </Link>
                        <div className="product-price">
                          $34.00
                          <span>$35.00</span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {!loading && products.length > 0 && (

              <div className="loading-more">
                <i className="icon_loading" />
                <Link href="/">Loading More</Link>
              </div>
                  )}

            </div>
          </div>
        </div>
      </section>
      {/* Product Shop Section End */}

    </>

  )
}

export default page