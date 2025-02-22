"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { SlReload } from "react-icons/sl";

interface Result {
  label: string;
  movieId: number;
}

const MovieRating = () => {
  const [loading, setLoading] = useState(true);
  const [currentRate, setCurrentRate] = useState(0);
  const [result, setResult] = useState<Result[]>([]);
  const router = useRouter();

  const movies = useMemo(
    () => [
      {
        id: 1,
        title: "The Shawshank Redemption",
        poster:
          "https://image.tmdb.org/t/p/original//d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
      },
      {
        id: 2,
        title: "The Dark Knight",
        poster:
          "https://image.tmdb.org/t/p/original//aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
      },
      {
        id: 3,
        title: "Inception",
        poster:
          "https://image.tmdb.org/t/p/original//3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
      },
      {
        id: 4,
        title: "Interstellar",
        poster:
          "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: 5,
        title: "Pulp Fiction",
        poster:
          "https://image.tmdb.org/t/p/original//uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
      },
    ],
    []
  );

  const ratings = useMemo(
    () => [
      { label: "Awful", color: "bg-[#869FB4]" },
      { label: "Meh", color: "bg-[#99896D]" },
      { label: "Good", color: "bg-[#F9A11B]" },
      { label: "Amazing", color: "bg-[#F26522]" },
    ],
    []
  );

  const rateMovie = (label: string, movieId: number) => {
    setResult((prev) => [...prev, { label, movieId }]);

    if (currentRate < movies.length) {
      setTimeout(() => {
        setCurrentRate((prev) => prev + 1);
      }, 50);
    } else {
      console.log(result);
      router.push("/pages");
    }
  };
  const reset  = () => {
    setCurrentRate(0);
    setResult([]);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      {/* Progress Bar */}
      <div className="w-full max-w-xs mt-4 mb-2 relative">
        <p className="text-center text-sm">Calculating your taste...</p>
        <div className="w-full h-1 bg-gray-700 rounded-full mt-1">
          <div
            className="h-1 bg-red-500 rounded-full"
            style={{ width: `${(currentRate / movies.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Movie Card */}
      {movies[currentRate] && (
        <div className="relative w-72 rounded-lg">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
          )}
          <button onClick={() => reset()} className="absolute -right-20 top-[50%] -translate-y-1/2]"> <SlReload size={24}/> </button>
          <Image
            src={movies[currentRate].poster}
            alt={movies[currentRate].title}
            width={300}
            height={450}
            priority
            className="rounded-lg object-cover"
            onLoad={() => setLoading(false)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5"></div>
          <div className="relative -top-12 w-full flex flex-col justify-center items-center">
            <h2 className="mt-3 text-lg font-semibold">
              {movies[currentRate].title}
            </h2>
          </div>

          {/* Rating Buttons */}
          <div className="flex relative -mt-10">
            {ratings.map((rating, idx) => (
              <button
                key={rating.label}
                className={`w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full text-white font-semibold flex items-center justify-center border-2 border-white text-xs md:text-sm ${
                  rating.color
                } ${idx === 0 || idx === 3 ? "-mt-3" : ""}`}
                onClick={() => rateMovie(rating.label, movies[currentRate].id)}
              >
                {rating.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Haven't Seen Button */}
      <button
        onClick={() => rateMovie("Haven't Seen", movies[currentRate]?.id)}
        className="mt-4 px-6 py-2 bg-gray-800 rounded-md text-white"
      >
        {currentRate === movies.length ? "show result" : "Haven't Seen"}
      </button>
    </div>
  );
};

export default MovieRating;
