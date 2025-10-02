import React from 'react'

function BedRoomIntro() {
    return (
        <div className="sofa-intro">
            <h1 className='text-2xl md:text-2xl lg:text-4xl font-semibold tracking-wide text-center mb-2 mt-10'>
                Fluffy as a Cloud
            </h1>
            <p className=' lg:text-1xl tracking-wide text-center'>
                Like waking up on Heaven 
            </p>
            <div className="flex justify-center">
                <button className="mt-4 px-6 py-4 w-[175px] text-black border border-black/50 backdrop-blur-sm transition-all duration-300 text-lg font-semibold hover:scale-105 rounded-xl flex items-center justify-center hover:bg-black/5">
                    Shop Bedroom
                </button>
            </div>

            <div className='lg:w-[1160px] lg:h-[500px] md:w-[740px] md:h-[400px] w-[330px] h-[200px] mt-4 mb-[70px] mx-auto'>
                <img 
                    src="https://cb2.scene7.com/is/image/CB2/051525_Bedroom_dHP?wid=1820&qlt=85" 
                    alt="Comfortable Sofa"
                    className='w-full h-full object-cover' 
                />
            </div>
        </div>
    )
}

export default BedRoomIntro;