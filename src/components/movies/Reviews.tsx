"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import SectionTitle from "../SectionTitle";
import { truncateText } from "@/lib/utils";

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const reviews = [
    {
      name: "Juanpa Zurita",
      date: "Jun 15, 2024",
      rating: 5,
      message:
        "... three different movies but never feels disconnected or disjoint. It transforms into characters as effortlessly.",
      avatar:
        "https://image.tmdb.org/t/p/original//jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
    },
    {
      name: "Agustín Arana",
      date: "Jun 15, 2024",
      rating: 5,
      message:
        "... three different movies but never feels disconnected or disjoint. It transforms into characters as effortlessly.",
      avatar:
        "https://image.tmdb.org/t/p/original//jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
    },
    {
      name: "Jorge Gidi",
      date: "Jun 15, 2024",
      rating: 5,
      message:
        "... three different movies but never feels disconnected or disjoint. It transforms into characters as effortlessly.",
      avatar:
        "https://image.tmdb.org/t/p/original//jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
    },
    {
      name: "Jorge Gidi",
      date: "Jun 15, 2024",
      rating: 5,
      message:
        "... three different movies but never feels disconnected or disjoint. It transforms into characters as effortlessly.",
      avatar:
        "https://image.tmdb.org/t/p/original//jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
    },
    {
      name: "Jorge Gidi",
      date: "Jun 15, 2024",
      rating: 5,
      message:
        "... three different movies but never feels disconnected or disjoint. It transforms into characters as effortlessly.",
      avatar:
        "https://image.tmdb.org/t/p/original//jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
    },
  ];
  const handleRating = (i: number) => {
    setRating(i);
  };

  return (
    <div className="bg-black rounded-lg mb-[4rem] section">
      <SectionTitle title="Reviews" />

      <div className="mt-4 flex flex-col lg:flex-row">
        {/* Review Form */}
        <div className="flex-1 bg-secondaryBg p-6 rounded-lg">
          <h3 className="text-white text-lg font-bold">
            Review &quot;Legend of the Seeker&quot;
          </h3>
          <p className="text-gray-400 text-sm mt-3">
            Write a review for this movie. It will be posted on this page.
          </p>

          <div className="mt-4">
            <label className="text-gray-400 text-sm">Select Rating</label>
            <div className="flex items-center gap-4 mt-1">
              <select
                className="bg-background text-white p-2 rounded-md w-1/2"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              >
                <option value={0}>0 - Poor</option>
                <option value={1}>1 - Bad</option>
                <option value={2}>2 - Okay</option>
                <option value={3}>3 - Good</option>
                <option value={4}>4 - Very Good</option>
                <option value={5}>5 - Excellent</option>
              </select>

              <div className="flex gap-1">
                {Array.from({ length: rating }, (_, i) => (
                  <button key={i} onClick={() => handleRating(i + 1)}>
                    <FaStar color="gold" className={`text-xl`} size={24} />
                  </button>
                ))}
                {Array.from({ length: 5 - rating }, (_, i) => (
                  <button key={i} onClick={() => handleRating(i + 1 + rating)}>
                    <FaRegStar color="gold" className={`text-xl`} size={24} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-gray-400 text-sm">Message</label>
            <textarea
              className="w-full bg-background text-white p-2 rounded-md h-40 mt-1"
              placeholder="Make it short and sweet..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button className="w-full bg-red-600 text-white font-bold py-2 rounded-lg mt-4">
            Submit
          </button>
        </div>

        {/* Reviews List */}
        <div className="flex-1 bg-secondaryBg p-6 rounded-lg">
          <h3 className="text-white text-lg font-bold">
            Review ({reviews.length})
          </h3>
          <div className="mt-4 space-y-4 h-96 overflow-y-auto custom-scrollbar">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="grid grid-cols-6 bg-background p-2 md:p-4 rounded-lg gap-4"
              >
                <div className="col-span-6 sm:col-span-1 lg:col-span-1">
                  <Image
                    src={review.avatar}
                    alt="User"
                    width={50}
                    height={50}
                    priority={true}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="col-span-6 sm:col-span-5 md:col-span-5">
                  <div className="flex gap-3 items-center flex-wrap">
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <div className="flex items-center gap-1 text-[gold]">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    {truncateText(review.message, isExpanded, 10)}
                    <br />
                    {review.message.length > 10 && (
                      <button onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
