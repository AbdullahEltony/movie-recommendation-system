import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { MdAddToQueue } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";

export interface NavLink {
  name: string;
  href: string;
  icon: keyof typeof icons;
}

// Define the available icons
const icons = {
  Home: AiOutlineHome,
  Movies: MdOutlineSubscriptions,
  Watchlist: MdAddToQueue,
  Likes: AiOutlineHeart,
  Profile: AiOutlineUser,
  Settings: AiOutlineSetting,
  Signin:PiSignInBold
};

export const mainLinks: NavLink[] = [
  { name: "Home", href: "/", icon: "Home" },
  { name: "Movies", href: "/movies", icon: "Movies" },
  { name: "Watchlist", href: "/watchlist", icon: "Watchlist" },
  { name: "Likes", href: "/likes", icon: "Likes" },
];

export const userLinks: NavLink[] = [
  { name: "Profile", href: "/profile", icon: "Profile" },
  { name: "Settings", href: "/settings", icon: "Settings" },
];






export { icons }; // Export icons for use
