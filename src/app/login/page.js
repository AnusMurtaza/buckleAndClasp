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
              <span>Login</span>
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
              <h2>Login</h2>
              <form action="/">
                <div className="group-input">
                  <label htmlFor="username">Username or email address *</label>
                  <input type="text" id="username" />
                </div>
                <div className="group-input">
                  <label htmlFor="pass">Password *</label>
                  <input type="text" id="pass" />
                </div>
                <div className="group-input gi-check">
                  <div className="gi-more">
                    <label htmlFor="save-pass">
                      Save Password
                      <input type="checkbox" id="save-pass" />
                      <span className="checkmark" />
                    </label>
                    <Link href="/reset-password" className="forget-pass">
                      Forget your Password
                    </Link>
                  </div>
                </div>
                <button type="submit" className="site-btn login-btn">
                  Sign In
                </button>
              </form>
              <div className="switch-login">
                <Link href="/sign-up" className="or-login">
                  Or Create An Account
                </Link>
              </div>
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