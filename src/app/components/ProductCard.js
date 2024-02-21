"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imageUrl } from "../config/apiUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const ProductCard = ({ products }) => {

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
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
          1600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper py-md-5 pb-4"
      >
        {products &&
          products.map((value, index) => (
            <SwiperSlide key={index}>
              <Link href={`/collections/mens/products/${value.slug}`}>
                <div className="product-item" key={index}>
                  <div className="pi-pic">
                    <Image
                      src={`${imageUrl}/${value.images[0].image}`}
                      alt=""
                      width={300}
                      height={300}
                      layout="responsive"
                    />
                    {value.sale > 0 && <div className="sale">Sale</div>}
                    <div className="icon">
                      <i className="icon_heart_alt" />
                    </div>
                  </div>
                  <div className="pi-text">
                    <div className="catagory-name">{value.title}</div>
                    <h5>{value.name}</h5>
                    {value.sale == 0 && (
                      <div className="product-price">${value.price}</div>
                    )}
                    {value.sale > 0 && (
                      <div className="product-price">
                        ${value.discounted_price}
                        {value.sale > 0 && <span>${value.price}</span>}
                      </div>
                    )}
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
