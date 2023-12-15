'use client';
import Link from 'next/link';
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
              <span>Reset Password</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Breadcrumb Form Section Begin */}
    {/* Register Section Begin */}
    <div className="register-login-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="login-form">
              <h2>RESET PASSWORD</h2>
              <form action="/">
                <div className="group-input">
                  {/* <label htmlFor="username">RESET PASSWORD</label> */}
                  <input type="email" id="email" placeholder='Email' />
                </div>

                <button type="submit" className="site-btn login-btn">
                  Submit
                </button>
              </form>
              <p className='py-5'>We will send you an email to reset your password.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Register Form Section End */}
  </>
  
  )
}

export default page