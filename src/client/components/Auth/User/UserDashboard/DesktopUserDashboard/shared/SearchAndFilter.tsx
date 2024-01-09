import { useState } from "react";
import { Dropdown, MenuItem } from "@heathmont/moon-core-tw";

type Day = {
  day: string;
};

const SearchFilter = () => {
  const [option, setOption] = useState<Day | null>(null);
  const dayOption = [
    { day: "All" },
    { day: "Today" },
    { day: "Yesterday" },
    { day: "Past 5 days" },
    { day: "Past 10 days" },
  ];
  return (
    <div className="flex justify-evenly md:space-x-2">
      <input
        type="text"
        placeholder="Search"
        className=" bg-searchIcon bg-no-repeat bg-[center_left_1rem] border-[#292D32] border w-[12rem] md:w-[14.0625rem] h-[2.5625rem] rounded-[2.1875rem] pl-12 bg-[#ECEEF1]"
      />
      <div className="flex rounded-md md:rounded-none bg-filterIcon bg-no-repeat bg-[center_left_0.2rem] pl-6 w-36 h-9 mt-[0.1rem] items-center bg-[#ECEEF1] border-[#292D32] border ">
        <Dropdown className="" value={option} onChange={setOption}>
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
  );
};

export default SearchFilter;
