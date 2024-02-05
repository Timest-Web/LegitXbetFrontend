import BetTable from "./components/BetTable";
import { SPORTS_DATA } from "../../LandingPage/constant/data";
import MatchStar from "@/src/client/shared/Svg/MatchStar";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";


export const TopBetTable = () => {
  const {
    setSelectedDate,
    setSelectedSport,
    setSelectedLeague,
    extractedSportType,
    odds,
    leagues,
    sportData,
  } = useBetTable(SPORTS_DATA?.TopMatches);

  return (
    <BetTable
      icon={<MatchStar />}
      contentTitle="Top Matches"
      isLiveTable={false}
      setSelectedDate={setSelectedDate}
      setSelectedSport={setSelectedSport}
      setSelectedLeague={setSelectedLeague}
      odds={odds}
      leagues={leagues}
      sportData={sportData}
      sportsType={extractedSportType}
    />
  );
};

