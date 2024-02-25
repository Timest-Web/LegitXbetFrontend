import BetTable from "./components/BetTable";
import MatchStar from "@/src/client/shared/Svg/MatchStar";
import { SPORTS_DATA } from "../../../LandingPage/constant/data";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";
// import useGetFootballLeaguesFeed from "@/src/helper/apis/services/bookmaking/football/get-football-leagues-feed";
import useGetFootballLeagues from "@/src/helper/apis/services/bookmaking/football/get-football-leagues";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";


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
      contentTitle="Upcoming Matches"
      sportsType={extractedSportType}
      setSelectedDate={setSelectedDate}
      setSelectedSport={setSelectedSport}
      setSelectedLeague={setSelectedLeague}
    />
  );
};

