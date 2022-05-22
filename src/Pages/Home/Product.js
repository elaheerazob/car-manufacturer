import React from 'react';

const Product = ({product}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="text-3xl">{product.name}</h1>
                <h1 className="text-2xl">Price :${product.price}</h1>
                <h1 className="text-xl">Order Quantity Min :{product.order_quantity}</h1>
                <h1 className="text-xl">Total quantity:{product.available_quantity}</h1>
                <p>{product.description}</p>
                <button class="btn  btn-wide">Buy now</button>
            </div>
        </div>
    );
};

export default Product;