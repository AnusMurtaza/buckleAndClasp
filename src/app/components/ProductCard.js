"use client"
import { addToCart, getTotals } from '@/redux/slices/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { imageUrl } from '../config/apiUrl';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const ProductCard = ({ products }) => {

  const dispatch = useDispatch();

  let handleAddToCart = (product) => {
    console.log(product)
    let data = {
      ...product,
    };
    dispatch(addToCart(data));
    // dispatch(getTotals());
  };
 
  return (
    <>
    <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          280: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },

        }}
        className="mySwiper"
      >
             {products && products.map((value, index) => (
                <SwiperSlide key={index}>

<Link href={`/collections/mens/products/${value.slug}`}>
  <div className="product-item" key={index}>
    <div className="pi-pic">
      <Image src={`${imageUrl}/${value.images[0].image}`} alt="" width={300} height={500} layout="responsive" />
      {value.sale > 0 && <div className="sale">Sale</div>}
      <div className="icon">
        <i className="icon_heart_alt" />
      </div>
 
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
</SwiperSlide>
))}
   
      </Swiper>
    </>
  );
};

export default ProductCard;
