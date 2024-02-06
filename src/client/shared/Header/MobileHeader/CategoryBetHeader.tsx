import React from 'react';
import Link from 'next/link';
import { Carousel } from '@heathmont/moon-core-tw';
import { CustomCarousel } from '../../Carousel';
import { POPULAR_DATA } from '@/src/client/components/LandingPage/DesktopLandingPage/LeftSection/constant/data';

const renderCarouselItems = () => {
	return POPULAR_DATA?.map((value, index) => (
		<Carousel.Item  key={index} className='flex items-center justify-start'>
			<Link
				href={value.link}
				className='text-[11px] text-white text-xs'>
				{value.title}
			</Link>
		</Carousel.Item>
	));
};

const CategoryBetHeader = () => {
	return (
		<div className='flex items-center justify-start h-10 space-x-1 w-full bg-brown-600 bg-[#313130]'>
			<div className='flex items-center'>
				<CustomCarousel
					renderCarouselItems={renderCarouselItems}
				/>
			</div>
		</div>
	);
};

export default CategoryBetHeader;
