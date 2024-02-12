import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LINK_GAME_TYPES } from "../constant";

const SportBetMenu = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center bg-gold h-10 w-full space-x-12 shadow-2xl">
      {LINK_GAME_TYPES.map((value, index) => (
        <Link
          href={`${
            value.href === "/"
              ? "/"
              : `/sports/${value.page.toLowerCase().replace(/ /g, "-")}`
          }`}
          key={index}
          className={`${
            `/sports${value.href}` === router.pathname
              ? "text-black"
              : "text-gray-600"
          } cursor-pointer h-20 flex flex-col items-end justify-center text-sm hover:text-black font-bold`}
        >
          <p>{value.page}</p>
        </Link>
      ))}
    </div>
  );
};

export default SportBetMenu;
