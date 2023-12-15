import React from 'react'
import Link from 'next/link'
import AdminDashboardSidebar from '../components/AdminDashboardSidebar'

function page() {
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
                <p className="mb-3">
                  Hello <span className="fw-bold">ADMIN</span> (
                  <span className="terms__con" >
                    Log out
                  </span>
                  )
                </p>

                <div className="mt-4">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-clipboard-list dash__iconSs"></i>
                          </p>
                          <p>Orders</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard/banner">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-download dash__iconSs"></i>
                          </p>
                          <p>Banners</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-location-dot dash__iconSs"></i>
                          </p>
                          <p>Main Category</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-circle-user dash__iconSs"></i>
                          </p>
                          <p>Sub Category</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-circle-user dash__iconSs"></i>
                          </p>
                          <p>Products</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-circle-user dash__iconSs"></i>
                          </p>
                          <p>Users</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-circle-user dash__iconSs"></i>
                          </p>
                          <p>Sub Category</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-reply  dash__iconSs"></i>
                          </p>
                          <p>Logout</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default page