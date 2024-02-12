import React, { useEffect, useState } from "react";
import useBet from "../../Context/BetContext/useBet";
import { useButtonEventClick } from "../../Hooks/useButtonEventClick";

type SelectedOddsObjectProps = {
	id: number;
	time: string;
	teamOne: string;
	teamTwo: string;
	winType?: number | undefined;
	drawType: number;
	loseType?: number | undefined;
};

const OddButton = ({
	id,
	onextwo,
	onextwoValue,
	selectedOddObj,
}: {
	id: number;
	onextwo?: string;
	onextwoValue?: number;
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
			addToBetSlip(id, oddName,odd, selectedOddObj);

		if (color) {
			const isObjectExist = bet.some(
				(item) => item.id === id && item.odd === onextwoValue
			);
			setIsBet(isObjectExist);handleDelete({ id, odd });
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
              onHandleClick(id, onextwo, onextwoValue, selectedOddObj);
            }
          }}
          type="submit"
          className={`flex items-center justify-between transition-all transform ${
            isBet ? " text-black bg-gold" : "text-white bg-lightAsh "
          } lg:text-xs text-[10px] w-full px-2 h-8 rounded-md ${
            click ? "scale-75" : ""
          } font-bold`}
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
