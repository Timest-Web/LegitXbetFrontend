import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import Image from 'next/image';
import Link from 'next/link';
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
			<div className='flex items-center justify-start w-[1512px] pl-28 py-2 h-24'>
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
