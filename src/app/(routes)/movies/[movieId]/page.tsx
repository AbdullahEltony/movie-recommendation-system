"use client";
import { LuCalendarClock } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import React from "react";
// import { useParams } from "next/navigation";
import Image from "next/image";
import { top10MoviesData } from "@/lib/placeholders";
import Trailer from "@/components/movies/Trailer";
import Actors from "@/components/movies/Actors";
import Reviews from "@/components/movies/Reviews";
import SimilarMovies from "@/components/movies/SimilarMovies";
const MovieDetails = () => {
  // const { movieId } = useParams();

  return (
    <div className="">
      <div className="relative w-full h-screen bg-cover bg-top bg-[url('https://image.tmdb.org/t/p/original//d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg')]">
        <div className="absolute w-full inset-0 bg-gradient-to-t from-black/80 via-black/80 via-10% to-black/40">
          <div className="absolute w-full flex justify-around items-center top-[50%] translate-y-[-50%] mx-0 xl:mx-[4rem] p-5">
            <Image
              src={top10MoviesData[0].image}
              alt={top10MoviesData[0].title}
              width={300}
              height={350}
              className="rounded-lg hidden lg:block w-auto h-auto"
            />
            <div className="flex flex-col items-center text-center gap-5 max-w-full">
              <h2 className="tracking-widest text-4xl xl:text-5xl font-bold">
                Legend Of The Seeker
              </h2>
              <div className="flex gap-4 text-lg">
                <span className="flex items-center gap-1">
                  <LuCalendarClock />
                  7/16/2008
                </span>
                <span className="flex items-center gap-1">
                  <GoStarFill color="gold" />
                  3.5
                </span>
                <span>2h 32m</span>
              </div>
              <ul className="flex gap-2 items-center flex-wrap">
                <li className="bg-[#AE251C] text-white px-3 py-1 italic rounded-md">
                  Drama
                </li>
                <li className="bg-[#AE251C] text-white px-3 py-1 italic rounded-md">
                  Action
                </li>
                <li className="bg-[#AE251C] text-white px-3 py-1 italic rounded-md">
                  Comidy
                </li>
              </ul>
              <p className="w-full md:max-w-[60%]">
                Batman raises the stakes in his war on crime. With the help of
                Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets
                out to dismantle the remaining criminal organizations that
                plague the
              </p>
              <div className="flex items-center gap-3">
                <button className="flex gap-2 items-center bg-transparent border border-white text-white px-4 py-2 rounded-3xl transition-all duration-300 hover:border-primary hover:text-primary">
                  <FiHeart/>
                  Like
                </button>
                <button className="flex gap-2 items-center bg-transparent  border border-white text-white px-4 py-2 rounded-3xl transition-all duration-300 hover:border-primary hover:text-primary">
                  <FiPlus/>
                  Add To Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trailer */}
      <Trailer/>
      {/*Actors*/}
      <Actors/>
      {/*Reviews*/}
      <Reviews/>
      {/*Similar Movies*/}
      <SimilarMovies/>
    </div>
  );
};

export default MovieDetails;
