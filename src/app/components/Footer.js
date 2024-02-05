'use client';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="footer-left">
          <div className="footer-logo">
            <Link href="/">
              <img src="img/footer-logo.png" alt="" />
            </Link>
          </div>
          <ul>
            <li>Address: 60-49 Road 11378 New York</li>
            <li>Phone: +65 11.188.888</li>
            <li>Email: hello.colorlib@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 offset-lg-1">
        <div className="footer-widget">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link href="/about-us">About US</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact US</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
            <li>
              <Link href="/">Refund policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 ">
        <div className="footer-widget footer-left">
          <h5>FOLLOW US</h5>
          <div className="footer-social">
            <Link href="/">
            <i className="bi bi-instagram"></i>
            </Link>
            <Link href="/">
            <i className="bi bi-facebook"></i>
            </Link>
            <Link href="/">
            <i className="bi bi-twitter"></i>
            </Link>
            {/* <Link href="/">
              <i className="fa fa-pinterest" />
            </Link> */}
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="newslatter-item">
          <h5>Join Our Newsletter Now</h5>
          <p>Get E-mail updates about our latest shop and special offers.</p>
          <form action="/" className="subscribe-form">
            <input type="text" placeholder="Enter Your Mail" />
            <button type="button">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-reserved">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            Copyright © 2023 Bucle & Clasp. All Rights Reserved
          </div>
          {/* <div className="payment-pic">
            <img src="img/payment-method.png" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer