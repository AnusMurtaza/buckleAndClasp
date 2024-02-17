import Link from "next/link";
import React, { useEffect, useState } from "react";
import { baseURL, imageUrl } from "../config/apiUrl";
import axios from "axios";
import Image from "next/image";

const HeroSection = ({banner}) => {

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {banner.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {banner.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <Image
                src={`${imageUrl}/uploads/${item.image}`}
                alt="Banner"
                width={500}
                height={500}
                layout="responsive"
              />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>SEE WHO JUST SAUNTERED IN.</h5>
                <p>
                  Discover our latest collection of leather jackets, bags, and
                  outerwear.
                </p>
                <Link href="/collections/new-arrivals">
                  {" "}
                  <button>NEW ARRIVALS</button>
                </Link>
              </div> */}
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Hero Section End */}
    </>
  );
};

export default HeroSection;
