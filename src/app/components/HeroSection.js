import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { baseURL, imageUrl } from '../config/apiUrl';
import axios from 'axios';
import Image from 'next/image';

const HeroSection = () => {

  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBanner = async () => {
    setLoading(true)
    try {
      const response = await axios.get(baseURL + "/all_banner");
      const { data } = response.data;
      setBanner(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchBanner()
  }, [])
  
  return (
    <>
     {/* Hero Section Begin */}
  {/* <section className="hero-section">
    <div className="hero-items owl-carousel">
      <div className="single-hero-items set-bg"  style={{backgroundImage: `url("img/newBanner.png")`}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <span>Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <Link href="/" className="primary-btn">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="off-card">
            <h2>
              Sale <span>50%</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="single-hero-items set-bg" style={{backgroundImage: `url("img/hero-2.jpg")`}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <span>Bag,kids</span>
              <h1>Black friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <Link href="/" className="primary-btn">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="off-card">
            <h2>
              Sale <span>50%</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section> */}


{/* <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {banner.map((item, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                 <Image
                    src={`${imageUrl}/uploads/${item.image}`}
                    alt="Banner"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
      )}
    </div> */}
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
  {banner.map((_, index) => (
    <button
      key={index}
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={index}
      className={index === 0 ? 'active' : ''}
      aria-current={index === 0 ? 'true' : 'false'}
      aria-label={`Slide ${index + 1}`}
    ></button>
  ))}
</div>
  <div className="carousel-inner">


    {banner.map((item, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                 <Image
                    src={`${imageUrl}/uploads/${item.image}`}
                    alt="Banner"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                        <div className="carousel-caption d-none d-md-block">
        <h5>SEE WHO JUST SAUNTERED IN.</h5>
        <p>Discover our latest collection of leather jackets, bags, and outerwear.</p>
       <Link href="/collections/new-arrivals"> <button>NEW ARRIVALS</button></Link>
      </div>
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
  )
}

export default HeroSection