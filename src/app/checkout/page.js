'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { baseURL, imageUrl } from '../config/apiUrl';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';

const page = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
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
    country: "",
    state: "",
    status: "",
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
    // validationSchema: checkoutSchema,
    onSubmit: async (values, action) => {
      handleNext();
    },
  });



  const handleDetailSubmitb = async (e) => {
    e.preventDefault()
    if (selectedOption === null) {
      toast.error("Please Select Payment Method")
    } else {
      var data = new FormData();
      data.append("address", values.address);
      data.append("appartment", values.appartment);
      data.append("country", values.country);
      data.append("email", values.email);
      data.append("first_name", values.first_name);
      data.append("last_name", values.last_name);
      data.append("notes", values.notes);
      data.append("phone_number", values.phone_number);
      data.append("order_items", JSON.stringify(cart.cartItems));
      data.append("payment_type", selectedOption);
      data.append("status", selectedOption === "COD" ? "pending" : "paid");
      data.append("total_price", finalAmount);
      data.append("currency_id", currency_id);
      // data.append("shipping_charges", bundlePrices && bundlePrices !== {}? bundlePrices.price : "0.00");

      var config = {
        method: "post",
        url: baseURL + "/storeOrder",
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
        data: data,
      };
      setLoading(true);
      await axios(config)
        .then(function (response) {
          toast.success(response.data.message);
          const { data } = response.data
          //  if(selectedOption==="COD"){
          //   setTimeout(() => {
          //     navigate(`/checkout/order-received/${data.order_id}`, {
          //       state: 
          //        { orderID: data.order_id ,
          //          orderData: values,
          //          paymentType:selectedOption,
          //          cartData:cart.cartItems,
          //          amount:cartTotalAmount,
          //         //  shipping_charges:bundlePrices && bundlePrices !== {}? bundlePrices.price : "0.00",
          //         },
          //     });
          //     setLoading(false);
          //   }, 2000);
          //  }else{
          //   const link = data.order_paypage_url ;
          // window.open(link, '_blank');
          //   setTimeout(() => {
          //     navigate(`/checkout/order-received/${data.order_id}`, {
          //       state: 
          //        { orderID: data.order_id ,
          //          orderData: values,
          //          paymentType:selectedOption,
          //          cartData:cart.cartItems,
          //          amount:cartTotalAmount,
          //         //  shipping_charges:bundlePrices && bundlePrices !== {}? bundlePrices.price : "0.00",
          //         },
          //     });
          //     setLoading(false);
          //   }, 2000);
          //  }

        })
        .catch(function (error) {
          toast.error(error.response.data.message);
          setLoading(false);
        });
    }
  };

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
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control mt-3"
                        id="exampleInputEmail1"
                        placeholder="John"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control mt-3"
                        id="exampleInputEmail1"
                        placeholder="Cena"
                        aria-describedby="emailHelp"
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
                      id="exampleInputEmail1"
                      placeholder="Email Address"
                      aria-describedby="emailHelp"
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
                        id="exampleInputEmail1"
                        placeholder="Zip Code"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control mt-3"
                        id="exampleInputEmail1"
                        placeholder="State"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control mt-3"
                        id="exampleInputEmail1"
                        placeholder="City"
                        aria-describedby="emailHelp"
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
                      id="exampleInputEmail1"
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
                      id="exampleInputEmail1"
                      placeholder="Apartment, suite, etc. (optional)"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Contact Number"
                    />
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
                            id="exampleInputEmail1"
                            placeholder="John"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            id="exampleInputEmail1"
                            placeholder="Cena"
                            aria-describedby="emailHelp"
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
                          id="exampleInputEmail1"
                          placeholder="Email Address"
                          aria-describedby="emailHelp"
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
                            id="exampleInputEmail1"
                            placeholder="Zip Code"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            id="exampleInputEmail1"
                            placeholder="State"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            id="exampleInputEmail1"
                            placeholder="City"
                            aria-describedby="emailHelp"
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
                          id="exampleInputEmail1"
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
                          id="exampleInputEmail1"
                          placeholder="Apartment, suite, etc. (optional)"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Contact Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
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