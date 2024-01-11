'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { baseURL, imageUrl } from '../config/apiUrl';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';

const page = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const [selectedOption, setSelectedOption] = useState(null);

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    appartment: "",
    // total_price: "",
    city: "",
    country: "",
    same_shipping: "",
    zip_code: "",
    state:""
    // country: "",
    // state: "",
  };


  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    // validationSchema: data ? updateProductSchema : ProductSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("first_name", values.first_name);
      formData.append("last_name", values.last_name);
      formData.append("email", values.email);
      formData.append("phone_number", values.phone_number);
      formData.append("address", values.address);
      formData.append("appartment", values.appartment);
      formData.append("total_price", cartTotalAmount);
      formData.append("order_items", JSON.stringify(cart.cartItems));
      formData.append("status", "pending");


      try {

        const response = await axios.post(`${baseURL}/order_store`, formData, {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        });


        const { message } = response.data;
        toast.success(message);
        // router.push('/dashboard/products');
      } catch (error) {
        console.error(error);
        // toast.error('Error creating/updating banner');
      } finally {
        setLoading(false);
      }
    },

  });


  const [useShippingAsBilling, setUseShippingAsBilling] = useState(false);

  const handleCheckboxChange = () => {
    setUseShippingAsBilling(!useShippingAsBilling);
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="payment-form-wrap">
              <div className="card">
                <div className="card-title mx-auto">PAYMENT</div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="first_name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="John"
                        id="first_name"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      />
                      {errors.first_name && touched.first_name ? (
                        <p className="form-error">{errors.first_name}</p>
                      ) : null}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="last_name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Cena"
                        id="last_name"
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      />
                       {errors.last_name && touched.last_name ? (
                        <p className="form-error">{errors.last_name}</p>
                      ) : null}
                    </div>

                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
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


                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                      Country/Region
                    </label>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Select Country</option>
                      <option value="1">United State</option>
                    </select>
                    {errors.country && touched.country ? (
                        <p className="form-error">{errors.country}</p>
                      ) : null}
                  </div>


                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="zip_code" className="form-label">
                        Zip Code
                      </label>
                      <input
                        type="number"
                        className="form-control mt-3"
                        placeholder="Zip Code"
                        id="zip_code"
                        name="zip_code"
                        value={values.zip_code}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      />
                       {errors.zip_code && touched.zip_code ? (
                        <p className="form-error">{errors.zip_code}</p>
                      ) : null}
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="state" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="State"
                        id="state"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      />
                       {errors.state && touched.state ? (
                        <p className="form-error">{errors.state}</p>
                      ) : null}
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="City"
                        id="city"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      />
                       {errors.city && touched.city ? (
                        <p className="form-error">{errors.city}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Address"
                    />
                     {errors.address && touched.address ? (
                        <p className="form-error">{errors.address}</p>
                      ) : null}
                  </div>


                  <div className="mb-3">
                    <label htmlFor="appartment" className="form-label">
                      Apartment, suite, etc. (optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, suite, etc. (optional)"
                      id="appartment"
                      name="appartment"
                      value={values.appartment}
                      onChange={handleChange}
                      onBlur={handleBlur}

                    />
                     {errors.appartment && touched.appartment ? (
                        <p className="form-error">{errors.appartment}</p>
                      ) : null}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone_number" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone_number"
                      name="phone_number"
                      value={values.phone_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Contact Number"
                    />
                     {errors.phone_number && touched.phone_number ? (
                        <p className="form-error">{errors.phone_number}</p>
                      ) : null}
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={useShippingAsBilling}
                      id="useShippingAsBilling"
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="useShippingAsBilling">
                      Use shipping address as billing address
                    </label>
                  </div>

                  {!useShippingAsBilling && (
                    <div>
                      <h3 className='py-3'>Billing Address</h3>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="John"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="Cena"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                        </div>

                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}

                        />
                      </div>


                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Country/Region
                        </label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Select Country</option>
                          <option value="1">United State</option>
                        </select>
                      </div>


                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            Zip
                          </label>
                          <input
                            type="number"
                            className="form-control mt-3"
                            placeholder="Zip Code"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="State"
                            id="state"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="City"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Address"
                        />
                      </div>


                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Apartment, suite, etc. (optional)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, etc. (optional)"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}

                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Contact Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Contact Number"
                        />
                      </div>
                    </div>
                  )}
                  <button type="submit" className="btn btn-primary">
                    Pay Now
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <div className="row payment-order-summary-wrap">
                <div className="card">
                  <div className="card-header">Order Summary</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Sub Total <span>$ {cartTotalAmount}</span>
                    </li>
                    <li className="list-group-item">
                      Shipping Charges <span>$ 10.00</span>
                    </li>
                    <li className="list-group-item">
                      To be Paid <span>$ {cartTotalAmount + 10.00}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-4 payment-your-order-wrap">
                <div
                  className="accordion accordion-flush p-0"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Your Items
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div>
                        {cartItems.map((value, index) => {
                          const amount = value.sale > 0 ? value.discounted_price : value.price
                          const Finalamount = amount * value.cartQuantity
                          return (
                            <div className="card mb-3" key={index}>
                              <div className="row g-0">
                                <div className="d-flex">
                                  <div className="image-wrap-inner">
                                    <img
                                      src={`${imageUrl}/${value.images[0]?.image}`}
                                      className="img-fluid rounded-start"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      {value.image}
                                    </h5>
                                    <p className="card-text">
                                      Qty:{value.cartQuantity}
                                      <span className="float-end pe-3">
                                        <b> Price: ${Finalamount}</b>
                                      </span>
                                    </p>
                                    <p className="card-text">
                                      {value.name}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                        {cartItems.length == 0 &&
                          <div className="card mb-3 text-center" >
                            <p>NO ITEM ADDED</p>
                          </div>
                        }
                      </div>

                      {/* <div>
                        <div className="card mb-3">
                          <div className="row g-0">
                            <div className="d-flex">
                              <div className="image-wrap-inner">
                                <img
                                  src="https://umbrellamd-video.com/assets/images/others-icon.png"
                                  className="img-fluid rounded-start"
                                  alt="..."
                                />
                              </div>
                              <div className="card-body">
                                <h5 className="card-title">
                                  ACARUS SIRO (D70) IGE
                                </h5>
                                <p className="card-text">
                                  Qty:2{" "}
                                  <span className="float-end pe-3">
                                    <b> Price: $200</b>
                                  </span>
                                </p>
                                <p className="card-text">
                                  Priscribed by Dr.Anas Murtaza
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>

  )
}

export default page