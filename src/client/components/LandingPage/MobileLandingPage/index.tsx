import React from 'react';
import LeagueType from './components/LeagueType';
import LandScaleImageCarousel from '@/src/client/shared/Carousel/LandScaleImageCarousel';
import BetTableSection from './components/BetTableSection';

const MobileLandingPage = () => {
	return (
		<div className='h-max w-full'>
			<LandScaleImageCarousel
				height='h-[134.36px]'
				width='w-full'
                  />
                  <LeagueType />
                  <BetTableSection />
		</div>
	);
};

export default MobileLandingPage;
