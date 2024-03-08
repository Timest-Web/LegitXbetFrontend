import React, { useEffect, useState } from "react";
import useBet from "../../Context/BetContext/useBet";
import { useButtonEventClick } from "../../Hooks/useButtonEventClick";

type SelectedOddsObjectProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  home?: string | undefined;
  draw: string;
  away?: string | undefined;
  sport: string;
  marketId: string;
  marketName: string;
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
  onextwoValue: string;
  selectedOddObj: SelectedOddsObjectProps;
}) => {
  const { click, handleClick } = useButtonEventClick();
  const { bet, addToBetSlip, handleDelete } = useBet();
  const [color, setColor] = useState(false);
  const [isBet, setIsBet] = useState(false);

  const onHandleClick = (
    id: number,
    oddName: string,
    odd: string,
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
      (item) => item.id === id && item.odd === onextwoValue && item.oddName === onextwo
    );
    setIsBet(isObjectExist);
  }, [bet, id, onextwoValue, oddName]);

  return (
    <button
      onClick={() => {
        handleClick();
        onHandleClick(id, oddName, onextwoValue, selectedOddObj);
      }}
      type="submit"
      className={`flex items-center justify-between transition-all transform ${
        isBet ? " text-black bg-gold" : "bg-lightAsh hover:bg-gray-800"
      } text-xs w-20 px-2 h-6 rounded-md ${click ? "scale-75" : ""}`}
    >
      <p>{onextwo}</p>
      <p className={`${isBet ? "text-black" : "text-gold"} font-bold`}>
        {onextwoValue}
      </p>
    </button>
  );
};

export default OddsButton;
