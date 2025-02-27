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
  { name: "Home", href: "/pages", icon: "Home" },
  { name: "Movies", href: "/pages/movies", icon: "Movies" },
  { name: "Watchlist", href: "/pages/profile/watchlist", icon: "Watchlist" },
  { name: "Likes", href: "/pages/profile/likes", icon: "Likes" },
];

export const userLinks: NavLink[] = [
  { name: "Profile", href: "/pages/profile", icon: "Profile" },
  { name: "Settings", href: "/pages/settings", icon: "Settings" },
];







export { icons }; // Export icons for use
