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

const OddButton = ({
  id,
  onextwo,
  oddName,
  onextwoValue,
  selectedOddObj,
}: {
  id: number;
  onextwo?: string;
  oddName: string;
  onextwoValue?: string;
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
      const isObjectExist = bet.some(
        (item) => item.id === id && item.odd === onextwoValue
      );
      setIsBet(isObjectExist);
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
    <>
      {onextwoValue !== undefined && (
        <button
          onClick={() => {
            handleClick();
            if (onextwo !== undefined) {
              onHandleClick(id, oddName, onextwoValue, selectedOddObj);
            }
          }}
          type="submit"
          className={`flex items-center justify-between transition-all transform ${
            isBet ? " text-black bg-gold" : "text-white bg-lightAsh "
          } lg:text-xs text-[10px] w-full px-2 h-8 rounded-md ${
            click ? "scale-75" : ""
          }`}
        >
          <p>{onextwo}</p>
          <p className={`${isBet ? "text-black" : "text-gold "} font-bold`}>
            {onextwoValue}
          </p>
        </button>
      )}
    </>
  );
};

export default OddButton;
