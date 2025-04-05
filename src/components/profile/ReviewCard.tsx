
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { IoStar } from "react-icons/io5";
import { IMAGEPOSTER } from "@/constants";

interface cardProps {
  tmdbId: number;
  title: string;
  poster_path: string;
  message: string;
  rating?: number;
  createdAt: string;
}

const ReviewCard = (item: cardProps) => {
  return (
    <div className="border-b border-primary py-6">
      <div className="max-w-xl sm:max-w-3xl md:max-w-4xl  flex gap-4">
        {/* Movie Poster */}
        <div className="w-[100px] h-[160px] sm:w-[190px] sm:h-[250px] overflow-hidden">
          <Image
            src={IMAGEPOSTER+item.poster_path}
            alt="Batman Begins"
            width={190}
            height={250}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Movie Title */}
          <SectionTitle title="BATMAN BEGINS" />

          {/* Review */}
          <div className="bg-background p-3 rounded-lg mt-3">
            <div className="flex gap-2">{Array.from({ length: item.rating || 0 }).map((_, index) => <span key={index} className="text-primary"><IoStar/></span>)}</div>
            <p className="text-white mt-2 text-sm sm:text-lg">{item.message}</p>
            <span className="text-white text-sm mt-3 flex items-center gap-1">
              <span className="w-1 h-4 rounded-xl bg-primary block"></span> 
              <span>{item.createdAt}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
