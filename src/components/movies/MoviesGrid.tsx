import { movieType } from "@/lib/types";
import MovieCard from "../MovieCard";

const MoviesGrid = ({ movieList }: { movieList: movieType[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-7 mt-5 p-4">
      {movieList.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
