"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { capitalizeString } from "@/lib/utils";
const Tabs = () => {
  const tabs = ["Likes", "Watchlist", "Reviews", "Recommended"];
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("")
    

  function clickHandler(name: string) {
    setActiveTab(name);
    switch (name) {
      case "Likes":
        router.push("/profile/likes");
        break;
      case "Watchlist":
        router.push("/profile/watchlist");
        break;
      case "Reviews":
        router.push("/profile/reviews");
        break;
      case "Recommended":
        router.push("/profile/recommended");
        break;
    }
  }
  useEffect(() => {
    setActiveTab(capitalizeString(pathname.split("/")[2]))
  },[activeTab, pathname])
  return (
    <div>
      {/* tabs */}
      <ul className="flex gap-4 mt-12 pb-4 border-b border-gray-600">
        {tabs.map((tab) => (
          <button
            onClick={() => clickHandler(tab)}
            key={tab}
            className={`text-lg hover:text-primary transition-all duration-300 ${
              activeTab === tab ? "text-primary" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
