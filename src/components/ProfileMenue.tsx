"use client";
import React from "react";
import { icons } from "@/constants";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

const ProfileMenue = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menueItems = [
    {
      name: "Profile",
      href: "/profile",
      icon: icons.Profile,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: icons.Settings,
    },
  ];
  return (
    <div className="ml-auto flex items-center gap-3 relative">
      <div className="relative">
        <span className="text-white bg-primary w-[5px] h-[5px] rounded-full absolute top-0 right-2"></span>
        <IoIosNotificationsOutline size={24} />
      </div>
      <button
        className="profile flex gap-1 items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
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
      {isOpen && (
        <div className="w-32 p-3 absolute top-10 right-0 bg-gray-800 rounded">
          <ul className="space-y-3">
            {menueItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="flex items-center gap-3 hover:text-primary transition-all duration-150 ease-in-out">
                  <item.icon className="w-5 h-5 mr-3" aria-hidden="true" />
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button className="flex items-center hover:text-primary gap-3 transition-all duration-150 ease-in-out">
                {<icons.Signin className="w-5 h-5 mr-3"/>}
                Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenue;
