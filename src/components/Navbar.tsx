import React from "react";
import ProfileMenue from "./ProfileMenue";
import NavbarSearch from "./Search";
const Navbar = () => {
  return (
    <div className="absolute z-30 w-full hidden md:block">
      <div className="ml-48 flex items-center p-4">
        <NavbarSearch />
        <ProfileMenue />
      </div>
    </div>
  );
};

export default Navbar;
