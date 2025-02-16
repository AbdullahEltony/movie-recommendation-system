import React from "react";
import SectionTitle from "../SectionTitle";
import CustomSelect from "../Dropdown";
import SliderWrapper from "../SliderWrapper";
import MovieSlider from "../SliderCards";
import { recommendedMoviesData } from "@/lib/placeholders";

const Geners = () => {
  return (
    <div className="mx-[1rem] sm:mx-0 mt-48 sm:mt-32">
      <div className="flex justify-between items-center pr-1 sm:pr-4">
        <SectionTitle title="Descover By Geners" />
        <CustomSelect />
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
