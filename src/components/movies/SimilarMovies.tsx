import SectionTitle from "../SectionTitle";
import MovieSlider from "../SliderCards";
import SliderWrapper from "../SliderWrapper";
import { recommendedMoviesData } from "@/lib/placeholders";

const SimilarMovies = () => {
  return (
    <div className="section my-48 sm:my-32">
      <SectionTitle title="You May Like" />
      <SliderWrapper>
        <MovieSlider sliderType="recommended" movieList={recommendedMoviesData}/>
      </SliderWrapper>
    </div>
  );
};

export default SimilarMovies;
