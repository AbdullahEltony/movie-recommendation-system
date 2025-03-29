export type movieType = {
    id?: number,
    title: string,
    image: string
    rating?: number
}
export type Movie = {
    movieId: number;
    tmdbId: number;
    title: string;
    overview: string;
    poster_path: string;
    runtime: number;
    release_date: string;
    trailer_path: string;
    genresDetails: string[] ; // Change to `Genre[]` if you define a Genre type
  };