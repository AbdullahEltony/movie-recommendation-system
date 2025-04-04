import Image from "next/image";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import { IMAGEPOSTER } from "@/constants";
import { SkeletonActors } from "../skeletons";
interface ActorsProps {
  id: number;
  name: string;
  character: string;
  profilePath: string;
}

export default function Actors({actors,loading}:{actors:ActorsProps[] | undefined,loading:boolean}) {
 
  if(loading) return <SkeletonActors />
  return (
    <div className="bg-black mb-[4rem] mt-32 section max-h-[600px] overflow-auto custom-scrollbar">
      <SectionTitle title="Actors" />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-secondaryBg p-[1rem] rounded-xl">
        {actors?.map((actor) => (
          <Link href={`/pages/actors/${actor.id}`} key={`${actor.id}-${actor.name}`}>
            <div className="flex items-center gap-4 hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
              <Image
                src={actor.profilePath ? IMAGEPOSTER + actor.profilePath : "/ueser-placeholder.jpg"}
                alt={actor.name}
                width={100}
                height={200}
                className="w-14 h-16 object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold">{actor.name}</h3>
                <p className="text-gray-400 text-sm">{actor.character}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}



