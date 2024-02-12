"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const DashboardSidebar = () => {
  const { name } = useSelector((state) => state.auth);

  return (
    <div className="col-md-3 mb-2">
      <div className="userName_Log_div">
        <p className="fw-bold text-uppercase">{name}</p>
        {/* <p className="fw-bold text-uppercase">{name}anas</p> */}
        <p className="logout___ orderNo">LOGOUT</p>
        {/* <p className="logout___ orderNo" onClick={handleLogout}>LOGOUT</p> */}
      </div>
      <div>
        <nav className="MyAccount_navigation">
          <ul>
            <li>
              <Link href="/my-account" className="naV__link__item naV__tOp">
                <p>
                  <i className="fa-regular fa-id-card f__light"></i> Dashboard
                </p>
              </Link>
            </li>
            <li>
              <Link href="/orders" className="naV__link__item">
                <p>
                  <i className="fa-solid fa-clipboard-list f__light"></i> Orders
                </p>
              </Link>
            </li>
            <li>
              <Link href="/edit-account" className="naV__link__item">
                <p>
                  <i className="fa-solid fa-circle-user f__light"></i> Account
                  details
                </p>
              </Link>
            </li>
            <li>
              <p className="naV__link__item">
                {/* <p onClick={handleLogout}> */}
                <p>
                  <i className="fa-solid fa-reply f__light"></i> Logout
                </p>
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;
