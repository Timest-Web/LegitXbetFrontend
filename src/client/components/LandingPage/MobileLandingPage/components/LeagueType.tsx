import React from 'react';
import Image from 'next/image';
import { Carousel } from '@heathmont/moon-core-tw';
import { LEAGUA_DATA_TYPE } from '../constant/data';
import { CustomCarousel } from '@/src/client/shared/Carousel';

const renderCarouselItems = () => {
	return LEAGUA_DATA_TYPE?.map((value, index) => (
		<Carousel.Item key={index}>
			<Image
				src={value}
				alt='league Img'
			/>
		</Carousel.Item>
	));
};

const LeagueType = () => {
	return (
		<div className='space-x-8 pl-3 w-full'>
			<CustomCarousel renderCarouselItems={renderCarouselItems} />
		</div>
	);
};

export default LeagueType;
