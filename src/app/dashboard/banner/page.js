"use client"
import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import DeleteModal from '@/app/components/modals/DeleteModal'
import { baseURL, imageUrl } from '@/app/config/apiUrl'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const page = () => {

  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);

  const handleChange = (e, p) => {
    setPage(p);
  };

  const fetchBanner = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/banner?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response.data;
      setBanner(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, [page, token]);

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: "",
  });
  const idProductRef = useRef();
  const handleDialog = (message, isLoading, nameProduct) => {
    setDialog({
      message,
      isLoading,
      nameProduct,
    });
  };

  const handleDelete = (id) => {
    const index = banner.findIndex((p) => p.id === id);
    handleDialog(
      "Are you sure you want to delete?",
      true,
      banner[index].name
    );
    idProductRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      var config = {
        method: "delete",
        url: baseURL + `/banner/${idProductRef.current}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios(config)
        .then(function (response) {
          const { message } = response.data;
          toast.info(message);
          setBanner(
            banner.filter((p) => p.id !== idProductRef.current)
          );
          handleDialog("", false);

        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      handleDialog("", false);
    }
  };


  return (
    <>
      <section>
        <section className="container-fluid products_main_banner">
          <div className="container">
            <div className="banner_content">
              <h4>Dashboard - Banner</h4>
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
                          <h3>Banners</h3>
                          <div className="position-absolute heading__line"></div>
                        </div>
                        <Link href="/dashboard/banner/add">
                          <button className="btn add__Btn">Add</button>
                        </Link>
                      </div>

                      <table className="table no-wrap mt-3 align-middle" >
                        <thead>
                          <tr>
                            <th>Banner Image</th>
                            {/* <th>Banner Name</th> */}
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!loading && banner.length === 0 && <tr><td colSpan={2} className="text-center">No Data</td></tr>}
                          {loading && (
                            <tr>
                              <td colSpan={2} className="text-center">
                                <div className="spinner-border text-secondary" role="status">
                                </div>
                              </td>
                            </tr>
                          )}
                          {!loading &&
                            banner.map((tdata, index) => (
                              <tr key={index} className="border-top">
                                <td>
                                  <div className="d-flex align-items-center p-2">
                                    <Image
                                      src={`${imageUrl}/uploads/${tdata.image}`}
                                      alt="avatar"
                                      width={45}
                                      height={45}
                                    />
                                  </div>
                                </td>
                                {/* <td>
                                  <h6 className="mb-0">{tdata.name}</h6>
                                </td> */}
                                <td>
                                  <Link href={`/dashboard/banner/${tdata.id}`}><i className="fa-regular fa-pen-to-square text-success fs-4"></i></Link>
                                  <i className="fa-regular fa-trash-can text-danger fs-4 ms-3" onClick={() => handleDelete(tdata.id)}></i>
                                </td>
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

                  {dialog.isLoading && (
                    <DeleteModal
                      //Update
                      nameProduct={dialog.nameProduct}
                      onDialog={areUSureDelete}
                      message={dialog.message}
                    />
                  )}
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