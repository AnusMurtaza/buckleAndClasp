"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { signUpSchema } from '../schemas';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/features/auth/authSlice';
import { useFormik } from 'formik';
import { baseURL } from '../config/apiUrl';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const router = useRouter()

  const initialValues = {
    name:"",
    email: "",
    phone_number: "",
    password: "",
    c_password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        var userData = new FormData();
        userData.append("name", values.name);
        userData.append("email", values.email);
        userData.append("phone_number", values.phone_number);
        userData.append("password", values.password);
        userData.append("c_password", values.c_password);

        setLoading(true);
        try {
          const response = await axios.post(baseURL + "/register", userData)
          const { message, data } = response.data;
          dispatch(login(data));
          toast.success(message);
          router.push("/")
          setLoading(false);
          console.log("1")
        } catch (error) {
          toast.error(error.response.data.message);
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
            {/* <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link href="/">
                  <i className="fa fa-home" /> Home
                </Link>
                <span>Register</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Breadcrumb Form Section Begin */}
      {/* Register Section Begin */}
      <div className="register-login-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                  <div className="group-input">
                    <label htmlFor="name">Username *</label>
                    <input type="text"
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
                  <div className="group-input">
                    <label htmlFor="email">Email Address *</label>
                    <input
                             type="email"
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
                  <div className="group-input">
                    <label htmlFor="phone_number">Phone Number *</label>
                    <input type="text"
                             id="phone_number" 
                             name="phone_number"
                             value={values.phone_number}
                             onChange={handleChange}
                             onBlur={handleBlur}
                    />
                    {errors.phone_number && touched.phone_number ? (
                      <p className="form-error">{errors.phone_number}</p>
                    ) : null}
                  </div>
                  <div className="group-input">
                    <label htmlFor="password">Password *</label>
                    <input type="password" 
                    id="password" 
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />

                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="group-input">
                    <label htmlFor="c_password">Confirm Password *</label>
                    <input type="password" 
                    id="c_password" 
                    name="c_password"
                    value={values.c_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />

                    {errors.c_password && touched.c_password ? (
                      <p className="form-error">{errors.c_password}</p>
                    ) : null}
                  </div>
                  <button type="submit" className="site-btn register-btn" disabled={loading?true:false}>
                  {loading? (<div className="spinner-grow text-secondary" role="status"></div>): "SETUP YOUR ACCOUNT"} 
                  </button>
                </form>
                <div className="switch-login">
                  <Link href="/login" className="or-login">
                    Or Login
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