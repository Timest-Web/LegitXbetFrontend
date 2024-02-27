import React from "react";
import Layout from "../Layout";
import OddsFilter from "./components/OddsFilter";
import FilterByTime from "./components/FilterByTime";
import PopularDataType from "./components/PopularDataType";
import CenterSection from "../components/MainSection/CenterSection";
import { UpcomingBetTable } from "../components/Tables/MobileTable/UpcomingBetTable";
import { UpcomingBetTable as DesktopUpcomingBetTable } from "../components/Tables/DesktopTable/UpcomingBetTable";
import { FOOTBALL_DATA } from "../LandingPage/DesktopLandingPage/LeftSection/constant/data";
import MobileNavbar from "../../shared/MobileNavbar";
import useGetFootballPageMatches from "@/src/helper/apis/services/bookmaking/football/get-football-page-matches";
import { getFeatureDates } from "../../shared/Utils/GetSportsDate";
import { Loader } from "@heathmont/moon-core-tw";
import { filterMatches } from "../../shared/Utils/FilterMatches";

const Football = () => {
  const { data } = useGetFootballPageMatches();
  const nextTwoDates = getFeatureDates(4);


  if (!data) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Loader color="border-raditz" size="lg" />
      </div>
    );
  }



  return (
    <>
      {data && (
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
              <DesktopUpcomingBetTable
                data={filterMatches(data, 4)}
                viewFeatureMatches={4}
              />
            </CenterSection>
          }
          mobileComponents={
            <div className="pt-4 -mb-6">
              <UpcomingBetTable
                data={filterMatches(data, 4)}
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
