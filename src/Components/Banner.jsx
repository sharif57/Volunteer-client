

import 'swiper/css/bundle';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
    return (
        <div className="relative p-2 font-Roboto">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className="mySwiper lg:h-[500px] h-[240px] rounded-lg "
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen  opacity-80 hero-overlay "
                        style={{
                            backgroundImage: "url('https://i.ibb.co/p4H5ZgD/winter-forest-background-blue-watercolor-holiday-design.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4  text-xl bg-gradient-to-r from-pink-600 via-blue-900 to-blue-500 text-transparent bg-clip-text animate-gradient'>Watercolor painting is a painting method that uses pigments .</h1>
                            <button
                                className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                href="#"
                            >
                                <span className="text-sm font-medium"> Read More.. </span>

                                <svg
                                    className="size-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-85"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/ssYW0Lz/medical-banner-with-doctor-patient.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-black text-xl bg-gradient-to-r from-pink-600 via-blue-900 to-blue-500 text-transparent bg-clip-text animate-gradient'>Healthcare volunteering is a noble and rewarding way to contribute .</h1>
                            <button
                                className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                href="#"
                            >
                                <span className="text-sm font-medium"> Read More.. </span>

                                <svg
                                    className="size-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-85"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/YdFyk1b/nature-mountain-displays-radiant-colors-sunset-generative-ai.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-black text-xl bg-gradient-to-r from-pink-600 via-blue-900 to-blue-500 text-transparent bg-clip-text animate-gradient'>Oil painting is a versatile medium that can be used to create realistic.</h1>
                            <button
                                className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                href="#"
                            >
                                <span className="text-sm font-medium"> Read More.. </span>

                                <svg
                                    className="size-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-80"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/bNvB3tn/top-view-chinese-ink-concept.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-black text-xl bg-gradient-to-r from-pink-600 via-blue-900 to-blue-500 text-transparent bg-clip-text animate-gradient'>A portrait is a painting, photograph, sculpture, or other artistic .</h1>
                            <button
                                className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                href="#"
                            >
                                <span className="text-sm font-medium"> Read More.. </span>

                                <svg
                                    className="size-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>

        </div>
    );
};

export default Banner;