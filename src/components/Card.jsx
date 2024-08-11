"use client";

import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function Card({ result }) {
  const { theme } = useTheme();

  return (
    <div
      className={`group cursor-pointer rounded-lg sm:border ${
        theme === "dark"
          ? "border-slate-800 sm:hover:shadow-slate-400 sm:shadow-md"
          : "border-slate-300 sm:hover:shadow-slate-600 sm:shadow-md"
      } sm:m-2 transition-shadow duration-200`}
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt="Data is not fetching"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
