import React from "react";
import { filterMatches } from "@/src/client/shared/Utils/FilterMatches";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";
import useGetTopLeaguesFootball from "@/src/helper/apis/services/bookmaking/football/get-top-leagues-api";
import { LoaderScreen } from "@/src/client/shared/Loader/LoaderScreen";
import MatchStar from "@/src/client/shared/Svg/MatchStar";
import { BetTable } from "../../../components/Tables/MobileTable/components/BetTable";

const BetTableSection = () => {
  const { data } = useGetLandingPageSportsMatches();
  const { data: topLeaguesData } = useGetTopLeaguesFootball();
  if (!data) {
    return <LoaderScreen />;
  }
  const filterUpcomingMatches = filterMatches(data.upcoming.football, 2);
  const filterTopleagues = filterMatches(topLeaguesData, 2);

  return (
    <div className="mt-2 -mb-6 space-y-8">
      {/* <LiveBetTable/> */}
      <BetTable
        href="upcoming"
        icon={<MatchStar />}
        isLiveTable={false}
        sportData={filterUpcomingMatches}
        contentTitle="Highlights"
        viewFeatureMatches={2}
      />

      <BetTable
        href="top"
        icon={<MatchStar />}
        isLiveTable={false}
        sportData={filterTopleagues.reverse()}
        contentTitle="Top Matches"
        viewFeatureMatches={2}
      />
    </div>
  );
};

export default BetTableSection;
