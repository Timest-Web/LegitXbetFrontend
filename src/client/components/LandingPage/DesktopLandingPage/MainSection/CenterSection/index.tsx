import React from 'react';
import { useRouter } from 'next/router';
import BetTable from './components/BetTable';
import Star from '@/src/client/shared/Svg/Star';
import MatchStar from '@/src/client/shared/Svg/MatchStar';
import LiveMatch from '@/src/client/shared/Svg/LiveMatch';
import LandScaleImageCarousel from '@/src/client/shared/Carousel/LandScaleImageCarousel';
import { SPORTS_DATA } from '../../../constant/data';

const CenterSection = () => {
	const router = useRouter();
	const urlPathname = router.pathname.split('/')[2];
	// const sportT
	console.log(SPORTS_DATA);
	const extractedLiveMatchesSportType = SPORTS_DATA?.LiveMatches?.map((value) => value.sportType);
	const extractedTopMatchesSportType = SPORTS_DATA?.TopMatches?.map((value) => value.sportType);
	const extractedUpcomingMatchesSportType = SPORTS_DATA?.UpcomingMatches?.map((value) => value.sportType);
	const extractedLiveMatcesOdds = SPORTS_DATA?.LiveMatches?.map((value) => value.odds)[0];
	const extractedTopMachesOdds = SPORTS_DATA?.TopMatches?.map((value) => value.odds)[0];
	const extractedUpcomingMatchesOdds = SPORTS_DATA?.UpcomingMatches?.map((value) => value.odds)[0];
	const extractedLiveMatcesLeagues = SPORTS_DATA?.LiveMatches?.map((value) => value.leagues)[0];
	const extractedTopMachesLeagues = SPORTS_DATA?.TopMatches?.map((value) => value.leagues)[0];
	const extractedUpcomingMatchesLeagues = SPORTS_DATA?.UpcomingMatches?.map((value) => value.leagues)[0];
	// const sportType = SPORTS_DATA.LiveMatches?.filter((value, index) => value.sportType === 'Football')[0];


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
					odds={extractedLiveMatcesOdds}
					leagues={extractedLiveMatcesLeagues}
					sportData={SPORTS_DATA.LiveMatches}
					sportsType={extractedLiveMatchesSportType}
				/>
				<BetTable
					icon={<MatchStar />}
					contentTitle='Upcoming Matches'
					isLiveTable={false}
					odds={extractedUpcomingMatchesOdds}
					leagues={extractedTopMachesLeagues}
					sportData={SPORTS_DATA.UpcomingMatches}
					sportsType={extractedUpcomingMatchesSportType}
				/>
				<BetTable
					icon={<Star />}
					contentTitle='Top Matches'
					isLiveTable={false}
					odds={extractedTopMachesOdds}
					leagues={extractedUpcomingMatchesLeagues}
					sportData={SPORTS_DATA.TopMatches}
					sportsType={extractedTopMatchesSportType}
				/>
			</>
		</div>
	);
};

export default CenterSection;
