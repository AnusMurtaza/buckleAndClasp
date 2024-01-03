"use client"
import React, { useEffect, useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import Link from 'next/link'
import { baseURL } from '../config/apiUrl';
import { useSelector } from 'react-redux';
import axios from 'axios';

const page = () => {
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchOrder = async () => {
    try {
      var config = {
        method: "get",
        url: baseURL + `/user_order_view?page=${currentPage}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setLoading(true);
      await axios(config).then(function(response) {
        const { data } = response.data;
        setOrders(data.data);
        setCurrentPage(data.current_page);
        setTotalPages(data.last_page);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section>
    <section className="container-fluid products_main_banner">
      <div className="container">
        <div className="banner_content">
          <h4>Orders</h4>
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
              {/* {orders.length > 0 ? ( */}
                <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ORDER</th>
                      <th scope="col">DATE</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">TOTAL</th>
                      <th scope="col">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {orders &&
                      orders.map((value, index) => {
                        return ( */}
                          {/* <tr key={index}> */}
                          <tr>
                            <td>
                              {/* <span className="orderNo">#{value.id}</span> */}
                              <span className="orderNo">#01</span>
                            </td>
                            <td>
                                02/10/2024
                              {/* {moment(value.created_at).format(
                                "MMMM DD, YYYY"
                              )} */}
                            </td>
                            {/* <td>{value.status}</td> */}
                            <td>pending</td>
                            {/* <td>{value.currency_abbr} {value.total_price}</td> */}
                            <td>$20.00</td>
                            <td>
                              <Link href="/orders/1">
                              <p className="order__view_btn">VIEW</p>
                              </Link>
                            </td>
                          </tr>
                        {/* );
                      })} */}
                  </tbody>
                </table>
                </div>
            {/* //   ) : ( */}
            {/* //     <p><i className="fa-regular fa-circle-check text-success fs-4"></i> No order has been made yet.</p> */}
            {/* //   )} */}
            </div>
            {/* {orders.length > 0 && (
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )} */}
          </div>
        </div>
      </div>
    </section>
  </section>
  )
}

export default page