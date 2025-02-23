"use client";

import Image from "next/image";
import Link from "next/link";
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
    setCurrentRate((prev) => prev + 1);
  };

  const handleFinish = () => {
    router.push("/");
    console.log(result);
  };

  const resetest = () => {
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

      {/* Movie Card (Always Visible) */}
      <div className="relative w-72 rounded-lg mx-auto">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <p className="text-white text-sm">Loading...</p>
          </div>
        )}
        <button
          onClick={() => resetest()}
          className="absolute -right-8 top-1/2 transform -translate-y-1/2"
        >
          <SlReload size={24} />
        </button>

        <Image
          src={movies[Math.min(currentRate, movies.length - 1)].poster}
          alt={movies[Math.min(currentRate, movies.length - 1)].title}
          width={300}
          height={450}
          priority
          className="rounded-lg object-cover"
          onLoad={() => setLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5"></div>
        <div className="relative -top-16 w-full flex flex-col justify-center items-center">
          <h2 className="mt-3 text-lg font-semibold">
            {movies[Math.min(currentRate, movies.length - 1)].title}
          </h2>
        </div>
        {/* ratings buttons*/}
        {currentRate < movies.length ? (
          <>
            <div className="flex relative justify-center -mt-10">
              {ratings.map((rating, idx) => (
                <button
                  key={rating.label}
                  className={`w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full text-white font-semibold flex items-center justify-center border-2 border-white text-xs md:text-sm ${
                    rating.color
                  } ${idx === 0 || idx === 3 ? "-mt-3" : ""}`}
                  onClick={() =>
                    rateMovie(rating.label, movies[currentRate].id)
                  }
                >
                  {rating.label}
                </button>
              ))}
            </div>

            {/* Haven't Seen Button */}
            <button
              onClick={() => rateMovie("Haven't Seen", movies[currentRate].id)}
              className="flex w-fit mx-auto justify-center relative top-5 px-6 py-2 bg-gray-800 rounded-md text-white"
            >
              <span>Haven&apos;t Seen</span>
            </button>
          </>
        ) : (
          <div className="text-center">
            <Link
              href="/pages"
              onClick={handleFinish}
              className="relative -mt-2 px-6 py-2 bg-primary hover:bg-red-600 transition rounded-full w-full text-white"
            >
              Finish
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieRating;
