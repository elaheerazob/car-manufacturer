import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProduct = () => {
    const [products,SetProducts] = useState([]);
    useEffect (() =>{
        const url=('http://localhost:5000/products');
        fetch(url)
        .then(res =>res.json())
        .then(data =>SetProducts(data))
    } ,[]);
    const handleDelete = (id) => {
      const proceed = window.confirm("Are You Sure Delete?");
      if (proceed) {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = products.filter((product) => product._id !== id);
              SetProducts(remaining);
              toast("Delete success");
            }
          });
      }
    };
    return (
      <div>
        <h1 className="text-2xl text-center text-secondary">
          Manage Product {products.length}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-12">
          {products.map((p) => (
             
            <div>
                 
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img src={p.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title text-secondary">Name:{p.name}</h2>
                  <p>Price:${p.price}</p>
                  <p>Minimum Order:{p.order_quantity}</p>
                  <p>Available:{p.available_quantity}</p>
                  <p>Description:{p.description}</p>
                  <div class="card-actions">
                    <button
                      onClick={() => handleDelete(p._id)}
                      class="btn btn-secondary"
                    >
                      Delete Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default ManageProduct;