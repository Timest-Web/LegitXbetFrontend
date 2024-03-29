import OddButton from "./OddButton";

type OddsButtonProps = {
  id: number;
  time: string;
  teamOne: string;
  teamTwo: string;
  homeName: string;
  drawName: string;
  awayName: string;
  home: string;
  draw: string;
  away: string;
  oddOne: string;
  oddTwo: string;
  oddThree: string;
  sport: string;
  marketId: string;
  marketName: string;
};

export const OddsButtons = ({
  selectedOddObj,
}: {
  selectedOddObj: OddsButtonProps;
}) => (
  
  <div className="flex flex-row space-x-2">
    <OddButton
      id={selectedOddObj.id}
      onextwo={selectedOddObj.oddOne}
      oddName={selectedOddObj.homeName}
      selectedOddObj={selectedOddObj}
      onextwoValue={selectedOddObj.home}
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
