'use client'
import Spinner from '@/app/components/Spinner';
import { baseURL, imageUrl } from '@/app/config/apiUrl';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const ProductDetail = () => {
    const [products, setProducts] = useState()
    const [loading, setloading] = useState(false)
    const { token } = useSelector((state) => state.auth);

   const params = useParams()
   console.log(params)
  
    const sendRequest = () => {
        setloading(true)
        var config = {
            method: 'get',
            url: baseURL + `/product/${params.id}`,
            headers: {
              'Authorization': `Bearer ${token}`
            },
          };
          
          axios(config)
          .then(function (response) {
            setProducts(response.data.data)
            setloading(false)
          })
          .catch(function (error) {
            setloading(false)
            console.log(error);
          });
    };
    useEffect(() => {
        if(params.id){
            sendRequest()
        }
    }, []);
  
  return (
    <div>
    <div className='card product-detail-wrapper'>
      <div className='card-body'>
        <div className="d-flex justify-content-between">
          <h3>Product Detail</h3>
        </div>
        {loading && <Spinner/>}

        <div className="my-5">
          <div className='d-flex'>
          {products?.images.map((value,index)=>(
            <div className="wrapper mb-4" key={index}>
            <img src={imageUrl + `/${value?.image}`} className="image-cover" />
          </div>
          ))}
</div>
<div className="col-md-6">
          <h5>title</h5>
          <h6>{products?.title}</h6>
          </div>
          
          <div className="row">
          <div className="col-md-6">
          <h5>Name</h5>
          <h6>{products?.name}</h6>
          </div>



          <div className="col-md-6">
          <h5>description</h5>
          <h6>{products?.description}</h6>
          </div>

          <div className="col-md-6">
          <h5>price</h5>
          <h6>{products?.price}</h6>
          </div>

          <div className="col-md-6">
          <h5>sale</h5>
          <h6>{products?.sale === 0 ? "NO": "YES"}</h6>
          </div>

          <div className="col-md-6">
          <h5>discounted_price</h5>
          <h6>{products?.sale === 0 ? " ----- " :products?.discounted_price}</h6>
          </div>






          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetail
