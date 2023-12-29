import React from "react";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";
import SearchIcon from "@/src/client/shared/Svg/SearchIcon";
import FilterSearch from "@/src/client/shared/Svg/FilterSearch";
import ArrowDownIcon from "@/src/client/shared/Svg/ArrowDownIcon";

interface AllBetTableProps {
  title: string;
  headers: string[];
  noBetsMessage: string;
  placeBetButtonText: string | undefined;
  buttonAction?: () => void;
}

const AllBetTable: React.FC<AllBetTableProps> = ({
  title,
  headers,
  noBetsMessage,
  placeBetButtonText,
  buttonAction,
}) => {
  return (
    <div>
      <div className="flex justify-between px-8">
        <h2 className="font-bold">{title}</h2>
        <div className="flex space-x-2 relative">
          <input
            type="text"
            className="border-[#292D32] border w-[14.0625rem] h-[2.5625rem] rounded-[2.1875rem] text-center p-1.875rem bg-[#ECEEF1]"
          />
          <div className="absolute top-2 flex space-x-2">
            <SearchIcon />
            <h4 className="opacity-50">Search</h4>
          </div>
          <input
            className="border-[#292D32] border w-[8.4375rem] h-[2.1875rem] bg-[#ECEEF1] p-2 mt-[0.15rem]"
          />
          <div className="absolute top-2 right-4 flex space-x-2">
            <FilterSearch />
            <h2>Filter By</h2>
            <ArrowDownIcon />
          </div>
        </div>
      </div>
      <div className="bg-white w-[61.25rem] h-[34rem] rounded-[1.25rem] p-8 mt-4">
        <div>
          <ul className="font-bold flex justify-between px-4">
            {headers.map((header, index) => (
              <li key={index}>{header}</li>
            ))}
          </ul>
          <hr />
          <div className="flex flex-col justify-center items-center mt-36 space-y-4">
            <PlaceBetIcon />
            <h3>{noBetsMessage}</h3>
            {placeBetButtonText && (
              <button
                onClick={buttonAction}
                className="w-[8rem] h-[2.375rem] rounded-md bg-black p-2 text-white"
              >
                {placeBetButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBetTable;
