import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import DeleteModal from '@/app/components/modals/DeleteModal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

//     const [loading, setloading] = useState(false)
//     const [subCategory, setSubCategory] = useState([])
//     const { token } = useSelector((state) => state.auth);
//     const [count, setcount] = useState(1)
//     let [searchParams, setSearchParams] = useSearchParams();
//     const pages = searchParams.get('page')
//     const [page, setPage] = useState(parseInt(pages) );
//     const navigate = useNavigate()
  
//     const handleChange = (e,p) => {
//       setPage(p);
//     };
  
//   const fetchSubCategory = () =>{
//     var config = {
//       method: 'get',
//       url: baseURL + `/subCategories?page=${page}`,
//       headers: { 
//         'Authorization': `Bearer ${token}`,
//       }
//     };
//     setloading(true)
//     axios(config)
//     .then(function (response) {
//       const {data}=response.data
//       setSubCategory(data.data)
//       setcount(data.last_page)
//       setloading(false)
  
//     })
//     .catch(function (error) {
//     setloading(false)
//       console.log(error);
//     });
//   }
  
//   useEffect(() => {
//     fetchSubCategory()
//     navigate(`/subcategory?page=${page}`)
    
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
//       //Update
//       const index = subCategory.findIndex((p) => p.id === id);
  
//       handleDialog("Are you sure you want to delete?", true, subCategory[index].name);
//       idProductRef.current = id;
//     };
  
//     const areUSureDelete = (choose) => {
//       if (choose) {
//         var config = {
//           method: 'delete',
//           url:baseURL + `/subCategories/${idProductRef.current}`,
//           headers: { 
//             'Authorization': `Bearer ${token}`,
//           }
//         };
        
//         axios(config)
//         .then(function (response) {
//           const {message} = response.data
//           toast.info(message)
//         setSubCategory(subCategory.filter((p) => p.id !== idProductRef.current));
//           handleDialog("", false);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
        
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
            <h4>Dashboard - Sub Category</h4>
            <div>
              {/* <Breadcrumb>
                <BreadcrumbItem>
                  <Link href="/">Home</Link>
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
            <h3>Sub Category</h3>
            <div className="position-absolute heading__line"></div>
          </div>
          <Link href="/dashboard/sub-category/add"><button className="btn add__Btn">Add</button></Link>
          </div>

          <table className="table no-wrap mt-3 align-middle" >
            <thead>
              <tr>
                <th>Sub Category Image</th>
                <th>Sub Category Name</th>
                <th>Main Category Name</th>
                {/* <th>Category Name</th>
                <th>Main Category Name</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {/* {!loading && subCategory.length===0 && <tr><td colSpan={3} className="text-center">No Data</td></tr>}
              {subCategory.map((tdata, index) => ( */}
                <tr  className="border-top">
                     <td>
                    <div className="d-flex align-items-center p-2">
                      <Image
                        // src={imageUrl + `/${tdata.image}`}
                        src='/img/banner-1.jpg'   
                        // className="rounded-circle"
                        alt="avatar"
                        width={45}
                        height={45}
                      />
                    </div>
                  </td>
                  {/* <td>{tdata.name}</td> */}
                  <td>Men's Jacket</td>
                  {/* <td>{tdata.main_cat_name}</td> */}
                  <td>Men</td>
                  <td>
                  <Link href={`/dashboard/subcategory/edit`}><i className="fa-regular fa-pen-to-square text-success fs-4"></i></Link>
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

      {/* {dialog.isLoading && (
        <DeleteModal
          //Update
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )} */}
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