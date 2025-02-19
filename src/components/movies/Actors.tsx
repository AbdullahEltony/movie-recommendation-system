import Image from "next/image";
import SectionTitle from "../SectionTitle";
import Link from "next/link";

export default function Actors() {
  const actors = [
    {
      name: "Florence Pugh",
      role: "Yelena Belova",
      image:
        "https://image.tmdb.org/t/p/original//d4f4cQ9EiYuvNMjT1IB2h06KoRx.jpg",
    },
    {
      name: "Sebastian Stan",
      role: "Bucky Barnes",
      image:
        "https://image.tmdb.org/t/p/original//hPwCMEq6jLAidsXAX5BfoYgIfg2.jpg",
    },
    {
      name: "David Harbour",
      role: "Alexei Shostakov / Red Guardian",
      image:
        "https://image.tmdb.org/t/p/original//74G750E1HZzjksJ9oSr8aWFadE2.jpg",
    },
    {
      name: "Wyatt Russell",
      role: "John Walker / U.S. Agent",
      image:
        "https://image.tmdb.org/t/p/original//o2BK58fxhAJnOFfELtxMenZ4fpd.jpg",
    },
    {
      name: "Hannah John-Kamen",
      role: "Ava Starr / Ghost",
      image:
        "https://image.tmdb.org/t/p/original//djLVFETFTvPyVUdrd7aLVykobof.jpg",
    },
    {
      name: "Olga Kurylenko",
      role: "Antonia Dreykov / Taskmaster",
      image:
        "https://image.tmdb.org/t/p/original//jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
    },
    {
      name: "Lewis Pullman",
      role: "Robert 'Bob' Reynolds / Sentry",
      image:
        "https://image.tmdb.org/t/p/original//74G750E1HZzjksJ9oSr8aWFadE2.jpg",
    },
  ];

  return (
    <div className="bg-black mb-[4rem] mt-32 section">
      <SectionTitle title="Actors" />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-secondaryBg p-[1rem] rounded-xl">
        {actors.map((actor, index) => (
          <Link href="/pages/actors/2" key={index}>
            <div className="flex items-center gap-4 hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
              <Image
                src={actor.image}
                alt={actor.name}
                width={100}
                height={200}
                className="w-14 h-16 object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold">{actor.name}</h3>
                <p className="text-gray-400 text-sm">{actor.role}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
