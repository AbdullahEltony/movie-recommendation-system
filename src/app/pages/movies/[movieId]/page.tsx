import React from "react";
// import { useParams } from "next/navigation";
import Trailer from "@/components/movies/Trailer";
import Actors from "@/components/movies/Actors";
import Reviews from "@/components/movies/Reviews";
import SimilarMovies from "@/components/movies/SimilarMovies";

import "react-toastify/dist/ReactToastify.css";
import MovieInfo from "@/components/movies/MovieInfo";
import { ToastContainer } from "react-toastify";

const MovieDetails = () => {
  return (
    <div>
      {/* Movie Info */}
      <MovieInfo />
      {/* Trailer */}
      <Trailer />
      {/*Actors*/}
      <Actors />
      {/*Reviews*/}
      <Reviews />
      {/*Similar Movies*/}
      <SimilarMovies />
      <ToastContainer />
    </div>
  );
};

export default MovieDetails;
