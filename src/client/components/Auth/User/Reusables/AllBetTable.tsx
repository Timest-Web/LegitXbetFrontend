import React from "react";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";
import SearchIcon from "@/src/client/shared/Svg/SearchIcon";
import FilterSearch from "@/src/client/shared/Svg/FilterSearch";
import ArrowDownIcon from "@/src/client/shared/Svg/ArrowDownIcon";

interface AllBetTableProps {
  title: string;
  headers: string[];
  noBetsMessage: string;
  placeBetButtonText: string|undefined;
}

const AllBetTable: React.FC<AllBetTableProps> = ({
  title,
  headers,
  noBetsMessage,
  placeBetButtonText,
}) => {
  return (
    <div>
      <div className="flex justify-between px-8">
        <h2 className="font-bold">{title}</h2>
        <div className="flex space-x-2 relative">
          <input
            type="text"
            className="border-[#292D32] border w-[225px] h-[41px] rounded-[35px] p-3 bg-[#ECEEF1]"
          />
          <div className="absolute top-2 flex space-x-2">
            <SearchIcon/>
            <h4 className=" opacity-50 ">Search</h4>
          </div>
          <input
            className="border-[#292D32] border w-[135px] h-[35px] bg-[#ECEEF1] p-2 mt-[0.15rem]"
          />
          <div className="absolute top-2 right-4 flex space-x-2">
            <FilterSearch/>
            <h2>Filter By</h2>
            <ArrowDownIcon/>
          </div>
        </div>
      </div>
      <div className="bg-white w-[980px] h-[544px] rounded-[20px] p-8 mt-4">
        <div>
          <ul className="font-bold flex justify-evenly">
            {headers.map((header, index) => (
              <li key={index}>{header}</li>
            ))}
          </ul>
          <hr />
          <div className="flex flex-col justify-center items-center mt-36 space-y-4">
            <PlaceBetIcon />
            <h3>{noBetsMessage}</h3>
           { placeBetButtonText && <button className="w-[128px] h-[38px] rounded-md bg-black p-2 text-white">
              {placeBetButtonText}
            </button>} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBetTable;
