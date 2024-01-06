import React, {useState} from "react";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";
import SearchIcon from "@/src/client/shared/Svg/SearchIcon";
import FilterSearch from "@/src/client/shared/Svg/FilterSearch";
import ArrowDownIcon from "@/src/client/shared/Svg/ArrowDownIcon";
import { Carousel } from "@heathmont/moon-core-tw";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import { Dropdown, MenuItem } from "@heathmont/moon-core-tw";

interface AllBetTableProps {
  title: string;
  headers: string[];
  noBetsMessage: string;
  placeBetButtonText: string | undefined;
  buttonAction?: () => void;
}
type Day = {
  day: string;
};

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
        <div className="">
          <div>{header}</div>
        </div>
      </Carousel.Item>
    ));
  };
  const dayOption = [
    { day: "All" },
    { day: "Today" },
    { day: "Yesterday" },
    { day: "Past 5 days" },
    { day: "Past 10 days" },
  ];
  const [option, setOption] = useState<Day | null>(null);
  return (
    <div className="md:w-full">
      <div className="md:flex md:justify-between md:px-8">
        <h2 className="hidden md:block font-bold ">{title}</h2>
        <div className="flex space-x-4 md:space-x-2">
          <input
            type="text"
            placeholder="Search"
            className=" bg-searchIcon bg-no-repeat bg-[center_left_1rem] border-[#292D32] border w-[14.0625rem] h-[2.5625rem] rounded-[2.1875rem] pl-12 bg-[#ECEEF1]"
          />
            <div className="flex rounded-md md:rounded-none bg-filterIcon bg-no-repeat bg-[center_left_0.2rem] pl-6 w-36 h-9 mt-[0.1rem] items-center bg-[#ECEEF1] border-[#292D32] border ">
              <Dropdown
                className=""
                value={option}
                onChange={setOption}
              >
                {({ open }) => (
                  <>
                    <Dropdown.InsetSelect open={open} placeholder="Filter By">
                      {option?.day}
                    </Dropdown.InsetSelect>

                    <Dropdown.Options className=" bg-white rounded-2xl ">
                      {dayOption.map((pickedDay, index) => (
                        <Dropdown.Option value={pickedDay} key={index}>
                          {({ selected, active }) => (
                            <MenuItem isActive={active} isSelected={selected}>
                              
                              <MenuItem.Checkbox
                                className="bg-[white] border-black border "
                                isSelected={selected}
                              />
                              <MenuItem.Title>{pickedDay.day}</MenuItem.Title>
                            </MenuItem>
                          )}
                        </Dropdown.Option>
                      ))}
                    </Dropdown.Options>
                  </>
                )}
              </Dropdown>
            </div>
        </div>
      </div>
      <div className="bg-white w-full h-[34rem] rounded-[1.25rem] p-4 md:p-8 mt-4">
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
