"use client";
import DashboardSidebar from "@/app/components/DashboardSidebar";
import { baseURL } from "@/app/config/apiUrl";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = ({ params }) => {
  console.log(params);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState(null);

  const fetchOrder = async () => {
    try {
      var config = {
        method: "get",
        url: baseURL + `/view_a_order/${params.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setLoading(true);
      await axios(config).then(function (response) {
        const { data } = response.data;
        setOrder(data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);
  const orderItems = order?.order_items ? JSON.parse(order.order_items) : null;

  console.log(order);
  return (
    <section>
      <MyAccountBreadcrumb name={`Order # ${order?.id}`} />

      {/* <section className="container-fluid products_main_banner">
      <div className="container">
        <div className="banner_content">
          <h4>Order #{order?.id}</h4>
          <div>

          </div>
        </div>
      </div>
    </section> */}
      <section className="mt-4 mb-4">
        <div className="container">
          <div className="row">
            <DashboardSidebar />
            <div className="col-md-9">
              <div>
                <div>
                  <p>
                    Order #<mark>{order?.id}</mark> was placed on{" "}
                    <mark>
                      {" "}
                      {moment(order?.created_at).format("MMMM DD, YYYY")}
                    </mark>{" "}
                    and is currently <mark>{order?.status}</mark>.
                  </p>
                </div>
                <div className="mt-3">
                  <h3>Order Details</h3>
                  <div className="mt-3">
                    <table className="table table_main_bor">
                      <tbody>
                        {orderItems?.map((value, index) => {
                          return (
                            <tr key={index}>
                              <th>
                                <p className="order__item_pad">
                                  {value.name} × {value.cartQuantity}
                                </p>
                              </th>
                              <th>
                                <p className="order__item_pad order_detail_sec_th">
                                  $ {value.price}
                                </p>
                              </th>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot className="t_foo_bg">
                        <tr>
                          <th className="td_border_n">
                            <p className="order_det_amounts_D pt-2">
                              Subtotal:
                            </p>
                          </th>
                          <th className="td_border_n">
                            <p className="order_detail_sec_th pt-2">
                              ${" "}
                              {(
                                order?.total_price - order?.shipping_charges
                              ).toFixed(2)}
                            </p>
                          </th>
                        </tr>
                        <tr>
                          <th className="td_border_n">
                            <p className="order_det_amounts_D">Shipping:</p>
                          </th>
                          <th className="td_border_n">
                            <p className="order_detail_sec_th">
                              {/* {order.currency_abbr}  {order.shipping_charges}  */}
                              20.00
                              <span className="via_del_fs">
                                {/* via Delivery within UAE Charges per Bundle */}
                                via Delivery Shipping charges
                                {/* Shipping charges included */}
                              </span>
                            </p>
                          </th>
                        </tr>
                        <tr>
                          <th>
                            <p className="order_det_amounts_D mb-2">
                              Payment method:
                            </p>
                          </th>
                          <th>
                            <p className="order_detail_sec_th mb-2">
                              {/* {order.payment_type  ==="COD" ? "COD / COC" : order.payment_type } */}
                              paid
                              {/* Direct bank transfer (Credited within 2-3 Working
                          Days) */}
                            </p>
                          </th>
                        </tr>
                        <tr>
                          <th className="td_border_n">
                            <p className="tot_Order_head">TOTAL:</p>
                          </th>
                          <th className="td_border_n">
                            <p className="order_detail_sec_th tot_Order_head total_am_color">
                              $ {order?.total_price}
                            </p>
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div>
                        <h4 className="mb-2">Billing Address</h4>
                        <div>
                          <p>
                            {order?.user_details.first_name}{" "}
                            {order?.user_details.last_name}
                            <br />
                            {order?.user_details.address}
                            <br />
                            {order?.user_details.country}
                            <br />
                            {order?.user_details.phone_number}
                            <br />
                            {order?.user_details.email}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h4 className="mb-2">Shipping Address</h4>
                        <div>
                          <p>
                            {order?.user_details.first_name}{" "}
                            {order?.user_details.last_name}
                            <br />
                            {order?.user_details.address}
                            <br />
                            {order?.user_details.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
