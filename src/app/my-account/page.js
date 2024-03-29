"use client"
import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import MyAccountBreadcrumb from '../components/MyAccountBreadcrumb';

function page() {
  const { name } = useSelector((state) => state.auth);

  return (
    <section>
      <MyAccountBreadcrumb name="My Account"/>
      <section className="mt-4 mb-4">
        <div className="container">
          <div className="row">
            <DashboardSidebar />
            <div className="col-md-9">
              <div>
                <p className="mb-3">
                  Hello <span className="fw-bold">{name}</span> (not {name}?{" "}
                  {/* <span className="terms__con" onClick={handleLogout}> */}
                  <span className="terms__con" >
                    Log out
                  </span>
                  )
                </p>
                <p>
                  From your account dashboard you can view your{" "}
                  <Link href="/orders">
                    <span className="terms__con">recent orders</span>
                  </Link>
                  , and{" "}
                  <Link href="/edit-account">
                    <span className="terms__con">
                      edit your password and account details
                    </span>
                  </Link>
                  .
                </p>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <Link href="/orders">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-clipboard-list dash__iconSs"></i>
                          </p>
                          <p>Orders</p>
                        </div>
                      </Link>
                    </div>
                    {/* <div className="col-md-4 mb-3">
                      <Link href="/downloads">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-download dash__iconSs"></i>
                          </p>
                          <p>Downloads</p>
                        </div>
                      </Link>
                    </div> */}
                    <div className="col-md-4 mb-3">
                      <Link href="/addresses">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-location-dot dash__iconSs"></i>
                          </p>
                          <p>Addresses</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/edit-account">
                        <div className="dasH_cardss">
                          <p>
                            <i className="fa-solid fa-circle-user dash__iconSs"></i>
                          </p>
                          <p>Account details</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Link href="/re">
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