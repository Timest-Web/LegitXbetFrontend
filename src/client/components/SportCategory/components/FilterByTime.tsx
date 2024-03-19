import React, { useEffect, useState, useMemo, SetStateAction } from "react";
import SingleThumbRange from "@/src/client/shared/Range/SingleThumbRange";

interface TimeLabels {
  [key: number]: string;
}

const FilterByTime = ({
  setSelectedHour,
}: {
  setSelectedHour: Function;
}) => {
  const [filterValue, setFilterValue] = useState<number>(100);
  const timeLabels: TimeLabels = useMemo(() => {
    return {
      0: "1hr",
      20: "3hr",
      40: "6hr",
      60: "12hr",
      80: "24hr",
      100: "All",
    };
  }, []);

  useEffect(() => {
    const getTimeRangeLabel = (value: number): string => {
      return timeLabels[value] || "";
    };
    setSelectedHour(getTimeRangeLabel(filterValue));
  }, [setSelectedHour, timeLabels, filterValue]);

  return (
    <div className="w-[243px] bg-black px-2 py-3 rounded-lg">
      <p className="font-thin text-xs text-gray-400">Filter by start time</p>
      <SingleThumbRange step={20} setRangeValue={setFilterValue} />
      <div className="flex items-start justify-between text-gray-400 mt-2">
        {Object.values(timeLabels).map((label, index) => (
          <p key={index} className="text-[9px]">
            {label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilterByTime;
