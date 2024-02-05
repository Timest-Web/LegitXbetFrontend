import BetTable from "./components/BetTable";
import { SPORTS_DATA } from "../../../LandingPage/constant/data";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";
import MatchStar from "@/src/client/shared/Svg/MatchStar";


export const UpcomingBetTable = () => {
  const {
    odds,
    leagues,
    sportData,
    setSelectedDate,
    setSelectedSport,
    setSelectedLeague,
    extractedSportType,
  } = useBetTable(SPORTS_DATA?.UpcomingMatches);

  return (
    <BetTable
      icon={<MatchStar />}
      odds={odds}
      leagues={leagues}
      isLiveTable={false}
      sportData={sportData}
      contentTitle="Upcoming Matches"
      sportsType={extractedSportType}
      setSelectedDate={setSelectedDate}
      setSelectedSport={setSelectedSport}
      setSelectedLeague={setSelectedLeague}
    />
  );
};

