"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
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
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb Section Begin */}

  {/* Contact Section Begin */}
  <section className="contact-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="contact-title">
            <h4>Contacts Us</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is simply random text. It
              has roots in a piece of classical Latin literature from 45 BC,
              maki years old.
            </p>
          </div>
          <div className="contact-widget">
            <div className="cw-item">
              <div className="ci-icon">
                <i className="ti-location-pin" />
              </div>
              <div className="ci-text">
                <span>Address:</span>
                <p>60-49 Road 11378 New York</p>
              </div>
            </div>
            <div className="cw-item">
              <div className="ci-icon">
                <i className="ti-mobile" />
              </div>
              <div className="ci-text">
                <span>Phone:</span>
                <p>+65 11.188.888</p>
              </div>
            </div>
            <div className="cw-item">
              <div className="ci-icon">
                <i className="ti-email" />
              </div>
              <div className="ci-text">
                <span>Email:</span>
                <p>hellocolorlib@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1">
          <div className="contact-form">
            <div className="leave-comment">
              <h4>Leave A Comment</h4>
              <p>Our staff will call back later and answer your questions.</p>
              <form action="#" className="comment-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Your email" />
                  </div>
                  <div className="col-lg-12">
                    <textarea placeholder="Your message" defaultValue={""} />
                    <button type="submit" className="site-btn">
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section End */}
  {/* Partner Logo Section Begin */}
  <div className="partner-logo">
    <div className="container">
      <div className="logo-carousel owl-carousel">
        <div className="logo-item">
          <div className="tablecell-inner">
            <img src="img/logo-carousel/logo-1.png" alt="" />
          </div>
        </div>
        <div className="logo-item">
          <div className="tablecell-inner">
            <img src="img/logo-carousel/logo-2.png" alt="" />
          </div>
        </div>
        <div className="logo-item">
          <div className="tablecell-inner">
            <img src="img/logo-carousel/logo-3.png" alt="" />
          </div>
        </div>
        <div className="logo-item">
          <div className="tablecell-inner">
            <img src="img/logo-carousel/logo-4.png" alt="" />
          </div>
        </div>
        <div className="logo-item">
          <div className="tablecell-inner">
            <img src="img/logo-carousel/logo-5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Partner Logo Section End */}
</>

  )
}

export default page