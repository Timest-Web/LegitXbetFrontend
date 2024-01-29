import React from 'react';
import BetTable from './components/BetTable';
import Star from '@/src/client/shared/Svg/Star';
import MatchStar from '@/src/client/shared/Svg/MatchStar';
import LiveMatch from '@/src/client/shared/Svg/LiveMatch';
import LandScaleImageCarousel from '@/src/client/shared/Carousel/LandScaleImageCarousel';
import { useRouter } from 'next/router';

const CenterSection = () => {
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
						width='w-[952px]'
					/>
				</div>
			)}
			<>
				<BetTable
					icon={<LiveMatch />}
					contentTitle='LIVE'
					isLiveTable={true}
				/>
				<BetTable
					icon={<MatchStar />}
					contentTitle='Upcoming Matches'
					isLiveTable={false}
				/>
				<BetTable
					icon={<Star />}
					contentTitle='Top Matches'
					isLiveTable={false}
				/>
			</>
		</div>
	);
};

export default CenterSection;
