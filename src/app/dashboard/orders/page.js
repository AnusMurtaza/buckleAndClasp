"use client"
import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import Spinner from '@/app/components/Spinner';
import { baseURL } from '@/app/config/apiUrl';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const page = () => {

  // const [open, setOpen] = useState("");
  const [loading, setloading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [count, setcount] = useState(1);
  const { token } = useSelector((state) => state.auth);
  // let [searchParams, setSearchParams] = useSearchParams();
  // const pages = searchParams.get("page");
  // const [page, setPage] = useState(parseInt(pages));
  // const navigate = useNavigate();
  const handleChange = (e, p) => {
    setPage(p);
  };
  const fetchOrders = () => {
    var config = {
      method: "get",
      // url: baseURL + `/admin_view?page=${page}`,
      url: baseURL + `/admin_view`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setloading(true);
    axios(config)
      .then(function (response) {
        const { data } = response.data;
        setOrders(data.data);
        setcount(data.last_page);
        setloading(false);
      })
      .catch(function (error) {
        setloading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchOrders();
    // navigate(`/pending-orders?page=${page}`);
  }, []);

  // const toggle = (id) => {
  //   if (open === id) {
  //     setOpen();
  //   } else {
  //     setOpen(id);
  //   }
  // };

console.log(orders)
  // const [update_status, setUpdate_status] = useState("")
  // const [isLoading, setIsLoading] = useState(false)
  // const handleStatusComplete = async (id) => {
  //   if(update_status !==""){
  //   let data = {
  //     status: update_status,
  //   }
  //   let config = {
  //     method: "post",
  //     url: baseURL + `/update_order/${id}`,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       // "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     data: data,
  //   };
  //   setIsLoading(true);
  //   await axios(config)
  //     .then(function (response) {
  //       const { message } = response.data;
  //       toast.success(message);
  //       setTimeout(() => {
  //         fetchOrders();
  //         setIsLoading(false);
  //         setUpdate_status()
  //       }, 2000);


  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       setIsLoading(false);

  //     });
  //   }else{
  //     toast.error("Please Filled Status")
  //   }
  // };



  const orderElements = orders.map((order, index) => {
    const order_items = JSON.parse(order.order_items);
    const user_details = order.user_details;
    return(
    <div className="accordion-item" key={index}>
      {/* Your existing order HTML structure here */}
      {/* You can replace hard-coded values with the corresponding properties of the 'order' object */}
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <p>{`Order ID # ${order.id}`}</p>
            <p>{`Total Amount $${order.total_price}`}</p>
            <p>{`Status ${order.status}`}</p>
            <div className="btn view__order___btn">
              View Order <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </button>
      </h2>
      <div id={`flush-collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
          {/* Your existing order details HTML structure here */}
          {/* Replace hard-coded values with the corresponding properties of the 'order' object */}
          <div className="row">
        <div className="col-md-4 col-sm-6">
          <p>
            <b>Order ID:</b> #{order?.id}
            {/* <b>Order ID:</b> #01 */}
          </p>
        </div>
        <div className="col-md-4 col-sm-6">
          <p>
            {/* <b>Order Date:</b> {moment(order?.created_at).format('MMM DD YYYY')} */}
            <b>Order Date:</b> 23/09/2022
          </p>
        </div>
        <div className="col-md-4 col-sm-6">
          <p>
            {/* <b>Email:</b> anas@gmail.com */}
            <b>Email:</b> {order?.user_email}
          </p>
        </div>

        <div className="col-md-4 col-sm-6">
          <p>
            <b>First Name: </b>{user_details?.first_name}
            {/* <b>First Name: </b>anas */}
          </p>
        </div>

        <div className="col-md-4 col-sm-6">
          <p>
            <b>Last Name: </b>{user_details?.last_name}
            {/* <b>Last Name: </b>Murtaza */}
          </p>
        </div>

        <div className="col-md-4 col-sm-6">
          <p>
            <b>Phone Number: </b>{user_details?.phone_number}
            {/* <b>Phone Number: </b>09876543456 */}
          </p>
        </div>
        {/* <div className="col-md-4 col-sm-6">
    <p>
      <b>Notes:</b> {order?.notes === null ? "Empty" : order?.notes}
    </p>
  </div> */}


        <div className="col-md-4 col-sm-6">
          <p>
            <b>Address: </b>{user_details?.address}
            {/* <b>Address: </b>block 12 */}
          </p>
        </div>

        <div className="col-md-4 col-sm-6">
          <p>
            <b>Appartment: </b>{user_details?.appartment}
            {/* <b>Appartment: </b>flat */}
          </p>
        </div>

        <div className="col-md-4 col-sm-6">
          <p>
            {/* <b>Country: </b>{user_details?.country} */}
            <b>Country: </b>USA
          </p>
        </div>


      </div>
          <div>
            <h5>Items:</h5>
            {/* Your existing items table */}
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
            <div>
              {/* <b>Sub Total:</b> {tdata.abbreviation} {(tdata?.total_price - tdata?.shipping_charges).toFixed(2)} */}
              <b>Sub Total:</b> 200.00
            </div>
            <div className="my-2">
              {/* <b>Shipping Charges:</b> {tdata.abbreviation} {tdata?.shipping_charges} */}
              <b>Shipping Charges:</b> 200.00
            </div>
            <div>
              {/* <b>Total Amount:</b> {tdata.abbreviation} {TotalAmount} */}
              <b>Total Amount:</b> 200.00
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Update Status
              </label>
              <input
                type="text"
                className="form-control"
                id="status"
                //   onChange={(e)=>setUpdate_status(e.target.value)}
                placeholder="completed, pending , delivered"
              />
            </div>

            <button
              //  className={tdata?.status==="completed"? 'btn bg-success kitchen_comp' : 'btn kitchen_comp '}
              className='btn bg-success text-white'
            //    onClick={() => handleStatusComplete(tdata.id )}
            //    disabled={isLoading?true:false}
            >
              {/* {isLoading? <Spinner/> : "Status Update"}                 */}
              Status Update
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    )
                });
  

  return (
    <section>
      <section className="container-fluid products_main_banner">
        <div className="container">
          <div className="banner_content">
            <h4>Dashboard - Sub Category</h4>
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









// <div className="accordion accordion-flush" id="accordionFlushExample">
// <div className="accordion-item">
//   <h2 className="accordion-header">
//     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//       <div className="d-flex w-100 justify-content-between align-items-center">
//         <p>Order ID # 01</p>
//         {/* <p className="del_status">Payment Method: "COD / COC" </p> */}
//         <p>Total Amount $20.00</p>
//         <p>Status Pending</p>
//         <div className="btn view__order___btn">
//           View Order <i className="fa-solid fa-angle-down"></i>
//         </div>
//       </div>
//     </button>
//   </h2>
//   <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//     <div className="accordion-body">
//       <div className="row">
//         <div className="col-md-4 col-sm-6">
//           <p>
//             {/* <b>Order ID:</b> #{tdata?.id} */}
//             <b>Order ID:</b> #01
//           </p>
//         </div>
//         <div className="col-md-4 col-sm-6">
//           <p>
//             {/* <b>Order Date:</b> {moment(tdata?.created_at).format('MMM DD YYYY')} */}
//             <b>Order Date:</b> 23/09/2022
//           </p>
//         </div>
//         <div className="col-md-4 col-sm-6">
//           <p>
//             <b>Email:</b> anas@gmail.com
//             {/* <b>Email:</b> {tdata?.user_email} */}
//           </p>
//         </div>

//         <div className="col-md-4 col-sm-6">
//           <p>
//             {/* <b>First Name: </b>{user_details?.first_name} */}
//             <b>First Name: </b>anas
//           </p>
//         </div>

//         <div className="col-md-4 col-sm-6">
//           <p>
//             {/* <b>Last Name: </b>{user_details?.last_name} */}
//             <b>Last Name: </b>Murtaza
//           </p>
//         </div>

//         <div className="col-md-4 col-sm-6">
//           <p>
//             {/* <b>Phone Number: </b>{user_details?.phone_number} */}
//             <b>Phone Number: </b>09876543456
//           </p>
//         </div>
//         {/* <div className="col-md-4 col-sm-6">
//     <p>
//       <b>Notes:</b> {tdata?.notes === null ? "Empty" : tdata?.notes}
//     </p>
//   </div> */}


//         <div className="col-md-4 col-sm-6">
//           <p>
//             {/* <b>Address: </b>{user_details?.address} */}
//             <b>Address: </b>block 12
//           </p>
//         </div>

//         <div className="col-md-4 col-sm-6">
//           <p>
//             {/* <b>Appartment: </b>{user_details?.appartment} */}
//             <b>Appartment: </b>flat
//           </p>
//         </div>

//         <div className="col-md-4 col-sm-6">
//           <p>
//             {/* <b>Country: </b>{user_details?.country} */}
//             <b>Country: </b>USA
//           </p>
//         </div>


//       </div>

//       <div>
//         <h5>Items:</h5>
//         <div>
//           <table
//             className='table'
//             style={{
//               boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
//             }}
//           >
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* {order_item && order_item.map((val, index) => {

//         return( */}
//               <tr >
//                 {/* <th>{val?.name}</th>
//             <td>{val.cartQuantity}</td>
//             <td>{tdata.abbreviation} {(val.price * val.cartQuantity).toFixed(2)}</td> */}
//                 <th>lather</th>
//                 <td>2</td>
//                 <td>$200.00</td>
//               </tr>
//               {/* )})} */}

//             </tbody>
//           </table>
//           <div className="d-flex flex-column">
//             <div>
//               {/* <b>Sub Total:</b> {tdata.abbreviation} {(tdata?.total_price - tdata?.shipping_charges).toFixed(2)} */}
//               <b>Sub Total:</b> 200.00
//             </div>
//             <div className="my-2">
//               {/* <b>Shipping Charges:</b> {tdata.abbreviation} {tdata?.shipping_charges} */}
//               <b>Shipping Charges:</b> 200.00
//             </div>
//             <div>
//               {/* <b>Total Amount:</b> {tdata.abbreviation} {TotalAmount} */}
//               <b>Total Amount:</b> 200.00
//             </div>
//             <div className="mb-3">
//               <label htmlFor="status" className="form-label">
//                 Update Status
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="status"
//                 //   onChange={(e)=>setUpdate_status(e.target.value)}
//                 placeholder="completed, pending , delivered"
//               />
//             </div>

//             <button
//               //  className={tdata?.status==="completed"? 'btn bg-success kitchen_comp' : 'btn kitchen_comp '}
//               className='btn bg-success text-white'
//             //    onClick={() => handleStatusComplete(tdata.id )}
//             //    disabled={isLoading?true:false}
//             >
//               {/* {isLoading? <Spinner/> : "Status Update"}                 */}
//               Status Update
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// </div>