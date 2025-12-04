import React from 'react'

function IntroImage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background Image and Gradient */}
      <div className="absolute inset-0">
        <img
          src="https://cb2.scene7.com/is/image/CB2/061125_WarehouseSale_dHP?wid=1920&qlt=75"
          alt="Intro"
          className="w-full h-full object-cover animate-bg-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white space-y-6 p-4 transform md:-translate-y-8">
        <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold tracking-wide text-center animate-hero-up">
          Welcome to Oakspace
        </h1>
        <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold tracking-wider text-center animate-hero-sub">
          Discover Timeless Furniture & Elegant Decor
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 animate-hero-cta">
          <button className="px-6 py-3 w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-sm transition-all duration-300 text-lg font-medium hover:scale-105 rounded-lg">
            Explore Collection
          </button>
        </div>
      </div>

      {/* Down arrow - center bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <button
          aria-label="Scroll down"
          onClick={() => {
            const next = document.querySelector('section, main, [data-scroll-target]');
            if (next) next.scrollIntoView({ behavior: 'smooth' });
            else window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
          }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
        >
          <svg className="w-5 h-5 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default IntroImage;