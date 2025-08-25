import React from 'react';

function IntroImage() {
  return (
    <div className="relative w-screen h-screen">
      {/* Background Image and Gradient */}
      <div className="absolute inset-0">
        <img
          src="https://cb2.scene7.com/is/image/CB2/061125_WarehouseSale_dHP?wid=1920&qlt=75"
          alt="Intro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white space-y-6 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide text-center">
          Welcome to Oakspace
        </h1>
        <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold tracking-wider text-center">
          Discover Timeless Furniture & Elegant Decor
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
          <button className="px-6 py-3 w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-sm transition-all duration-300 text-lg font-medium hover:scale-105">
            Explore Collection
          </button>
          <button className="px-6 py-3 w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-sm transition-all duration-300 text-lg font-medium hover:scale-105">
            Best Sellers
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroImage;