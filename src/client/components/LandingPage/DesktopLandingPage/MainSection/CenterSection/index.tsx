import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BetTable from './components/BetTable';
import Star from '@/src/client/shared/Svg/Star';
import MatchStar from '@/src/client/shared/Svg/MatchStar';
import LiveMatch from '@/src/client/shared/Svg/LiveMatch';
import LandScaleImageCarousel from '@/src/client/shared/Carousel/LandScaleImageCarousel';
import { SPORTS_DATA } from '../../../constant/data';
import { getSingleDate } from '@/src/client/shared/Utils/GetSportsDate';
import { LiveBetTable } from './Tables/LiveBetTable';
import { UpcomingBetTable } from './Tables/UpcomingBetTable';
import { TopBetTable } from './Tables/TopBetTable';

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
				{/* <BetTable
					icon={<LiveMatch />}
					contentTitle='LIVE'
					isLiveTable={true}
					setSelectedDate={setSelectedDate}
					setSelectedSport={setSelectedSport}
					setSelectedLeague={setSelectedLeague}
					odds={getAvailableLiveOdds}
					leagues={getAvailableLiveLeagues}
					sportData={extractedLiveSports}
					sportsType={extractedLiveMatchesSportType}
				/> */}
				<LiveBetTable/>
				{/* <BetTable
					icon={<MatchStar />}
					contentTitle='Upcoming Matches'
					isLiveTable={false}
					setSelectedDate={setSelectedDate}
					setSelectedSport={setSelectedSport}
					setSelectedLeague={setSelectedLeague}
					odds={getAvailableUpcomingOdds}
					leagues={getAvailableUpcomingLeagues}
					sportData={extractedUpcomingSports}
					sportsType={extractedUpcomingMatchesSportType}
				/> */}
				<UpcomingBetTable />
				{/* <BetTable
					icon={<Star />}
					contentTitle='Top Matches'
					isLiveTable={false}
					setSelectedDate={setSelectedDate}
					setSelectedSport={setSelectedSport}
					setSelectedLeague={setSelectedLeague}
					odds={getAvailableTopOdds}
					leagues={getAvailableTopLeagues}
					sportData={extractedTopSports}
					sportsType={extractedTopMatchesSportType}
				/> */}
				<TopBetTable/>
			</>
		</div>
	);
};

export default CenterSection;
