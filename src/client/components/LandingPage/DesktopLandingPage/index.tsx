import React from "react";
import Layout from "../../Layout";
import LeftSection from "./LeftSection";
import CenterSection from "../../components/MainSection/CenterSection";
import { LoaderScreen } from "@/src/client/shared/Loader/LoaderScreen";
import { filterMatches } from "@/src/client/shared/Utils/FilterMatches";
import { UpcomingBetTable } from "../../components/Tables/DesktopTable/UpcomingBetTable";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";

const DesktopLandingPage = () => {
  const { data } = useGetLandingPageSportsMatches();

  if (!data) {
    return <LoaderScreen />;
  }

  const filterMatchesData = filterMatches(data.upcoming.football, 2);

  return (
    <>
      {data && (
        <Layout
          leftSection={<LeftSection />}
          centerSection={
            <CenterSection>
              <UpcomingBetTable
                data={filterMatchesData}
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
