import React from 'react'

function BestOffers() {
    return (
        <div className='container mx-auto my-10 px-4'>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-8 text-left font-poppins">
                Best Offers
            </h1>
            <div className='flex flex-row lg:gap-30 md:gap-20 gap-10 items-center justify-center'>
                <div className='lg:w-[450px] lg:h-[450px] md:w-[300px] md:h-[300px] w-[160px] h-[160px] relative mb-[70px] aspect-square'>
                    <img 
                        src="https://images.cb2.com/is/image/CB2/052825_CatCarousel_Dining?&wid=800&hei=800" 
                        alt="Best Seller Item" 
                        className='w-full h-full object-cover'
                    />
                    <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-left font-poppins">
                        Best Offers
                    </h3>
                </div>
                
                <div className='lg:w-[450px] lg:h-[450px]  md:w-[300px] md:h-[300px] w-[160px] h-[160px] relative mb-[70px] aspect-square'>
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

             <div className='flex flex-row lg:gap-30 md:gap-20 gap-10 items-center justify-center lg:mt-[40px]'>
                <div className='lg:w-[450px] lg:h-[450px] md:w-[300px] md:h-[300px] w-[160px] h-[160px] relative mb-[70px] aspect-square'>
                    <img 
                        src="https://images.cb2.com/is/image/CB2/052825_CatCarousel_Dining?&wid=800&hei=800" 
                        alt="Best Seller Item" 
                        className='w-full h-full object-cover'
                    />
                    <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-left font-poppins">
                        Best Offers
                    </h3>
                </div>
                
                <div className='lg:w-[450px] lg:h-[450px]  md:w-[300px] md:h-[300px] w-[160px] h-[160px] relative mb-[70px] aspect-square'>
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

             <button className="mt-2 px-2 py-2 w-[175px] text-black border border-black/50 backdrop-blur-sm transition-all duration-300 text-lg font-medium hover:scale-105">
                See all Offers 
            </button>
        </div>
    )
}

export default BestOffers