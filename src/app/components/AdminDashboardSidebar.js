"use client";
import { logout } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminDashboardSidebar = () => {
  const { name } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };
  const pathname = usePathname();

  return (
    <div className="col-md-3 mb-2">
      <div className="userName_Log_div">
        <p className="fw-bold text-uppercase">{name}</p>
        {/* <p className="fw-bold text-uppercase">{name}anas</p> */}
        <p className="logout___ orderNo" onClick={handleLogout}>
          LOGOUT
        </p>
        {/* <p className="logout___ orderNo" onClick={handleLogout}>LOGOUT</p> */}
      </div>
      <div>
        <nav className="MyAccount_navigation">
          <ul>
            <li>
              <Link
                href="/dashboard"
                className={`naV__link__item naV__tOp ${
                  pathname === `/dashboard` ? "active" : ""
                }`}
              >
                <p>
                  <i className="fa-regular fa-id-card f__light"></i> Dashboard
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/banner"
                className={`naV__link__item ${
                  pathname === `/dashboard/banner` ? "active" : ""
                }`}
              >
                <p>
                  <i className="fa-solid fa-clipboard-list f__light"></i>{" "}
                  Banners
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/main-category"
                className={`naV__link__item ${
                  pathname === `/dashboard/main-category` ? "active" : ""
                }`}
              >
                <p>
                  <i className="fa-solid fa-download f__light"></i> Main
                  Category
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/sub-category"
                className={`naV__link__item ${
                  pathname === `/dashboard/sub-category` ? "active" : ""
                }`}
              >
                <p>
                  <i className="fa-solid fa-location-dot f__light"></i> Sub
                  Category
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/products"
                className={`naV__link__item ${
                  pathname === `/dashboard/products` ? "active" : ""
                }`}
              >
                <p>
                  <i className="fa-solid fa-circle-user f__light"></i> Products
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/orders"
                className={`naV__link__item ${
                  pathname === `/dashboard/orders` ? "active" : ""
                }`}
              >
                <p>
                  <i className="fa-solid fa-circle-user f__light"></i> Orders
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/users"
                className={`naV__link__item ${
                  pathname === `/dashboard/users` ? "active" : ""
                }`}
              >
                <p>
                  <i className="fa-solid fa-circle-user f__light"></i> Users
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/contacts"
                className={`naV__link__item ${
                  pathname === `/dashboard/contacts` ? "active" : ""
                }`}
              >
                <p>
                  <i className="fa-solid fa-circle-user f__light"></i> Contact
                  Us
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/newsletter"
                className={`naV__link__item ${
                  pathname === `/dashboard/newsletter` ? "active" : ""
                }`}
              >
                <p>
                  <i className="fa-solid fa-circle-user f__light"></i>{" "}
                  Newsletter
                </p>
              </Link>
            </li>
            <li>
              <p className="naV__link__item" onClick={handleLogout}>
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

export default AdminDashboardSidebar;
