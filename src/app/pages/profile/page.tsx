import MovieCard from "@/components/MovieCard";
import SectionTitle from "@/components/SectionTitle";
import { topRatedMoviesData } from "@/lib/placeholders";
const RecentActivity = () => {
  return (
    <div className="mt-5">
      <SectionTitle title="Recent Activity" />

      <div className="grid grid-cols-4 gap-4 p-6 rounded-lg">
        {topRatedMoviesData.length === 0 && <p>No activitys yet</p>}
        {topRatedMoviesData.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
