import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import React from 'react'

const page = () => {
  return (
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
        <div className="position-relative">
          <h3>Add Banner</h3>
          <div className="position-absolute heading__line"></div>
        </div>
        {/* <form onSubmit={handleSubmit}> */}
        <form >
        <div className="p-3 main_border">
          <div className="row">
            <div className="col-md-6 mb-2">
              <label htmlFor="name" className="form-label">
                Banner Name
              </label>
              <input
                  type="text"
                  className="form-control"
                  id="name"
                  autoComplete="off"
                  name="name"
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                //   value={values.name}
                  placeholder="Banner 01"
                />
                {/* {errors.name && touched.name ? <p>{errors.name}</p> : null} */}
            </div>
            <div className="col-md-6 mb-2">
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

            <div className="col-md-12 my-3">
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
                    Active
                  </label>
                </div>
                {/* {errors.active && touched.active ? (
                  <p>{errors.active}</p>
                ) : null} */}
              </div>

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