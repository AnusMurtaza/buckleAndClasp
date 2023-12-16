import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import React from 'react'

const page = () => {
//     const [loading, setLoading] = useState(false);
//   const [data, setData] = useState();
//   const [maincategories, setMainCategories] = useState([])
//   const { token } = useSelector((state) => state.auth);

//   const navigate = useNavigate();
//   const { id } = useParams();

//   const sendRequest = () => {
//     var config = {
//       method: "get",
//       url: baseURL + `/subCategories/${id}`,
//       headers: { 
//         'Authorization': `Bearer ${token}`,
//       }
//     };
//     axios(config)
//       .then(function (response) {
//         setData(response.data.data);
//       })
//       .catch(function (error) {});
//   };
//   useEffect(() => {
//     if (id) {
//       sendRequest();
//     }
//   }, []);

//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     setFieldValue,
//   } = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       name: data?.name || "",
//       main_cat_id: data?.main_cat_id || "",
//       active: data?.active === "1" && true || "",
//     },

//     validationSchema: subCategorySchema,
//     onSubmit: (values, action) => {
//       var data = new FormData();
//       data.append("name", values.name);
//       data.append("main_cat_id", values.main_cat_id);
//       data.append("active", values.active ? 1 : 0);

//       if (id) {
//         var data = qs.stringify({
//           name: values.name,
//           main_cat_id: values.main_cat_id,
//           active: values.active ? 1 : 0,
//         });
//         var config = {
//           method: "put",
//           url: baseURL + `/subCategories/${id}`,
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//           data: data,
//         };
//         setLoading(true);
//         axios(config)
//           .then(function (response) {
//             const { message } = response.data;
//             toast.success(message);
//             setTimeout(() => {
//               navigate("/subcategory?page=1");
//               setLoading(false);
//             }, 2000);
//           })
//           .catch(function (error) {
//             setLoading(false);
//           });
//       } else {
//         var config = {
//           method: "post",
//           url: baseURL + "/subCategories",
//           headers: { 
//             Authorization: `Bearer ${token}`,
//           },
//           data: data,
//         };

//         setLoading(true);
//         axios(config)
//           .then(function (response) {
//             const { message } = response.data;
//             toast.success(message);
//             setTimeout(() => {
//               navigate("/subcategory?page=1");
//               setLoading(false);
//             }, 2000);
//           })
//           .catch(function (error) {
//             setLoading(false);
//           });
//       }
//     },
//   });

//   const fetchMainCategories = () =>{
//     var config = {
//       method: 'get',
//       url: baseURL + '/getMainCategory',
//       headers: { 
//         'Authorization': `Bearer ${token}`
//       }
//     };
//     axios(config)
//     .then(function (response) {
//       setMainCategories(response.data.data)
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }




// useEffect(() => {
//     fetchMainCategories()

// }, [])

  
// console.log(values);
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
            
          <>
      <section>
        <div className="position-relative">
          <h3>Add Sub Category</h3>
          <div className="position-absolute heading__line"></div>
        </div>
        <section className="add_product___">
        <form>
        {/* <form onSubmit={handleSubmit}> */}
        <div className="p-3 main_border">
          <div className="row">
            <div className="col-md-6 mb-2">
              <label htmlFor="name" className="form-label">
                Sub Category Name
              </label>
              <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                //   value={values.name}
                  placeholder="Men Clothing"
                />
                {/* {errors.name && touched.name ? <p>{errors.name}</p> : null} */}
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="main_cat_id" className="form-label">
                Main Categories
              </label>
              {/* <select className="form-select" id="main_cat_id"  name="main_cat_id" value={values.main_cat_id} onChange={handleChange}> */}
              <select className="form-select" id="main_cat_id" >
              
              <option  value={0}>select Categories</option>
               {/* {maincategories.map((val,index)=> <option key={index} value={val.id}>{val.name}</option>)} */}
            </select>
            </div>
            <div className="col-md-12 mb-2">
            <label htmlFor="image" className="form-label">
                  Upload Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  name="image"
                //   accept='image/*'
                //   onBlur={handleBlur}
                //   onChange={(e) =>setFieldValue('image', e.currentTarget.files[0])}
                  id="image"
                />
                {/* {errors.image && touched.image ? <p>{errors.image}</p> : null} */}
            </div>
            <div className="col-12 my-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="active"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.active}
                    // checked={values.active}
                  />
                  <label className="form-check-label" htmlFor="active">
                    Status
                  </label>
                </div>
                {/* {errors.active && touched.active ? (
                  <p>{errors.active}</p>
                ) : null} */}
              </div>

            <div className="mt-2 text-center">
            {/* <button type="submit" className="btn check_out_btn" disabled={loading?true:false}>{loading?<Spinner></Spinner>:"Save"}</button> */}
            <button type="submit" className="btn check_out_btn">Save</button>
            </div>
          </div>
        </div>
        </form>
        </section>
      </section>
    </>

          </div>
        </div>
      </div>
    </section>
  </section>
  )
}

export default page