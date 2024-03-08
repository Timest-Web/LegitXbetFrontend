import React from "react";
import Layout from "../../Layout";
import { LoaderScreen } from "@/src/client/shared/Loader/LoaderScreen";
import LeagueType from "./components/LeagueType";
import MobileNavbar from "@/src/client/shared/MobileNavbar";
import BetTableSection from "./components/BetTableSection";
import LandScaleImageCarousel from "@/src/client/shared/Carousel/LandScaleImageCarousel";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";

const MobileLandingPage = () => {
  const { data } = useGetLandingPageSportsMatches();

  if (!data) {
    return <LoaderScreen />;
  }

  return (
    <>
      {data &&
        <Layout
          mobileComponents={
            <div className="h-max w-full -mt-[120px] pt-[120px]">
              <LandScaleImageCarousel height="h-[134.36px]" width="w-full" />
              <LeagueType />
              <BetTableSection />
              <MobileNavbar />
            </div>
          }
        />}
    </>
  );
};

export default MobileLandingPage;
