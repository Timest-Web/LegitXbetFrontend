import React from "react";
import LeagueType from "./components/LeagueType";
import MobileNavbar from "@/src/client/shared/MobileNavbar";
import LandScaleImageCarousel from "@/src/client/shared/Carousel/LandScaleImageCarousel";
import Layout from "../../Layout";
import BetTableSection from "./components/BetTableSection";
import { Loader } from "@heathmont/moon-core-tw";
import useGetLandingPageSportsMatches from "@/src/helper/apis/services/bookmaking/landingPage/get-landing-page-sports-and-matches";

const MobileLandingPage = () => {
  const { data } = useGetLandingPageSportsMatches();
  // console.log(data);
  return (
    <>
      {data ? (
        <Layout
          mobileComponents={
            <div className="h-max w-full -mt-[120px] pt-[120px]">
				<LandScaleImageCarousel height="h-[134.36px]" width="w-full" />
				<LeagueType />
				<BetTableSection />
				<MobileNavbar />
            </div>
          }
        />
      ) : (
        <div className="flex items-center justify-center w-screen h-screen">
          <Loader color="border-raditz" size="sm" />
        </div>
      )}
    </>
  );
};

export default MobileLandingPage;
