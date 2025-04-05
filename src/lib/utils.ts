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
  return date.toLocaleDateString("en-US", {
    month: "short", // Jun
    day: "2-digit", // 11
    year: "numeric", // 2024
  });;
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

export const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp); // No need for multiplication if it's already an ISO string
  if (isNaN(date.getTime())) {
    return "Invalid date"; // Handle invalid date
  }

  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 7 * 86400) return `${Math.floor(diffInSeconds / 86400)} days ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};


