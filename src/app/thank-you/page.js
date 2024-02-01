"use client"
import { clearCartAll } from '@/redux/slices/cartSlice';
import moment from 'moment';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { baseURL } from '../config/apiUrl';
import axios from 'axios';

const page = () => {
    const cart = useSelector((state) => state.cart);
    const searchParams = useSearchParams()
    const payment_id = searchParams.get("paymentId")
    const payer_id = searchParams.get("PayerID")
    // const {currency_name } = useSelector((state) => state.currency);
    //   const {state} =useLocation()
    //   const navigate = useNavigate();
    const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
    
    //   const backHome = () => {
      //     dispatch(clearCartAll());
      //     // navigate("/");
      //   };
      
      console.log(payment_id,"paymentId")
      console.log(payer_id,"PayerID")
 

      const fetchResponse = async () => {
        setLoading(true)
        try {
          const response = await axios.get(baseURL + `/status/${payment_id}/${payer_id}`);
          const { data } = response.data;
          setBanner(data);
          setLoading(false)
        } catch (error) {
          setLoading(false)
        }
      };
      useEffect(() => {
        if(payment_id !== null && payer_id !== null)
        fetchResponse()
      }, [payer_id,payment_id])

  // useEffect(() => {
  //   const handleDisableBackButton = () => {
  //     window.history.pushState(null, "", window.location.href);
  //     backHome();
  //   };

  //   window.history.pushState(null, "", window.location.href);
  //   window.addEventListener("popstate", handleDisableBackButton);

  //   return () => {
  //     window.removeEventListener("popstate", handleDisableBackButton);
  //   };
  //   // eslint-disable-next-line
  // }, []);


  useEffect(() => {
    dispatch(clearCartAll())
  }, [])
  return (
    <section>
    <section className="container-fluid products_main_banner">
      <div className="container">
        <div className="banner_content">
          <h4>Order Received</h4>
          <div>
          {/* <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>

          </Breadcrumb> */}
        </div>
        </div>
      </div>
    </section>
    <div className="mt-4 mb-5">
      <div className="container">
        <div className="main__order_rec">
          <p className="order_thank_p">
            Thank you. Your order has been received.
          </p>
          <div>
            <ul className="order__ul_">
              <li>
                <p>Order Number</p>
                {/* <p className="orderthank_next">{state.orderID}</p> */}
                <p className="orderthank_next">12</p>
              </li>
              <li>
                <p>Date</p>
                {/* <p className="orderthank_next">{ moment().format('MMMM DD, YYYY')}</p> */}
                <p className="orderthank_next">{ moment().format('MMMM DD, YYYY')}</p>
              </li>
              <li>
                <p>Total</p>
                {/* <p className="orderthank_next">{currency_name} {(state.amount).toFixed(2)}</p> */}
                <p className="orderthank_next">$20.00</p>
              </li>
              {/* <li>
                <p>Payment Method</p>
                <p className="orderthank_next">
                  {state.paymentType ==="COD" ? "COD / COC" : state.paymentType }
                </p>
              </li> */}
            </ul>
          </div>
          <div className="mt-5">
            <h3 className="text-center">Order Details</h3>
            <div className="mt-3">
              <table className="table table_main_bor">
                <tbody>
                  {cart.cartItems.map((value,index)=>{
                    const amount =
                    value.discount_price === ""
                      ? parseFloat(value.price).toFixed(2)
                      : parseFloat(value.discount_price).toFixed(2);
                    return(
                    <tr key={index}>
                    <th>
                      <p className="order__item_pad">
                        {value.name} × {value.cartQuantity}
                      </p>
                    </th>
                    <th>
                      <p className="order__item_pad order_detail_sec_th">
                        AED {amount}
                      </p>
                    </th>
                  </tr>
                    )
                  })}
                  
                </tbody>
                <tfoot className="t_foo_bg">
                  <tr>
                    <th className="td_border_n">
                      <p className="order_det_amounts_D pt-2">Subtotal:</p>
                    </th>
                    <th className="td_border_n">
                      {/* <p className="order_detail_sec_th pt-2">AED {(state.amount - parseInt(state.shipping_charges)).toFixed(2)}</p> */}
                      <p className="order_detail_sec_th pt-2">$23.00</p>
                    </th>
                  </tr>
                  <tr>
                    <th className="td_border_n">
                      <p className="order_det_amounts_D">Shipping:</p>
                    </th>
                    {/* <th className="td_border_n">
                      <p className="order_detail_sec_th">
                        {currency_name} {state.shipping_charges}
                        <span className="via_del_fs">
                          via Delivery Charges per Bundle
                        </span>
                      </p>
                    </th> */}
                  </tr>
                  {/* <tr>
                    <th>
                      <p className="order_det_amounts_D mb-2">
                        Payment method:
                      </p>
                    </th>
                    <th>
                      <p className="order_detail_sec_th mb-2">
                        {state.paymentType ==="COD" ? "COD / COC" : state.paymentType}
                      </p>
                    </th>
                  </tr> */}
                  <tr>
                    <th className="td_border_n">
                      <p className="tot_Order_head">TOTAL:</p>
                    </th>
                    <th className="td_border_n">
                      <p className="order_detail_sec_th tot_Order_head total_am_color">
                        {/* {currency_name} {(state.amount).toFixed(2)} */}
                        $20.00
                      </p>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default page