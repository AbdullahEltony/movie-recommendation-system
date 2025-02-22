import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const page = () => {
  return (
    <div className="bg-[url('/main-img.png')] bg-cover bg-center max-h-full h-screen w-full relative">
      <div className="absolute w-full h-full bg-black/80">
        <div className="container mx-auto !px-2 xl:!px-[6rem] !py-2 md:px-24 !md:py-4">
          {/* Navebar */}
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <Image src="/logo.svg" width={100} height={100} alt="logo" />
            </Link>
            <div className="bg-[#2d3638] rounded-3xl flex items-center ml-0 lg:ml-[2rem] p-3 bg-opacity-80 w-full lg:w-3/6">
              <CiSearch />
              <input
                type="text"
                placeholder="Search.."
                className="ml-2 bg-transparent outline-none w-full h-full"
              />
            </div>
            <div className="flex gap-4 items-center">
              <button className="relative">
                <span className="text-white bg-primary w-[5px] h-[5px] rounded-full absolute top-0 right-2"></span>
                <IoIosNotificationsOutline size={24} />
              </button>
              <Link
                href={"/auth/login"}
                className="text-xs md:text-sm bg-primary rounded-3xl px-3 md:px-5 pb-2 py-1 border border-transparent hover:border-white hover:bg-transparent transition-all duration-00"
              >
                Login
              </Link>
            </div>
          </div>
          {/* content */}
          <div className="w-full mt-16 md:mt-36 pl-0 2xl:pl-24">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
              <div className="text-center md:text-start pr-0 lg:pr-5">
                <h1 className="text-3xl !leading-[40px] md:text-4xl font-semibold lg:text-5xl lg:!leading-[56px]">
                  Movie Recommendations Based On Your Test
                </h1>
                <p className="text-xl mt-5">
                  You can’t decide between thousands of movies available for
                  streaming? Answer 6 questions and let us do the work!
                </p>
                <Link
                  href="/auth/signup"
                  className="text-xs text-center md:text-lg bg-primary hover:scale-110 transition-all duration-200 px-5 md:px-5 py-3 mt-5 inline-block"
                >
                 Start Now
                </Link>
              </div>
              <div className="text-center md:text-start w-auto md:max-w-lg">
                <ul className="w-full bg-secondaryBg p-4 relative overflow-auto custom-scrollbar flex flex-col gap-6 rounded-lg">
                  <li className="flex gap-5 items-start">
                    <div className="rounded w-[70px] md:w-[90px]">
                      <Image
                        src="https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                        width={100}
                        height={100}
                        alt="movie poster"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="flex gap-1 text-lg items-center">
                        <span className="bg-primary w-[7px] h-5 rounded-full block"></span>
                        DARK KNIGHT
                        <span className="text-sm text-primary">2008</span>
                      </h3>
                      <p className="text-green-400 text-lg font-semibold mt-2">
                        80% Match
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-5 items-start">
                    <div className="rounded w-[70px] md:w-[90px]">
                      <Image
                        src="https://image.tmdb.org/t/p/original//3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg"
                        width={100}
                        height={100}
                        alt="movie poster"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="flex gap-1 text-lg items-center">
                        <span className="bg-primary w-[7px] h-5 rounded-full block"></span>
                        DARK KNIGHT
                        <span className="text-sm text-primary">2008</span>
                      </h3>
                      <p className="text-green-400 text-lg font-semibold mt-2">
                        98% Match
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
