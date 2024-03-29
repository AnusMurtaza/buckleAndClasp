"use client"
import AdminDashboardSidebar from '@/app/components/AdminDashboardSidebar'
import Pagination from '@/app/components/Pagination'
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
  const [products, setProducts] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/product?page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response.data;
      setProducts(data.data);
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
    fetchProducts();
  }, [currentPage, token]);

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
    const index = products.findIndex((p) => p.id === id);
    handleDialog(
      "Are you sure you want to delete?",
      true,
      products[index].name
    );
    idProductRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      var config = {
        method: "delete",
        url: baseURL + `/product/${idProductRef.current}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios(config)
        .then(function (response) {
          const { message } = response.data;
          toast.info(message);
          setProducts(
            products.filter((p) => p.id !== idProductRef.current)
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
              <h4>Dashboard - Products</h4>
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
                          <h3>Products</h3>
                          <div className="position-absolute heading__line"></div>
                        </div>
                        <Link href="/dashboard/products/add">
                          <button className="btn add__Btn">Add</button>
                        </Link>
                      </div>

                      <table className="table no-wrap mt-3 align-middle" >
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Title</th>
                            <th>Name</th>
                            <th>Detail</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!loading && products.length === 0 && <tr><td colSpan={5} className="text-center">No Data</td></tr>}
                          {loading && (
                            <tr>
                              <td colSpan={5} className="text-center">
                                <div className="spinner-border text-secondary" role="status">
                                </div>
                              </td>
                            </tr>
                          )}
                          {!loading &&
                            products.map((tdata, index) => (
                              <tr key={index} className="border-top">

                                <td>
                                  <div className="d-flex align-items-center p-2">
                                    <Image
                                      src={`${imageUrl}/${tdata.images[0].image}`}
                                      alt="avatar"
                                      width={45}
                                      height={45}
                                    />
                                    <div className="ms-3">
                                      {/* <h6 className="mb-0">{tdata.name}</h6> */}
                                      {/* <h6 className="mb-0">Leather</h6> */}

                                    </div>
                                  </div>
                                </td>
                                <td> {tdata.title} </td>
                                <td> {tdata.name}</td>
                                <td>
                    <Link href={`/dashboard/products/detail/${tdata.id}`}>
                    <button type="button" className="btn btn-outline-info">View</button>
                </Link>
                  </td>
                                <td>
                                  <Link href={`/dashboard/products/${tdata.id}`}><i className="fa-regular fa-pen-to-square text-success fs-4"></i></Link>
                                  <i className="fa-regular fa-trash-can text-danger fs-4 ms-3" onClick={() => handleDelete(tdata.id)}></i>
                                </td>
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