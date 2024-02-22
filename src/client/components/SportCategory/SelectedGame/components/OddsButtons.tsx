import OddButton from "@/src/client/shared/Button/OddsButton/GameOddButton";

type OddsButtonProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  winOdd?: string;
  home?: number;
  drawOdd: string;
  draw: number;
  loseOdd?: string;
  away?: number;
};

export const OddsButtons = ({
  id,
  time,
  teamOne,
  teamTwo,
  winOdd,
  home,
  drawOdd,
  draw,
  loseOdd,
  away,
}: OddsButtonProps) => {
  const extratedSelectedOddObj = {
    id,
    time,
    teamOne,
    teamTwo,
    home,
    draw,
    away,
  };

  return (
    <div className="flex flex-row space-x-2 w-full">
      <OddButton
        id={id}
        onextwo={winOdd}
        onextwoValue={home}
        selectedOddObj={extratedSelectedOddObj}
      />
      <OddButton
        id={id}
        onextwo={drawOdd}
        onextwoValue={draw}
        selectedOddObj={extratedSelectedOddObj}
      />
      <OddButton
        id={id}
        onextwo={loseOdd}
        onextwoValue={away}
        selectedOddObj={extratedSelectedOddObj}
      />
    </div>
  );
};
