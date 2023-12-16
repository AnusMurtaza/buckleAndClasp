import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import React from 'react'

const page = () => {

//     const [loading, setLoading] = useState(false)
//     const [products, setProducts] = useState()
//     const { token } = useSelector((state) => state.auth);
//     const [categories, setCategories] = useState([])
//     const [mainCategory, setMainCategory] = useState([])
//     const navigate = useNavigate()
//     const { id } = useParams();
//     const {state} = useLocation();
  
//     const sendRequest = () => {
//         var config = {
//             method: 'get',
//             url:baseURL + `/product/${id}`,
//             headers: {
//               'Authorization': `Bearer ${token}`
//             },
//           };       
//           axios(config)
//           .then(function (response) {
//             setProducts(response.data.data)
//             setPricesArray(response.data.data.price)
//           })
//           .catch(function (error) {
//           });
//     };
    
//     useEffect(() => {
//       if(id){
//         sendRequest()
//       }
//     }, []);
    
  
//     const { values, errors, touched, handleBlur, handleChange, handleSubmit ,setFieldValue} = useFormik({
//       initialValues: {
//         name:products?.name||"" ,
//         // main_cat_id:products?.main_cat_id|| "",
//         // sub_cat_id:products?.sub_cat_id|| "",
//         cat_id:products?.cat_id|| "",
//         image: "",
//         // price:products?.price|| "",
//         is_featured:products?.is_featured === "1" && true || "",
//         active: products?.active === "1" && true || "",
//         description:products?.description|| "",
//         quality:products?.quality|| "",
//         weight:products?.weight|| "",
//         stock:products?.stock|| "",
//         size:products?.size|| "",
//         sticker_name:products?.sticker_name|| "",
//         sku:products?.sku|| "",
//         video_link:products?.video_link|| "",
//         tags:products?.tags|| "",
//         pieces:products?.pieces|| "",
//         best_seller: products?.best_seller === "1" && true || "",
//         house_hold: products?.house_hold === "1" && true || "",
  
//         // sale:products?.sale==="1"&&true|| "",
//         // description:products?.description|| "",
//         // description:products?.description|| "",
  
//       },
//       enableReinitialize: true,
//       validationSchema:products?updateProductSchema : productSchema,
//       onSubmit: (values,action) => {
//         var data = new FormData();
//         data.append("name", values.name);
//         data.append("main_cat_id", values.house_hold ? "house-hold": mainCategory.main_cat_id);
//         data.append("sub_cat_id", values.house_hold ? "house-hold": mainCategory.sub_cat_id);
//         data.append("cat_id",values.house_hold ? "house-hold": values.cat_id);
//         // {values.image ?
//         //   data.append('image[]', values.image)
//         //   :
       
//         // }
//         // values.image.forEach(file => {data.append('image[]', file);})
//         {values.image === "" && data.append('image[]', values.image)}
//         {values.image !== "" && values.image.forEach(file => {data.append('image[]', file);})}
//         // data.append("image",values.image);
//         data.append("is_featured", values.is_featured ? 1 : 0);
//         data.append("house_hold", values.house_hold ? 1 : 0);
//         data.append("active", values.active ? 1 : 0);
//         data.append("description", values.description);
//         data.append("quality", values.quality);
//         data.append("weight", values.weight);
//         data.append("stock", values.stock);
//         data.append("size", values.size);
//         data.append("price", JSON.stringify(formattedData));
//         data.append("sticker_name", values.sticker_name);
//         data.append("sku", values.sku);
//         data.append("video_link", values.video_link);
//         data.append("tags", values.tags);
//         data.append("pieces", values.pieces);
//         data.append("best_seller", values.best_seller ? 1 : 0);
  
  
  
//   if(id){
  
//     var config = {
//       method: 'post',
//       url: baseURL + `/updateProduct/${id}`,
//       headers: { 
//         'Authorization': `Bearer ${token}`,
//         // 'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       data : data
//     };
//     setLoading(true)
//     axios(config)
//     .then(function (response) 
//     {
//       const {message} = response.data
//       toast.success(message)
//       setTimeout(() => 
//       {
//         navigate(`/product?page=${state.page}`)
//         setLoading(false)      
//       }, 2000);
//     })
//     .catch(function (error) {
//       setLoading(false)
//     });
//   }else{
//     var config = {
//       method: "post",
//       url: baseURL + "/product",
//       headers: {
//         'Authorization': `Bearer ${token}`
//       },
//       data: data,
//     };
//     setLoading(true)
//     axios(config)
//       .then(function (response) {
//         const {message} = response.data
//         toast.success(message)
//         setTimeout(() => {
//           navigate("/product?page=1")
//       setLoading(false)
          
//         }, 2000);
//       })
//       .catch(function (error) {
//         setLoading(false)
//       });
//   }
//       },
//     });
  
//     products?.image.forEach(file => { console.log(file.image) });
//     const fetchCategories = () =>{
//       var config = {
//         method: 'get',
//         url: baseURL + '/getCategories',
//         headers: { 
//           'Authorization': `Bearer ${token}`
//         }
//       };
//       axios(config)
//       .then(function (response) {
//         setCategories(response.data.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     }
  
  
//   const fetchMainCategory = () =>{
//     if(values.house_hold===true){
//       setCategories([])
//     }
//     var config = {
//       method: 'get',
//       url: baseURL + `/getMainAndSubByCatId/${values.house_hold?null:values.cat_id}`,
//       headers: { 
//         Authorization: `Bearer ${token}`
//       }
//     };
//     axios(config)
//     .then(function (response) {
//       setMainCategory(response.data.data)
  
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }
  
