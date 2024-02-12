import React from "react";
import Footer from "@/src/client/shared/Footer";
import Header from "@/src/client/shared/Header";
import OddsFilter from "../components/OddsFilter";
import FilterByTime from "../components/FilterByTime";
import RightSection from "../../components/RightSection";
import PopularDataType from "../components/PopularDataType";
import useDeviceType from "@/src/client/shared/Hooks/useDeviceType";
import { FOOTBALL_DATA } from "../../LandingPage/DesktopLandingPage/LeftSection/constant/data";

const Layout = ({ children }: { children: React.JSX.Element }) => {
  const { isMobile } = useDeviceType();
  return (

    <div>
		<Header />
		{!isMobile && (
			<div className="pt-[120px] bg-gray-200">
			<div className="flex flex-row items-start justify-center py-2 px-1 space-x-2 h-max ">
				<div className="w-[243px] space-y-5">
				<PopularDataType data={FOOTBALL_DATA} />
				<FilterByTime />
				<OddsFilter />
				</div>
				{children}
				<RightSection />
			</div>
			</div>
		)}

		{isMobile && children}
		<Footer />
    </div>
  );
};
export default Layout;
