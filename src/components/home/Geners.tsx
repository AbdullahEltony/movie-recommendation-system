import React from "react";
import SectionTitle from "../SectionTitle";
import SliderWrapper from "../SliderWrapper";
import MovieSlider from "../SliderCards";
import { recommendedMoviesData } from "@/lib/placeholders";

const Geners = () => {
  return (
    <div className="mx-[1rem] sm:mx-0 mt-48 sm:mt-32">
      <div className="flex justify-between items-center pr-1 sm:pr-4">
        <SectionTitle title="Descover By Geners" />
        <select className="border border-gray-500 bg-black text-white px-4 py-2 rounded-md mb-4">
          <option>Geners</option>
          <option>Romantic</option>
          <option>Drama</option>
          <option>Action</option>
          <option>Geners</option>
          <option>Comidy</option>
        </select>
      </div>
      <SliderWrapper>
        <MovieSlider
          sliderType="recommended"
          movieList={recommendedMoviesData}
        />
      </SliderWrapper>
    </div>
  );
};

export default Geners;
