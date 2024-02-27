import React, { useEffect, useState } from "react";
import useBet from "../../Context/BetContext/useBet";
import { useButtonEventClick } from "../../Hooks/useButtonEventClick";
import { useMutation } from "@tanstack/react-query";
import { addGame } from "@/src/helper/apis/services/ticket/add-game-api";

type SelectedOddsObjectProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  home: number;
  draw: number;
  away: number;
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
  onextwoValue: number;
  selectedOddObj: SelectedOddsObjectProps;
}) => {
  const { mutateAsync } = useMutation({ mutationFn: addGame });
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

  // const handleAddGame = () => {
  //   const addGameObj = {
  //     sport: selectedOddObj.sport,
  //     marketId: selectedOddObj.marketId,
  //     matchId: Number(selectedOddObj.id),
  //     marketName: selectedOddObj.marketName,
  //     oddName,
  //     odd: onextwoValue,
  //   };

  //   mutateAsync(addGameObj).then(() => {})
  // };

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
        // handleAddGame();
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
