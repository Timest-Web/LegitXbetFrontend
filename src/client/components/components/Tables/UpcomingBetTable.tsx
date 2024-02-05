import BetTable from "./components/BetTable";
import { SPORTS_DATA } from "../../LandingPage/constant/data";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";
import MatchStar from "@/src/client/shared/Svg/MatchStar";


export const UpcomingBetTable = () => {
  const {
    setSelectedDate,
    setSelectedSport,
    setSelectedLeague,
    extractedSportType,
    odds,
    leagues,
    sportData,
  } = useBetTable(SPORTS_DATA?.UpcomingMatches);

  return (
    <BetTable
      icon={<MatchStar />}
      contentTitle="Upcoming Matches"
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

