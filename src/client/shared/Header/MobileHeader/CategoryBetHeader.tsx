import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LINK_GAME_TYPES } from "../constant";
import { CustomCarousel } from "../../Carousel";
import { Carousel } from "@heathmont/moon-core-tw";
import { POPULAR_DATA } from "@/src/client/components/LandingPage/DesktopLandingPage/LeftSection/constant/data";

const renderPupolarDataItems = () => {
	return POPULAR_DATA?.map((value, index) => (
		<Carousel.Item key={index} className="flex items-center justify-start">
			<Link href={value.link} className="text-[11px] text-white text-xs">
				{value.title}
			</Link>
		</Carousel.Item>
	));
};

const renderSportsDataItems = ({ pathname }: { pathname: string }) => {
  return LINK_GAME_TYPES?.map((value, index) => (
    <Carousel.Item key={index} className="flex items-center justify-start">
		<Link
			href={`${
			value.href === "/"
				? "/"
				: `/sports/${value.page.toLowerCase().replace(/ /g, "-")}`
			}`}
			className={`${
			    `/sports${value.href}` === pathname ? "font-bold" : ""
			} text-[11px] text-black`}
		>
			{value.page}
		</Link>
    </Carousel.Item>
  ));
};

const CategoryBetHeader = () => {
	const router = useRouter();
	const { pathname } = router;

	return (
		<div className="flex flex-col w-full">
			<div className="flex items-center justify-start h-10 space-x-1 w-full bg-brown-600 bg-[#313130]">
				<div className="flex items-center w-full px-2">
				    <CustomCarousel renderCarouselItems={renderPupolarDataItems} />
				</div>
			</div>
			<div className="flex items-center justify-start h-8 space-x-1 w-full bg-slate-300">
				<div className="flex items-center w-full px-2">
					<CustomCarousel
						renderCarouselItems={() => renderSportsDataItems({ pathname })}
					/>
				</div>
			</div>
		</div>
	);
};

export default CategoryBetHeader;
