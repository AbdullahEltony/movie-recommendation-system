import React from "react";
import ProfileMenue from "./ProfileMenue";
import NavbarSearch from "./Search";
const Navbar = () => {
  return (
    <div className="absolute z-30 w-full pr-2">
      <div className="ml-[10px] md:ml-48 flex items-center py-4 sm:p-4">
        <NavbarSearch />
        <ProfileMenue />
      </div>
    </div>
  );
};

export default Navbar;
