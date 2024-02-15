import React from "react";

const page = () => {
  return (
    <div className="container my-5">
      <main className="header-offset content-wrapper about-wrapper">
        <div className="terms-container">
          <div className="row">
            <div className="col-sm-11 m-auto ">
              <section className="terms-title">
                <h1>*Delivery and Returns*</h1>
                <hr />
              </section>
              <div className="terms-body">
                <h2>Delivery:</h2>
                <hr />
                <ul>
                  <li>
                    We are committed to ensuring the timely delivery of your
                    purchased items. Shipping costs are calculated during
                    checkout based on your selected shipping method.
                  </li>
                  <li>
                    Please note that delivery times may vary depending on your
                    location and the chosen shipping option.
                  </li>
                </ul>

                <hr />
                <h2>Returns:</h2>
                <hr />
                <ul>
                  <li>
                    <p>
                      Your satisfaction is our priority. If you wish to return
                      an item, please contact us within 3 working days of
                      receiving your order.
                    </p>
                  </li>
                  <li>
                    <h3 className="my-2">
                      To initiate a return, follow these steps:
                    </h3>
                    <ul>
                      <li>
                        Contact our customer service to notify us of your
                        return.
                      </li>
                      <li>Securely pack the item in its original packaging.</li>
                      <li>
                        Organize a courier service of your choice for the
                        return. Customers are responsible for managing and
                        covering the return shipping charges.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      Upon receiving the returned item and conducting an
                      inspection, we will notify you regarding the status of
                      your refund or exchange.
                    </p>
                  </li>
                </ul>

                <hr />
                <h2>Conditions for Returns:</h2>
                <hr />
                <ul>
                  <li>
                    Items must be unused, in their original condition, and with
                    all tags attached.
                  </li>
                  <li>
                    Please note that returns will only be accepted in the case
                    of size issues or product defects. Change of mind returns
                    will not be processed.
                  </li>
                </ul>

                <hr />
                <h2>Refunds:</h2>
                <hr />
                <ul>
                  <li>
                    Refunds will be processed within 10 days of receiving the
                    returned item.
                  </li>
                  <li>
                    The refund will be issued to the original payment method
                    used during the purchase.
                  </li>
                </ul>

                <hr />
                <h2>Exchanges:</h2>
                <hr />
                <p>
                  For exchanges, please contact our customer service to discuss
                  the exchange process.
                </p>

                <hr />
                <h2>Return Shipping Responsibility:</h2>
                <hr />
                <ul>
                  <li>
                    Customers are responsible for managing the return courier
                    service and associated charges.
                  </li>
                  <li>
                    Ensure the return package is appropriately insured and
                    traceable. We are not liable for items lost or damaged
                    during the return process.
                  </li>
                </ul>

                <hr />
                <h2>Damaged or Defective Items:</h2>
                <hr />
                <ul>
                  <li>
                    In case you receive a damaged or defective item, please
                    contact us immediately for assistance.
                  </li>
                  <li>
                    Provide detailed information and photos of the damaged or
                    defective item to expedite the resolution process.
                  </li>
                </ul>

                <hr />
                <h2>Change of Mind Returns:</h2>
                <hr />
                <p>
                  Returns due to a change of mind will not be accepted. Only
                  returns related to size issues or product defects will be
                  considered.
                </p>

                <hr />
                <h2>Contact Information:</h2>
                <hr />
                <p>
                  For any queries or concerns regarding delivery and returns,
                  please reach out to our customer service at [your contact
                  information].
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
        {/* /.container */}
      </main>
    </div>
  );
};

export default page;
