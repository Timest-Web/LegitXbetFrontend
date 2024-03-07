import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../Layout";
import OddsFilter from "./components/OddsFilter";
import FilterByTime from "./components/FilterByTime";
import PopularDataType from "./components/PopularDataType";
import MobileNavbar from "../../shared/MobileNavbar";
import CenterSection from "../components/MainSection/CenterSection";
import { FOOTBALL_DATA } from "../LandingPage/DesktopLandingPage/LeftSection/constant/data";
import { filterMatches } from "../../shared/Utils/FilterMatches";
import { CustomBetTable } from "../components/Tables/DesktopTable/UpcomingBetTable";
import useGetFootballLeague from "@/src/helper/apis/services/bookmaking/football/get-leagues-type-api";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";
import useGetTopLeaguesFootball from "@/src/helper/apis/services/bookmaking/football/get-top-leagues-api";
import BetTable from "../components/Tables/DesktopTable/components/BetTable";
import MatchStar from "../../shared/Svg/MatchStar";

const Football = () => {
  const router = useRouter();
  const { query, asPath } = router;
  const { data: upcomingMatches } = useGetLandingPageSportsMatches();
  const { data: topLeaguesData } = useGetTopLeaguesFootball();
  const { data: footballLeague, refetch } = useGetFootballLeague({
    leagueName: `${query.league}`,
  });

  const extractText = asPath.split("=")[1];
  const capitalizedString = extractText
    ? extractText.charAt(0).toUpperCase() + extractText.slice(1)
    : "";
  console.log(capitalizedString);

  useEffect(() => {
    refetch();
  }, [query.league, refetch]);

  return (
    <>
      {footballLeague && (
        <Layout
          leftSection={
            <div className="space-y-5">
              <PopularDataType data={FOOTBALL_DATA} />
              <FilterByTime />
              <OddsFilter />
            </div>
          }
          centerSection={
            <CenterSection>
              {query.league === "upcoming" ? (
                <BetTable
                  href="upcoming"
                  icon={<MatchStar />}
                  isLiveTable={false}
                  sportData={filterMatches(
                    upcomingMatches.upcoming.football,
                    4
                  )}
                  contentTitle="Highlights"
                  viewFeatureMatches={4}
                />
              ) : query.league === "top" ? (
                <BetTable
                  icon={<MatchStar />}
                  isLiveTable={false}
                  sportData={filterMatches(topLeaguesData, 4)}
                  contentTitle="Top Matches {Coming soon}"
                  viewFeatureMatches={2}
                />
              ) : (
                <BetTable
                  icon={<MatchStar />}
                  isLiveTable={false}
                  sportData={filterMatches(footballLeague, 4)}
                  contentTitle={`${capitalizedString} Matches`}
                  viewFeatureMatches={4}
                />
              )}

            </CenterSection>
          }
          mobileComponents={
            <div className="pt-4 -mb-6">
              <CustomBetTable
                data={filterMatches(footballLeague, 4)}
                viewFeatureMatches={4}
              />
              <MobileNavbar />
            </div>
          }
        />
      )}
    </>
  );
};

export default Football;
