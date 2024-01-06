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
  const [mainCategory, setMainCategory] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);

  const handleChange = (e, p) => {
    setPage(p);
  };

  const fetchMainCategory = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/main_category?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response.data;
      setMainCategory(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMainCategory();
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
        //Update
        nameProduct,
      });
    };
  
    const handleDelete = (id) => {
      const index = mainCategory.findIndex((p) => p.id === id);
      handleDialog(
        "Are you sure you want to delete?",
        true,
        mainCategory[index].name
      );
      idProductRef.current = id;
    };
  
    const areUSureDelete = (choose) => {
      if (choose) {
        var config = {
          method: "delete",
          url: baseURL + `/main_category/${idProductRef.current}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
  
        axios(config)
          .then(function (response) {
            const { message } = response.data;
            toast.info(message);
            setMainCategory(
              mainCategory.filter((p) => p.id !== idProductRef.current)
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
            <h4>Dashboard - Main Category</h4>
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
              <h3>Main Category</h3>
              <div className="position-absolute heading__line"></div>
            </div>
            <Link href="/dashboard/main-category/add">
              <button className="btn add__Btn">Add</button>
            </Link>
          </div>

          <table className="table no-wrap mt-3 align-middle" >
            <thead>
              <tr>
                <th>Image</th>
                <th>Main Category Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {!loading && mainCategory.length===0 && <tr><td colSpan={3} className="text-center">No Data</td></tr>}
              {loading && (
                <tr>
                  <td colSpan={3} className="text-center">
                  <div className="spinner-border text-secondary" role="status">
</div>
                  </td>
                </tr>
              )}
              {!loading &&
                mainCategory.map((tdata, index) => (
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
                    <td>
                      <h6 className="mb-0">{tdata.name}</h6>
                    </td>
                    <td>
                  <Link href={`/dashboard/main-category/${tdata.id}`}><i className="fa-regular fa-pen-to-square text-success fs-4"></i></Link>
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