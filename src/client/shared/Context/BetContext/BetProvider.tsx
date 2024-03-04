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
    odd: number,
    selectedOddObj: SelectedOddsObjectProps
  ) => {
    if (id) {
      if (selectedOddObj) {
        const checkSelected = bet.find(
          (obj: OddsValuesProps) => obj.id === id && obj.odd === odd
        );

        if (!checkSelected) {
          const oddType = Object.entries(selectedOddObj).find(
            ([key, value]) => value === odd
          );

          if (oddType) {
            setBet([
              ...bet,
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
            ]);
          } else {
            console.error(`OddType not found for odd ${odd}`);
          }
        } else {
          console.log("Odd already added");
        }
      } else {
        console.error(`Item with ID ${id} and odd ${odd} not found`);
      }
    }
  };

  const handleDelete = ({ id, odd }: { id: number; odd: number }) => {
    if (id) {
      const updateBetList = bet.filter(
        (betItem) => !(betItem.id === id && betItem.odd === odd)
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
