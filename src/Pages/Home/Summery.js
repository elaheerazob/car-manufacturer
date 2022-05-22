import React from 'react';

const Summery = () => {
    return (
        <div class="stats shadow flex justify-center">
  
  <div class="stat">
    <div class="stat-title">Customers</div>
    <div class="stat-value text-primary text-7xl">120K</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Annual revenue</div>
    <div class="stat-value text-secondary text-7xl">33K</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-value text-7xl">86%</div>
    <div class="stat-title">Reviews</div>
    <div class="stat-desc text-secondary">31 tasks remaining</div>
  </div>

  <div class="stat">
    <div class="stat-title">tools</div>
    <div class="stat-value text-secondary text-7xl">200+</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
</div>
    );
};

export default Summery;