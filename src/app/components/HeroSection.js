import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <>
     {/* Hero Section Begin */}
  <section className="hero-section">
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
  </section>
  {/* Hero Section End */}
    </>
  )
}

export default HeroSection