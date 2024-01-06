import Image from "next/image";
import CollapseIcon from "@/src/client/shared/Svg/CollapseIcon";
import ClubCollage from "../../assets/ClubCollage.png";
import WorldCup from "../../assets/FIFAWorldCup2022.png";
import BetWC from "../../assets/BonusWC.png";

const BannerSection = () => {
  return (
    <div className="flex flex-col w-[16.05rem] h-[28.05rem]">
      <section className="flex justify-between mb-2 px-4 font-bold text-sm">
        <h3>Favorites </h3>
        <div className="flex space-x-1 " >
          <CollapseIcon />
          <h3>Collapse</h3>
        </div>
      </section>
      <section>
        <Image src={ClubCollage} alt="collage" />
      </section>
      <section className="mt-1">
        <Image src={WorldCup} alt="wc" />
      </section>
      <section className="mt-1">
        <Image src={BetWC} alt="bwc" />
      </section>
    </div>
  );
};

export default BannerSection;
