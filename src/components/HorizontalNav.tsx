"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import Menu from "./Menu";

const HorizontalNav = ({ pathname }: { pathname: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleMenu = () => {
    setIsOpen((prev: boolean) => !prev);
  };
  return (
    <div className="w-full h-20 bg-opacity-15 fixed z-50 left-0 bottom-0 p-5 block md:hidden">
      <ul className="flex items-center justify-between px-3 bg-opacity-30 sm:px-5 backdrop-blur-md shadow-lg">
        <li>
          <Link
            href="/"
            className={`flex flex-col gap-1 items-center px-4 py-2 ${
              pathname === "/" ? "text-primary" : ""
            }`}
          >
            <AiOutlineHome className="w-5 h-5" aria-hidden="true" />
            <span className="text-[12px]">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className={`flex flex-col gap-1 items-center px-4 py-2 ${
              pathname === "/profile" ? "text-primary" : ""
            }`}
          >
            <AiOutlineUser className="w-5 h-5" aria-hidden="true" />
            <span className="text-[12px]">Profile</span>
          </Link>
        </li>
        <li>
          <button
            className={`flex flex-col gap-1 items-center px-4 py-2 ${isOpen ? "text-primary" : ""}`}
            onClick={toggleMenu}
          >
            <BsGrid className="w-5 h-5" aria-hidden="true" />
            <span className="text-[12px]">Menu</span>
          </button>
        </li>
      </ul>
      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </div>
  );
};

export default HorizontalNav;
