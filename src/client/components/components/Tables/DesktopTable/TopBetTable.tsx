import useGetTopLeaguesFootball from "@/src/helper/apis/services/bookmaking/football/get-top-leagues-api";
import BetTable from "./components/BetTable";
import MatchStar from "@/src/client/shared/Svg/MatchStar";
import { filterMatches } from "@/src/client/shared/Utils/FilterMatches";

export const TopBetTable = () => {
  const { data: topLeaguesData } = useGetTopLeaguesFootball();

  return (
    <BetTable
      href="topgames"
      icon={<MatchStar />}
      isLiveTable={false}
      sportData={filterMatches(topLeaguesData, 4)}
      contentTitle="Top Matches"
      viewFeatureMatches={4}
    />
  );
};
