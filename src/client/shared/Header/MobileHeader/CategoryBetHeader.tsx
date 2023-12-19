import React from 'react';
import Link from 'next/link';
import MenuIcon from '../../Svg/MenuIcon';
import { Carousel } from '@heathmont/moon-core-tw';
import { CustomCarousel } from '../../Carousel';
import { POPULAR_DATA } from '@/src/client/components/LandingPage/DesktopLandingPage/MainSection/LeftSection/constant/data';

const renderCarouselItems = () => {
	return POPULAR_DATA?.map((value, index) => (
		<Carousel.Item key={index}>
			<Link
				href='#'
				className='text-[11px] text-white text-xs'>
				{value}
			</Link>
		</Carousel.Item>
	));
};

const CategoryBetHeader = () => {
	return (
		<div className='flex items-center justify-start h-10 space-x-1 w-full bg-brown-600 bg-[#313130]'>
			<div className='flex items-center justify-start pl-2 w-2/12'>
					<MenuIcon />
			</div>
			<div className='w-10/12'>
				<CustomCarousel
					className=''
					renderCarouselItems={renderCarouselItems}
				/>
			</div>
		</div>
	);
};

export default CategoryBetHeader;
