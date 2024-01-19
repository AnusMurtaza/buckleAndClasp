"use client"
import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import Pagination from '@/app/components/Pagination'
// import DeleteModal from '@/app/components/modals/DeleteModal'
import { baseURL, imageUrl } from '@/app/config/apiUrl'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
// import { toast } from 'react-toastify'

const page = () => {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/users?page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response.data;
      setUsers(data.data);
      setLastPage(data.last_page);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    fetchAllUsers();
  }, [currentPage ]);

  

  return (
    <>
      <section>
        <section className="container-fluid products_main_banner">
          <div className="container">
            <div className="banner_content">
              <h4>Dashboard - Users</h4>
            </div>
          </div>
        </section>
        <section className="mt-4 mb-4">
          <div className="container-fluid">
            <div className="row">
              <AdminDashboardSidebar />
              <div className="col-md-9">

                <div>
                  <div className='card'>
                    <div className='card-body'>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative">
                          <h3>Users</h3>
                          <div className="position-absolute heading__line"></div>
                        </div>
                        <Link href="/dashboard/banner/add">
                          <button className="btn add__Btn">Add</button>
                        </Link>
                      </div>

                      <table className="table no-wrap mt-3 align-middle" >
                        <thead>
                          <tr>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>email</th>
                            <th>phone_number</th>
                            <th>User Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!loading && users.length === 0 && <tr><td colSpan={2} className="text-center">No Data</td></tr>}
                          {loading && (
                            <tr>
                              <td colSpan={2} className="text-center">
                                <div className="spinner-border text-secondary" role="status">
                                </div>
                              </td>
                            </tr>
                          )}
                          {!loading &&
                            users.map((tdata, index) => (
                              <tr key={index} className="border-top">
                              {/* <td>{tdata.id}</td> */}
                              <td>{tdata.name}</td>
                              <td>{tdata.email}</td>
                              <td>{tdata.phone_number}</td>
                              <td>{tdata.user_type}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <Pagination
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              lastPage={lastPage}
              />
{/* 
                  {dialog.isLoading && (
                    <DeleteModal
                      //Update
                      nameProduct={dialog.nameProduct}
                      onDialog={areUSureDelete}
                      message={dialog.message}
                    />
                  )} */}
                </div>

              </div>
            </div>
          </div>
        </section>
      </section>

    </>
  )
}

export default page