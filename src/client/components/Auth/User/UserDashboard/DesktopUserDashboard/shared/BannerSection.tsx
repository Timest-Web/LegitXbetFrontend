import Image from "next/image";
import CollapseIcon from "@/src/client/shared/Svg/CollapseIcon";
import ClubCollage from "../../assets/ClubCollage.png";
import WorldCup from "../../assets/FIFAWorldCup2022.png";
import BetWC from "../../assets/BonusWC.png";
import BetSlip from "@/src/client/shared/BetSlip";

const BannerSection = () => {
  return (
    <div className="flex flex-col space-y-1">
      <BetSlip />
      <Image src={WorldCup} alt="worldcup" />
      <Image src={BetWC} alt="bwc" />
    </div>
  );
};

export default BannerSection;
