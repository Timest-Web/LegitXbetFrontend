import LiveMatch from "@/src/client/shared/Svg/LiveMatch";
import BetTable from "./components/BetTable";
import { SPORTS_DATA } from "../../../LandingPage/constant/data";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";


export const LiveBetTable = () => {
  const {
    odds,
    // leagues,
    sportData,
    setSelectedDate,
    setSelectedSport,
    setSelectedLeague,
    extractedSportType,
  } = useBetTable(SPORTS_DATA?.LiveMatches);
  
  return (
    <></>
    // <BetTablea
    //   href="livegame"
    //   icon={<LiveMatch />}
    //   odds={odds}
    //   leagues={leagues}
    //   isLiveTable={true}
    //   contentTitle="LIVE"
    //   sportData={sportData}
    //   sportsType={extractedSportType}
    //   setSelectedDate={setSelectedDate}
    //   setSelectedSport={setSelectedSport}
    //   setSelectedLeague={setSelectedLeague}
    // />
  );
};
