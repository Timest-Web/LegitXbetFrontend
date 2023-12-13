import Image from 'next/image';
import { useState, useEffect } from 'react';
import image1 from '../../../assets/landscapeImageOne.png';
import image2 from '../../../assets/landscapeImageTwo.png';

const images = [image1, image2];
const LandScaleImageCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 3000); 
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='relative h-[323px] w-full'>
			{images.map((image, index) => (
				<Image
					key={index}
					src={image}
					alt={`Image ${index + 1}`}
					className={`absolute w-[952px] h-[323px] transform transition-all duration-1000 ${
						index === currentIndex ? 'opacity-100' : 'opacity-0 '
					}`}
				/>
			))}
		</div>
	);
};

export default LandScaleImageCarousel;
