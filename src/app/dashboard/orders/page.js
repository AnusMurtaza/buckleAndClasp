"use client"
import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import Spinner from '@/app/components/Spinner';
import { baseURL } from '@/app/config/apiUrl';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const page = () => {

  // const [open, setOpen] = useState("");

  // let [searchParams, setSearchParams] = useSearchParams();
  // const pages = searchParams.get("page");
  // const [page, setPage] = useState(parseInt(pages));
  // const navigate = useNavigate();
  const handleChange = (e, p) => {
    setPage(p);
  };



  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [updateStatus, setUpdateStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeButton, setActiveButton] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const { token } = useSelector((state) => state.auth);

  const fetchOrders = async (page, status) => {
    try {
      setLoading(true);

      let url;
      if (status === 'All') {
        url = `${baseURL}/admin_view?page=${page}`;
      } else {
        url = `${baseURL}/get_orders_by_status/${status}?page=${page}`;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response.data;
      setOrders(data.data);
      setLastPage(data.last_page);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (value) => {
    setActiveButton(value);
    setCurrentPage(1); // Reset current page when changing status
    fetchOrders(1, value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log(newPage,"newPage")
  };

  useEffect(() => {
    console.log('Fetching orders...', currentPage, activeButton);

    fetchOrders(currentPage, activeButton);
  }, [currentPage, activeButton]);
  const handleStatusComplete = async (id) => {
    if (update_status !== "") {
      let data = {
        status: update_status,
      }
      let config = {
        method: "post",
        url: baseURL + `/update_order/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };
      setIsLoading(true);
      await axios(config)
        .then(function (response) {
          const { message } = response.data;
          toast.success(message);
          setTimeout(() => {
            fetchOrders();
            setIsLoading(false);
            setUpdate_status()
          }, 2000);


        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);

        });
    } else {
      toast.error("Please Filled Status")
    }
  };



  const orderElements = orders.map((order, index) => {
    const order_items = JSON.parse(order.order_items);
    const user_details = order.user_details;
    return (
      <div className="accordion-item" key={index}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <p>{`Order ID # ${order.id}`}</p>
              <p>{`Total Amount $${order.total_price}`}</p>
              <p>{`Status ${order.status}`}</p>
              <Link
                href={{
                  pathname: '/dashboard/orders',
                  query: {
                    id: order.id,
                    name: order.name,
                    description: order.description,
                    price: order.price,
                  },
                }}
                as={`/dashboard/orders/${order.id}`}
              >
                <span>View Details</span>
              </Link>
              <div className="btn view__order___btn">
                View Order <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </button>
        </h2>
        <div id={`flush-collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <p>
                  <b>Order ID:</b> #{order?.id}
                </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <p>
                  <b>Order Date:</b> {moment(order?.created_at).format('MMM DD YYYY')}
                </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <p>
                  <b>Email:</b> {order?.user_email}
                </p>
              </div>

              <div className="col-md-4 col-sm-6">
                <p>
                  <b>First Name: </b>{user_details?.first_name}
                </p>
              </div>

              <div className="col-md-4 col-sm-6">
                <p>
                  <b>Last Name: </b>{user_details?.last_name}
                </p>
              </div>

              <div className="col-md-4 col-sm-6">
                <p>
                  <b>Phone Number: </b>{user_details?.phone_number}
                </p>
              </div>


              {/* <div className="col-md-4 col-sm-6">
          <p>
            <b>Address: </b>{user_details?.address}
          </p>
        </div> */}

              {/* <div className="col-md-4 col-sm-6">
          <p>
            <b>Appartment: </b>{user_details?.appartment}
          </p>
        </div> */}

              {/* <div className="col-md-4 col-sm-6">
          <p>
            <b>Country: </b>USA
          </p>
        </div> */}


            </div>
            <div>
              <h5>Items:</h5>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order_items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <th>{item.name}</th>
                      <td>{item.cartQuantity}</td>
                      <td>{`$${item.price.toFixed(2)}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex flex-column">

                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Update Status
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="status"
                    onChange={(e) => setUpdate_status(e.target.value)}
                    placeholder="completed, pending , delivered"
                  />
                </div>

                <button
                  className={order?.status === "confirmed" ? 'btn bg-success kitchen_comp' : 'btn kitchen_comp '}
                  // className='btn bg-success text-white'
                  onClick={() => handleStatusComplete(order.id)}
                  disabled={isLoading ? true : false}
                >
                  {isLoading ? <Spinner /> : "Status Update"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  });
  console.log('Rendering Page component...');

  return (
    <section>
      <section className="container-fluid products_main_banner">
        <div className="container">
          <div className="banner_content">
            <h4>Dashboard - Orders</h4>
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
      <section className="mt-4 mb-4">
        <div className="container">
          <div className="row">
            <AdminDashboardSidebar />
            <div className="col-md-9">
              <div className='mb-3'>
                <button
                  type="button"
                  className={`btn ${activeButton === 'All' ? 'btn-secondary' : 'btn-outline-secondary'} me-3`}
                  onClick={() => handleStatusChange('All')}
                >
                  All
                </button>
                <button
                  type="button"
                  className={`btn ${activeButton === 'pending' ? 'btn-info' : 'btn-outline-info'} me-3`}
                  onClick={() => handleStatusChange('pending')}
                >
                  Pending
                </button>
                <button
                  type="button"
                  className={`btn ${activeButton === 'confirmed' ? 'btn-warning' : 'btn-outline-warning'} me-3`}
                  onClick={() => handleStatusChange('confirmed')}
                >
                  Confirmed
                </button>
                <button
                  type="button"
                  className={`btn ${activeButton === 'delivered' ? 'btn-success' : 'btn-outline-success'}`}
                  onClick={() => handleStatusChange('delivered')}
                >
                  Delivered
                </button>
              </div>
              <div>
                <div className='card'>
                  <div className='card-body'>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="position-relative mb-3">
                        <h3>Orders</h3>
                        <div className="position-absolute heading__line"></div>
                      </div>
                    </div>
                    <div>
                      {!loading && orders.length === 0 && (
                        <h3 className="text-center">Empty Orders</h3>
                      )}
                      {loading && (
                        <div className="text-center">
                          <Spinner />
                        </div>
                      )}
                      {/* {!loading&&orders.length === 0 && <h3 className="text-center">No Pending Orders</h3>} */}
                      <div className="accordion accordion-flush" id="accordionFlushExample">
                        {orderElements}

                      </div>

                    </div>
                  </div>
                </div>

                <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" href="#" onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </button>
          </li>
          {Array.from({ length: lastPage }, (_, index) => (
            <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
              <button className="page-link" href="#" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === lastPage ? 'disabled' : ''}`}>
            <button className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
                {/* <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        color="primary"
      /> */}
              </div>

            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default page









