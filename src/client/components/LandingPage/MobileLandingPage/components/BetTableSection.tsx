import React from 'react'
import BetTable from './BetTable'
import Star from '@/src/client/shared/Svg/Star';
import MatchStar from '@/src/client/shared/Svg/MatchStar';
import LiveMatch from '@/src/client/shared/Svg/LiveMatch';

const BetTableSection = () => {
  return (
		<div className='mt-2 space-y-8'>
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
		</div>
  );
}

export default BetTableSection
