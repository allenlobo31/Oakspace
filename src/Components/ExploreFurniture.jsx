import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function ExploreFurniture() {
    return (
        <div className="container mx-auto px-2 py-10 mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8">
                Explore Furniture
            </h1>

             <div className="container justify-center items-center mx-0 py-6 px-0">  

                         {/* Row1 */}    
                        <Swiper
                            spaceBetween={100}
                            slidesPerView={4}  
                            centeredSlides={false}
                            loop={true} 
                            breakpoints={{
                                640: {  // sm
                                    slidesPerView: 3,
                                    centeredSlides: true
                                },
                                768: {  // md
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    centeredSlides: false
                                },
                                1024: { // lg
                                    slidesPerView: 6,
                                    spaceBetween: 2,
                                    centeredSlides: false
                                }
                            }}
                            className="pb-10"
                        >
                            <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                           <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        {/* Row2 */}

                         <Swiper
                            spaceBetween={100}
                            slidesPerView={4}  
                            centeredSlides={false}
                            loop={true} 
                            breakpoints={{
                                640: {  // sm
                                    slidesPerView: 3,
                                    centeredSlides: true
                                },
                                768: {  // md
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    centeredSlides: false
                                },
                                1024: { // lg
                                    slidesPerView: 6,
                                    spaceBetween: 2,
                                    centeredSlides: false
                                }
                            }}
                            className="pb-10"
                        >
                            <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                           <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide>
                                <div className="flex flex-col">
                                    <div className="lg:h-[220px] lg:w-[170px] w-[120px] h-[150px] bg-gray-100 overflow-hidden">
                                        <img 
                                            src="https://ii1.pepperfry.com/assets/15ab200b-0e38-481c-840c-73a3343ec773.jpg" 
                                            alt="Furniture Item" 
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
        </div>
    )
}

export default ExploreFurniture