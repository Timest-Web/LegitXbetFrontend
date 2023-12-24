import { Carousel } from '@heathmont/moon-core-tw';
import React from 'react';

type Props = {
	renderCarouselItems: () => React.ReactNode;
	className?: string;
	autoSlideDelay?: number; 
};

export const CustomCarousel = ({
	renderCarouselItems,
	className,
	autoSlideDelay,
}: Props) => {
	return (
		<Carousel
			autoSlideDelay={autoSlideDelay} 
			step={1}>
			<Carousel.Reel className={className}>
				{renderCarouselItems()}
			</Carousel.Reel>
		</Carousel>
	);
};
