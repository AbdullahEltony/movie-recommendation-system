export const capitalizeString = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};


export const getProgress = (ratedCount: number, totalMovies: number) => {
  return (ratedCount / totalMovies) * 100;
};

export const isRatingComplete = (ratedMovies: {label: string,movieId:number}[], minRatings: number) => {
  return ratedMovies.length >= minRatings;
};


