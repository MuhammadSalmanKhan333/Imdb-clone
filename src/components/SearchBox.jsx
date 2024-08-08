"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex justify-between px-5 mt-2 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 border-[1px] outline-none border-teal-300 pl-3 rounded-tl-lg rounded-bl-md placeholder-gray-500 bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-[aqua] cursor-pointer rounded-tr-lg rounded-br-md  p-4 text-amber-700 disabled:text-gray-400 disabled:hover:text-purple-600"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
