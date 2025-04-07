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

// geners
export const Geners = [
  {
    Id: 0,
    Name: "Adventure",
  },
  {
    Id: 1,
    Name: "Animation",
  },
  {
    Id: 2,
    Name: "Children",
  },
  {
    Id: 3,
    Name: "Comedy",
  },
  {
    Id: 4,
    Name: "Crime",
  },
  {
    Id: 5,
    Name: "Documentary",
  },
  {
    Id: 6,
    Name: "Drama",
  },
  {
    Id: 7,
    Name: "Fantasy",
  },
  {
    Id: 8,
    Name: "Film-Noir",
  },
  {
    Id: 9,
    Name: "Horror",
  },
  {
    Id: 10,
    Name: "Musical",
  },
  {
    Id: 11,
    Name: "Mystery",
  },
  {
    Id: 12,
    Name: "Romance",
  },
  {
    Id: 13,
    Name: "Sci-Fi",
  },
  {
    Id: 14,
    Name: "Thriller",
  },
  {
    Id: 15,
    Name: "War",
  },
  {
    Id: 16,
    Name: "Western",
  },
];

// Define the available icons
const icons = {
  Home: AiOutlineHome,
  Movies: MdOutlineSubscriptions,
  Watchlist: MdAddToQueue,
  Likes: AiOutlineHeart,
  Profile: AiOutlineUser,
  Settings: AiOutlineSetting,
  Signin: PiSignInBold,
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

// apis endpoints
export const AUTH_URL = "http://cinemate.runasp.net/api/Auth/";


export const TRAILER_URL = "";
export const IMAGEPOSTER = "https://image.tmdb.org/t/p/original/";

export { icons }; // Export icons for use
