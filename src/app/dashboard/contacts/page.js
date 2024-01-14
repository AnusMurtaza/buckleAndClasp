"use client"
import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import { baseURL } from '@/app/config/apiUrl'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const page = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);

  const handleChange = (e, p) => {
    setPage(p);
  };

  const fetchContactUs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/all_contact_us?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response.data;
      setData(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContactUs();
  }, [page, token]);






  return (
    <>
      <section>
        <section className="container-fluid products_main_banner">
          <div className="container">
            <div className="banner_content">
              <h4>Dashboard - All conatct us</h4>
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
                          <h3>Contacts</h3>
                          <div className="position-absolute heading__line"></div>
                        </div>
                      </div>

                      <table className="table no-wrap mt-3 align-middle" >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!loading && data.length === 0 && <tr><td colSpan={3} className="text-center">No Data</td></tr>}
                          {loading && (
                            <tr>
                              <td colSpan={2} className="text-center">
                                <div className="spinner-border text-secondary" role="status">
                                </div>
                              </td>
                            </tr>
                          )}
                          {!loading &&
                            data.map((tdata, index) => (
                              <tr key={index} className="border-top">
                                <td>{tdata.name}</td>
                                <td>{tdata.email}</td>
                                <td>{tdata.message}</td>


                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        color="primary"
      /> */}

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