import Image from "next/image";
import MovieCard from "../MovieCard";
import { movies } from "@/lib/placeholders";
export default function SingleActor() {
  

  return (
    <>
      {/* for desktop */}
      <div className="hidden sm:flex h-screen gap-4 bg-black text-white">
        {/* Left section (Movies Grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-[2rem] overflow-y-auto custom-scrollbar">
          {movies.map((movie) => (
            <MovieCard key={movie.title} {...movie} />
          ))}
        </div>

        {/* Right section (Actor Profile) */}
        <aside className="w-80 p-4 flex flex-col items-center space-y-4 sticky top-0">
          <Image
            src="https://image.tmdb.org/t/p/original//d4f4cQ9EiYuvNMjT1IB2h06KoRx.jpg"
            alt="Chris Pratt"
            width={400}
            height={500}
            className="w-80 h-68 rounded-lg object-cover"
          />
          <p className="text-sm text-gray-300">
            Christopher Michael Pratt (born 21 June 1979) is an American
            actor,known for starring in both television and action films. He
            rose to prominence for his television roles, particularly in the NBC
            sitcom…
          </p>
        </aside>
      </div>

      {/* for mobile */}
      <div className="h-screen bg-black text-white sm:hidden flex flex-col">
        {/* Actor Info Section */}
        <div className="flex flex-col items-center p-4 sticky">
          <Image
            src="https://image.tmdb.org/t/p/original//d4f4cQ9EiYuvNMjT1IB2h06KoRx.jpg"
            alt="Chris Pratt"
            width={120}
            height={120}
            className="w-32 h-32 rounded-full object-cover"
          />
          <h2 className="mt-2 text-lg font-bold">Chris Pratt</h2>
          <p className="text-sm text-gray-300 text-center px-4">
            Christopher Michael Pratt (born 21 June 1979) is an American actor,
            known for starring in both television and action films...
          </p>
        </div>

        {/* Scrollable Movies Section */}
        <div className="grid grid-cols-3 gap-4 overflow-y-auto custom-scrollbar p-4">
          {movies.map((movie) => (
            <div key={movie.title} className="">
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
