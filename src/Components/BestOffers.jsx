import React from 'react'

function BestOffers() {
    return (
        <div className='container mx-auto my-10 px-4'>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-8 text-left font-poppins">
                Best Offers
            </h1>
            <div className='flex flex-col md:flex-row gap-20 items-center justify-center'>
                <div className='lg:w-[450px] lg:h-[450px] w-[300px] h-[300px] relative mb-[70px]'>
                    <img 
                        src="https://images.cb2.com/is/image/CB2/052825_CatCarousel_Dining?&wid=800&hei=800" 
                        alt="Best Seller Item" 
                        className='w-full h-full object-cover'
                    />
                    <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-left font-poppins">
                        Best Offers
                    </h3>
                </div>
                
                <div className='lg:w-[450px] lg:h-[450px] w-[300px] h-[300px] relative mb-[70px]'>
                    <img 
                        src="https://images.cb2.com/is/image/CB2/052825_CatCarousel_Dining?&wid=800&hei=800" 
                        alt="Best Seller Item" 
                        className='w-full h-full object-cover'
                    />
                     <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-left font-poppins">
                        Best Offers
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default BestOffers