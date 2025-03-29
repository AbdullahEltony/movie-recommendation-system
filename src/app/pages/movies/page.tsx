"use client";
import MoviesFilter from "@/components/movies/MoviesFilter";
import MoviesGrid from "@/components/movies/MoviesGrid";
import { MovieGridSkeleton } from "@/components/skeletons";
import useFetch from "@/hooks/useFetch";
import { Movie } from "@/lib/types";

const MoviesPage = () => {
  const { data, loading } = useFetch<Movie[]>("/api/Movie/top-ten");
  if (loading) return <MovieGridSkeleton />;
  return (
    <div className="pt-[5rem] mx-0 sm:mx-[2rem] mb-[4rem] md:mb-0">
      {/* filters */}
      <MoviesFilter />

      {/* grid */}
      <MoviesGrid movieList={data} />
    </div>
  );
};

export default MoviesPage;
