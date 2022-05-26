import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();
    const { _id, name, price, img, description, order_quantity, available_quantity } = product;
 
  const handleProduct = (id) => {
    // console.log(id);
    navigate(`/purchase/${id}`);
};
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="text-3xl">{name}</h1>
                <h1 className="text-2xl">Price :${price}</h1>
                <h1 className="text-xl">Order Quantity Min :{order_quantity}</h1>
                <h1 className="text-xl">Total quantity:{available_quantity}</h1>
                <p>{description}</p>
                <button onClick={() => handleProduct(_id)} className="btn  btn-wide">Buy now</button>
            </div>
        </div>
    );
};

export default Product;