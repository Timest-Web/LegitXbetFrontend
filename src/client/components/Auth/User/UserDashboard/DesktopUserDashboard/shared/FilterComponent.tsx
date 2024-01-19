import { Dropdown, MenuItem } from "@heathmont/moon-core-tw";
import { useState } from "react";

type Day = {
  day: string;
};

const FilterComponent = () => {
  const [option, setOption] = useState<Day | null>(null);
  const dayOption = [
    { day: "All" },
    { day: "Today" },
    { day: "Yesterday" },
    { day: "Past 5 days" },
    { day: "Past 10 days" },
  ];
  return (
    <div className="flex rounded-md md:rounded-none bg-filterIcon bg-no-repeat bg-[center_left_0.2rem] pl-6 w-36 h-9 mt-[0.1rem] items-center bg-[#ECEEF1] border-[#292D32] border ">
      <Dropdown className="" value={option} onChange={setOption}>
        {({ open }) => (
          <>
            <Dropdown.Select open={open} placeholder="Filter By">
              {option?.day}
            </Dropdown.Select>

            <Dropdown.Options className=" bg-white rounded-2xl ">
              {dayOption.map((pickedDay, index) => (
                <Dropdown.Option value={pickedDay} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isSelected={selected}>
                      <MenuItem.Checkbox
                        className="border-black border "
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
  );
};

export default FilterComponent;
