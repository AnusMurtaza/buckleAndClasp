'use client'
import React from 'react'
import { useSelector } from 'react-redux';

const page = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

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
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="exampleInputEmail1"
                    placeholder="Haris Umar"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Card Number
                  </label>
                  <div id="emailHelp" className="form-text">
                    Enter the 16 digit card number on the card
                  </div>
                  <div className="input-group">
                    <span
                      className="input-group-text p-0"
                      style={{ width: "10%", backgroundColor: "#c0d1dc38" }}
                    >
                      <img
                        src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png"
                        alt=""
                        width="100%"
                      />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="1234 - 2345 - 3445 - 2324"
                    />
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-6">
                    <label htmlFor="inputPassword6" className="form-label">
                      CVV Number
                    </label>
                    <p id="passwordHelpInline" className="form-text">
                      Enter the 4 or 5 digit numbers on card
                    </p>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </div>
                </div>
                <div className="row align-items-center mb-3">
                  <div className="col-md-6">
                    <label htmlFor="inputPassword6" className="form-label">
                      Expiry Date
                    </label>
                    <p id="passwordHelpInline" className="form-text">
                      Enter the expiration date of thne card
                    </p>
                  </div>
                  <div className="row col-md-6">
                    <div className="col-md-5">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                    <div
                      className="col-md-2 text-center m-auto"
                      style={{ fontSize: "2rem" }}
                    >
                      /
                    </div>
                    <div className="col-md-5">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </div>
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
                    Total Cost <span>$1234</span>
                  </li>
                  <li className="list-group-item">
                    To be Paid <span>$1234</span>
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
                      {cartItems.map((value,index) => {
                   const amount = value.sale?value.discount_price:value.price
                  return(
                        <div className="card mb-3">
                          <div className="row g-0">
                            <div className="d-flex">
                              <div className="image-wrap-inner">
                                <img
                                  src={value.image}
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
                                    <b> Price: ${amount}</b>
                                  </span>
                                </p>
                                <p className="card-text">
                                  Priscribed by Dr.Anas Murtaza
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                           )})}
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