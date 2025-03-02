import SectionTitle from "../SectionTitle";
import MovieSlider from "../SliderCards";
import SliderWrapper from "../SliderWrapper";
import { recommendedMoviesData } from "@/lib/placeholders";

const Recommended = () => {
  return (
    <div className="mx-[2rem] sm:mx-0 mt-48 sm:mt-32">
      <SectionTitle title="Recommended For You" />
      <SliderWrapper>
        <MovieSlider sliderType="recommended" movieList={recommendedMoviesData}/>
      </SliderWrapper>
    </div>
  );
};

export default Recommended;
