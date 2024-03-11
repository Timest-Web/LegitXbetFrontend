import Link from "next/link";
import React from "react";

interface ReuseTabProps {
  icon: React.JSX.Element;
  figure: number | string;
  description: string;
  href: string;
}

const AdminReuseTab: React.FC<ReuseTabProps> = ({
  icon,
  figure,
  description,
  href,
}) => {
  return (
    <Link href={href}>
      <div className="cursor-pointer md:w-11/12 bg-white flex space-x-3 p-3 rounded-lg font-bold drop-shadow-xl hover:translate-x-1 hover:translate-y-1 ">
        <div className="bg-gray-100 p-4 rounded-md">{icon}</div>
        <div>
          <p className="text-lg">{figure}</p>
          <p className="text-sm ">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default AdminReuseTab;
