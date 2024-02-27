import OddsButton from "@/src/client/shared/Button/OddsButton/OddsButton";

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
};

export const OddsButtons = ({
  selectedOddObj,
}: {
  selectedOddObj: OddsButtonProps;
}) => (
  <div className="flex flex-row space-x-2">
    <OddsButton
      id={selectedOddObj.id}
      onextwo={selectedOddObj.oddOne}
      oddName={selectedOddObj.homeName}
      selectedOddObj={selectedOddObj}
      onextwoValue={selectedOddObj.home}
    />
    <OddsButton
      id={selectedOddObj.id}
      onextwo={selectedOddObj.oddTwo}
      oddName={selectedOddObj.drawName}
      selectedOddObj={selectedOddObj}
      onextwoValue={selectedOddObj.draw}
    />
    <OddsButton
      id={selectedOddObj.id}
      onextwo={selectedOddObj.oddThree}
      oddName={selectedOddObj.awayName}
      selectedOddObj={selectedOddObj}
      onextwoValue={selectedOddObj.away}
    />
  </div>
);
