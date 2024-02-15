"use client"
import React from 'react'
import Link from 'next/link'
import AdminDashboardSidebar from '../components/AdminDashboardSidebar'
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/features/auth/authSlice';

function page() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };
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
        <div className="container-fluid">
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
                      <Link href="/dashboard/orders">
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
                      <Link href="/dashboard/main-category">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-location-dot dash__iconSs"></i>
                          </p>
                          <p>Main Category</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard/sub-category">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-circle-user dash__iconSs"></i>
                          </p>
                          <p>Sub Category</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard/products">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-circle-user dash__iconSs"></i>
                          </p>
                          <p>Products</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard/users">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-circle-user dash__iconSs"></i>
                          </p>
                          <p>Users</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/dashboard/contacts">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-circle-user dash__iconSs"></i>
                          </p>
                          <p>Contact</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      {/* <Link href="/dashboard"> */}
                        <div className="dasH_cardss" onClick={handleLogout}>
                          <p>
                            <i className="fa-solid fa-reply  dash__iconSs"></i>
                          </p>
                          <p>Logout</p>
                        </div>
                      {/* </Link> */}
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