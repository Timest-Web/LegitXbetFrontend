import { Carousel } from "@heathmont/moon-core-tw";

type Props = {
	renderCarouselItems: () => React.ReactNode;
      className: string;
};

export const CustomCarousel = ({ renderCarouselItems, className }: Props) => {
	return (
		<Carousel
			autoSlideDelay={3000}
			step={1}>
			<Carousel.Reel className={className}>
				{renderCarouselItems()}
			</Carousel.Reel>
		</Carousel>
	);
};
