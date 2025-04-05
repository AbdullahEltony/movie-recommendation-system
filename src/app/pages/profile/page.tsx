"use client";
import SectionTitle from "@/components/SectionTitle";
import { IMAGEPOSTER } from "@/constants";
import { formatTimestamp } from "@/lib/utils";
import { RootState } from "@/redux/store";
import Image from "next/image";
import {
  FaHeart,
  FaPlayCircle,
  FaBookmark,
  FaStar,
  FaClock,
} from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { useSelector } from "react-redux";

const getIcon = (type: string) => {
  switch (type) {
    case "liked":
      return <FaHeart className="text-red-500" />;
    case "watchlist":
      return <FaBookmark className="text-yellow-400" />;
    case "watched":
      return <FaPlayCircle className="text-green-500" />;
    case "reviewed":
      return <MdRateReview className="text-blue-400" />;
    default:
      return null;
  }
};

export default function RecentActivitySection() {
  const { recentActivities } = useSelector(
    (state: RootState) => state.recentActivities
  );
  return (
    <div className="mt-5">
      <SectionTitle title="Recent Activity" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 rounded-lg">
        {recentActivities?.length === 0 && <p>No activities yet</p>}

        {recentActivities?.map((activity) => (
          <div
            key={activity.tmdbId}
            className="flex bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 shadow-md"
          >
            <Image
              src={IMAGEPOSTER + activity.poster_path}
              alt={activity.movieTitle}
              width={100}
              height={100}
              className="w-24 h-36 object-cover"
            />

            <div className="p-4 flex-1 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-white">
                {activity.movieTitle}
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                {getIcon(activity.type)}
                <span>{`Added To ${activity.type}`}</span>
              </div>

              {activity.type === "reviewed" && activity.rating != null && (
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={
                        i < activity.rating! ? "text-red-500" : "text-zinc-600"
                      }
                    />
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2 mt-auto">
                <FaClock />
                <p className="text-xs text-gray-500">
                  {formatTimestamp(activity.createdAt)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
