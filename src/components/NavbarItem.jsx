"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold relative ${
          genre === param ? "active" : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
        <span
          className={`absolute left-0 top-[1.7rem] h-[3px] w-full bg-amber-500 transition-transform duration-300 transform ${
            genre === param ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </Link>
    </div>
  );
}
