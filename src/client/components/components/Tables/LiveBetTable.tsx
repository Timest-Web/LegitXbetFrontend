import LiveMatch from "@/src/client/shared/Svg/LiveMatch";
import BetTable from "./components/BetTable";
import { SPORTS_DATA } from "../../LandingPage/constant/data";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";


export const LiveBetTable = () => {
  const {
    setSelectedDate,
    setSelectedSport,
    setSelectedLeague,
    extractedSportType,
    odds,
    leagues,
    sportData,
  } = useBetTable(SPORTS_DATA?.LiveMatches);
  
  return (
    <BetTable
      icon={<LiveMatch />}
      contentTitle="LIVE"
      isLiveTable={true}
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
