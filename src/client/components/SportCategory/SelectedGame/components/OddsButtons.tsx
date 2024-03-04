import OddButton from "@/src/client/shared/Button/OddsButton/GameOddButton";

type OddsButtonProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  homeName: string;
  drawName: string;
  awayName: string;
  home: number;
  draw: number;
  away: number;
  oddOne: string;
  oddTwo: string;
  oddThree: string;
  sport: string;
  marketId: string;
  marketName: string;
};

export const OddsButtons = ({
  // id,
  // time,
  // teamOne,
  // teamTwo,
  // winOdd,
  // home,
  // drawOdd,
  // draw,
  // loseOdd,
  // away,
  // sport,
  // marketId,
  // marketName
  selectedOddObj
}: {selectedOddObj: OddsButtonProps}) => {
  // const extratedSelectedOddObj = {
  //   id,
  //   time,
  //   teamOne,
  //   teamTwo,
  //   home,
  //   draw,
  //   away,    
  //   sport,
  //   marketId,
  //   marketName
  // };

  return (
    <div className="flex flex-row space-x-2 w-full">
      <OddButton
        id={selectedOddObj.id}
        onextwo={selectedOddObj.oddOne}
        oddName={selectedOddObj.homeName}
        onextwoValue={selectedOddObj.home}
        selectedOddObj={selectedOddObj}
      />
      <OddButton
        id={selectedOddObj.id}
        onextwo={selectedOddObj.oddTwo}
        oddName={selectedOddObj.drawName}
        selectedOddObj={selectedOddObj}
        onextwoValue={selectedOddObj.draw}
      />
      <OddButton
        id={selectedOddObj.id}
        onextwo={selectedOddObj.oddThree}
        oddName={selectedOddObj.awayName}
        selectedOddObj={selectedOddObj}
        onextwoValue={selectedOddObj.away}
      />
    </div>
  );
};
