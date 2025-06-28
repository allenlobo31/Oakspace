import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function SortByRoom() {
    return (
        <div className="container justify-center items-center mx-auto py-8 px-4">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-8 text-left">Sort By Room</h1>
            <Swiper
                spaceBetween={100}
                slidesPerView={2}  
                centeredSlides={false}
                loop={true} 
                breakpoints={{
                    640: {  // sm
                        slidesPerView: 1,
                        centeredSlides: true
                    },
                    768: {  // md
                        slidesPerView: 3,
                        spaceBetween: 30,
                        centeredSlides: false
                    },
                    1024: { // lg
                        slidesPerView: 5,
                        spaceBetween: 2,
                        centeredSlides: false
                    }
                }}
                className="pb-10"
            >
                <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/3vTT5x1XNJXqKau5Y8jtQM-0c7f43ec80deca30bb941fde29dcc9d0?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Out Door</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/2b2FAvUGHRSsmZs45qN4hI-c7cfb80c30bce222810c4c8f64b8fa62?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Living Room</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/4WzWLCP3g2lZnvJZvBBqqj-05ae448dda92268fcdad8f3e81f418d4?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Bed Room</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/3bJwtLl3FIUVV3MJCuqUPp-a6d6f7f8892fd7b00df41898d75911fa?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Dinning Room</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/6Opd19yO5aIkBw4oojj3aM-d8208b24b2c8efabad1ccfad991e36bd?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Office Room</h1>
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/3sKuESGlJpqWjbL9RqjA9X-fb5fdead7a50b1537ef867efbd23abdf?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Entry Way</h1>
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://images.cb2.com/is/image/CB2/052825_CatCarousel_Rugs?&wid=800&hei=800" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Rugs</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SortByRoom