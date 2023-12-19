import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from '@heathmont/moon-core-tw';
import { CustomCarousel } from '../Carousel';
import { LOGOS } from './constant';

const renderCarouselItems = () => {
	return LOGOS?.map((value, index) => (
		<Carousel.Item key={index}>
			<Link href='#'>
				<Image
					src={value}
					alt='image alt'
				/>
			</Link>
		</Carousel.Item>
	));
};

const Partners = () => {
	return (
		<div className='flex items-center justify-center w-full bg-lightAsh'>
			<div className='flex items-center justify-start w-full pl-28 py-2 h-24'>
				<div className='text-white text-sm w-72'>
					<p className=''>Official sports betting partners</p>
				</div>

				<div className=' w-full'>
					<CustomCarousel
						className='space-x-12'
						renderCarouselItems={renderCarouselItems}
					/>
				</div>
			</div>
		</div>
	);
};

export default Partners;
