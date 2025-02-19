import ReviewCard from "@/components/profile/ReviewCard";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
const UserReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Juanpa Zurita",
      date: "Jun 15,2024",
      image:
        "https://image.tmdb.org/t/p/original//d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
      rating: 3,
      message:
        "three different movies but never feels disconnected od disjoint. it transform into characters as effortlessly.",
      avatar:
        "https://image.tmdb.org/t/p/original//d4f4cQ9EiYuvNMjT1IB2h06KoRx.jpg",
    },
    {
      id: 2,
      name: "Juanpa Zurita",
      date: "Jun 15,2023",
      image:
        "https://image.tmdb.org/t/p/original//d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
      rating: 3,
      message:
        "three different movies but never feels disconnected od disjoint. it transform into characters as effortlessly.",
      avatar:
        "https://image.tmdb.org/t/p/original//d4f4cQ9EiYuvNMjT1IB2h06KoRx.jpg",
    },
  ];
  return (
    <div className="mt-5">
      <SectionTitle title="Reviews" />
      <div className="flex flex-col gap-4">
        {reviews.length === 0 && <p>No Reveis Added</p>}
        {reviews.map((item) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
