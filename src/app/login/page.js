'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import { signInSchema } from '../schemas';
import axios from 'axios';
import { baseURL } from '../config/apiUrl';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { login } from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';

const page = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const router = useRouter()

  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: async (values, action) => {
        var userData = new FormData();
        userData.append("email", values.email);
        userData.append("password", values.password);

        setLoading(true);
        try {
          const response = await axios.post(baseURL + "/login", userData)
          const { message, data } = response.data;
          toast.success(message);
          dispatch(login(data));
          if(data.user_type === "admin"){
            router.push("/dashboard")
          }else{
            router.push("/")
          }
          setLoading(false);
          console.log(response)
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
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text">
              <Link href="/">
                <i className="fa fa-home" /> Home
              </Link>
              <span>Login</span>
            </div>
          </div>
        </div> */}
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
              <form onSubmit={handleSubmit}>
                <div className="group-input">
                  <label htmlFor="email">Email Address *</label>
                  <input type="text"
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
                  <label htmlFor="pass">Password *</label>
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
                <button type="submit" className="site-btn login-btn" disabled={loading?true:false}>
                {loading? (<div className="spinner-grow text-secondary" role="status"></div>): "Sign In"}  
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