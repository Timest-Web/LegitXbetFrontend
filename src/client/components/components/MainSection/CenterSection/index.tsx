import React from 'react';
import { useRouter } from 'next/router';
import LandScaleImageCarousel from '@/src/client/shared/Carousel/LandScaleImageCarousel';

const CenterSection = ({children}: {children: React.ReactNode}) => {
	const router = useRouter();
	const urlPathname = router.pathname.split('/')[2];
	
	return (
		<div className='pb-28 w-full'>
			{router.pathname !== '/' && (
				<p className='font-bold'>
					{urlPathname?.charAt(0).toUpperCase() + urlPathname?.slice(1)}
				</p>
			)}
			{router.pathname === '/' && (
				<div className='pt-1'>
					<LandScaleImageCarousel
						height='h-[323px]'
						width='w-full'
					/>
				</div>
			)}

            {children}
		</div>
	);
};
export default CenterSection;
