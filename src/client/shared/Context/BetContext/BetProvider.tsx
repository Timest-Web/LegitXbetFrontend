import React, { useEffect, useState, useRef } from "react";
import { BetContext } from "./BetContext";
import { OddsValuesProps, SelectedOddsObjectProps } from "./constant";

type BetProviderProps = {
  children: React.ReactNode;
};

export const BetProvider: React.FC<BetProviderProps> = ({
  children,
}: BetProviderProps) => {
  const initialRender = useRef(true);
  const [bet, setBet] = useState<OddsValuesProps[]>([]);

  useEffect(() => {
    const betFromLocalStorage = JSON.parse(localStorage.getItem("bet") || "[]");
    setBet(betFromLocalStorage);
  }, []);
  
  const addToBetSlip = (
    id: number,
    oddName: string,
    odd: string,
    selectedOddObj: SelectedOddsObjectProps
  ) => {
    if (id && oddName && odd) {
      if (selectedOddObj) {
        setBet((prevBet) => {
          const isItemInBetSlip = prevBet.some(
            (item) =>
              item.id === selectedOddObj.id &&
              item.oddName === oddName &&
              item.odd === odd
          );

          if (!isItemInBetSlip) {
            return [
              ...prevBet,
              {
                id: selectedOddObj.id,
                time: selectedOddObj.time,
                teamOne: selectedOddObj.teamOne,
                teamTwo: selectedOddObj.teamTwo,
                odd: odd,
                sport: selectedOddObj.sport,
                marketId: selectedOddObj.marketId,
                marketName: selectedOddObj.marketName,
                oddName,
              },
            ];
          } else {
            handleDelete({ id, odd, oddName });
            return prevBet;
          }
        });
      } else {
        console.error(`Item with ID ${id} and odd ${odd} not found`);
      }
    }
  };

  const handleDelete = ({
    id,
    odd,
    oddName,
  }: {
    id: number;
    odd: string;
    oddName: string;
  }) => {
    if (id && odd && oddName) {
      const updateBetList = bet.filter(
        (betItem) =>
          !(
            betItem.id === id &&
            betItem.odd === odd &&
            betItem.oddName === oddName
          )
      );
      setBet([...updateBetList]);
    }
  };

  const handleDeleteAll = () => {
    setBet([]);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    window.localStorage.setItem("bet", JSON.stringify(bet));
  }, [bet]);

  return (
    <BetContext.Provider
      value={{
        handleDeleteAll,
        addToBetSlip,
        handleDelete,
        bet,
      }}
    >
      {children}
    </BetContext.Provider>
  );
};
