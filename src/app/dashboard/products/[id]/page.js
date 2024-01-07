"use client"
import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import { baseURL } from '@/app/config/apiUrl';
import { ProductSchema, SubCategorySchema, updateProductSchema, updateSubCategorySchema } from '@/app/schemas';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';
import Spinner from '@/app/components/Spinner';

const page = () => {
  const router = useRouter()
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [mainCategories, setMainCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    // Function to make API request
    const sendRequest = async () => {
      try {
        const response = await axios.get(`${baseURL}/product/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = response.data
        setData(data);

        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    if (id !== "add") {
      sendRequest();
    }
  }, [id, token]);


  const fetchSubCategory = (selectedSubCategoryId) => {
    var config = {
      method: 'get',
      url: baseURL + `/sub_cat_by_main_cat/${selectedSubCategoryId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        setMainCategories(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if(data?.main_cat_id){
      fetchSubCategory(data?.main_cat_id)
    }
  }, [data?.main_cat_id])
  


  const fetchMainCategory = () => {
    var config = {
      method: 'get',
      url: baseURL + '/all_main_categories',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    axios(config)
      .then(function (response) {
        setSubCategories(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchMainCategory()

  }, [])

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: data?.title || "",
      name: data?.name || "",
      description: data?.description || "",
      price: data?.price || "",
      sale: data?.sale === "1" && true || "",
      main_cat_id: data?.main_cat_id || "",
      sub_cat_id: data?.sub_cat_id || "",
      image: "",
      color: data?.color || "",
      discounted_price: data?.discounted_price || "",



    },
    // validationSchema: data ? updateProductSchema : ProductSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log(values)
      const colorArray = values.color.split(',').map(color => color.trim());
      console.log(colorArray)
      setLoading(true);
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append("sale", values.sale ? 1 : 0);
      formData.append("main_cat_id", values.main_cat_id);
      formData.append("sub_cat_id", values.sub_cat_id);
      formData.append("discounted_price", values.discounted_price);
      formData.append('color', JSON.stringify(colorArray));
      // formData.append('image[]', values.image);
      { values.image === "" && formData.append('image[]', values.image) }
      { values.image !== "" && values.image.forEach(file => { formData.append('image[]', file); }) }

      let response;

      try {
        if (id !== "add") {
          response = await axios.post(`${baseURL}/update_product/${data.id}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else {
          response = await axios.post(`${baseURL}/product`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }

        const { message } = response.data;
        toast.success(message);
        router.push('/dashboard/products');
      } catch (error) {
        console.error(error);
        toast.error('Error creating/updating banner');
      } finally {
        setLoading(false);
      }
    },

  });

  console.log(values)
  return (
    <>
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
        <div className="container-fluid">
          <div className="row">
            <AdminDashboardSidebar />
            <div className="col-md-9">

              <div>
                <div className="position-relative">
                  <h3>Add Products </h3>
                  <div className="position-absolute heading__line"></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="p-3 main_border">
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <label htmlFor="title" className="form-label">
                          Product Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          autoComplete="off"
                          name="title"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title}
                          placeholder="Men's Jacket"
                        />
                        {errors.title && touched.title ? <p>{errors.title}</p> : null}
                      </div>
                      <div className="col-md-6 mb-2">
                        <label htmlFor="name" className="form-label">
                          Product Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          autoComplete="off"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          placeholder="Men biker jackets"
                        />
                        {errors.name && touched.name ? <p>{errors.name}</p> : null}
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}
                          rows={4}
                        />
                        {errors.description && touched.description ? (
                          <p>{errors.description}</p>
                        ) : null}
                        {/* {values.imagePreview?.map((url, index) => (
      <img key={index} src={url} alt={`Image ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }} />
    ))} */}
                      </div>
                      <div className="col-md-6 mb-2">
                        <label htmlFor="price" className="form-label">
                          price
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="price"
                          autoComplete="off"
                          name="price"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.price}
                          placeholder="20.00"
                        />
                        {errors.price && touched.price ? <p>{errors.price}</p> : null}
                      </div>
                      <div className="col-md-6 mb-2">
                        <label htmlFor="discounted_price" className="form-label">
                          Discounted Price
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="discounted_price"
                          autoComplete="off"
                          name="discounted_price"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.discounted_price}
                          placeholder="20.00"
                        />
                        {errors.discounted_price && touched.discounted_price ? <p>{errors.discounted_price}</p> : null}
                      </div>
                      <div className="col-12 my-3">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="sale"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.sale}
                            checked={values.sale}
                          />
                          <label className="form-check-label" htmlFor="sale">
                            Sale
                          </label>
                        </div>
                        {errors.sale && touched.sale ? (
                          <p>{errors.sale}</p>
                        ) : null}
                      </div>
                      <div className="col-md-6 mb-2">
                        <label htmlFor="main_cat_id" className="form-label">
                          Main Categories
                        </label>
                        <select
                          className="form-select"
                          id="main_cat_id"
                          name="main_cat_id"
                          value={values.main_cat_id}
                          onChange={(event) => {
                            handleChange(event);
                            const selectedSubCategoryId = event.target.value;
                            setFieldValue("main_cat_id", selectedSubCategoryId);

                            // Yahan main category ka data fetch karein
                            fetchSubCategory(selectedSubCategoryId);
                          }}
                        >
                          <option value={0}>select Categories</option>
                          {subCategories.map((val, index) => (
                            <option key={index} value={val.id}>
                              {val.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6 mb-2">
                        <label htmlFor="sub_cat_id" className="form-label">
                          Sub Categories
                        </label>
                        <select
                          className="form-select"
                          id="sub_cat_id"
                          name="sub_cat_id"
                          value={values.sub_cat_id}
                          onChange={handleChange}
                        >
                          <option value={0}>select Categories</option>
                          {mainCategories.map((val, index) => (
                            <option key={index} value={val.id}>
                              {val.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6 mb-2">
                        <label htmlFor="color" className="form-label">
                          Color
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="color"
                          autoComplete="off"
                          name="color"
                          onChange={(event) => {
                            const inputValue = event.target.value;
                            setFieldValue("color", inputValue);
                          }}
                          onBlur={handleBlur}
                          value={values.color}
                          placeholder="Red, Blue, Green" // Example placeholder
                        />
                        {errors.color && touched.color ? <p>{errors.color}</p> : null}
                      </div>
                      <div className="col-md-12 mb-2">
                        <label htmlFor="image" className="form-label">
                          Upload Image
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          name="image"
                          accept='image/*'
                          onBlur={handleBlur}
                          id="image"
                          multiple
                          onChange={(event) => {
                            const files = Array.from(event.target.files);
                            setFieldValue("image", files);
                          }}
                        />
                        {errors.image && touched.image ? <p>{errors.image}</p> : null}
                      </div>


                      <div className="mt-2 text-center">
                        <button type="submit" className="btn check_out_btn" disabled={loading ? true : false}>{loading ? <Spinner /> : "Save"}</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page