import React from 'react'

function IntroVideo() {
  return (
    <div className=" relative flex justify-center items-center">
      <video 
        src="https://cdn-cms-assets.article.com/5RmI49YMqZLgoIltmxrOC9-09520c9c736fc3306917e7befdc2b8a0" 
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        preload="auto"
        className="h-[450px] w-[430px] lg:w-full lg:h-screen md:w-full md:h-[550px] object-cover"
      ></video>
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Discover Our Latest Collection
        </h1>
        <button className="mt-8 px-6 py-3 bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-sm transition-all duration-300 text-lg font-medium hover:scale-105">
          View Collection
        </button>
      </div>
    </div>
  )
}

export default IntroVideo