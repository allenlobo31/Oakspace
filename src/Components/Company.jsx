import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function Company() {
    return (
        <div className="container justify-center items-center mx-auto py-8 px-4">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-8 text-left">Brand we Offer</h1>
            <Swiper
                spaceBetween={100}  // Increased from 5 to 20 for mobile
                slidesPerView={2}
                centeredSlides={false}
                loop={true} 
                breakpoints={{
                    640: {  // sm
                        slidesPerView: 2,
                        centeredSlides: false
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
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Brand 1</h1>
                    </div>
                </SwiperSlide>
                 <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/3vTT5x1XNJXqKau5Y8jtQM-0c7f43ec80deca30bb941fde29dcc9d0?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Brand 2</h1>
                    </div>
                </SwiperSlide>
               <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/3vTT5x1XNJXqKau5Y8jtQM-0c7f43ec80deca30bb941fde29dcc9d0?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Brand 3</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/3vTT5x1XNJXqKau5Y8jtQM-0c7f43ec80deca30bb941fde29dcc9d0?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Brand 4</h1>
                    </div>
                </SwiperSlide>
                 <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/3vTT5x1XNJXqKau5Y8jtQM-0c7f43ec80deca30bb941fde29dcc9d0?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Brand 5</h1>
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/3vTT5x1XNJXqKau5Y8jtQM-0c7f43ec80deca30bb941fde29dcc9d0?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Brand 6</h1>
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className=" mx-[5px] lg:mx-[10px] md:mx-[70px] flex flex-col w-[200px]">
                        <div className="flex items-center justify-center h-[200px] bg-gray-100">
                           <img src="https://cdn-cms-assets.article.com/3vTT5x1XNJXqKau5Y8jtQM-0c7f43ec80deca30bb941fde29dcc9d0?w=970&q=80&fm=webp&fit=max" alt="" />
                        </div>
                        <h1 className=" text-center lg:text-left md:text-left mt-2 text-lg font-medium">Brand 7</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Company