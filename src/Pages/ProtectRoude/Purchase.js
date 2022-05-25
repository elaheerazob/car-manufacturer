import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Modal from './Modal';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const [purchase, setPurchase] = useState([]);
    const { id } = useParams();
   
    useEffect(() => {
      fetch(`http://localhost:5000/product/${id}`)
        .then((res) => res.json())
        .then((data) => setPurchase(data));
    }, []);
    const { name, img, description, available_quantity
      , order_quantity,price } = purchase;
    return (
      <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-16">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name:{name}</h2>
          <p>Description:{description}</p>
          <p>Price:{price}</p>
          <div class="card-actions">
            <label for="my-modal-3"  class="btn modal-button btn-accent">
              Order Now
            </label>
          </div>
          
        </div>
        {<Modal  name={name} available_quantity={available_quantity} price={price}></Modal>}
      </div>
    );
  };

export default Purchase;