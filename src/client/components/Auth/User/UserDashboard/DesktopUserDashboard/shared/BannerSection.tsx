import { useState } from "react";
import Image from "next/image";
import CollapseIcon from "@/src/client/shared/Svg/CollapseIcon";
import ClubCollage from "../../assets/ClubCollage.png";
import WorldCup from "../../assets/FIFAWorldCup2022.png";
import BetWC from "../../assets/BonusWC.png";
import AddSquare from "@/src/client/shared/Svg/AddSquare";
import RightSection from "@/src/client/components/LandingPage/DesktopLandingPage/MainSection/RightSection";
import { useRouter } from "next/router";

const BannerSection = () => {
  const [collapsedState, setCollapsedState] = useState(true);
  const router = useRouter();

  const collapsedStateHandler = () => {
    setCollapsedState(!collapsedState);
  };

  const isBetHistoryPage = router.pathname === "/user-dashboard/bet-history" || router.pathname === "/user-dashboard/bet-history/bet-history-active" || router.pathname === "/user-dashboard/bet-history/unsettled";

  return (
    <div>
      {!isBetHistoryPage && (
        <div className="flex flex-col space-y-1 ">
          <section className="flex justify-between mb-2 px-4 font-bold text-sm">
            <h3>Favorites </h3>
            <div
              onClick={collapsedStateHandler}
              className="flex space-x-1 cursor-pointer "
            >
              {collapsedState ? <CollapseIcon /> : <AddSquare />}
              {collapsedState ? <h3>Collapse</h3> : <h3>Expand</h3>}
            </div>
          </section>
          {collapsedState && <Image src={ClubCollage} alt="collage" />}

          <Image src={WorldCup} alt="wc" />
          <Image src={BetWC} alt="bwc" />
        </div>
      )}
      {isBetHistoryPage && <RightSection />}
    </div>
  );
};

export default BannerSection;
