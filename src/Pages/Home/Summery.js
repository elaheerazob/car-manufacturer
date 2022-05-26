import React from 'react';

const Summery = () => {
    return (
        <div>
             <h3 className=' text-center text-primary  text-3xl font-bold uppercase mb-5'>Summery</h3>
            <div className="stats  stats-vertical stats-horizontal shadow flex justify-center">
  
  <div className="stat">
    <div className="text-2xl font-semibold">Customers</div>
    <div className="stat-value text-primary text-7xl">120K</div>
  </div>
  
  <div className="stat">
    <div className="text-2xl font-semibold">Annual revenue</div>
    <div className="stat-value text-secondary text-7xl">33K</div>
  </div>
  
  <div className="stat">
    <div className="stat-value text-7xl">86%</div>
    <div className="text-2xl font-semibold">Reviews</div>
  </div>

  <div className="stat">
    <div className="text-2xl font-semibold">Tools</div>
    <div className="stat-value text-secondary text-7xl">200+</div>
  </div>
  
</div>
        </div>
    );
};

export default Summery;