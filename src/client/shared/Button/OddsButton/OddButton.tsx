import React from "react";
import { useButtonEventClick } from "../../Hooks/useButtonEventClick";
import { SelectedOddsObjectProps } from "../../Context/BetContext/constant";
import useOddButtonLogic from "../../Hooks/useOddButtonLogin";

const OddButton = ({
  id,
  onextwo,
  oddName,
  onextwoValue,
  selectedOddObj,
}: {
  id: number;
  onextwo: string;
  oddName: string;
  onextwoValue: string;
  selectedOddObj: SelectedOddsObjectProps;
}) => {
  const { click, handleClick } = useButtonEventClick();
  const { onHandleClick, isBet } = useOddButtonLogic({
    id,
    oddName,
    onextwoValue,
  });

  return (
    <button
      onClick={() => {
        handleClick();
        onHandleClick(id, oddName, onextwoValue, selectedOddObj);
      }}
      type="submit"
      className={`flex items-center justify-between transition-all transform ${
        isBet ? "text-black bg-gold" : "bg-lightAsh hover:bg-gray-800"
      } text-xs w-20 px-2 h-6 rounded-md ${click ? "scale-75" : ""}`}
    >
      <p>{onextwo}</p>
      <p className={`${isBet ? "text-black" : "text-gold"} font-bold`}>
        {onextwoValue}
      </p>
    </button>
  );
};

export default OddButton;
