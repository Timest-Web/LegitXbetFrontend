import React from "react";

interface ReuseTabProps {
  icon: React.JSX.Element;
  figure: number ;
  description: string;
}

const ReuseTab: React.FC<ReuseTabProps> = ({ icon, figure, description }) => {
  return (
    <div className=" w-[99.5%] md:w-11/12 bg-gray-300 flex space-x-3 p-3 rounded-lg font-bold ">
      <div>{icon}</div>
      <div>
        <p className="text-lg">{figure}</p>
        <p className="text-sm ">{description}</p>
      </div>
    </div>
  );
};

export default ReuseTab;
