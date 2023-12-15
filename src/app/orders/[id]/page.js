import DashboardSidebar from '@/app/components/DashboardSidebar'
import React from 'react'

const page = () => {
  return (
    <section>
    <section className="container-fluid products_main_banner">
      <div className="container">
        <div className="banner_content">
          {/* <h4>Order #{order.id}</h4> */}
          <h4>Order #01</h4>
          <div>
            {/* <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/my-account">My account</Link>
              </BreadcrumbItem>
            </Breadcrumb> */}
          </div>
        </div>
      </div>
    </section>
    <section className="mt-4 mb-4">
      <div className="container">
        <div className="row">
          <DashboardSidebar />
          <div className="col-md-9">
            <div>
              <div>
                {/* <p>Order #<mark>{order.id}</mark> was placed on <mark> {moment(order.created_at).format("MMMM DD, YYYY" )}</mark> and is currently <mark>{order.status}</mark>.</p> */}
                <p>Order #<mark>01</mark> was placed on <mark> 02/10/2023</mark> 
                and is currently <mark>pending</mark>.</p>
              </div>
            <div className="mt-3">
              <h3>Order Details</h3>
              <div className="mt-3">
                <table className="table table_main_bor">
                  <tbody>
                    {/* {orderItems.map((value,index)=>{

                      return(
                        <tr key={index}>
                        <th>
                          <p className="order__item_pad">
                           {value.name} × {value.cartQuantity}
                          </p>
                        </th>
                        <th>
                          <p className="order__item_pad order_detail_sec_th">
                            {order.currency_abbr} {value.price}
                          </p>
                        </th>
                      </tr>
                      )
                    })} */}

                     <tr>
                        <th>
                          <p className="order__item_pad">
                           Leatherpro × 2
                          </p>
                        </th>
                        <th>
                          <p className="order__item_pad order_detail_sec_th">
                            $20.00
                          </p>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <p className="order__item_pad">
                           Leather × 3
                          </p>
                        </th>
                        <th>
                          <p className="order__item_pad order_detail_sec_th">
                            $30.00
                          </p>
                        </th>
                      </tr>
     
                  </tbody>
                  <tfoot className="t_foo_bg">
                    <tr>
                      <th className="td_border_n">
                        <p className="order_det_amounts_D pt-2">Subtotal:</p>
                      </th>
                      <th className="td_border_n">
                        {/* <p className="order_detail_sec_th pt-2">{order.currency_abbr}  {(order.total_price - order.shipping_charges).toFixed(2)}</p> */}
                        <p className="order_detail_sec_th pt-2">
                            $200.00</p>
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
                             via Delivery  Shipping charges
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
                        {/* {order.currency_abbr}  {order.total_price} */}
                        20.99
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
                        {/* {order.user_details.first_name} {order.user_details.last_name} */}
                        anas murtaza
                          <br />
                          {/* {order.user_details.address}  */}
                          block 12
                          <br />
                          {/* {order.user_details.country}  Bahrain */}
                           USA
                          <br />
                          {/* {order.user_details.phone_number} */}
                          0987654323
                          <br />
                          {/* {order.user_details.email} */}
                          anas@gmail.com
                        </p>
                      </div>
                  </div>
                </div>
                <div className="col-md-6">
                <div>
                    <h4 className="mb-2">Shipping Address</h4>
                      <div>
                        <p>
                        {/* {order.user_details.first_name} {order.user_details.last_name} */}
                        anas murtaza
                          <br />
                          {/* {order.user_details.address} */}
                          block 12
                          <br />
                          {/* {order.user_details.country} */}
                          USA
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
  )
}

export default page