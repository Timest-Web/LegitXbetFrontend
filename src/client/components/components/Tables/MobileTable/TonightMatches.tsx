import BetTable from "./components/BetTable";
import { SPORTS_DATA } from "../../../LandingPage/constant/data";
import MatchStar from "@/src/client/shared/Svg/MatchStar";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";


export const TonightTable = () => {
  const {
    odds,
    leagues,
    sportData,
    setSelectedDate,
    setSelectedSport,
    setSelectedLeague,
    extractedSportType,
  } = useBetTable(SPORTS_DATA?.TopMatches);

  return (
    <BetTable
      href="tonightmatches"
      icon={<MatchStar />}
      odds={odds}
      leagues={leagues}
      isLiveTable={false}
      sportData={sportData}
      contentTitle="Tonight Matches"
      sportsType={extractedSportType}
      setSelectedDate={setSelectedDate}
      setSelectedSport={setSelectedSport}
      setSelectedLeague={setSelectedLeague}
    />
  );
};
