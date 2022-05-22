import React from 'react';

const Summery = () => {
    return (
        <div>
             <h3 className=' text-center text-primary  text-3xl font-bold uppercase mb-5'>Summery</h3>
            <div class="stats  stats-vertical stats-horizontal shadow flex justify-center">
  
  <div class="stat">
    <div class="text-2xl font-semibold">Customers</div>
    <div class="stat-value text-primary text-7xl">120K</div>
  </div>
  
  <div class="stat">
    <div class="text-2xl font-semibold">Annual revenue</div>
    <div class="stat-value text-secondary text-7xl">33K</div>
  </div>
  
  <div class="stat">
    <div class="stat-value text-7xl">86%</div>
    <div class="text-2xl font-semibold">Reviews</div>
  </div>

  <div class="stat">
    <div class="text-2xl font-semibold">Tools</div>
    <div class="stat-value text-secondary text-7xl">200+</div>
  </div>
  
</div>
        </div>
    );
};

export default Summery;