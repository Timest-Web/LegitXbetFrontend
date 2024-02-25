import BetTable from "./components/BetTable";
import { SPORTS_DATA } from "../../../LandingPage/constant/data";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";
import MatchStar from "@/src/client/shared/Svg/MatchStar";
import useGetFootballLeagues from "@/src/helper/apis/services/bookmaking/football/get-football-leagues";


export const UpcomingBetTable = () => {
  const {
    odds,
    sportData,
    setSelectedDate,
    setSelectedSport,
    setSelectedLeague,
    extractedSportType,
  } = useBetTable(SPORTS_DATA?.UpcomingMatches);
  const { data } = useGetFootballLeagues();

  return (
    <BetTable
      href="upcominggames"
      icon={<MatchStar />}
      odds={odds}
      leagues={data}
      isLiveTable={false}
      sportData={sportData}
      sportsType={extractedSportType}
      contentTitle="Upcoming Matches"
      setSelectedDate={setSelectedDate}
      setSelectedSport={setSelectedSport}
      setSelectedLeague={setSelectedLeague}
    />
  );
};

