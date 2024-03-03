import React from "react";
import LeagueType from "./components/LeagueType";
import MobileNavbar from "@/src/client/shared/MobileNavbar";
import LandScaleImageCarousel from "@/src/client/shared/Carousel/LandScaleImageCarousel";
import Layout from "../../Layout";
import BetTableSection from "./components/BetTableSection";
import { Loader } from "@heathmont/moon-core-tw";
import useGetFootballPageMatches from "@/src/helper/apis/services/bookmaking/football/get-football-page-matches";
import { LoaderScreen } from "@/src/client/shared/Loader/LoaderScreen";

const MobileLandingPage = () => {
  const { data } = useGetFootballPageMatches();

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
              <BetTableSection data={data} />
              <MobileNavbar />
            </div>
          }
        />}
    </>
  );
};

export default MobileLandingPage;
