import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'

const page = () => {
  return (
    <section>
    <section className="container-fluid products_main_banner">
      <div className="container">
      <div className="banner_content">
          <h4>Account details</h4>
          {/* <div>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/my-account">My account</Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </div> */}
        </div>
      </div>
    </section>
    <section className="mt-4 mb-4">
      <div className="container">
        <div className="row">
          <DashboardSidebar />
          <div className="col-md-9">
            {/* <form onSubmit={handleSubmit}> */}
            <form>
            <div className="billing_shipping_main ">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                //   value={values.firstname}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                />
                <label htmlFor="firstname">First Name*</label>
                {/* {errors.firstname && touched.firstname ? (
                            <p className="form-error">{errors.firstname}</p>
                          ) : null} */}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                //   value={values.lastname}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                />
                <label htmlFor="lastname">Last Name*</label>
                {/* {errors.lastname && touched.lastname ? (
                            <p className="form-error">{errors.lastname}</p>
                          ) : null} */}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                //   value={values.username}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                />
                <label htmlFor="username">Display name*</label>
                {/* {errors.username && touched.username ? (
                            <p className="form-error">{errors.username}</p>
                          ) : null} */}
                <p>
                  <i>
                    This will be how your name will be displayed in the
                    account section and in reviews
                  </i>
                </p>
              </div>
              <div className="form-floating mb-2">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                //   value={values.email}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                  disabled
                />
                <label htmlFor="email">Email address*</label>
                {/* {errors.email && touched.email ? (
                            <p className="form-error">{errors.email}</p>
                          ) : null} */}
              </div>
              <div>
                <fieldset>
                  <legend className="w-auto">Password change</legend>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="current_password"
                      name="current_password"
                    //   value={values.current_password}
                    //   onChange={handleChange}
                    //   onBlur={handleBlur}
                    />
                    <label htmlFor="current_password">
                      Current password (leave blank to leave unchanged)
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                    //   value={values.password}
                    //   onChange={handleChange}
                    //   onBlur={handleBlur}
                    />
                    <label htmlFor="password">
                      New password (leave blank to leave unchanged)
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="c_password"
                      name="c_password"
                    //   value={values.c_password}
                    //   onChange={handleChange}
                    //   onBlur={handleBlur}
                    />
                    <label htmlFor="c_password">Confirm new password</label>
                  </div>
                </fieldset>
              </div>
              <div>
                {/* <button className="saveChanges" type="submit" disabled={loading?true:false}> */}
                <button className="saveChanges" type="submit" >
                      {/* {loading?  <Spinner color="white"/> : " Save Changes"}   */}
                       Save Changes  
                      </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </section>
  )
}

export default page