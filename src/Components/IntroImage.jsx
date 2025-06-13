import React from 'react'

function IntroImage() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        <img
          src="https://cb2.scene7.com/is/image/CB2/061125_WarehouseSale_dHP?wid=1920&qlt=75"
          alt="Intro"
          className="w-full h-screen object-cover"
        />
        
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6 -mt-40 lg:mt-0 md:-mt-60">
         <div className="lg:-mt-8 -mt-25">
           <h1 className="text-5xl md:text-5xl lg:text-7xl font-semibold tracking-wide text-center">
            Welcome to Oakspace
          </h1>
          <h3 className="text-xl mt-2 md:text-2xl lg:text-3xl font-semibold tracking-wider text-center text-white">
            Discover Timeless Furniture & Elegant Decor
          </h3>
         </div>
          <div className='flex flex-row gap-4 justify-center items-center '>
            <button className="mt-8 px-2 py-2 w-[175px] bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-sm transition-all duration-300 text-lg font-medium hover:scale-105">
              Explore Collection
            </button>
            <button className="mt-8 px-2 py-2 w-[175px] bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-sm transition-all duration-300 text-lg font-medium hover:scale-105">
              Best Sellers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroImage;