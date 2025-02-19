import MoviesFilter from "@/components/movies/MoviesFilter";
import MoviesGrid from "@/components/movies/MoviesGrid";
import { topRatedMoviesData } from "@/lib/placeholders";

const page = () => {
  return (
    <div className="pt-[5rem] mx-0 sm:mx-[2rem] mb-[4rem] md:mb-0">
      {/* filters */}
      <MoviesFilter/>
      {/* grid */}
      <MoviesGrid movieList={topRatedMoviesData}/>
    </div>
  );
};

export default page;