//   const [currency, setCurrency] = useState([]);
  
//   const fetchCurrency = () =>{
//     var config = {
//       method: 'get',
//       url: baseURL + `/getCurrency`,
//       headers: { 
//         Authorization: `Bearer ${token}`
//       }
//     };
//     axios(config)
//     .then(function (response) {
//       setCurrency(response.data.data)
  
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }
  
  
//   useEffect(() => {
//     if(values.cat_id){
  
//       fetchMainCategory()
//     }
  
//   }, [values.cat_id,values.house_hold])
  
  
  
//   useEffect(() => {
//     fetchCurrency()
//       fetchCategories()
  
//   }, [])
  
  
//   const [pricesArray, setPricesArray] = useState([]);
//   const [pricing, setPricing] = useState();
  
//   const handleCheck = (event) => {
//     const currencyId = event.target.id;
//     const fieldName = event.target.name;
//     const value = event.target.value;
  
//     const existingIndex = pricesArray.findIndex((val) => val.currency_id === currencyId);
//     if (existingIndex === -1) {
//       const newItem = {
//         currency_id: currencyId,
//         price: '',
//         discount_price: ''
//       };
//       newItem[fieldName] = value;
//       setPricesArray([...pricesArray, newItem]);
//     } else {
//       const updatedArray = pricesArray.map((item) => {
//         if (item.currency_id === currencyId) {
//           return {
//             ...item,
//             [fieldName]: value
//           };
//         }
//         return item;
//       });
//       setPricesArray(updatedArray);
//     }
//   };
  
