import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import DeleteModal from '@/app/components/modals/DeleteModal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

//     const [loading, setloading] = useState(false)
//     const [banners, setBanners] = useState([])
//     const [page, setPage] = useState(1);
//     const [count, setcount] = useState(1)
//     const { token } = useSelector((state) => state.auth);
//     const navigate = useNavigate()
  
//     const handleChange = (e,p) => {
//       setPage(p);
//     };
//   const fetchBanner = () =>{
//     var config = {
//       method: 'get',
//       url: baseURL + `/banners?page=${page}`,
//       headers: { 
//         Authorization: `Bearer ${token}`
//       }
//     };
//     setloading(true)
//     axios(config)
//     .then(function (response) {
//       const {data}=response.data
//       setBanners(data.data)
//       setcount(data.last_page)
//       setloading(false)
//     })
//     .catch(function (error) {
//     setloading(false)
//       console.log(error);
//     });
//   }
  
//   useEffect(() => {
//     fetchBanner()
//     navigate(`/banner?page=${page}`)
//   }, [page])
  
  
//     const [dialog, setDialog] = useState({
//       message: "",
//       isLoading: false,
//       nameProduct: ""
//     });
//     const idProductRef = useRef();
//     const handleDialog = (message, isLoading, nameProduct) => {
//       setDialog({
//         message,
//         isLoading,
//         nameProduct
//       });
//     };
  
//     const handleDelete = (id) => {
//       const index = banners.findIndex((p) => p.id === id);
  
//       handleDialog("Are you sure you want to delete?", true, banners[index].name);
//       idProductRef.current = id;
//     };
  
//     const areUSureDelete = (choose) => {
//       if (choose) {
//           setBanners(banners.filter((p) => p.id !== idProductRef.current));
//         var config = {
//           method: 'delete',
//           url:baseURL + `/banners/${idProductRef.current}`,
//           headers: { 
//               Authorization: `Bearer ${token}`
//             }
//         };
        
//         axios(config)
//         .then(function (response) {
//           const {message} = response.data
//           toast.info(message)
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
        
//         handleDialog("", false);
//       } else {
//         handleDialog("", false);
//       }
//     };
  
  return (
    <>
      <section>
      <section className="container-fluid products_main_banner">
        <div className="container">
          <div className="banner_content">
            <h4>Dashboard</h4>
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
        <div className="position-relative">
            <h3>Banners</h3>
            <div className="position-absolute heading__line"></div>
          </div>
          <Link href="/banner/add"><button className="btn add__Btn">Add</button></Link>
          </div>

          <table className="table no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Banner Image</th>
                <th>Banner Name</th>
                <th>Status</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {/* {loading && <tr><td colSpan={4} className="text-center"><Spinner/></td></tr>}
            {!loading && banners.length===0 && <tr><td colSpan={4} className="text-center">No Data</td></tr>}
              {!loading && banners.map((tdata, index) => ( */}
                <tr className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <Image
                        // src={imageUrl + `/${tdata.image}`}
                        src=""
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                    </div>
                  </td>
                  {/* <td>{tdata.name}</td> */}
                  <td>anas</td>
                  <td>
                  {/* <span
                      className={tdata.active !== "0" ? "bg-success text-white" : "bg-danger text-white"}
                    >
                      {tdata.active !== "0" ? "Active" : "Not Active"}
                    </span> */}
                  </td>
                  <td>
                  <Link href={`/banner/edit`}><i className="fa-regular fa-pen-to-square text-success fs-4"></i></Link>
                  {/* <Link href={`/banner/edit/${tdata.id}`}><i className="bi bi-pencil-square text-success fs-4"></i></Link> */}
                  {/* <i className="bi bi-trash text-danger fs-4 ms-3" onClick={() => handleDelete(tdata.id)}></i> */}
                  <i className="fa-regular fa-trash-can text-danger fs-4 ms-3"></i>
                  </td>
                </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Pagination count={count} page={page} onChange={handleChange} color="primary"/> */}

      {/* {dialog.isLoading && ( */}
        {/* <DeleteModal
          //Update
        //   nameProduct={dialog.nameProduct}
        //   onDialog={areUSureDelete}
        //   message={dialog.message}
        /> */}
      {/* )} */}
    </div>

            </div>
          </div>
        </div>
      </section>
    </section>

    </>
  )
}

export default page