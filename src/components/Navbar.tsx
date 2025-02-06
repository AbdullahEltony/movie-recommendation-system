import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="fixed z-50 w-full hidden md:block">
      <div className="ml-48 flex items-center p-4">
        <div className="bg-[#1e2526] rounded-3xl w-1/2 flex items-center ml-0 lg:ml-24 p-3 bg-opacity-80">
          <CiSearch />
          <input
            type="text"
            placeholder="Search.."
            className="ml-2 bg-transparent outline-none w-full h-full"
          />
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="relative">
            <span className="text-white bg-primary w-[5px] h-[5px] rounded-full absolute top-0 right-2"></span>
            <IoIosNotificationsOutline size={24} />
          </div>
          <button className="profile flex gap-1 items-center">
            <div className="w-8 h-8 bg-black flex items-center justify-center rounded-full">
              <Image
                src="/user1.jpeg"
                alt="user"
                width={20}
                height={40}
                className="rounded-full"
              />
            </div>

            <BiChevronDown size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
