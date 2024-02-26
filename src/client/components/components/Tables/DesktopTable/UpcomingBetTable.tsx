import BetTable from "./components/BetTable";
import MatchStar from "@/src/client/shared/Svg/MatchStar";
import { SPORTS_DATA } from "../../../LandingPage/constant/data";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";
import useGetFootballLeagues from "@/src/helper/apis/services/bookmaking/football/get-football-leagues";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";
import useGetFootballLeaguesFeed from "@/src/helper/apis/services/bookmaking/football/get-football-feature-feed";
import { Match } from "../constant/data";
import { useRouter } from "next/router";


export const UpcomingBetTable = ({data}: {data: any}) => {


  const {
    odds,
    // sportData,
    setSelectedDate,
    setSelectedSport,
    setSelectedLeague,
    extractedSportType,
  } = useBetTable(SPORTS_DATA?.UpcomingMatches);

  

  return (
    <BetTable
      href="upcominggames"
      icon={<MatchStar />}
      odds={odds}
      // leagues={leagues}
      isLiveTable={false}
      sportData={data}
      contentTitle="Highlights"
      sportsType={extractedSportType}
      // setSelectedDate={setSelectedDate}
      // setSelectedSport={setSelectedSport}
      // setSelectedLeague={setSelectedLeague}
    />
  );
};

