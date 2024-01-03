// "use client"
// import { addToCart, getTotals } from '@/redux/slices/cartSlice';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { useDispatch } from 'react-redux';

// const ProductCard = () => {

//     const dispatch = useDispatch();

//     let handleAddToCart = (product) => {
//         console.log(product)
//       let data = {
//         ...product,
//       };
//       dispatch(addToCart(data));
//       dispatch(getTotals());
//     };
//   let data = [
//     {
//       id:1,
//       sale: true,
//       cat_name: 'Jacket',
//       name: 'Vortex Vanguard Jacket',
//       image: '/img/products/women-1.jpg',
//       price: 35.00,
//       discount_price:19.00
//     },
//     {
//       id:2,
//       sale: false,
//       cat_name: 'Jacket',
//       name: 'Shadow Raptor Jacket',
//       image: '/img/products/women-2.jpg',
//       price: 15.00,
//       discount_price:""
//     },
//     {
//       id:3,
//       sale: false,
//       cat_name: 'Jacket',
//       name: 'Rogue Blaze Leather',
//       image: '/img/products/women-3.jpg',
//       price: 29.00,
//       discount_price:""
//     },
//     {
//       id:4,
//       sale: false,
//       cat_name: 'Jacket',
//       name: 'Inferno Drift Jacket',
//       image: '/img/products/women-4.jpg',
//       price: 10.00,
//       discount_price:""
//     },
//   ];
//   const collectionId = 1; // Replace with the actual collection ID or dynamic value
//   const productId = 2;
//   return (
//     <>
//       {data.map((value, index) => (
//         // <Link
//         // href={{
//         //   pathname: {`/product/${value.id}`},
//         //   query: data // the data
//         // }}
//         // >
//         <Link href={`/collections/${collectionId}/products/${productId}`}>
//         <div className="product-item" key={index}>
//           <div className="pi-pic">
//             <Image src={value.image} alt="" width={244} height={298}/>
//             {value.sale && <div className="sale">Sale</div>}
//             <div className="icon">
//               <i className="icon_heart_alt" />
//             </div>
//             <ul>
//               {/* <li className="w-icon active">
//                 <span>
//                   <i className="ti-shopping-cart" onClick={() => handleAddToCart(value)} />
//                 </span>
//               </li> */}
//               <li className="quick-view">
//                 <span >
//                   + View
//                   </span>
//               </li>
//               {/* <li className="w-icon">
//                 <span >
//                   <i className="fa fa-random" />
//                 </span>
//               </li> */}
//             </ul>
//           </div>
//           <div className="pi-text">
//             <div className="catagory-name">{value.cat_name}</div>
//             {/* <Link href="/"> */}
//               <h5>{value.name}</h5>
//             {/* </Link */}
//             <div className="product-price">
//             ${(value.price)}
//             {value.sale && <span>$ {value.discount_price} </span>}
//             </div>
//           </div>
//         </div>
//         </Link>
//       ))}
//     </>
//   );
// };

// export default ProductCard;


"use client"
import { addToCart, getTotals } from '@/redux/slices/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { imageUrl } from '../config/apiUrl';

const ProductCard = ({ products }) => {

  const dispatch = useDispatch();

  let handleAddToCart = (product) => {
    console.log(product)
    let data = {
      ...product,
    };
    dispatch(addToCart(data));
    dispatch(getTotals());
  };
  let data = [
    {
      id: 1,
      sale: true,
      cat_name: 'Jacket',
      name: 'Vortex Vanguard Jacket',
      image: '/img/products/women-1.jpg',
      price: 35.00,
      discount_price: 19.00
    },
    {
      id: 2,
      sale: false,
      cat_name: 'Jacket',
      name: 'Shadow Raptor Jacket',
      image: '/img/products/women-2.jpg',
      price: 15.00,
      discount_price: ""
    },
    {
      id: 3,
      sale: false,
      cat_name: 'Jacket',
      name: 'Rogue Blaze Leather',
      image: '/img/products/women-3.jpg',
      price: 29.00,
      discount_price: ""
    },
    {
      id: 4,
      sale: false,
      cat_name: 'Jacket',
      name: 'Inferno Drift Jacket',
      image: '/img/products/women-4.jpg',
      price: 10.00,
      discount_price: ""
    },
  ];
  const collectionId = 1; // Replace with the actual collection ID or dynamic value
  const productId = 2;
  return (
    <>
      {products && products.map((value, index) => (

        <Link href={`/collections/mens/products/${value.slug}`}>
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
              <h5>{value.name}</h5>
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
      ))}
    </>
  );
};

export default ProductCard;
