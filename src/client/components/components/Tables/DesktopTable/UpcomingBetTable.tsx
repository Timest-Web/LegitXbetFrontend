import BetTable from "./components/BetTable";
import MatchStar from "@/src/client/shared/Svg/MatchStar";
import { SPORTS_DATA } from "../../../LandingPage/constant/data";
import { useBetTable } from "@/src/client/shared/Hooks/useBetTable";
// import useGetFootballLeaguesFeed from "@/src/helper/apis/services/bookmaking/football/get-football-leagues-feed";
import useGetFootballLeagues from "@/src/helper/apis/services/bookmaking/football/get-football-leagues";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";
import useGetFootballLeaguesFeed from "@/src/helper/apis/services/bookmaking/football/get-football-feature-feed";

type DataItem = {
  "@id": string;
  "@country": string;
  "@name": string;
  "@season": string;
  "@date_start": string;
  "@date_end": string;
  "@iscup": string;
  "@live_lineups": string;
  "@live_stats": string;
  "@path": string;
  "@is_women": string;
}

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
  const { data: feedData } = useGetFootballLeaguesFeed();
  let february2024Data = [];

  if(Array.isArray(feedData) && feedData.length > 0){
    february2024Data = feedData.filter((item: DataItem) => {
      const dateParts = item["@date_start"].split(".");
      const month = parseInt(dateParts[1]);
      const year = parseInt(dateParts[2]);
      return month === 2 && year === 2024;
    });
  }

  console.log(february2024Data);


  return (
    <BetTable
      href="upcominggames"
      icon={<MatchStar />}
      odds={odds}
      leagues={data}
      isLiveTable={false}
      sportData={sportData}
      contentTitle="Highlights"
      sportsType={extractedSportType}
      setSelectedDate={setSelectedDate}
      setSelectedSport={setSelectedSport}
      setSelectedLeague={setSelectedLeague}
    />
  );
};

