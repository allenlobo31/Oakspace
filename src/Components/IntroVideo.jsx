import React from 'react'

function IntroVideo() {
  return (
    <div className="relative flex justify-center items-center">
      <video 
        src="https://cdn-cms-assets.article.com/5RmI49YMqZLgoIltmxrOC9-09520c9c736fc3306917e7befdc2b8a0" 
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        preload="auto"
        className="lg:w-screen lg:h-[700px] md:w-full md:h-[550px] object-cover w-[380px] h-[400px]"
      ></video>
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white space-y-6">
      <button className="mt-64 inline-flex items-center space-x-2 bg-white/30   text-white px-10 py-4 mb-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl transform">
          View Collection
        </button>
      </div>
    </div>
  )
}

export default IntroVideo