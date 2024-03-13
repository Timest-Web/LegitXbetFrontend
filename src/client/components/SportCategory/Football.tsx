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
import useGetFootballLeague from "@/src/helper/apis/services/bookmaking/football/get-leagues-type-api";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";
import useGetTopLeaguesFootball from "@/src/helper/apis/services/bookmaking/football/get-top-leagues-api";
import BetTable from "../components/Tables/DesktopTable/components/BetTable";
import MatchStar from "../../shared/Svg/MatchStar";
import { BetTable as MobileBetTable } from "../components/Tables/MobileTable/components/BetTable";
import { LoaderScreen } from "../../shared/Loader/LoaderScreen";

const Football = () => {
  const router = useRouter();
  const { query, asPath } = router;
  const { data: upcomingMatches, isLoading } = useGetLandingPageSportsMatches();
  const { data: topLeaguesData, isLoading: topLeaguesIsLoading } =
    useGetTopLeaguesFootball();
  const { data: footballLeague, isLoading: footballLeagueIsLoading } =
    useGetFootballLeague({
      leagueName: `${query.league}`,
    });

  const extractText = asPath.split("=")[1];
  const capitalizedString = extractText
    ? extractText.charAt(0).toUpperCase() + extractText.slice(1)
    : "";

  useEffect(() => {
    if (!query.league) {
      router.push("/sports/football?league=upcoming");
    }
  }, [query.league, router]);


  if (isLoading || topLeaguesIsLoading || footballLeagueIsLoading) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <LoaderScreen />
      </div>
    );
  }

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
                    upcomingMatches?.upcoming?.football,
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
                  contentTitle="Today's Games"
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
              {query.league === "upcoming" ? (
                <MobileBetTable
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
                <MobileBetTable
                  icon={<MatchStar />}
                  isLiveTable={false}
                  sportData={filterMatches(topLeaguesData, 4)}
                  contentTitle="Top Matches"
                  viewFeatureMatches={2}
                />
              ) : (
                <MobileBetTable
                  icon={<MatchStar />}
                  isLiveTable={false}
                  sportData={filterMatches(footballLeague, 4)}
                  contentTitle={`${capitalizedString} Matches`}
                  viewFeatureMatches={4}
                />
              )}
              <MobileNavbar />
            </div>
          }
        />
      )}
    </>
  );
};

export default Football;
