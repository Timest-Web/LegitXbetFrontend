import React, { useEffect, useState } from "react";
import useBet from "../../Context/BetContext/useBet";
import { useButtonEventClick } from "../../Hooks/useButtonEventClick";

type SelectedOddsObjectProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  home: number;
  draw: number;
  away: number;
};

const OddsButton = ({
  id,
  onextwo,
  oddName,
  onextwoValue,
  selectedOddObj,
}: {
  id: number;
  onextwo: string;
  oddName: string;
  onextwoValue: number;
  selectedOddObj: SelectedOddsObjectProps;
}) => {
  const { click, handleClick } = useButtonEventClick();
  const { bet, addToBetSlip, handleDelete } = useBet();
  const [color, setColor] = useState(false);
  const [isBet, setIsBet] = useState(false);

  const onHandleClick = (
    id: number,
    oddName: string,
    odd: number,
    selectedOddObj: SelectedOddsObjectProps
  ) => {
    setColor(!color);
    addToBetSlip(id, oddName, odd, selectedOddObj);

    if (color) {
      handleDelete({ id, odd });
    }
  };

  useEffect(() => {
    const isObjectExist = bet.some(
      (item) => item.id === id && item.odd === onextwoValue
    );
    setIsBet(isObjectExist);
  }, [bet, id, onextwoValue]);

  return (
    <button
      onClick={() => {
        handleClick();
        onHandleClick(id, oddName, onextwoValue, selectedOddObj);
      }}
      type="submit"
      className={`flex items-center justify-between transition-all transform ${
        isBet ? " text-black bg-gold" : "bg-lightAsh "
      } text-xs w-20 px-2 h-6 rounded-md ${click ? "scale-75" : ""}`}
    >
      <p>{onextwo}</p>
      <p className={`${isBet ? "text-black" : "text-gold "} font-bold`}>
        {onextwoValue}
      </p>
    </button>
  );
};

export default OddsButton;
