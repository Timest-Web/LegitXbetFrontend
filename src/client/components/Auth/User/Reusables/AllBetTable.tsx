import React from "react";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";

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
        <div className="flex space-x-2">
          <input
            type="text"
            className="border-[#292D32] border w-[225px] h-[41px] rounded-[35px] bg-[#ECEEF1]"
            placeholder="Search"
          />
          <input
            className="border-[#292D32] border w-[135px] h-[35px] bg-[#ECEEF1] mt-[0.15rem]"
            placeholder="Filter"
          />
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
