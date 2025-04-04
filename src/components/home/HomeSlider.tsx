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
import Link from "next/link";
import { useState } from "react";
import TrailerModal from "../modals/TrailerModal";
import { toast } from "react-toastify";
import useFetch from "@/hooks/useFetch";
import { Movie } from "@/lib/types";
import { HomeSliderSkeleton } from "../skeletons";

const HomeSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [trailer,setTrailer] = useState("") 
  const addToWatchlist = () => {
    toast.success("Added to watchlist successfully!", {
      position: "bottom-right",
    });
  };

  const { data: movies, loading } = useFetch<Movie[]>(
    "/api/Movie/random-movie"
  );

  
  return (
    <>
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
        {loading && HomeSliderSkeleton()}
        {movies?.map((slid) => {
          return (
            <SwiperSlide key={slid.movieId}>
              <div className="w-full relative">
                <Image
                  src={`https://image.tmdb.org/t/p/original//${slid.poster_path}`}
                  width={700}
                  height={700}
                  alt="Movie Poster"
                  className="w-full max-h-[700px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-black/90 flex items-start md:items-center pt-28 md:pt-64 lg:pt-0">
                  <div className="ml-2 md:ml-12 p-3 md-p-0 flex flex-col gap-3 max-w-xl text-center sm:text-left">
                    <h2 className="text-2xl sm:text-6xl mb-4">{slid.title}</h2>
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <span className="flex basis-auto items-center bg-primary rounded-xl text-xs font-semibold text-black px-3">
                        HD
                      </span>
                      <div className="flex basis-auto items-center">
                        <AiFillStar className="text-primary" />
                        <span>{3}</span>
                      </div>
                      <span>{slid.release_date}</span>
                    </div>
                    {/* <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
                      {slid.genresDetails?.map((gen) => (
                        <span key={gen} className="text-sm sm:text-[16px]">
                          {gen}
                        </span>
                      ))}
                    </div> */}
                    <p className="text-sm sm:text-lg text-center sm:text-start">
                      {slid.overview}
                    </p>
                    <div className="flex gap-3 mt-3 justify-center sm:justify-start">
                      <button
                        onClick={() => {setTrailer(slid.trailer_path); setIsOpen(true)}}
                        aria-label="Watch Trailer"
                        className="bg-primary text-sm p-3 flex items-center gap-1 rounded-3xl text-white transition-all duration-150 border border-transparent hover:border-primary hover:text-white h-[40px]  sm:h-auto"
                      >
                        <span>
                          <FaRegPlayCircle size={16} fill="white" />
                        </span>
                        Watch Trailer
                      </button>
                      <Link
                        href={`/pages/movies/${slid.tmdbId}`}
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
                      </Link>
                      <button
                        onClick={addToWatchlist}
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
        {isOpen && <TrailerModal setIsOpen={setIsOpen} trailer={trailer}/>}
      </Swiper>
    </>
  );
};

export default HomeSlider;
