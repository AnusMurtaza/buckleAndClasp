"use client"
import { baseURL, imageUrl } from '@/app/config/apiUrl';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link'
import { useParams, usePathname, } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const page = () => {
  const params = useParams()
  console.log(params)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categories } = useSelector((state) => state.category);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const pathname = usePathname()

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/products_by_${params.slug}?page=${page}`);
      const { data } = response.data;
  
      // If it's the first page, set products directly; otherwise, append to existing products
      setProducts((prevProducts) => (page === 1 ? data.data : [...prevProducts, ...data.data]));
      setLastPage(data.last_page === page);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchProducts()
  }, [page])
 
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
                  {categories && categories.map(category => (
                  <li key={category.id}>
                    <Link
                     href={`/collections/${category.slug}`}
                     className={`${pathname === `/collections/${category.slug}` ? 'active' : ''}`}
                    >{category.name}</Link>
                    {category.sub_categories && category.sub_categories.length > 0 && (
                      <ul className="ms-3">
                        {category.sub_categories.map(subCategory => (
                          <li key={subCategory.id}>
                            <Link href={`/collections/${subCategory.slug}`}
                     className={`${pathname === `/collections/${subCategory.slug}` ? 'active' : ''}`}
                            
                            >{subCategory.name}</Link>
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
                  {products && products.map((value, index) => {
                    console.log(value)
                    return (
                      <div className="col-lg-4 col-6">
                        <Link href={`/collections/${params.slug}/products/${value.slug}`}>
                          <div className="product-item" key={index}>
                            <div className="pi-pic">
                              <Image src={`${imageUrl}/${value.images[0].image}`} layout='responsive' alt="" width={244} height={298} />
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
                                {value.sale > 0 && <span> ${value.price}</span>}
                              </div>
                             }
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  })}

                </div>
              </div>
              {/* {!loading && products.length > 0 && (

              <div className="loading-more">
                <i className="icon_loading" />
                <Link href="/">Loading More</Link>
              </div>
                  )} */}
      {!loading && products.length > 0 && !lastPage && (
                  <div className="loading-more">
                <i className="icon_loading" />

          <span  onClick={() => setPage((prevPage) => prevPage + 1)}>
            Loading More
          </span>
      </div>
        )}

            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default page






















// "use client"
// import { baseURL, imageUrl } from '@/app/config/apiUrl';
// import axios from 'axios';
// import Image from 'next/image';
// import Link from 'next/link'
// import { useParams, } from 'next/navigation';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';

// const page = () => {
//   const params = useParams()
//   console.log(params)
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const { categories } = useSelector((state) => state.category);

//   const fetchProducts = async () => {
//     setLoading(true)
//     try {
//       const response = await axios.get(baseURL + `/products_by_${params.slug}?page=1`);
//       const { data } = response.data;
//       setProducts(data.data);
//       setLoading(false)
//     } catch (error) {
//       setLoading(false)
//     }
//   };
//   useEffect(() => {
//     fetchProducts()
//   }, [])
//   console.log(products)

//   // const [minPrice, setMinPrice] = useState(2500);
//   // const [maxPrice, setMaxPrice] = useState(7500);

//   // const updatePriceRange = () => {
//   //   let rangeInput = document.querySelectorAll(".range-input input");
//   //   let priceInput = document.querySelectorAll(".price-input input");
//   //   let range = document.querySelector(".slider .progress");
//   //   let priceGap = 1000;

//   //   let newMinPrice = parseInt(priceInput[0].value);
//   //   let newMaxPrice = parseInt(priceInput[1].value);

//   //   if (newMaxPrice - newMinPrice >= priceGap && newMaxPrice <= rangeInput[1].max) {
//   //     rangeInput[0].value = newMinPrice;
//   //     rangeInput[1].value = newMaxPrice;

//   //     range.style.left = (newMinPrice / rangeInput[0].max) * 100 + "%";
//   //     range.style.right = 100 - (newMaxPrice / rangeInput[1].max) * 100 + "%";
//   //   }

//   //   setMinPrice(newMinPrice);
//   //   setMaxPrice(newMaxPrice);
//   // };

//   // const handleCommittedChange = (newValue) => {
//   //   const FormData = require('form-data');
//   //   let data = new FormData();
//   //   data.append('min_price', newValue[0]);
//   //   data.append('max_price', newValue[1]);

//   //   let config = {
//   //     method: 'post',
//   //     url: baseURL + `/search_by_price_range`,
//   //     data: data
//   //   };

//   //   axios.request(config)
//   //     .then((response) => {
//   //       const { data } = response.data;
//   //       // Update the state or perform any other actions based on the API response
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // };

//   // const handleFilterClick = () => {
//   //   handleCommittedChange([minPrice, maxPrice]);
//   // };

//   return (
//     <>
//       {/* Breadcrumb Section Begin */}
//       <div className="breacrumb-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="breadcrumb-text">
//                 <Link href="/">
//                   <i className="fa fa-home" /> Home
//                 </Link>
//                 <span>Shop</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Breadcrumb Section Begin */}
//       {/* Product Shop Section Begin */}
//       <section className="product-shop spad">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
//               <div className="filter-widget">
//                 <h4 className="fw-title">Categories</h4>
//                 <ul className="filter-catagories">
//                   {categories && categories.map(category => (
//                   <li key={category.id}>
//                     <Link
//                      href={`/collections/${category.slug}`}
//                     >{category.name}</Link>
//                     {category.sub_categories && category.sub_categories.length > 0 && (
//                       <ul className="ms-3">
//                         {category.sub_categories.map(subCategory => (
//                           <li key={subCategory.id}>
//                             <Link href={`/collections/${subCategory.slug}`}>{subCategory.name}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
                  
//                 </ul>

//                 {/* <div className="d-flex">
//       <div className="wrapper">
//         <header>
//           <h2>Price Range</h2>
//         </header>
//         <div className="price-input">
//           <div className="field">
//             <input
//               type="number"
//               className="input-min"
//               value={minPrice}
//               onChange={(e) => setMinPrice(parseInt(e.target.value))}
//             />
//           </div>
//           <div className="separator">-</div>
//           <div className="field">
//             <input
//               type="number"
//               className="input-max"
//               value={maxPrice}
//               onChange={(e) => setMaxPrice(parseInt(e.target.value))}
//             />
//           </div>
//         </div>
//         <div className="slider">
//           <div className="progress" />
//         </div>
//         <div className="range-input">
//           <input
//             type="range"
//             className="range-min"
//             min={0}
//             max={10000}
//             value={minPrice}
//             step={100}
//             onChange={(e) => setMinPrice(parseInt(e.target.value))}
//           />
//           <input
//             type="range"
//             className="range-max"
//             min={0}
//             max={10000}
//             value={maxPrice}
//             step={100}
//             onChange={(e) => setMaxPrice(parseInt(e.target.value))}
//           />
//         </div>
//       </div>
//     </div>
//     <a href="#" className="filter-btn" onClick={handleFilterClick}>
//         Filter
//       </a> */}


                
//               </div>



//             </div>
//             <div className="col-lg-9 order-1 order-lg-2">
//               {/* <div className="product-show-option">
//                 <div className="row">
//                   <div className="col-lg-7 col-md-7">
//                     <div className="select-option">
//                       <select className="sorting">
//                         <option value="">Default Sorting</option>
//                       </select>
//                       <select className="p-show">
//                         <option value="">Show:</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="col-lg-5 col-md-5 text-right">
//                     <p>Show 01- 09 Of 36 Product</p>
//                   </div>
//                 </div>
//               </div> */}
//               <div className="product-list">
//                 <div className="row">

//                 {!loading && products.length === 0 && (
//                     <div className="text-center mt-5">
//                       <i className="fa-solid fa-bag-shopping no_cart_bag" />
//                       <p className="no_pro__p my-3">
//                         No products were found matching your selection.
//                       </p>
//                     </div>
//                   )}
//                   {products && products.map((value, index) => {
//                     console.log(value)
//                     return (
//                       <div className="col-lg-4 col-sm-6">
//                         <Link href={`/collections/${params.slug}/products/${value.slug}`}>
//                           <div className="product-item" key={index}>
//                             <div className="pi-pic">
//                               <Image src={`${imageUrl}/${value.images[0].image}`} alt="" width={244} height={298} />
//                               {value.sale > 0 && <div className="sale">Sale</div>}
//                               <div className="icon">
//                                 <i className="icon_heart_alt" />
//                               </div>
//                               <ul>
//                                 <li className="quick-view">
//                                   <span >
//                                     + View
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="pi-text">
//                               <div className="catagory-name">{value.title}</div>
//                               {/* <Link href="/"> */}
//                               <h5>{value.name}</h5>
//                               {/* </Link */}
//                               {value.sale == 0 &&
//                               <div className="product-price">
//                                 ${(value.price)}
//                               </div>
//                                 }
//                               {value.sale > 0 &&
//                               <div className="product-price">
//                                 ${(value.discounted_price)}
//                                 {value.sale > 0 && <span>${value.price}</span>}
//                               </div>
//                              }
//                             </div>
//                           </div>
//                         </Link>
//                       </div>
//                     )
//                   })}

//                 </div>
//               </div>
//               {!loading && products.length > 0 && (

//               <div className="loading-more">
//                 <i className="icon_loading" />
//                 <Link href="/">Loading More</Link>
//               </div>
//                   )}

//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Product Shop Section End */}

//     </>

//   )
// }

// export default page