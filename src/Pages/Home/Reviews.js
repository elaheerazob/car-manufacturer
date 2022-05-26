import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,SetReviews] = useState([]);
    useEffect (() =>{
        const url=('https://whispering-savannah-41163.herokuapp.com//review');
        fetch(url)
        .then(res =>res.json())
        .then(data =>SetReviews(data))
    } ,[])
    return (
        <section className='my-28'>
                <div>
                    <h4 className="text-xl text-center text-primary font-bold">Client Reviews</h4>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};


export default Reviews;