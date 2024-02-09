import OddButton from "@/src/client/shared/Button/OddsButton/GameOddButton";

type OddsButtonProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  winOdd?: string;
  winType?: number;
  drawOdd: string;
  drawType: number;
  loseOdd?: string;
  loseType?: number;
};

export const OddsButtons = ({
  id,
  time,
  teamOne,
  teamTwo,
  winOdd,
  winType,
  drawOdd,
  drawType,
  loseOdd,
  loseType,
}: OddsButtonProps) => {
  const extratedSelectedOddObj = {
    id,
    time,
    teamOne,
    teamTwo,
    winType,
    drawType,
    loseType,
  };

  return (
    <div className="flex flex-row space-x-2 w-full">
		<OddButton
			id={id}
			onextwo={winOdd}
			onextwoValue={winType}
			selectedOddObj={extratedSelectedOddObj}
		/>
		<OddButton
			id={id}
			onextwo={drawOdd}
			onextwoValue={drawType}
			selectedOddObj={extratedSelectedOddObj}
		/>
		<OddButton
			id={id}
			onextwo={loseOdd}
			onextwoValue={loseType}
			selectedOddObj={extratedSelectedOddObj}
		/>
    </div>
  );
};
