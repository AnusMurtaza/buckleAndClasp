"use client"
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'
import { baseURL } from '../config/apiUrl';
import { useFormik } from 'formik';
import { contactUsSchema } from '../schemas';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const page = () => {
  const [loading, setLoading] = useState(false)

  const initialValues = {
    name: "",
    email: "",
    message: ""
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactUsSchema,
      onSubmit: async (values, action) => {
        var userData = new FormData();
        userData.append("name", values.name);
        userData.append("email", values.email);
        userData.append("message", values.message);

        setLoading(true);
        try {
          const response = await axios.post(baseURL + "/post_contact_us", userData)
          const { message, data } = response.data;
          toast.success("Thank You for reaching out, We'll get back to you shortly");
          // router.push("/")
          action.resetForm()
          setLoading(false);
        } catch (error) {
          toast.error("Oops! Something went wrong. Please try again later.");
          setLoading(false);
        }
      },
    });
  return (
    <>
      <section className="about-bg">
        <div className="container">
          <div className="row">
            <div>
              <h1>CONTACT US</h1>
            </div>
            <div className="breacrumb-section">
              <div className="breadcrumb-text border-0">
                <Link href="/" className='text-white'>
                  <i className="fa fa-home" /> Home
                </Link>
                <span className='text-white fw-bold'>Contact us</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section Begin */}

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
                  <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="ci-text">
                    <span>Address:</span>
                    <p>60-49 Road 11378 New York</p>
                  </div>
                </div>
                <div className="cw-item">
                  <div className="ci-icon">
                  <i className="bi bi-phone"></i>
                  </div>
                  <div className="ci-text">
                    <span>Phone:</span>
                    <p>+65 11.188.888</p>
                  </div>
                </div>
                <div className="cw-item">
                  <div className="ci-icon">
                  <i className="bi bi-envelope"></i>
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
                  <form className="comment-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <input type="text" placeholder="Your name"
                          id="name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (
                          <p className="form-error">{errors.name}</p>
                        ) : null}
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input type="email" placeholder="Your email"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                          <p className="form-error">{errors.email}</p>
                        ) : null}
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Your message"
                          id="message"
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur} />

                        {errors.message && touched.message ? (
                          <p className="form-error">{errors.message}</p>
                        ) : null}
                        <button type="submit" className="site-btn mt-4" disabled={loading ? true : false}>
                          {loading ? (<Spinner />) : "Send message"}

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

    </>

  )
}

export default page