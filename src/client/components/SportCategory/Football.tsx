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
import useGetFootballLeagues from "@/src/helper/apis/services/bookmaking/football/get-football-leagues";

const Football = () => {
  const { data } = useGetFootballLeagues();
  


  return (
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
          <DesktopUpcomingBetTable leagues={data}/>
        </CenterSection>
      }
      mobileComponents={
        <div className="pt-4 -mb-6">
          <UpcomingBetTable />
          <MobileNavbar/>
        </div>
      }
    />
  );
};

export default Football;
