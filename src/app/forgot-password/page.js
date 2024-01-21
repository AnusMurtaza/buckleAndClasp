'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import { forgotPasswordSchema } from '../schemas';
import axios from 'axios';
import { baseURL } from '../config/apiUrl';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const page = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: forgotPasswordSchema,
      onSubmit: async (values, action) => {
        var userData = new FormData();
        userData.append("email", values.email);

        setLoading(true);
        try {
          const response = await axios.post(baseURL + "/forget_password", userData)
          const { message, data } = response.data;
          toast.success(message);
          // if (data.user_type === "admin") {
          //   router.push("/dashboard")
          // } else {
          //   router.push("/")
          // }
          setLoading(false);
          console.log(response)
        } catch (error) {
          toast.error(error.response.data.data);
          setLoading(false);
          console.log("2")

        }
      },
    });
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
                <span>Forgot Password</span>
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
                <h2 className='fs-4 text-start mb-3'>FORGOT YOUR PASSWORD?</h2>
                <p className='pb-3'>Provide your account email address to receive an email to reset your password.</p>
                <form onSubmit={handleSubmit}>
                  <div className="group-input">
                    {/* <label htmlFor="username">RESET PASSWORD</label> */}
                    <input type="email"
                      placeholder='Email'
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

                  <button type="submit" className="site-btn login-btn"  disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
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