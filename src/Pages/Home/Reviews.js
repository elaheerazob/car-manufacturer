import React from 'react';

const Reviews = () => {
    return (
        <div className='my-10'>
            <h3 className=' text-center text-primary  text-3xl font-bold uppercase'>Our Reviews</h3>
            <div className="carousel w-full">
                <div id="item1" className="flex justify-center carousel-item w-full">
                <div className="card sm:w-10 lg:w-1/2  lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/tsRgSNS/artworks-000239555924-fkas35-t500x500.jpg" alt="Album"/></figure>
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                             <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                        </div>
                        <h2 className="card-title">Christopher A. Hunt</h2>
                        <p>The heart and soul of your vehicle is the internal combustion engine. The engine block features parts such as the timing chain, camshaft, crankshaft, spark plugs, cylinder heads, valves and pistons.</p>
                    </div>
                </div>
                </div> 
                <div id="item2" className=" flex justify-center carousel-item w-full">
                    <div className="card sm:w-10 lg:w-1/2  lg:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/JR4bCcq/transmissions.png" alt="Album"/></figure>
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                            </div>
                            <h2 className="card-title">Albert J. Martin</h2>
                            <p>The heart and soul of your vehicle is the internal combustion engine. The engine block features parts such as the timing chain, camshaft, crankshaft, spark plugs, cylinder heads, valves and pistons.</p>
                        </div>
                    </div>
                </div> 
                <div id="item3" className="flex justify-center carousel-item w-full">
                    <div className="card sm:w-10 lg:w-1/2  lg:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/Pt1VNVB/car-battery-500x500.jpg" alt="Album"/></figure>
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                            </div>
                            <h2 className="card-title">Mark G. Davis</h2>
                            <p>The heart and soul of your vehicle is the internal combustion engine. The engine block features parts such as the timing chain, camshaft, crankshaft, spark plugs, cylinder heads, valves and pistons.</p>
                        </div>
                    </div>
                </div> 
                <div id="item4" className="flex justify-center carousel-item w-full">
                    <div className="card sm:w-10 lg:w-1/2  lg:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/GkCkYC0/maruti-zen-lucas-internal-fan-alternator-500x500.jpg" alt="Album"/></figure>
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                            </div>
                            <h2 className="card-title">Sherman D. Weber</h2>
                            <p>The heart and soul of your vehicle is the internal combustion engine. The engine block features parts such as the timing chain, camshaft, crankshaft, spark plugs, cylinder heads, valves and pistons.</p>
                        </div>
                    </div>
                </div>
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
        </div>
    );
};

export default Reviews;