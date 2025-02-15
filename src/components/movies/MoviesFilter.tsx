import React from "react";

const MoviesFilter = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-black p-4">
      <select className="border border-gray-500 bg-black text-white px-4 py-2 rounded-md">
        <option>Year</option>
      </select>
      <select className="border border-gray-500 bg-black text-white px-4 py-2 rounded-md">
        <option>Rating</option>
      </select>
      <select className="border border-gray-500 bg-black text-white px-4 py-2 rounded-md">
        <option>Popular</option>
      </select>
      <select className="border border-gray-500 bg-black text-white px-4 py-2 rounded-md">
        <option>Geners</option>
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
