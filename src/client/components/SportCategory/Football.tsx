import React from "react";
import Layout from "../Layout";
import OddsFilter from "./components/OddsFilter";
import FilterByTime from "./components/FilterByTime";
import PopularDataType from "./components/PopularDataType";
import CenterSection from "../components/MainSection/CenterSection";
import { LiveBetTable } from "../components/Tables/MobileTable/LiveBetTable";
import { LiveBetTable as DesktopLiveBetTable } from "../components/Tables/DesktopTable/LiveBetTable";
import { FOOTBALL_DATA } from "../LandingPage/DesktopLandingPage/LeftSection/constant/data";
import MobileNavbar from "../../shared/MobileNavbar";

const Football = () => {
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
          <DesktopLiveBetTable />
        </CenterSection>
      }
      mobileComponents={
        <div className="pt-4 -mb-6">
          <LiveBetTable />
          <MobileNavbar/>
        </div>
      }
    />
  );
};

export default Football;
