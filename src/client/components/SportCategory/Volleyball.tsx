import React from "react";
import Layout from "../Layout";
import OddsFilter from "./components/OddsFilter";
import FilterByTime from "./components/FilterByTime";
import PopularDataType from "./components/PopularDataType";
import CenterSection from "../components/MainSection/CenterSection";
import { TABLETENNIS_DATA } from "../LandingPage/DesktopLandingPage/LeftSection/constant/data";
import MobileNavbar from "../../shared/MobileNavbar";

const VolleyBall = () => {
  return (
    <Layout
      leftSection={
        <div className="space-y-5">
          <PopularDataType data={TABLETENNIS_DATA} />
          <FilterByTime />
          <OddsFilter />
        </div>
      }
      centerSection={
        <CenterSection>
          {/* <DesktopLiveBetTable /> */}
          <div className="w-[720px]">
            <p className="text-gray-600 font-bold text-7xl">Coming Soon</p>
          </div>
        </CenterSection>
      }
      mobileComponents={
        <div className="pt-4 -mb-6">
          <div className="w-full p-2">
            <p className="text-gray-600 font-bold text-3xl">Coming Soon</p>
          </div>
          <MobileNavbar />
        </div>
      }
    />
  );
};

export default VolleyBall;