//   const formattedData = pricesArray.map(({ currency_id, price, discount_price }) => ({
//     currency_id,
//     price,
//     discount_price
//   }));
  
  
//   console.log(values);

    return (
    <section>
    <section className="container-fluid products_main_banner">
      <div className="container">
        <div className="banner_content">
          <h4>Dashboard - Products</h4>
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
            
          <div className="add_product___">
      {/* <form onSubmit={handleSubmit}> */}
      <form >
        <div className="position-relative">
          <h3>Product</h3>
          <div className="position-absolute heading__line"></div>
        </div>
        <div className="p-3 main_border">
          <div className="row">
            <div className="col-md-4 mb-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.name }
                placeholder="Men’s T-Shirt Short Sleeves Grade A"
              />
              {/* {errors.name && touched.name ? <p>{errors.name}</p> : null} */}
            </div>
            {/* <div className="col-md-4 my-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="house_hold"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.house_hold}
                    checked={values.house_hold}
                  />
                  <label className="form-check-label" htmlFor="house_hold">
                    House Hold ?
                  </label>
                </div>
                {errors.house_hold && touched.house_hold ? (
                  <p>{errors.house_hold}</p>
                ) : null}
              </div> */}
            {/* <div className="col-md-4 mb-2">
              <label htmlFor="cat_id" className="form-label">
               Category
              </label>
              <select className="form-select" id="cat_id"  name="cat_id"
               value={values.cat_id}
               onChange={handleChange} 
               disabled={values.house_hold?true:false}
               >
              
              <option  value={0} >select Categories</option>
            {categories.map((val,index)=> <option key={index} value={val.id} >{val.name}</option>)}
            </select>
            {errors.cat_id && touched.cat_id ? (
                  <p>{errors.cat_id}</p>
                ) : null}
            </div> */}
            <div className="col-md-4 mb-2">
              <label htmlFor="main_cat_id" className="form-label">
                Sub Category
              </label>
              <select className="form-select" id="sub_cat_id"  name="sub_cat_id" 
            //   value={mainCategory?.sub_cat_id}  disabled
              >

              {/* {mainCategory === null ? <option value={0} >select main category</option>:
              
              <option value={mainCategory?.sub_cat_id} >{mainCategory?.sub_cat_name}</option>
               } */}

            </select>
            </div>

            <div className="col-md-4 mb-2">
              <label htmlFor="main_cat_id" className="form-label">
                Main Category
              </label>
              <select className="form-select" id="main_cat_id"  name="main_cat_id" 
            //   value={mainCategory?.main_cat_id}  disabled
              >

              {/* {mainCategory === null ? <option value={0} >select main category</option>:
              
              <option value={mainCategory?.main_cat_id} >{mainCategory?.main_cat_name}</option>
               } */}

            </select>
            </div>

            {/* <div className="col-md-4 mb-2">
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                id="stock"
                name="stock"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.stock}
                placeholder="10"
              />
              {errors.stock && touched.stock ? <p>{errors.stock}</p> : null}
            </div> */}


            {/* <div className="col-md-4 mb-2">
              <label className="form-label">
                Size
              </label>
              <input
                type="text"
                className="form-control"
                id="size"
                name="size"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.size }
                placeholder="26'' to 35''"
              />
              {errors.size && touched.size ? <p>{errors.size}</p> : null}
            </div> */}

            {/* <div className="col-md-4 mb-2">
              <label className="form-label">
              SKU
              </label>
              <input
                type="number"
                className="form-control"
                id="sku"
                name="sku"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sku}
                placeholder="1305"
              />
              {errors.sku && touched.sku ? <p>{errors.sku}</p> : null}

            </div> */}









            {/* <div className="col-md-12 mb-2">
              <h5 >Prices</h5>
                <div className="d-flex justify-content-between">

                {
  currency &&
  currency.map((val, index) => {
    const priceObj = pricesArray.find((item) => item.currency_id == val.id);
    const price = priceObj ? priceObj.price : '';
    const discountPrice = priceObj ? priceObj.discount_price : '';

    return (
      <div key={index} className="d-flex align-items-center py-1 px-2 position-relative flex-wrap">
        <h6 className="m-0 me-3">{val.name}</h6>
        <p>
          <input
            className="form-control"
            id={val.id}
            name="price"
            onChange={handleCheck}
            type="text"
            placeholder="Price"
            defaultValue={price}
          />
          <input
            className="my-1 form-control"
            id={val.id}
            name="discount_price"
            onChange={handleCheck}
            type="text"
            placeholder="Discount Price"
            defaultValue={discountPrice}
          />
        </p>
      </div>
    );
  })
}

</div>
                {errors.price && touched.price ? (
                  <p>{errors.price}</p>
                ) : null}
              </div> */}







            {/* <div className="col-md-12 mb-2">

          <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox"  id="is_featured"
               onChange={handleChange}
                onBlur={handleBlur}
                value={values.is_featured}
                checked={values.is_featured}
                />
            <label className="form-check-label" htmlFor="is_featured">Featured Item?</label>
          </div>
              {errors.is_featured && touched.is_featured ? (
                <p>{errors.is_featured}</p>
              ) : null}
            </div> */}
          
            {/* <div className="col-12 my-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="active"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.active}
                    checked={values.active}
                  />
                  <label className="form-check-label" htmlFor="active">
                    Status
                  </label>
                </div>
                {errors.active && touched.active ? (
                  <p>{errors.active}</p>
                ) : null}
              </div> */}

              {/* <div className="col-12 my-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="best_seller"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.best_seller}
                    checked={values.best_seller}
                  />
                  <label className="form-check-label" htmlFor="best_seller">
                    Best Seller
                  </label>
                </div>
                {errors.best_seller && touched.best_seller ? (
                  <p>{errors.best_seller}</p>
                ) : null}
              </div> */}

            <div className="col-md-12 mb-2">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input
                className="form-control"
                type="file"
                name="image"
                // accept='image/*'
                // onBlur={handleBlur}
                // id="image"
                // multiple
                // onChange={(event) => {
                //   const files = Array.from(event.target.files);
                //   setFieldValue("image", files);
                // }}
              />
              {/* {errors.image && touched.image ? <p>{errors.image}</p> : null} */}
            </div>
            <div className="col-md-12 mb-2">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                autoComplete="off"
                name="description"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.description}
                rows={4}
              />
              {/* {errors.description && touched.description ? (
                <p>{errors.description}</p>
              ) : null} */}
                  {/* {values.imagePreview?.map((url, index) => (
      <img key={index} src={url} alt={`Image ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }} />
    ))} */}
            </div>
            <div className="mt-2 text-center">
              {/* <button type="submit" className="btn check_out_btn" disabled={loading?true:false}>{loading?<Spinner></Spinner>:"Save"}</button> */}
              <button type="submit" className="btn check_out_btn">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>

          </div>
        </div>
      </div>
    </section>
  </section>
  )
}

export default page