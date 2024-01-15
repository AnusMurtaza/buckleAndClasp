'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { baseURL, imageUrl } from '../config/apiUrl';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';
import { checkoutSchema } from '../schemas';

const page = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const [selectedOption, setSelectedOption] = useState(null);
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    appartment: "",
    city: "",
    country: "",
    zip_code: "",
    state: "",
    same_shipping: true,
    shipping_first_name: "",  // New shipping-related fields
    shipping_last_name: "",
    shipping_email: "",
    shipping_phone_number: "",
    shipping_address: "",
    shipping_appartment: "",
    shipping_city: "",
    shipping_country: "",
    shipping_zip_code: "",
    shipping_state: "",
    // ... other fields
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
    validationSchema: checkoutSchema,
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
      formData.append("city", values.city);
      formData.append("country", values.country);
      formData.append("same_shipping", values.same_shipping?1:0);
      formData.append("zip_code", values.zip_code);
      formData.append("state", values.state);
      
      formData.append("total_price", cartTotalAmount);
      formData.append("order_items", JSON.stringify(cart.cartItems));
      formData.append("status", "pending");


      if (!useShippingAsBilling) {
        formData.append("shipping_first_name", values.shipping_first_name);
        formData.append("shipping_last_name", values.shipping_last_name);
        formData.append("shipping_email", values.shipping_email);
        formData.append("shipping_phone_number", values.shipping_phone_number);
        formData.append("shipping_address", values.shipping_address);
        formData.append("shipping_appartment", values.shipping_appartment);
        formData.append("shipping_city", values.shipping_city);
        formData.append("shipping_country", values.shipping_country);
        formData.append("shipping_zip_code", values.shipping_zip_code);
        formData.append("shipping_state", values.shipping_state);
      }


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


  console.log('Form Values:', values);
  console.log('Form Errors:', errors);
  const handleCheckboxChange = () => {
    setUseShippingAsBilling(!useShippingAsBilling);
    setFieldValue('same_shipping', !useShippingAsBilling);
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
                    <select className="form-select" 
                      id="country"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
>
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
  checked={values.same_shipping?true:false}
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
                          <label htmlFor="shipping_first_name" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="John"
                            id="shipping_first_name"
                            name="shipping_first_name"
                            value={values.shipping_first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                           {errors.shipping_first_name && touched.shipping_first_name ? (
                        <p className="form-error">{errors.shipping_first_name}</p>
                      ) : null}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="shipping_last_name" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="Cena"
                            id="shipping_last_name"
                            name="shipping_last_name"
                            value={values.shipping_last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                           {errors.shipping_last_name && touched.shipping_last_name ? (
                        <p className="form-error">{errors.shipping_last_name}</p>
                      ) : null}
                        </div>

                      </div>

                      <div className="mb-3">
                        <label htmlFor="shipping_email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          id="shipping_email"
                          name="shipping_email"
                          value={values.shipping_email}
                          onChange={handleChange}
                          onBlur={handleBlur}

                        />
                            {errors.shipping_email && touched.shipping_email ? (
                        <p className="form-error">{errors.shipping_email}</p>
                      ) : null}
                      </div>


                      <div className="mb-3">
                        <label htmlFor="shipping_country" className="form-label">
                          Country/Region
                        </label>
                        <select className="form-select" 
                      id="shipping_country"
                      name="shipping_country"
                      value={values.shipping_country}
                      onChange={handleChange}
                      onBlur={handleBlur}
>
                      <option selected>Select shipping_Country</option>
                      <option value="1">United State</option>
                    </select>
                    {errors.shipping_country && touched.shipping_country ? (
                        <p className="form-error">{errors.shipping_country}</p>
                      ) : null}
                      </div>


                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="shipping_zip_code" className="form-label">
                            Zip Code
                          </label>
                          <input
                            type="number"
                            className="form-control mt-3"
                            placeholder="Zip Code"
                            id="shipping_zip_code"
                            name="shipping_zip_code"
                            value={values.shipping_zip_code}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                              {errors.shipping_zip_code && touched.shipping_zip_code ? (
                        <p className="form-error">{errors.shipping_zip_code}</p>
                      ) : null}
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="shipping_state" className="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="shipping_state"
                            id="shipping_state"
                            name="shipping_state"
                            value={values.shipping_state}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                              {errors.shipping_state && touched.shipping_state ? (
                        <p className="form-error">{errors.shipping_state}</p>
                      ) : null}
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="shipping_city" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="City"
                            id="shipping_city"
                            name="shipping_city"
                            value={values.shipping_city}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                          {errors.shipping_city && touched.shipping_city ? (
                        <p className="form-error">{errors.shipping_city}</p>
                      ) : null}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="shipping_address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="shipping_address"
                          name="shipping_address"
                          value={values.shipping_address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Address"
                        />
                          {errors.shipping_city && touched.shipping_city ? (
                        <p className="form-error">{errors.shipping_city}</p>
                      ) : null}
                      </div>


                      <div className="mb-3">
                        <label htmlFor="shipping_appartment" className="form-label">
                          Apartment, suite, etc. (optional)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, etc. (optional)"
                          id="shipping_appartment"
                          name="shipping_appartment"
                          value={values.shipping_appartment}
                          onChange={handleChange}
                          onBlur={handleBlur}

                        />
                          {errors.shipping_appartment && touched.shipping_appartment ? (
                        <p className="form-error">{errors.shipping_appartment}</p>
                      ) : null}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="shipping_phone_number" className="form-label">
                          Contact Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="shipping_phone_number"
                          name="shipping_phone_number"
                          value={values.shipping_phone_number}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Contact Number"
                        />
                          {errors.shipping_phone_number && touched.shipping_phone_number ? (
                        <p className="form-error">{errors.shipping_phone_number}</p>
                      ) : null}
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