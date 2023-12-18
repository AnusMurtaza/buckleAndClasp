"use client"
import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import { baseURL } from '@/app/config/apiUrl';
import { mainCategorySchema, signUpSchema } from '@/app/schemas';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const page = ({params }) => {
  const router = useRouter();
  console.log(params)
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const { token } = useSelector ((state) => state.auth);

  useEffect(() => {
    // Function to make API request
    const sendRequest = async () => {
      try {
        const response = await axios.get(`${baseURL}/main_category/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const {data}= response.data
        setData(data);
        console.log(data)
      } catch (error) {
        console.error(error);
        // Handle error as needed
      }
    };

    // Check if id is present in params and make the API request
    if (params.id) {
      sendRequest();
    }
  }, [params.id, token]);

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
      name: data?.name || "",
      image: null,
    },
    validationSchema: mainCategorySchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('image', values.image);
      // console.log(formValues)
      try {
        const response = await axios.post(`${baseURL}/main_category`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        const { message } = response.data;
        toast.success(message);
        router.push('/dashboard/main-category')
        
      } catch (error) {
        console.error(error);
        toast.error('Error creating main category.');
      } finally {
        setLoading(false);
      }
    },
  });
  console.log(values)

  return (
    <section>
    <section className="container-fluid products_main_banner">
      <div className="container">
        <div className="banner_content">
          <h4>Dashboard - Main Category</h4>
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
        <div className="position-relative">
          <h3>Add Main Category</h3>
          <div className="position-absolute heading__line"></div>
        </div>
        <form onSubmit={handleSubmit}>
        {/* <form > */}
        <div className="p-3 main_border">
          <div className="row">
            <div className="col-md-6 mb-2">
              <label htmlFor="name" className="form-label">
                Main Category Name
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
                  placeholder="Men"
                />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
            </div>
            <div className="col-md-6 mb-2">
            <label htmlFor="image" className="form-label">
                  Upload Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  name="image"
                  accept='image/*'
                  onBlur={handleBlur}
                  onChange={(e) =>setFieldValue('image', e.currentTarget.files[0])}
                  id="image"
                />
                {errors.image && touched.image ? <p>{errors.image}</p> : null}
            </div>

            {/* <div className="col-md-12 my-3">
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
                    Active
                  </label>
                </div>
                {errors.active && touched.active ? (
                  <p>{errors.active}</p>
                ) : null}
              </div> */}

            <div className="mt-2 text-center">
            {/* <button type="submit" className="btn check_out_btn" disabled={loading?true:false}>{loading?<Spinner></Spinner>:"Save"}</button> */}
            <button type="submit" className="btn check_out_btn" >Save</button>
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