import React, { useState } from 'react';
import Image from 'next/image';
import BetTable from './components/BetTable';
import LandScale from '../../../../../assets/Landscale1.png';
import Star from '@/src/client/shared/Svg/Star';
import MatchStar from '@/src/client/shared/Svg/MatchStar';
import LiveMatch from '@/src/client/shared/Svg/LiveMatch';

const CenterSection = () => {
	return (
		<div className='top-0 h-[1500px]'>
			<div className='pt-1'>
				<Image
					src={LandScale}
					alt='landsacle'
					className='w-[952px] h-[323px]'
				/>
			</div>
			<>
				<BetTable icon={<Star />} contentTitle='Top Matches' isLiveTable={false} />
				<BetTable icon={<MatchStar />} contentTitle='Upcoming Matches' isLiveTable={false} />
				<BetTable icon={<LiveMatch />} contentTitle='LIVE' isLiveTable={true} />
			</>
		</div>
	);
};

export default CenterSection;
