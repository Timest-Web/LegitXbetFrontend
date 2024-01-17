import React, { useState } from "react";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";
import { Carousel } from "@heathmont/moon-core-tw";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import SearchFilter from "./SearchAndFilter";
import Link from "next/link";

interface AllBetTableProps {
  title: string;
  headers: string[];
  noBetsMessage: string;
  placeBetButtonText: string | undefined;
  buttonAction?: () => void;
  betStatus?: React.JSX.Element;
  buttonLink: string;
}

const AllBetTable: React.FC<AllBetTableProps> = ({
  title,
  headers,
  noBetsMessage,
  placeBetButtonText,
  buttonAction,
  betStatus,
  buttonLink
}) => {
  const renderCarouselItems = () => {
    return headers.map((header, index) => (
      <Carousel.Item key={index}>
        <div>{header}</div>
      </Carousel.Item>
    ));
  };

  return (
    <div className="md:w-full pb-1">
      <div className="md:flex md:justify-between md:px-8">
        <section>
          <h2 className="hidden md:block font-bold ">{title}</h2>
         <div className="mt-6" >{betStatus}</div> 
        </section>
        <SearchFilter />
      </div>
      <div className="bg-white w-full h-[50vh] md:h-[34rem] rounded-[1.25rem] mb-24 p-4 md:p-8 mt-4">
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
          <div className="flex flex-col place-items-center h-72 md:h-96 justify-center items-center space-y-4">
            <PlaceBetIcon />
            <h3>{noBetsMessage}</h3>
            {placeBetButtonText && (
            <Link href={buttonLink}> <button
                onClick={buttonAction}
                className="w-[8rem] h-[2.375rem] rounded-md bg-black p-2 text-white"
              >
                {placeBetButtonText}
              </button></Link> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBetTable;
