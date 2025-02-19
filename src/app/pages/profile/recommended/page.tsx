import MovieCard from "@/components/MovieCard";
import SectionTitle from "@/components/SectionTitle";
import { recommendedMoviesData } from "@/lib/placeholders";
const UserWatchList = () => {
  return (
    <div className="mt-5">
      <SectionTitle title="Recommended" />

      <div className="grid grid-cols-4 gap-4 p-6 rounded-lg">
        {recommendedMoviesData.length === 0 && <p>No Recommend Movies Added</p>}
        {recommendedMoviesData.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default UserWatchList;
