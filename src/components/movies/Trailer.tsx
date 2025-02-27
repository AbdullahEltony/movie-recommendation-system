"use client";
import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { IoPlay } from "react-icons/io5";

export default function Trailer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-black rounded-lg section">
      <SectionTitle title="Trailer" />
      <div className="mt-4 relative rounded-lg overflow-hidden w-full h-[75vh] mb-[2rem]">
        {isPlaying ? (
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/iV46TJKL8cU?si=Jcm0QOB1ZJxU8RVS&&autoplay=1`}
            allowFullScreen
            allow="autoplay; encrypted-media"
          />
        ) : (
          <>
            <Image
              src="https://image.tmdb.org/t/p/original//d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg"
              alt="Trailer Thumbnail"
              width={1000}
              height={500}
              className="object-cover w-full h-full"
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center bg-black bg-opacity-80 py-4 w-20 h-12 rounded-md hover:bg-primary transition-all duration-300"
            >
              <IoPlay className="text-white text-4xl" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
