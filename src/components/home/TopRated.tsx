import SectionTitle from "../SectionTitle";
import MovieSlider from "../SliderCards";
import SliderWrapper from "../SliderWrapper";
import { topRatedMoviesData } from "@/lib/placeholders";

const TopRated = () => {
  return (
    <div className="mx-[2rem] sm:mx-0 mt-48 sm:mt-32">
      <SectionTitle title="Top Rated" />
      <SliderWrapper>
        <MovieSlider sliderType="topRated" movieList={topRatedMoviesData}/>
      </SliderWrapper>
    </div>
  );
};

export default TopRated;
