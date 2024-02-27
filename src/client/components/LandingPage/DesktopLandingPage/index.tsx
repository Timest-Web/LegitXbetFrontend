import React from "react";
import Layout from "../../Layout";
import LeftSection from "./LeftSection";
import CenterSection from "../../components/MainSection/CenterSection";
import useGetFootballPageMatches from "@/src/helper/apis/services/bookmaking/football/get-football-page-matches";
import { LoaderScreen } from "@/src/client/shared/Loader/LoaderScreen";
import { filterMatches } from "@/src/client/shared/Utils/FilterMatches";
import { UpcomingBetTable } from "../../components/Tables/DesktopTable/UpcomingBetTable";


const DesktopLandingPage = () => {
  const { data } = useGetFootballPageMatches();

  if (!data) {
    return <LoaderScreen />;
  }

  return (
    <>
      {data && (
        <Layout
          leftSection={<LeftSection />}
          centerSection={
            <CenterSection>
              <UpcomingBetTable
                data={filterMatches(data, 2)}
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
