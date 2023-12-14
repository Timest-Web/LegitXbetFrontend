import React  from 'react';
import BetTable from './components/BetTable';
import Star from '@/src/client/shared/Svg/Star';
import MatchStar from '@/src/client/shared/Svg/MatchStar';
import LiveMatch from '@/src/client/shared/Svg/LiveMatch';
import LandScaleImageCarousel from '@/src/client/shared/Carousel/Carousel';

const CenterSection = () => {
	return (
		<div className='pb-28'>
			<div className='pt-1'>
				<LandScaleImageCarousel />
			</div>
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
