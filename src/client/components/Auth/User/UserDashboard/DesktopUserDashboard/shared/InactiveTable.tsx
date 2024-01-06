import React, {useState} from "react";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";
import { Carousel } from "@heathmont/moon-core-tw";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import SearchFilter from "./SearchAndFilter";


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
  const renderCarouselItems = () => {
    return headers.map((header, index) => (
      <Carousel.Item key={index}>
          <div>{header}</div>
      </Carousel.Item>
    ));
  };

  
  return (
    <div className="md:w-full">
      <div className="md:flex md:justify-between md:px-8">
        <h2 className="hidden md:block font-bold ">{title}</h2>
        <SearchFilter/>
      </div>
      <div className="bg-white w-full h-[28rem] md:h-[34rem] rounded-[1.25rem] p-4 md:p-8 mt-4">
        <div>
          <ul className="hidden font-bold md:flex justify-between px-4">
            {headers.map((header, index) => (
              <li key={index}>{header}</li>
            ))}
          </ul>
          <div className="md:hidden font-bold">
            <CustomCarousel renderCarouselItems={renderCarouselItems} />
          </div>
          <hr />
          <div className="flex flex-col justify-center items-center mt-24 md:mt-36 space-y-4">
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
