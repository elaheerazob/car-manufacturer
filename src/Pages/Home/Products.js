import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,SetProducts] = useState([]);
    useEffect (() =>{
        const url=('https://whispering-savannah-41163.herokuapp.com/products');
        fetch(url)
        .then(res =>res.json())
        .then(data =>SetProducts(data))
    } ,[])
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-3xl font-bold uppercase'>Our Product</h3>
                
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-zinc-400 p-6'>
                {
                    products.map(product =><Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;