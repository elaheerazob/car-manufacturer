import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://a.d-cd.net/e4555c1s-960.jpg" className="w-2/4	 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold ">Stylish Car</h1>
      <p className="py-6">Audi AG, also simply known as Audi, is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi has been a majority owned subsidiary of Volkswagen Group since 1966. Audi, along with BMW and Mercedes-Benz, are among the best-selling luxury automobile brands in the world.</p>
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;