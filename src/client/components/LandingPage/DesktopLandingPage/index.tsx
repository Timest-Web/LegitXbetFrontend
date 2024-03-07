import React from "react";
import Layout from "../../Layout";
import LeftSection from "./LeftSection";
import CenterSection from "../../components/MainSection/CenterSection";
import { LoaderScreen } from "@/src/client/shared/Loader/LoaderScreen";
import { filterMatches } from "@/src/client/shared/Utils/FilterMatches";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";
import useGetTopLeaguesFootball from "@/src/helper/apis/services/bookmaking/football/get-top-leagues-api";
import BetTable from "../../components/Tables/DesktopTable/components/BetTable";
import MatchStar from "@/src/client/shared/Svg/MatchStar";


const DesktopLandingPage = () => {
  const { data } = useGetLandingPageSportsMatches();
  const { data: topLeaguesData } = useGetTopLeaguesFootball();

  if (!data) {
    return <LoaderScreen />;
  }

  const filterUpcomingMatches = filterMatches(data.upcoming.football, 2);
  const filterTopleagues = filterMatches(topLeaguesData, 2);

  return (
    <>
      {data && (
        <Layout
          leftSection={<LeftSection />}
          centerSection={
            <CenterSection>
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
            </CenterSection>
          }
        />
      )}
    </>
  );
};

export default DesktopLandingPage;
