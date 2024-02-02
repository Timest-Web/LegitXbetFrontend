import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BetTable from './components/BetTable';
import Star from '@/src/client/shared/Svg/Star';
import MatchStar from '@/src/client/shared/Svg/MatchStar';
import LiveMatch from '@/src/client/shared/Svg/LiveMatch';
import LandScaleImageCarousel from '@/src/client/shared/Carousel/LandScaleImageCarousel';
import { SPORTS_DATA } from '../../../constant/data';
import { getSingleDate } from '@/src/client/shared/Utils/GetSportsDate';

const CenterSection = () => {
	const router = useRouter();
	const urlPathname = router.pathname.split('/')[2];
	const [selectedDate, setSelectedDate] = useState('');                       
	const [selectedSport, setSelectedSport] = useState('');
	const [selectedLeague, setSelectedLeague] = useState('');


	const extractedLiveMatchesSportType = SPORTS_DATA?.LiveMatches?.map((value) => value.sportType);
	// const extractedTopMatchesSportType = SPORTS_DATA?.TopMatches?.map((value) => value.sportType);
	// const extractedUpcomingMatchesSportType = SPORTS_DATA?.UpcomingMatches?.map((value) => value.sportType);

	const liveData = SPORTS_DATA?.LiveMatches?.filter(value => value.sportType === selectedSport);
	let getAvailableLiveOdds: string[] = [];
	let getAvailableLiveLeagues: string[] = [];
	if (liveData && liveData.length > 0) {
	  getAvailableLiveOdds = liveData[0].odds;
	  getAvailableLiveLeagues = liveData[0].leagues;
	}
	
	// const topData = SPORTS_DATA?.TopMatches?.filter(value => value.sportType === selectedSport);
	// let getAvailableTopOdds: string[] = [];
	// let getAvailableTopLeagues: string[] = [];
	// if (topData && topData.length > 0) {
	//   getAvailableTopOdds = topData[0].odds;
	//   getAvailableTopLeagues = topData[0].leagues;
	// }

	// const upcomingData = SPORTS_DATA?.UpcomingMatches?.filter(value => value.sportType === selectedSport);
	// let getAvailableUpcomingOdds: string[] = [];
	// let getAvailableUpcomingLeagues: string[] = [];
	// if (upcomingData && upcomingData.length > 0) {
	//   getAvailableUpcomingOdds = upcomingData[0].odds;
	//   getAvailableUpcomingLeagues = upcomingData[0].leagues;
	// }
     



	const sportType = SPORTS_DATA.LiveMatches?.filter(value => value.sportType === selectedSport);
	const extractedSports = sportType[0]?.sportsLeagues.filter(value => value.leagueName === selectedLeague && getSingleDate(value.date) === selectedDate);


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
					setSelectedDate={setSelectedDate}
					setSelectedSport={setSelectedSport}
					setSelectedLeague={setSelectedLeague}
					odds={getAvailableLiveOdds}
					leagues={getAvailableLiveLeagues}
					sportData={extractedSports}
					sportsType={extractedLiveMatchesSportType}
				/>
				{/* <BetTable
					icon={<MatchStar />}
					contentTitle='Upcoming Matches'
					isLiveTable={false}
					setSelectedDate={setSelectedDate}
					setSelectedSport={setSelectedSport}
					setSelectedLeague={setSelectedLeague}
					odds={getAvailableUpcomingOdds}
					leagues={getAvailableUpcomingLeagues}
					sportData={extractedSports}
					sportsType={extractedUpcomingMatchesSportType}
				/>
				<BetTable
					icon={<Star />}
					contentTitle='Top Matches'
					isLiveTable={false}
					setSelectedDate={setSelectedDate}
					setSelectedSport={setSelectedSport}
					setSelectedLeague={setSelectedLeague}
					odds={getAvailableTopOdds}
					leagues={getAvailableTopLeagues}
					sportData={extractedSports}
					sportsType={extractedTopMatchesSportType}
				/> */}
			</>
		</div>
	);
};

export default CenterSection;
