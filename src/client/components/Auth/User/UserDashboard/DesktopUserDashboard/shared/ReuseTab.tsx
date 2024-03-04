import Link from "next/link";
import React from "react";

interface ReuseTabProps {
  icon: React.JSX.Element;
  figure: number | string;
  description: string;
  href: string;
}

const ReuseTab: React.FC<ReuseTabProps> = ({
  icon,
  figure,
  description,
  href,
}) => {
  return (
    <Link href={href}>
      <div className=" w-[99.5%] cursor-pointer md:w-11/12 bg-gray-300 flex space-x-3 p-3 rounded-lg font-bold ">
        <div>{icon}</div>
        <div>
          <p className="text-lg">{figure}</p>
          <p className="text-sm ">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ReuseTab;
