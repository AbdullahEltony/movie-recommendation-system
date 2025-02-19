import React from "react";

const MoviesFilter = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-black p-4">
      <select className="border border-gray-500 bg-black text-white px-4 py-2 rounded-md">
        <option>Year</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
      </select>
      <select className="border border-gray-500 bg-black text-white px-4 py-2 rounded-md">
        <option>Rating</option>
        <option>0 - poor</option>
        <option>1 - Bad </option>
        <option>2 - Okay</option>
        <option>3 - Good</option>
        <option>4 - Very Good</option>
        <option>5 - Exellent</option>
      </select>
      <select className="border border-gray-500 bg-black text-white px-4 py-2 rounded-md">
        <option>Popular</option>
        <option>Most Popular</option>
        <option>Less Popular</option>
      </select>
      <select className="border border-gray-500 bg-black text-white px-4 py-2 rounded-md">
        <option>Geners</option>
        <option>Romantic</option>
        <option>Drama</option>
        <option>Action</option>
        <option>Geners</option>
        <option>Comidy</option>
      </select>
      <input
        type="text"
        placeholder="Search..."
        className="col-span-2 lg:col-span-1 border border-gray-500 bg-black text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
      />
    </div>
  );
};

export default MoviesFilter;
