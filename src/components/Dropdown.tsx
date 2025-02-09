'use client'
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
export default function CustomSelect() {
  const [selected, setSelected] = useState("Comedy");

  return (
    <div className="relative w-64 mb-4">
      <select
        className="block w-full px-4 py-2 text-white bg-black border border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option className="bg-black text-white" value="Comedy">Comedy</option>
        <option className="bg-black text-white" value="Action">Action</option>
        <option className="bg-black text-white" value="Horror">Horror</option>
        <option className="bg-black text-white" value="Romance">Romance</option>
        <option className="bg-black text-white" value="SciFi">SciFi</option>
        <option className="bg-black text-white" value="Drama">Drama</option>
        <option className="bg-black text-white" value="Animation">Animation</option>
      </select>
      <GoChevronDown className="absolute top-3 right-3 text-gray-400 pointer-events-none" />
    </div>
  );
}
