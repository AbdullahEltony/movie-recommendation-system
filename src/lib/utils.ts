export const capitalizeString = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

 export const ratings = [
  { label: "Awful", color: "bg-[#869FB4]" },
  { label: "Meh", color: "bg-[#99896D]" },
  { label: "Good", color: "bg-[#F9A11B]" },
  { label: "Amazing", color: "bg-[#F26522]" },
];

export const getProgress = (ratedCount: number, totalMovies: number) => {
  return (ratedCount / totalMovies) * 100;
};

export const isRatingComplete = (ratedMovies: {label: string,movieId:number}[], minRatings: number) => {
  return ratedMovies.length >= minRatings;
};
