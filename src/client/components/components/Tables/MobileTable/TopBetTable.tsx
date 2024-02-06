
import { SPORTS_DATA } from "../../../LandingPage/constant/data";
import MatchStar from "@/src/client/shared/Svg/MatchStar";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";
import BetTable from "./components/BetTable";


export const TopBetTable = () => {
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
      href="topgames"
      icon={<MatchStar />}
      odds={odds}
      leagues={leagues}
      isLiveTable={false}
      sportData={sportData}
      contentTitle="Top Matches"
      sportsType={extractedSportType}
      setSelectedDate={setSelectedDate}
      setSelectedSport={setSelectedSport}
      setSelectedLeague={setSelectedLeague}
    />
  );
};

