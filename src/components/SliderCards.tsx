"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MovieCard from "./MovieCard"
import { movieType } from "@/lib/types";
interface SliderProps {
  movieList: movieType[];
  sliderType: string
}

export default function MovieSlider(props: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={props.sliderType === "top10" ? 80 :  20}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
      }}
      className={`movie-slider`}
    >
      {props.movieList.map((movie: movieType) => (
        <SwiperSlide key={movie.id? movie.id : movie.title} className="movie-slider">
          <MovieCard
            id={movie.id}
            title={movie.title}
            image={movie.image}
            cardType={props.sliderType}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
