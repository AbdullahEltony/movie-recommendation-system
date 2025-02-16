import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { IoPlay } from "react-icons/io5";

export default function Trailer() {
    return (
      <div className="bg-black rounded-lg section">
        <SectionTitle title="Trailer" />
        <div className="mt-4 relative rounded-lg overflow-hidden w-ful h-[75vh] mb-[2rem]">
          <Image
            src="https://image.tmdb.org/t/p/original//d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg"
            alt="Trailer Thumbnail"
            width={1000}
            height={500}
            // layout="fill"
            className="object-cover w-full h-auto"
          />
          <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center bg-black bg-opacity-80 py-4 w-20 h-12 rounded-md hover:bg-primary transition-all duration-300">
            <IoPlay className="text-white text-4xl"/>
          </button>
        </div>
      </div>
    );
  }
  