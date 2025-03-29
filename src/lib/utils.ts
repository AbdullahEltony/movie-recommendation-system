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


export const FormatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const truncateText = (str: string,isExpanded:boolean, maxLength:number) => {
  if (str.length > maxLength) {
    return isExpanded ? str : `${str.substring(0, maxLength)}...`;
  }
  return str;
}

export function formatDuration(minutes:number | undefined) {
  if(!minutes) return "";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}