"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { AiFillStar } from "react-icons/ai";
import { FaRegPlayCircle } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { homeSlidesData } from "@/lib/placeholders";
const HomeSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {homeSlidesData.map((slid) => {
        return (
          <SwiperSlide key={slid.id}>
            <div className="w-full relative">
              <Image
                src={slid.img}
                width={800}
                height={800}
                priority={false}
                loading="lazy"
                alt="Movie Poster"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-black/90 flex items-start md:items-center pt-28 md:pt-64 lg:pt-0">
                <div className="ml-2 md:ml-12 p-3 md-p-0 flex flex-col gap-3 max-w-xl text-center sm:text-left">
                  <h2 className="text-2xl sm:text-6xl mb-4">{slid.name}</h2>
                  <div className="flex gap-3 justify-center sm:justify-start">
                    <span className="flex basis-auto items-center bg-primary rounded-xl text-xs font-semibold text-black px-3">
                      HD
                    </span>
                    <div className="flex basis-auto items-center">
                      <AiFillStar className="text-primary" />
                      <span>{slid.rating}</span>
                    </div>
                    <span>{slid.year}</span>
                  </div>
                  <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
                    {slid.geners.map((gen, i) => (
                      <span key={i} className="text-sm sm:text-[16px]">
                        {gen}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-lg text-center sm:text-start">
                    {slid.movieDesc}
                  </p>
                  <div className="flex gap-3 mt-3 justify-center sm:justify-start">
                    <button
                      aria-label="Watch Trailer"
                      className="bg-primary text-sm p-3 flex items-center gap-1 rounded-3xl text-white transition-all duration-150 border border-transparent hover:border-primary hover:text-white h-[40px]  sm:h-auto"
                    >
                      <span>
                        <FaRegPlayCircle size={16} fill="white" />
                      </span>
                      Watch Trailer
                    </button>
                    <button
                      aria-label="More Info"
                      className="border border-primary text-sm p-3 flex items-center gap-1 rounded-3xl text-white transition-all duration-150 hover:bg-primary h-[40px]  sm:h-auto"
                    >
                      <span>
                        <BsExclamationCircle
                          size={18}
                          color="black"
                          fill="white"
                        />
                      </span>
                      More Info
                    </button>
                    <button
                      aria-label="Add to Watchlist"
                      className="border border-primary  text-sm p-3 hidden sm:flex items-center gap-1 rounded-3xl text-white transition-all duration-150 hover:bg-primary hover:text-white h-[40px]  sm:h-auto"
                    >
                      <span>
                        <FaRegBookmark size={18} color="black" fill="white" />
                      </span>
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlider;
