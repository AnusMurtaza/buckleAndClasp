'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { baseURL, imageUrl } from '../config/apiUrl';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';
import { checkoutSchema } from '../schemas';
import { useRouter } from 'next/navigation';
import StateSelect from '../components/StateSelect';

const page = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const [selectedOption, setSelectedOption] = useState(null);
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
  const router = useRouter()

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
    shipping_first_name: "", 
    shipping_last_name: "",
    shipping_email: "",
    shipping_phone_number: "",
    shipping_address: "",
    shipping_appartment: "",
    shipping_city: "",
    shipping_country: "",
    shipping_zip_code: "",
    shipping_state: "",
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
      formData.append("same_shipping", values.same_shipping ? 1 : 0);
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


        const { links } = response.data;
        const approvedUrl = links.find(link => link.rel === "approval_url").href;
        router.push(approvedUrl);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },

  });


  console.log('Form Values:', values);

  const handleCheckboxChange = () => {
    setUseShippingAsBilling(!useShippingAsBilling);
    setFieldValue('same_shipping', !useShippingAsBilling);
  };
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-7 order-1 order-md-0">
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
                      <option value="United State">United State</option>
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
                      <StateSelect 
                      id="state"
                       name="state"
                       value={values.state}
                       onChange={handleChange}
                       onBlur={handleBlur}
                      />
                      {/* <select
                        className="form-select mt-3"
                        id="state"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      >
                        <option value={0}>Select State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Guam">Guam</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire<">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Palau">Palau</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="Washington DC">Washington DC</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                        <option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
                        <option value="Armed Forces Americas">Armed Forces Americas</option>
                        <option value="Armed Forces Europe">Armed Forces Europe</option>
                        <option value="Armed Forces Pacific">Armed Forces Pacific</option>
                      </select> */}
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
                      checked={values.same_shipping ? true : false}
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
                          <option selected>Select Country</option>
                          <option value="United State">United State</option>
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
                          <select
                            className="form-select mt-3"
                            id="shipping_state"
                            name="shipping_state"
                            value={values.shipping_state}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          >
                            <option value={0}>Select State</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="Micronesia">Micronesia</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Guam">Guam</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire<">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Palau">Palau</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="Washington DC">Washington DC</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                            <option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
                            <option value="Armed Forces Americas">Armed Forces Americas</option>
                            <option value="Armed Forces Europe">Armed Forces Europe</option>
                            <option value="Armed Forces Pacific">Armed Forces Pacific</option>
                          </select>

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


                  <button
                    type="submit"
                    className={`btn-loader ${loading ? 'btn--loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span>
                        <b></b>
                        <b></b>
                        <b></b>
                      </span>
                    ) : (
                      'Pay with PayPal'
                    )}
                  </button>

                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5 order-0 order-md-1">
            <div>
              <div className="payment-order-summary-wrap">
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
              <div className="mt-4 mb-3 payment-your-order-wrap">
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
                                    <p className="card-text fw-bold">
                                      {value.name}
                                      <span className="float-end pe-3">
                                        <div className='d-flex'>

                                          <h6>Size :<span className='fw-bold'>{value.size}</span></h6>
                                          <div className='d-flex ms-3'> <h6 className='me-2'>Color : </h6><div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: value.color }}></div></div>
                                        </div>
                                      </span>
                                    </p>
                                    <p className="card-text">
                                      Qty:{value.cartQuantity}
                                      <span className="float-end pe-3">
                                        <b> Price: ${Finalamount}</b>
                                      </span>
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








