import React, { useEffect } from "react";
import Layout from "../../Layout";
import LeftSection from "./LeftSection";
import CenterSection from "../../components/MainSection/CenterSection";
// import { TopBetTable } from '../../components/Tables/DesktopTable/TopBetTable';
// import { LiveBetTable } from '../../components/Tables/DesktopTable/LiveBetTable';
import { UpcomingBetTable } from "../../components/Tables/DesktopTable/UpcomingBetTable";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";
import { Loader } from "@heathmont/moon-core-tw";
import useGetFootballLeagues from "@/src/helper/apis/services/bookmaking/football/get-football-leagues";
import useGetFootballPageMatches from "@/src/helper/apis/services/bookmaking/football/get-football-page-matches";
import { getFeatureDates } from "@/src/client/shared/Utils/GetSportsDate";
// import { AmericanFootballBetTable } from '../../components/Tables/DesktopTable/AmericanFootball';
// import { AllTodayBetTable } from '../../components/Tables/DesktopTable/AllMatchesToday';
// import { TonightTable } from '../../components/Tables/DesktopTable/TonightMatches';
// import { TodayBetTable } from '../../components/Tables/DesktopTable/TodayGames';

const DesktopLandingPage = () => {
  const { data } = useGetFootballPageMatches();
  const nextTwoDates = getFeatureDates();

  if (!data) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Loader color="border-raditz" size="lg" />
      </div>
    );
  }

  const filterMatches = () => {
    return data
      .map((value: any) => ({
        ...value,
        matches: value.matches.filter(
          (match: any) => match.date === nextTwoDates[0] || match.date === nextTwoDates[1]
        ),
      }))
      .filter((value: any) => value.matches.length > 0);
  };


  return (
    <>
      {data && (
        <Layout
          leftSection={<LeftSection />}
          centerSection={
            <CenterSection>
              <UpcomingBetTable data={filterMatches()} />
            </CenterSection>
          }
        />
      )}
    </>
  );
};

export default DesktopLandingPage;
