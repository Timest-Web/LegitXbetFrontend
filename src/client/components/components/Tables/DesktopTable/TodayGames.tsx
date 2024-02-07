import BetTable from "./components/BetTable";
import { SPORTS_DATA } from "../../../LandingPage/constant/data";
import MatchStar from "@/src/client/shared/Svg/MatchStar";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";


export const TodayBetTable = () => {
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
      href="todaygames"
      icon={<MatchStar />}
      odds={odds}
      leagues={leagues}
      isLiveTable={false}
      sportData={sportData}
      contentTitle="Today Games"
      sportsType={extractedSportType}
      setSelectedDate={setSelectedDate}
      setSelectedSport={setSelectedSport}
      setSelectedLeague={setSelectedLeague}
    />
  );
};
