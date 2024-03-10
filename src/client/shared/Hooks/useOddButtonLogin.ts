import { useEffect, useState } from "react";
import useBet from "../Context/BetContext/useBet";
import { SelectedOddsObjectProps } from "../Context/BetContext/constant";


const useOddButtonLogic = ({
  id,
  oddName,
  onextwoValue,
}: {
  id: number;
  onextwo?: string;
  oddName: string;
  onextwoValue?: string;
}) => {
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
      handleDelete({ id, odd, oddName, });
    }
  };

  useEffect(() => {
    const isObjectExist = bet.some(
      (item) =>
        item.id === id && item.oddName === oddName && item.odd === onextwoValue
    );
    setIsBet(isObjectExist);
  }, [bet, id, oddName, onextwoValue]);


  return {
    onHandleClick,
    isBet,
    color,
  };
};

export default useOddButtonLogic;
