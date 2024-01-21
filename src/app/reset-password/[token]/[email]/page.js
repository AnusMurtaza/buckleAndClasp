'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { resetPasswordSchema } from '@/app/schemas';
import { baseURL } from '@/app/config/apiUrl';
import { useParams, useRouter } from 'next/navigation';

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { token, email } = useParams();
  const decodedEmail = decodeURIComponent(email || '');

  // Define initial form values
  const initialValues = {
    password: '',
    c_password: '',
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: resetPasswordSchema,
      onSubmit: async (values) => {
        const userData = new FormData();
        userData.append('email', decodedEmail);
        userData.append('password', values.password);
        userData.append('c_password', values.c_password);

        setLoading(true);

        try {
          const response = await axios.post(
            `${baseURL}/password/reset/${token}/${decodedEmail}`,
            userData
          );
          const { message } = response.data;
          toast.success(message);
          router.replace('/login');
        } catch (error) {
          // Display error message
          toast.error(error.response?.data.message || 'Password reset failed');
        } finally {
          setLoading(false);
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
                <h2>RESET PASSWORD?</h2>
                <form onSubmit={handleSubmit}>
                  <div className="group-input">
                    <label htmlFor="password">New Password *</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <p className="form-error">{errors.password}</p>
                    )}
                  </div>
                  <div className="group-input">
                    <label htmlFor="c_password">Confirm Password *</label>
                    <input
                      type="password"
                      id="c_password"
                      name="c_password"
                      value={values.c_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.c_password && touched.c_password && (
                      <p className="form-error">{errors.c_password}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="site-btn login-btn"
                    disabled={loading}
                  >
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
  );
};

export default ResetPasswordPage;
