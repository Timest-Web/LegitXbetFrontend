import React from 'react'
import DeleteIcon from '../../Svg/DeleteIcon';
import { truncateText } from '../../Utils/TruncateText';
import { BetItemProps } from '../constant/data';

const BetItem: React.FC<BetItemProps> = ({ index, value, onDelete }) => {
  const truncatedTeamOne = truncateText(value.teamOne, 10);
  const truncatedTeamTwo = truncateText(value.teamTwo, 10);

  return (
    <div className="">
      <div className="flex items-start space-x-7 w-full text-black text-xs">
        <div className="flex items-start space-x-8 w-full">
          <p className="w-1">{`${index + 1}.`}</p>
          <div className="flex items-start justify-between space-x-3 text-[10px] w-full">
            <p>{truncatedTeamOne}</p>
            <p>v</p>
            <div className="flex flex-col">
              <p>{truncatedTeamTwo}</p>
            </div>
          </div>
        </div>
        {onDelete && (
          <div
            onClick={() => onDelete(value.id, value.odd)}
            className="cursor-pointer"
          >
            <DeleteIcon />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-[10px] pl-9">{`${
          value.oddName.includes(":")
            ? `Correct Score[${value.oddName}]`
            : value.oddName
        }`}</p>
        <p className="font-bold text-[12px] pr-1">{value.odd}</p>
      </div>
    </div>
  );
};


export default BetItem;