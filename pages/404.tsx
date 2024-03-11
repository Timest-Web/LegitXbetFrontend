import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/logo1.png";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-gray-400 lg:p-0 px-6">
      <Image src={Logo} alt="img alt" />
      <h1 className="lg:text-5xl font-bold lg:mt-0 mt-5">
        Oops! <span className="text-gold lg:text-8xl text-5xl"> 404 </span> Page
        Not Found
      </h1>
      <p className="lg:text-2xl mt-2">
        The page you are looking for could not be found.
      </p>
      <Link
        href="/"
        className="text-gray-5 underline text-black cursor-pointer mt-12 bg-gold px-6 py-4 font-bold"
      >
        Go to home page
      </Link>
    </div>
  );
}
