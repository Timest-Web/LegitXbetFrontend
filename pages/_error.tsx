// pages/_error.js

import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-gray-400">
      <h1 className="lg:text-5xl font-bold">Oops! <span className="text-gold lg:text-8xl text-5xl"> 404 </span> Page Not Found</h1>
      <p className="lg:text-2xl mt-2">The page you are looking for could not be found.</p>
      <Link href='/' className="text-gray-5 underline text-white cursor-pointer mt-12">Go to home page</Link>
    </div>
  );
};

export default Custom404;
