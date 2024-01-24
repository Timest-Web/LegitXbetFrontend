import React from 'react';
import LeagueType from './components/LeagueType';
import BetTableSection from './components/BetTableSection';
import MobileNavbar from '@/src/client/shared/MobileNavbar';
import LandScaleImageCarousel from '@/src/client/shared/Carousel/LandScaleImageCarousel';


const MobileLandingPage = () => {
	return (
		<div className='h-max w-full -mt-32 pb-28'>
			<LandScaleImageCarousel
				height='h-[134.36px]'
				width='w-full'
                  />
                  <LeagueType />
			<BetTableSection />
			<MobileNavbar/>
		</div>
	);
};

export default MobileLandingPage;
