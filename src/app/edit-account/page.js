"use client"
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { baseURL } from "../config/apiUrl";
import DashboardSidebar from "../components/DashboardSidebar";
import Spinner from "../components/Spinner";
import { updateAccountSchema } from "../schemas";
import { useRouter } from "next/navigation";
// import { Breadcrumb, BreadcrumbItem, Spinner } from "reactstrap";
// import { Link, useNavigate } from "react-router-dom";

const EditAccount = () => {
  const { token, user_id } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const router=useRouter()

  const fetchUserData = async () => {
    try {
      var config = {
        method: 'get',
        url: baseURL + `/get_user_info`,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      await axios(config)
        .then(function (response) {
          const { data } = response.data
          setData(data)
        })
    } catch (error) {
    }
  }
  useEffect(() => {
    fetchUserData()
  }, [])


  const initialValues = {
    first_name: (data && data.first_name) || "",
    last_name: (data && data.last_name) || "",
    name: (data && data.name) || "",
    email: (data && data.email) || "",
    old_password: "",
    password: "",
    c_password: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: updateAccountSchema,
    onSubmit: async (values, action) => {
      var data = new FormData();
      data.append("first_name", values.first_name);
      data.append("last_name", values.last_name);
      data.append("name", values.name);
      data.append("email", values.email);
      data.append("old_password", values.old_password);
      data.append("password", values.password);
      data.append("c_password", values.c_password);

      setLoading(true);
      try {
        var config = {
          method: 'post',
          url: baseURL + '/update_account',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          data: data
        };
        await axios(config)
          .then(function (response) {
            const { message } = response.data
            toast.success(message);
            setTimeout(() => {
              router.push("/my-account")
              setLoading(false)
            }, 2000);

          })
      } catch (error) {
        console.log(error)
        toast.info(error.response.data.message);
        setLoading(false)
      }
    },
  });


  return (
    <section>
      <section className="container-fluid products_main_banner">
        <div className="container">
          <div className="banner_content">
            <h4>Account details</h4>
            {/* <div>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="/my-account">My account</Link>
                </BreadcrumbItem>
              </Breadcrumb>
            </div> */}
          </div>
        </div>
      </section>
      <section className="mt-4 mb-4">
        <div className="container">
          <div className="row">
            <DashboardSidebar />
            <div className="col-md-9">
              <form onSubmit={handleSubmit}>
                <div className="billing_shipping_main ">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      name="first_name"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="first_name">First Name*</label>
                    {errors.first_name && touched.first_name ? (
                      <p className="form-error">{errors.first_name}</p>
                    ) : null}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      name="last_name"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="last_name">Last Name*</label>
                    {errors.last_name && touched.last_name ? (
                      <p className="form-error">{errors.last_name}</p>
                    ) : null}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="name">Display name*</label>
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                    <p>
                      <i>
                        This will be how your name will be displayed in the
                        account section and in reviews
                      </i>
                    </p>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled
                    />
                    <label htmlFor="email">Email address*</label>
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div>
                    <fieldset>
                      <legend className="w-auto">Password change</legend>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="old_password"
                          name="old_password"
                          value={values.old_password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="old_password">
                          Current password (leave blank to leave unchanged)
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="password">
                          New password (leave blank to leave unchanged)
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="c_password"
                          name="c_password"
                          value={values.c_password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="c_password">Confirm new password</label>
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <button className="saveChanges" type="submit" disabled={loading ? true : false}>
                      {loading ? <Spinner /> : " Save Changes"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default EditAccount;
