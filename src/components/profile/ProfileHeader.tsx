"use client";
import Image from "next/image";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
const ProfileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="flex gap-4 items-center flex-wrap">
          <div className="border-2 border-primary p-1 rounded-full mx-auto sm:mx-0">
            <Image
              src="/user-profile.webp"
              alt="user profile"
              width={100}
              height={100}
              className="w-16 h-16 sm:w-32 sm:h-32 rounded-full object-cover"
            />
          </div>
          <div className="flex items-center">
            <span className="block w-[6px] h-6 rounded-xl bg-primary mr-2"></span>
            <h2 className="text-lg sm:text-3xl">Yousef Elsayem</h2>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-primary rounded-3xl px-4 py-2 text-xs sm:text-sm ml-3 mt-1"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <ul className="flex gap-3 justify-center sm:justify-start">
          <li className="flex flex-col items-center border-r-2 pr-3 border-white">
            <span className="text-lg sm:text-2xl font-bold">80</span>
            <span>film</span>
          </li>
          <li className="flex flex-col items-center border-r-2 pr-3 border-white">
            <span className="text-lg sm:text-2xl font-bold">48</span>
            <span>folowers</span>
          </li>
          <li className="flex flex-col items-center">
            <span className="text-lg sm:text-2xl font-bold">56</span>
            <span>following</span>
          </li>
        </ul>
      </header>

      {isOpen && <EditProfileModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ProfileHeader;
